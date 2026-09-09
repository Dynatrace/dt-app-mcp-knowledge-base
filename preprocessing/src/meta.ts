import { readFile, writeFile } from 'node:fs/promises';
import { UNKNOWN_CONTENT_HASH } from './sitemap.ts';
import type { KnowledgeBaseMetadata, SitemapDocument, SourceEntry } from './types.ts';

const SCHEMA_URL = 'https://raw.githubusercontent.com/dynatrace/dt-app-mcp-knowledge-base/main/schemas/meta.schema.json';

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
  const known = new Map((previous?.sources ?? []).map((source) => [source.url, source]));
  const discovered = new Set(documents.map((document) => document.url));

  const sources = documents.map<SourceEntry>((document) => {
    const previousSource = known.get(document.url);
    // A sentinel hash from discovery must not overwrite a real one a later stage already recorded.
    const discoveredHash = document.contentHash === UNKNOWN_CONTENT_HASH ? undefined : document.contentHash;
    return {
      url: document.url,
      downloadHash: discoveredHash ?? previousSource?.downloadHash ?? UNKNOWN_CONTENT_HASH,
      downloadedAt: previousSource?.downloadedAt ?? UNPROCESSED_DOWNLOADED_AT,
      chunkPaths: previousSource?.chunkPaths ?? [],
    };
  });

  return {
    meta: { $schema: SCHEMA_URL, generatedAt: generatedAt.toISOString(), sources },
    added: documents.filter((document) => !known.has(document.url)).map((document) => document.url),
    removed: [...known.keys()].filter((url) => !discovered.has(url)),
  };
}

export async function readMetadata(path: string): Promise<KnowledgeBaseMetadata | undefined> {
  let raw: string;
  try {
    raw = await readFile(path, 'utf8');
  } catch (cause) {
    if ((cause as NodeJS.ErrnoException).code === 'ENOENT') return undefined;
    throw cause;
  }

  try {
    return JSON.parse(raw) as KnowledgeBaseMetadata;
  } catch (cause) {
    throw new Error(`Existing ${path} is not valid JSON, fix or delete it before re-running`, { cause });
  }
}

export async function writeMetadata(path: string, meta: KnowledgeBaseMetadata): Promise<void> {
  await writeFile(path, `${JSON.stringify(meta, undefined, 2)}\n`, 'utf8');
}
