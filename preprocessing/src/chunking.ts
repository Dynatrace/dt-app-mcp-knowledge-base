import { readdir, readFile } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';
import { splitMarkdown } from './markdown.ts';
import { toPathSlug, toSlug } from './slug.ts';
import {
  describeSection,
  describeWeakness,
  holdsOnlyTitleAndIntro,
  nameChunk,
  pageTitle,
} from './summary.ts';
import type {
  Chunk,
  ChunkedDocument,
  SourceDocument,
  WeakDescription,
} from './types.ts';

/** Chunks live under this repository-relative directory, as meta.json and index.json record them. */
export const DEFAULT_CHUNK_DIR = 'docs';

// Reserved for the content above the first main heading, so a section never takes the name.
const PREAMBLE_SLUG = 'index';

// Fallback for headings that slug to nothing, such as a heading made up entirely of emoji.
const UNNAMED_SLUG = 'section';

/**
 * Headings that name a kind of content instead of a feature. Agents retrieve chunks by name,
 * so these are reported to be fixed at the source rather than silently indexed.
 */
// TODO: Stopgap. Replace with a corpus-derived check once every document is chunked — a slug that
// recurs across many pages is generic by definition, which no hand-written word list can capture.
const GENERIC_HEADINGS = new Set([
  'about',
  'api',
  'basics',
  'best-practices',
  'configuration',
  'description',
  'details',
  'example',
  'examples',
  'faq',
  'getting-started',
  'how-it-works',
  'installation',
  'intro',
  'introduction',
  'limitations',
  'more-information',
  'notes',
  'options',
  'overview',
  'parameters',
  'prerequisites',
  'properties',
  'reference',
  'related-topics',
  'requirements',
  'see-also',
  'setup',
  'summary',
  'troubleshooting',
  'usage',
]);

/**
 * Splits one document into chunk files and derives the name and description of each. File names
 * come from the page path and the heading slug only, so a chunk keeps its name when its
 * neighbours are added, removed or reordered.
 */
export function chunkDocument(
  document: SourceDocument,
  chunkDir = DEFAULT_CHUNK_DIR,
): ChunkedDocument {
  const directory = [
    chunkDir,
    ...document.pagePath.split('/').map(toPathSlug).filter(Boolean),
  ].join('/');
  const sections = splitMarkdown(document.markdown);
  const title = pageTitle(document);
  const preamble = sections.find((section) => !section.heading);
  const description = preamble && describeSection(preamble.content);

  // Reserved even when the document has no preamble, so `index.md` never means two different things.
  const taken = new Set([PREAMBLE_SLUG]);
  const genericHeadings: string[] = [];
  const weakDescriptions: WeakDescription[] = [];

  const chunks = sections.flatMap<Chunk>((section) => {
    const heading = section.heading?.text;
    // A preamble of nothing but the title and its introduction survives as the page name and
    // description, so writing it out again would only cost the agent a file to load.
    if (!heading && holdsOnlyTitleAndIntro(section.content)) {
      return [];
    }

    const slug = heading ? toSlug(heading) || UNNAMED_SLUG : PREAMBLE_SLUG;
    const path = `${directory}/${heading ? disambiguate(slug, taken) : slug}.md`;
    if (heading && GENERIC_HEADINGS.has(slug)) {
      genericHeadings.push(heading);
    }

    const own = describeSection(section.content);
    const reason = describeWeakness(own, heading);
    if (reason) {
      weakDescriptions.push({ path, reason });
    }

    return [
      {
        path,
        heading,
        content: section.content,
        name: nameChunk(title, heading),
        // A section with nothing to say for itself still belongs to its page, so it borrows the
        // page description instead of carrying an empty one.
        description: own ?? description ?? title,
      },
    ];
  });

  return {
    pagePath: document.pagePath,
    title,
    description,
    chunks,
    genericHeadings,
    weakDescriptions,
  };
}

/** Reads every markdown file below `directory`, deriving each page path from its location. */
export async function readSourceDocuments(
  directory: string,
): Promise<SourceDocument[]> {
  const root = resolve(directory);
  let entries: string[];
  try {
    entries = await readdir(root, { recursive: true });
  } catch (cause) {
    throw new Error(
      `Could not read the source directory ${root}: ${describe(cause)}`,
      { cause },
    );
  }

  const documents = await Promise.all(
    entries
      .filter((entry) => entry.endsWith('.md'))
      .map(async (entry) => ({
        pagePath: entry.slice(0, -'.md'.length).split(sep).join('/'),
        markdown: await readFile(join(root, entry), 'utf8'),
      })),
  );

  return documents.sort((a, b) => a.pagePath.localeCompare(b.pagePath));
}

function disambiguate(slug: string, taken: Set<string>): string {
  let candidate = slug;
  for (let suffix = 2; taken.has(candidate); suffix += 1) {
    candidate = `${slug}-${suffix}`;
  }
  taken.add(candidate);
  return candidate;
}

function describe(cause: unknown): string {
  return cause instanceof Error ? cause.message : String(cause);
}
