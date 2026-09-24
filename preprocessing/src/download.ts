import { createHash } from 'node:crypto';
import { toPagePath } from './sitemap.ts';
import type { SitemapDocument, SourceDocument } from './types.ts';

const DEFAULT_TIMEOUT_MS = 30_000;

// The portal lists a few hundred pages, which one request at a time would walk through far too slowly.
const DEFAULT_CONCURRENCY = 8;

// A page the portal has no markdown of answers with one of these, depending on how it is served.
const MISSING_STATUS = new Set([403, 404, 410]);

/** A downloaded document, carrying the digest of the markdown the chunking stage will split. */
export type DownloadedDocument = SourceDocument & {
  url: string;
  contentHash: string;
};

/** A page this run has no markdown for, and why. */
export type UnavailableDocument = {
  url: string;
  reason: string;
};

export type DownloadResult = {
  documents: DownloadedDocument[];
  /** Pages the portal serves no markdown for, which is every page that is not documentation. */
  skipped: UnavailableDocument[];
  /** Pages whose download went wrong, which the next run may well get. */
  failed: UnavailableDocument[];
};

export type DownloadOptions = {
  concurrency?: number;
  timeoutMs?: number;
};

/**
 * Fetches the markdown of every discovered page. A page that cannot be downloaded is reported and
 * skipped rather than failing the run — the portal serves markdown for its documentation only.
 */
export async function downloadDocuments(
  documents: SitemapDocument[],
  root: string,
  options: DownloadOptions = {},
): Promise<DownloadResult> {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const result: DownloadResult = { documents: [], skipped: [], failed: [] };

  const queue = [...documents];
  const workers = Array.from(
    {
      length: Math.min(
        options.concurrency ?? DEFAULT_CONCURRENCY,
        queue.length,
      ),
    },
    async () => {
      for (let document = queue.shift(); document; document = queue.shift()) {
        const outcome = await download(document, root, timeoutMs);
        if ('document' in outcome) {
          result.documents.push(outcome.document);
        } else if (outcome.skipped) {
          result.skipped.push({ url: document.url, reason: outcome.reason });
        } else {
          result.failed.push({ url: document.url, reason: outcome.reason });
        }
      }
    },
  );
  await Promise.all(workers);

  // Workers finish in whatever order the portal answers, so the order is restored before returning.
  result.documents.sort((a, b) => a.pagePath.localeCompare(b.pagePath));
  result.skipped.sort((a, b) => a.url.localeCompare(b.url));
  result.failed.sort((a, b) => a.url.localeCompare(b.url));
  return result;
}

/** Replaces the discovery sentinel with the digest of the markdown the run downloaded. */
export function withContentHashes(
  discovered: SitemapDocument[],
  downloaded: DownloadedDocument[],
): SitemapDocument[] {
  const hashes = new Map(
    downloaded.map((document) => [document.url, document.contentHash]),
  );

  return discovered.map((document) => {
    const hash = hashes.get(document.url);
    return hash === undefined ? document : { ...document, contentHash: hash };
  });
}

/**
 * Takes the frontmatter off a downloaded document. The chunking stage reads a CommonMark parse,
 * where the closing `---` of a frontmatter block is a setext heading rather than a delimiter.
 */
export function stripFrontmatter(markdown: string): string {
  const match = /^---\r?\n(?:[\s\S]*?\r?\n)?---[ \t]*(?:\r?\n|$)/.exec(
    markdown,
  );
  return match ? markdown.slice(match[0].length).trimStart() : markdown;
}

type Outcome =
  { document: DownloadedDocument } | { skipped: boolean; reason: string };

async function download(
  document: SitemapDocument,
  root: string,
  timeoutMs: number,
): Promise<Outcome> {
  const pagePath = toPagePath(document.url, root);
  if (pagePath === undefined) {
    return { skipped: true, reason: 'is not a document URL' };
  }

  let response: Response;
  try {
    response = await fetch(document.url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { accept: 'text/markdown, text/plain' },
    });
  } catch (cause) {
    return { skipped: false, reason: describe(cause) };
  }

  if (!response.ok) {
    const status = `HTTP ${response.status} ${response.statusText}`.trimEnd();
    // The portal answers for a page it holds no markdown of, which is not a failed download.
    return { skipped: MISSING_STATUS.has(response.status), reason: status };
  }

  let body: string;
  try {
    body = await response.text();
  } catch (cause) {
    return { skipped: false, reason: describe(cause) };
  }

  const contentType = response.headers.get('content-type') ?? '';
  if (contentType.includes('html') || /^\s*<(?:!doctype|html)\b/i.test(body)) {
    return {
      skipped: true,
      reason: 'served a rendered page instead of markdown',
    };
  }

  const markdown = stripFrontmatter(body);
  if (markdown.trim() === '') {
    return { skipped: true, reason: 'served an empty document' };
  }

  return {
    document: {
      url: document.url,
      pagePath,
      markdown,
      // Hashing what the chunking stage reads keeps a rewritten frontmatter from splitting a page again.
      contentHash: createHash('sha256').update(markdown, 'utf8').digest('hex'),
    },
  };
}

function describe(cause: unknown): string {
  return cause instanceof Error ? cause.message : String(cause);
}
