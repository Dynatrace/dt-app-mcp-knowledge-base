import type { List, Paragraph, RootContent } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { findHeadings, mainHeadingLevel, parseMarkdown } from './markdown.ts';
import { toPathSlug, toSlug } from './slug.ts';
import type { SourceDocument } from './types.ts';

/** A description is the only text an agent sees before loading a chunk, so it stays skimmable. */
export const DESCRIPTION_LIMIT = 200;

// Roughly five words. Below that a description repeats the heading and adds nothing to match on.
export const DESCRIPTION_MINIMUM = 30;

/** The document's title heading, or its file name humanised when the markdown carries none. */
export function pageTitle(document: SourceDocument): string {
  const headings = findHeadings(document.markdown);
  const [title] = headings;
  const level = mainHeadingLevel(headings);

  if (title?.text && level && title.level < level) {
    return title.text;
  }
  return humanise(document.pagePath.split('/').at(-1) ?? document.pagePath);
}

/** Names a chunk by page context plus heading, since agents stop at the first name that fits. */
export function nameChunk(title: string, heading: string | undefined): string {
  if (!heading || toSlug(heading) === toSlug(title)) {
    return title;
  }
  return `${title}: ${heading}`;
}

/**
 * Derives a description from the section's own introduction, or from its subheadings where it
 * opens straight into subsections — those name the parts an agent is looking for.
 */
export function describeSection(content: string): string | undefined {
  const body = withoutHeading(parseMarkdown(content).children);
  const boundary = body.findIndex((node) => node.type === 'heading');
  const intro = (boundary === -1 ? body : body.slice(0, boundary)).find(
    (node) => node.type === 'paragraph' || node.type === 'list',
  );

  const text = intro
    ? flatten(intro)
    : body
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
  const nodes = parseMarkdown(content).children;
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
