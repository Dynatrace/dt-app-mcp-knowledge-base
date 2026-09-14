// Markdown inline syntax carries no meaning in a file name, so it is unwrapped before slugging.
const LINK = /\[([^\]]*)\]\([^)]*\)/g;
const EMPHASIS = /[*_~`]/g;

const CAMEL_BOUNDARY = /([a-z0-9])([A-Z])/g;
const ACRONYM_BOUNDARY = /([A-Z]+)([A-Z][a-z])/g;

/** Turns heading text into a file-name-safe slug, or an empty string if nothing usable is left. */
export function toSlug(text: string): string {
  return text
    .replace(LINK, '$1')
    .replace(EMPHASIS, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Slugs a source path segment. Portal paths are already kebab-case, but locally authored files
 * are often CamelCase, and splitting those keeps `RPCSpans` readable as `rpc-spans`.
 */
export function toPathSlug(segment: string): string {
  return toSlug(
    segment.replace(ACRONYM_BOUNDARY, '$1-$2').replace(CAMEL_BOUNDARY, '$1-$2'),
  );
}
