import { createHash } from 'node:crypto';
import { toPagePath } from './sitemap.ts';
import type { SitemapDocument, SourceDocument } from './types.ts';

const DEFAULT_TIMEOUT_MS = 30_000;

// The portal lists a few hundred pages, which one request at a time would walk through far too slowly.
const DEFAULT_CONCURRENCY = 8;

// A page the portal has no markdown of answers with one of these, depending on how it is served.
const MISSING_STATUS = new Set([403, 404, 410]);

const FRONTMATTER = /^---\r?\n([\s\S]*?\r?\n)?---[ \t]*(?:\r?\n|$)/;

// The only fields read. `source` names the page itself, which every preview deployment rewrites.
const FIELD = /^(title|description):[ \t]*(.*)$/;

/** A downloaded document, split into the summary its author wrote and the markdown below it. */
export type FrontmatterDocument = {
  title: string | undefined;
  description: string | undefined;
  markdown: string;
};

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
  let completed = 0;
  const downloads = Array.from(
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
        completed += 1;
        process.stderr.write(
          `Downloaded ${completed}/${documents.length}: ${document.url}\n`,
        );
      }
    },
  );
  await Promise.all(downloads);

  // Downloads finish in whatever order the portal answers, so the order is restored before returning.
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
 * Splits the frontmatter off a downloaded document. The chunking stage reads a CommonMark parse,
 * where the closing `---` of a frontmatter block is a setext heading rather than a delimiter.
 */
export function splitFrontmatter(raw: string): FrontmatterDocument {
  const match = FRONTMATTER.exec(raw);
  if (!match) {
    return { title: undefined, description: undefined, markdown: raw };
  }

  const fields = readFields(match[1] ?? '');
  return {
    title: fields.get('title'),
    description: fields.get('description'),
    markdown: raw.slice(match[0].length).trimStart(),
  };
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

  const { title, description, markdown } = splitFrontmatter(body);
  if (markdown.trim() === '') {
    return { skipped: true, reason: 'served an empty document' };
  }

  return {
    document: {
      url: document.url,
      pagePath,
      title,
      description,
      markdown,
      // Digests everything the chunking stage reads, so a retitled page is split again while the
      // frontmatter this stage drops leaves it alone.
      contentHash: digest([title, description, markdown]),
    },
  };
}

/** Reads the scalar fields of a frontmatter block, folding the lines a long value wraps onto. */
function readFields(block: string): Map<string, string> {
  const fields = new Map<string, string>();
  let field: string | undefined;

  for (const line of block.split(/\r?\n/)) {
    const started = FIELD.exec(line);
    if (started?.[1]) {
      field = started[1];
      fields.set(field, started[2] ?? '');
    } else if (field && /^[ \t]+\S/.test(line)) {
      fields.set(field, `${fields.get(field)} ${line.trim()}`.trim());
    } else if (line.trim()) {
      field = undefined;
    }
  }

  for (const [key, value] of fields) {
    const text = plain(value);
    if (text) fields.set(key, text);
    else fields.delete(key);
  }
  return fields;
}

/** Takes the quotes or the block-scalar marker off a YAML value, leaving the text it carries. */
function plain(value: string): string {
  const text = value.trim().replace(/^[>|][-+0-9]*$/, '');
  const quoted = /^(['"])([\s\S]*)\1$/.exec(text);
  return (quoted?.[2] ?? text).trim();
}

function digest(parts: (string | undefined)[]): string {
  // Separated by a byte no field can hold, so two of them can never read as one.
  return createHash('sha256')
    .update(parts.map((part) => part ?? '').join('\0'), 'utf8')
    .digest('hex');
}

function describe(cause: unknown): string {
  return cause instanceof Error ? cause.message : String(cause);
}
