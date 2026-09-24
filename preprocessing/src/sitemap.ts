import { XMLParser } from 'fast-xml-parser';
import type { SitemapDocument } from './types.ts';

const DEFAULT_TIMEOUT_MS = 30_000;

/** Signals a sitemap that could not be fetched or understood. The CLI turns these into a readable error. */
export class SitemapError extends Error {
  override name = 'SitemapError';
}

export const DEFAULT_SITEMAP_URL =
  'https://developer.dynatrace.com/sitemap.xml';

// The sitemap carries no per-URL content hash, so discovery records a sentinel the download stage replaces.
export const UNKNOWN_CONTENT_HASH = '0'.repeat(64);

/** The site a sitemap describes, which is rooted at the directory the sitemap itself sits in. */
export function siteRoot(sitemapUrl: string): string {
  return new URL('.', sitemapUrl).toString();
}

export async function fetchSitemap(
  url: string,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<string> {
  let response: Response;
  try {
    response = await fetch(url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { accept: 'application/xml, text/xml' },
    });
  } catch (cause) {
    throw new SitemapError(
      `Could not reach the sitemap at ${url}: ${describe(cause)}`,
      { cause },
    );
  }

  if (!response.ok) {
    throw new SitemapError(
      `The sitemap at ${url} returned HTTP ${response.status} ${response.statusText}`.trimEnd(),
    );
  }

  let body: string;
  try {
    body = await response.text();
  } catch (cause) {
    throw new SitemapError(
      `Could not read the response body from ${url}: ${describe(cause)}`,
      { cause },
    );
  }
  if (body.trim() === '') {
    throw new SitemapError(`The sitemap at ${url} is empty`);
  }
  return body;
}

export function parseSitemap(
  xml: string,
  sitemapUrl: string,
): SitemapDocument[] {
  // Tag values stay strings so a <loc> like "2026" is not coerced into a number.
  const parser = new XMLParser({
    ignoreAttributes: true,
    parseTagValue: false,
    trimValues: true,
  });

  let parsed: unknown;
  try {
    parsed = parser.parse(xml);
  } catch (cause) {
    throw new SitemapError(`The sitemap is not valid XML: ${describe(cause)}`, {
      cause,
    });
  }

  const root = asRecord(parsed);
  if (root === undefined || root['urlset'] === undefined) {
    if (root?.['sitemapindex'] !== undefined) {
      throw new SitemapError(
        'The sitemap is a <sitemapindex>; nested sitemaps are not supported',
      );
    }
    throw new SitemapError('The sitemap has no <urlset> root element');
  }

  const urlset = asRecord(root['urlset']);
  const entries = toArray(urlset?.['url']);
  if (entries.length === 0) {
    throw new SitemapError('The sitemap contains no <url> elements');
  }

  const site = siteRoot(sitemapUrl);
  const documents = new Map<string, SitemapDocument>();
  entries.forEach((entry, position) => {
    const url = toMarkdownUrl(readLoc(entry, position), site);
    documents.set(url, { url, contentHash: UNKNOWN_CONTENT_HASH });
  });

  // Sorting keeps meta.json diffs readable when the portal reorders its sitemap.
  return [...documents.values()].sort((a, b) => a.url.localeCompare(b.url));
}

/**
 * Applies the portal's `<page-url>.md` convention, on the host the sitemap came from. Portal locs
 * carry a trailing slash, so the slash is dropped first and the site root maps to `index.md`.
 */
export function toMarkdownUrl(pageUrl: string, root: string): string {
  const site = new URL(root);
  const path = new URL(pageUrl).pathname.replace(/\/+$/, '');
  const base = site.pathname.replace(/\/+$/, '');

  // A preview deployment lists the URLs its pages will have in production, which serve nothing yet.
  const url = new URL(site.origin);
  url.pathname = path === base ? `${base}/index.md` : `${path}.md`;
  return url.toString();
}

/** Reduces a document URL to the page path below the site root, which addresses it everywhere else. */
export function toPagePath(url: string, root: string): string | undefined {
  let path: string;
  try {
    path = new URL(url).pathname.replace(/\.md$/, '');
  } catch {
    return undefined;
  }

  const base = new URL(root).pathname;
  return path.startsWith(base)
    ? path.slice(base.length)
    : path.replace(/^\/+/, '');
}

function readLoc(entry: unknown, position: number): string {
  const loc = asRecord(entry)?.['loc'];
  if (typeof loc !== 'string' || loc.trim() === '') {
    throw new SitemapError(`<url> element ${position + 1} has no <loc> value`);
  }

  const trimmed = loc.trim();
  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    throw new SitemapError(
      `<url> element ${position + 1} has a malformed <loc> value: ${trimmed}`,
    );
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new SitemapError(
      `<url> element ${position + 1} has a non-HTTP <loc> value: ${trimmed}`,
    );
  }
  return trimmed;
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

function toArray(value: unknown): unknown[] {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function describe(cause: unknown): string {
  return cause instanceof Error ? cause.message : String(cause);
}
