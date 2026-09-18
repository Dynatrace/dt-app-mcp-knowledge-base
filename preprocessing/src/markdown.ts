import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';

/** A heading of either CommonMark style, with the line it starts on. */
export type Heading = { level: number; text: string; line: number };

/** One slice of a document. `heading` is absent for the content above the first main heading. */
export type Section = { heading?: Heading; content: string };

/**
 * Splits a document at its main headings, keeping deeper subsections with the section they
 * belong to. Returns a single headingless section when the document has no headings at all.
 */
export function splitMarkdown(source: string): Section[] {
  const lines = source.split(/\r?\n/);
  const headings = findHeadings(source);
  const level = mainHeadingLevel(headings);
  const starts = headings.filter((heading) => heading.level === level);

  const sections: Section[] = [];
  const preamble = slice(lines, 0, starts[0]?.line ?? lines.length);
  if (preamble !== '') {
    sections.push({ content: preamble });
  }

  starts.forEach((heading, position) => {
    const end = starts[position + 1]?.line ?? lines.length;
    sections.push({ heading, content: slice(lines, heading.line, end) });
  });

  return sections;
}

/** Collects every top-level heading, leaving those inside code blocks or block quotes out. */
export function findHeadings(source: string): Heading[] {
  return fromMarkdown(source).children.flatMap((node) =>
    node.type === 'heading' && node.position !== undefined
      ? [
          {
            level: node.depth,
            text: toString(node),
            line: node.position.start.line - 1,
          },
        ]
      : [],
  );
}

/**
 * Picks the level that carries the document's main sections. A level is skipped only when its
 * single heading is also the document's first one, which is a page title rather than a section.
 */
export function mainHeadingLevel(headings: Heading[]): number | undefined {
  const levels = [...new Set(headings.map((heading) => heading.level))].sort(
    (a, b) => a - b,
  );
  const [shallowest, deeper] = levels;
  if (shallowest === undefined) {
    return undefined;
  }

  const atShallowest = headings.filter(
    (heading) => heading.level === shallowest,
  );
  const opensWithPageTitle =
    atShallowest.length === 1 && atShallowest[0] === headings[0];

  // Without a deeper level the title has to start a section, or the document would have none.
  return opensWithPageTitle && deeper !== undefined ? deeper : shallowest;
}

function slice(lines: string[], start: number, end: number): string {
  const section = lines.slice(start, end);
  while (section.length > 0 && section[0]?.trim() === '') {
    section.shift();
  }
  while (section.length > 0 && section[section.length - 1]?.trim() === '') {
    section.pop();
  }
  return section.join('\n');
}
