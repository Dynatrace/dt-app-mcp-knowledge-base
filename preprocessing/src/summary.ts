import type { List, Paragraph, RootContent } from 'mdast';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import { findHeadings, mainHeadingLevel } from './markdown.ts';
import { toPathSlug, toSlug } from './slug.ts';
import type { SourceDocument } from './types.ts';

/** A description is the only text an agent sees before loading a chunk, so it stays skimmable. */
export const DESCRIPTION_LIMIT = 200;

// Roughly five words. Below that a description repeats the heading and adds nothing to match on.
export const DESCRIPTION_MINIMUM = 30;

const TITLE_SEPARATOR = ': ';

// Path segments naming a kind of page rather than a subject, which every component repeats. The
// page above holds the subject, so a title taken from one of these alone names a hundred chunks.
const KIND_SEGMENT = /^(?:props|usage|a11y)$/;

const VERSION_SEGMENT = /^v\d+$/;

/**
 * The title the page's own author wrote, falling back to its title heading and then to its page
 * path — anything derived here names a page less precisely than the author already did. The
 * version is the exception: an SDK writes one title across every version it has published.
 */
export function pageTitle(document: SourceDocument): string {
  const segments = document.pagePath.split('/').filter(Boolean);
  const version = VERSION_SEGMENT.test(segments.at(-1) ?? '')
    ? humanise(segments.pop() ?? '')
    : undefined;

  const title =
    document.title ?? headingTitle(document.markdown) ?? fromSegments(segments);
  return version ? `${title}${TITLE_SEPARATOR}${version}` : title;
}

/** Names a chunk by page context plus heading, since agents stop at the first name that fits. */
export function nameChunk(title: string, heading: string | undefined): string {
  // Compared against the last part alone, so a heading never repeats the page a title qualifies.
  const own = title.split(TITLE_SEPARATOR).at(-1) ?? title;
  if (!heading || toSlug(heading) === toSlug(own)) {
    return title;
  }
  return `${title}${TITLE_SEPARATOR}${heading}`;
}

/**
 * Derives a description from the section's own introduction, or from its subheadings where it
 * opens straight into subsections — those name the parts an agent is looking for.
 */
export function describeSection(content: string): string | undefined {
  const body = withoutHeading(fromMarkdown(content).children);
  const boundary = body.findIndex((node) => node.type === 'heading');
  const intro = (boundary === -1 ? body : body.slice(0, boundary))
    .filter((node) => node.type === 'paragraph' || node.type === 'list')
    .map((node) => withoutAdmonitions(flatten(node)))
    .find(describes);

  const text =
    intro ??
    body
      .filter((node) => node.type === 'heading')
      .map((node) => toString(node))
      .join('; ');

  return clamp(text) || undefined;
}

/** Why a description would not help an agent decide, or undefined when it reads well enough. */
export function describeWeakness(
  description: string | undefined,
  heading: string | undefined,
): string | undefined {
  if (!description) return 'no text of its own';
  if (heading && toSlug(description) === toSlug(heading)) {
    return 'only repeats the heading';
  }
  if (description.length < DESCRIPTION_MINIMUM) {
    return `shorter than ${DESCRIPTION_MINIMUM} characters`;
  }
  return undefined;
}

/** Whether the page name and description carry the whole preamble, leaving nothing to write out. */
export function holdsOnlyTitleAndIntro(content: string): boolean {
  const nodes = fromMarkdown(content).children;
  if (nodes[0]?.type !== 'heading') return false;

  const [intro, ...rest] = nodes.slice(1);
  if (rest.length > 0) return false;
  // An introduction the description would cut short stays a chunk, or its tail is lost.
  return (
    !intro ||
    (intro.type === 'paragraph' && toString(intro).length <= DESCRIPTION_LIMIT)
  );
}

function withoutHeading(nodes: RootContent[]): RootContent[] {
  return nodes[0]?.type === 'heading' ? nodes.slice(1) : nodes;
}

/** The title heading of a document, or nothing where it opens straight into its sections. */
function headingTitle(markdown: string): string | undefined {
  const headings = findHeadings(markdown);
  const [title] = headings;
  const level = mainHeadingLevel(headings);

  return title?.text && level && title.level < level ? title.text : undefined;
}

/** Qualifies a page named after a kind of content with the page holding its subject. */
function fromSegments(segments: string[]): string {
  const segment = segments.at(-1) ?? '';
  const parent = segments.at(-2);

  if (parent && KIND_SEGMENT.test(toPathSlug(segment))) {
    return `${humanise(parent)}${TITLE_SEPARATOR}${humanise(segment)}`;
  }
  return humanise(segment);
}

/** Takes the fences off an admonition, which name the callout rather than describe the section. */
function withoutAdmonitions(text: string): string {
  return text.replace(/^:::.*$/gm, '').trim();
}

/** Whether a candidate says something an agent can match on, rather than laying content out. */
function describes(text: string): boolean {
  // A table read as plain text is a row of pipes and dashes, carrying no sentence to search.
  return text.length > 0 && !text.startsWith('|');
}

/** Keeps list items apart, so each stays a term of its own to match on. */
function flatten(node: Paragraph | List): string {
  return node.type === 'list'
    ? node.children.map((item) => toString(item)).join('; ')
    : toString(node);
}

function clamp(text: string): string {
  // A trailing colon introduces the code block that follows, which the description cannot show.
  const line = text.replace(/\s+/g, ' ').trim().replace(/:$/, '');
  if (line.length <= DESCRIPTION_LIMIT) return line;

  // Cut on a word boundary so the description never ends mid-term.
  const head = line.slice(0, DESCRIPTION_LIMIT + 1);
  const boundary = head.lastIndexOf(' ');
  const cut =
    boundary > 0 ? head.slice(0, boundary) : head.slice(0, DESCRIPTION_LIMIT);
  return `${cut.replace(/[.,;:]$/, '')}…`;
}

function humanise(segment: string): string {
  return toPathSlug(segment)
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
