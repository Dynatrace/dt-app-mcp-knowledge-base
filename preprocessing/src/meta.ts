import { readIfPresent, writeIfChanged } from './files.ts';
import { UNKNOWN_CONTENT_HASH } from './sitemap.ts';
import type {
  ChunkedDocument,
  KnowledgeBaseMetadata,
  SitemapDocument,
  SourceEntry,
} from './types.ts';

const SCHEMA_URL =
  'https://raw.githubusercontent.com/dynatrace/dt-app-mcp-knowledge-base/main/schemas/meta.schema.json';

// Sentinel that keeps meta.json valid against its schema until the download stage fills it in.
const UNPROCESSED_DOWNLOADED_AT = '1970-01-01T00:00:00.000Z';

export type MetaMergeResult = {
  meta: KnowledgeBaseMetadata;
  added: string[];
  removed: string[];
};

/**
 * Rebuilds the source list from the sitemap while preserving the download and chunking
 * fields later stages wrote, so discovery re-runs never drop their results.
 */
export function mergeMetadata(
  documents: SitemapDocument[],
  previous: KnowledgeBaseMetadata | undefined,
  generatedAt: Date,
): MetaMergeResult {
  const known = new Map(
    (previous?.sources ?? []).map((source) => [source.url, source]),
  );
  const discovered = new Set(documents.map((document) => document.url));

  const sources = documents.map<SourceEntry>((document) => {
    const previousSource = known.get(document.url);
    // A sentinel hash from discovery must not overwrite a real one a later stage already recorded.
    const discoveredHash =
      document.contentHash === UNKNOWN_CONTENT_HASH
        ? undefined
        : document.contentHash;
    const downloadHash =
      discoveredHash ?? previousSource?.downloadHash ?? UNKNOWN_CONTENT_HASH;
    return {
      url: document.url,
      downloadHash,
      downloadedAt: lastSeenAt(downloadHash, previousSource, generatedAt),
      chunkPaths: previousSource?.chunkPaths ?? [],
    };
  });

  return {
    meta: {
      $schema: SCHEMA_URL,
      generatedAt: generatedAt.toISOString(),
      sources,
    },
    added: documents
      .filter((document) => !known.has(document.url))
      .map((document) => document.url),
    removed: [...known.keys()].filter((url) => !discovered.has(url)),
  };
}

/**
 * Dates a document to the run that first saw the content it holds now. An unchanged document keeps
 * its earlier date, so re-running the pipeline nightly does not churn meta.json.
 */
function lastSeenAt(
  hash: string,
  previous: SourceEntry | undefined,
  generatedAt: Date,
): string {
  if (hash === UNKNOWN_CONTENT_HASH) {
    return UNPROCESSED_DOWNLOADED_AT;
  }
  return previous?.downloadHash === hash
    ? previous.downloadedAt
    : generatedAt.toISOString();
}

export type ChunkPathResult = {
  meta: KnowledgeBaseMetadata;
  unmatched: string[];
};

/**
 * Records the chunks of each document on its source entry, matching on page path so the
 * origin a document was downloaded from does not have to agree with the one in meta.json.
 */
export function recordChunkPaths(
  previous: KnowledgeBaseMetadata | undefined,
  documents: ChunkedDocument[],
  generatedAt: Date,
): ChunkPathResult {
  const chunked = new Map(
    documents.map((document) => [document.pagePath, document]),
  );
  const matched = new Set<string>();

  const sources = (previous?.sources ?? []).map<SourceEntry>((source) => {
    const pagePath = toPagePath(source.url);
    const document = pagePath === undefined ? undefined : chunked.get(pagePath);
    if (document === undefined) {
      return source;
    }

    matched.add(document.pagePath);
    return {
      ...source,
      chunkPaths: document.chunks.map((chunk) => chunk.path),
    };
  });

  return {
    meta: {
      $schema: SCHEMA_URL,
      generatedAt: generatedAt.toISOString(),
      sources,
    },
    unmatched: [...chunked.keys()].filter((pagePath) => !matched.has(pagePath)),
  };
}

/**
 * Decides the build timestamp last, once the run knows whether it changed anything. Metadata that
 * matches the previous run keeps its timestamp, so `generatedAt` dates the content, not the run.
 */
export function stampMetadata(
  meta: KnowledgeBaseMetadata,
  previous: KnowledgeBaseMetadata | undefined,
  generatedAt: Date,
  changedChunks: boolean,
): KnowledgeBaseMetadata {
  const unchanged =
    !changedChunks &&
    previous !== undefined &&
    JSON.stringify(meta.sources) === JSON.stringify(previous.sources);

  return {
    ...meta,
    generatedAt: unchanged ? previous.generatedAt : generatedAt.toISOString(),
  };
}

/** Reduces a document URL to the page path the chunking stage addresses documents by. */
export function toPagePath(url: string): string | undefined {
  try {
    return new URL(url).pathname.replace(/^\/+/, '').replace(/\.md$/, '');
  } catch {
    return undefined;
  }
}

export async function readMetadata(
  path: string,
): Promise<KnowledgeBaseMetadata | undefined> {
  const raw = await readIfPresent(path);
  if (raw === undefined) {
    return undefined;
  }

  try {
    return JSON.parse(raw) as KnowledgeBaseMetadata;
  } catch (cause) {
    throw new Error(
      `Existing ${path} is not valid JSON, fix or delete it before re-running`,
      { cause },
    );
  }
}

/** Reports whether the file changed, so the run can say what it left alone. */
export async function writeMetadata(
  path: string,
  meta: KnowledgeBaseMetadata,
): Promise<boolean> {
  return writeIfChanged(path, `${JSON.stringify(meta, undefined, 2)}\n`);
}
