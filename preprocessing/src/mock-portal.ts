import { createHash } from 'node:crypto';
import { toPagePath } from './meta.ts';
import type { SitemapDocument, SourceDocument } from './types.ts';

/**
 * Stands in for the content hash the sitemap does not carry yet, digesting the document the source
 * directory holds for a page. Pages the directory has no document for keep the discovery sentinel.
 */
// TODO: Remove together with --source-dir, once the sitemap serves a hash per page and the
// download stage hashes the bytes it fetched.
export function mockContentHashes(
  discovered: SitemapDocument[],
  sources: SourceDocument[],
): SitemapDocument[] {
  const hashes = new Map(
    sources.map((source) => [source.pagePath, digest(source.markdown)]),
  );

  return discovered.map((document) => {
    const pagePath = toPagePath(document.url);
    const hash = pagePath === undefined ? undefined : hashes.get(pagePath);
    return hash === undefined ? document : { ...document, contentHash: hash };
  });
}

function digest(markdown: string): string {
  return createHash('sha256').update(markdown, 'utf8').digest('hex');
}
