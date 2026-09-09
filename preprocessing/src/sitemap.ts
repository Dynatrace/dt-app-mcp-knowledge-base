import { XMLParser } from 'fast-xml-parser';
import type { SitemapDocument } from './types.ts';

const DEFAULT_TIMEOUT_MS = 30_000;

/** Signals a sitemap that could not be fetched or understood. The CLI turns these into a readable error. */
export class SitemapError extends Error {
  override name = 'SitemapError';
}

export const DEFAULT_SITEMAP_URL = 'https://developer.dynatrace.com/sitemap.xml';

// The sitemap carries no per-URL content hash, so discovery records a sentinel the download stage replaces.
export const UNKNOWN_CONTENT_HASH = '0'.repeat(64);

export async function fetchSitemap(url: string, timeoutMs = DEFAULT_TIMEOUT_MS): Promise<string> {
  let response: Response;
  try {
    response = await fetch(url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { accept: 'application/xml, text/xml' },
    });
  } catch (cause) {
    throw new SitemapError(`Could not reach the sitemap at ${url}: ${describe(cause)}`, { cause });
  }

  if (!response.ok) {
    throw new SitemapError(`The sitemap at ${url} returned HTTP ${response.status} ${response.statusText}`.trimEnd());
  }

  let body: string;
  try {
    body = await response.text();
  } catch (cause) {
    throw new SitemapError(`Could not read the response body from ${url}: ${describe(cause)}`, { cause });
  }
  if (body.trim() === '') {
    throw new SitemapError(`The sitemap at ${url} is empty`);
  }
  return body;
}

export function parseSitemap(xml: string): SitemapDocument[] {
  // Tag values stay strings so a <loc> like "2026" is not coerced into a number.
  const parser = new XMLParser({ ignoreAttributes: true, parseTagValue: false, trimValues: true });

  let parsed: unknown;
  try {
    parsed = parser.parse(xml);
  } catch (cause) {
    throw new SitemapError(`The sitemap is not valid XML: ${describe(cause)}`, { cause });
  }

  const root = asRecord(parsed);
  if (root === undefined || root['urlset'] === undefined) {
    if (root?.['sitemapindex'] !== undefined) {
      throw new SitemapError('The sitemap is a <sitemapindex>; nested sitemaps are not supported');
    }
    throw new SitemapError('The sitemap has no <urlset> root element');
  }

  const urlset = asRecord(root['urlset']);
  const entries = toArray(urlset?.['url']);
  if (entries.length === 0) {
    throw new SitemapError('The sitemap contains no <url> elements');
  }

  const documents = new Map<string, SitemapDocument>();
  entries.forEach((entry, position) => {
    const url = toMarkdownUrl(readLoc(entry, position));
    documents.set(url, { url, contentHash: UNKNOWN_CONTENT_HASH });
  });

  // Sorting keeps meta.json diffs readable when the portal reorders its sitemap.
  return [...documents.values()].sort((a, b) => a.url.localeCompare(b.url));
}

/**
 * Applies the portal's `<page-url>.md` convention. Portal locs carry a trailing slash,
 * so the slash is dropped first and the bare site root maps to `/index.md`.
 */
export function toMarkdownUrl(pageUrl: string): string {
  const url = new URL(pageUrl);
  const path = url.pathname.replace(/\/+$/, '');
  url.pathname = path === '' ? '/index.md' : `${path}.md`;
  url.search = '';
  url.hash = '';
  return url.toString();
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
    throw new SitemapError(`<url> element ${position + 1} has a malformed <loc> value: ${trimmed}`);
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new SitemapError(`<url> element ${position + 1} has a non-HTTP <loc> value: ${trimmed}`);
  }
  return trimmed;
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

function toArray(value: unknown): unknown[] {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function describe(cause: unknown): string {
  return cause instanceof Error ? cause.message : String(cause);
}
