import { access, readdir, rm, rmdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { readIfPresent, writeIfChanged } from './files.ts';
import { toRepositoryPath } from './indexing.ts';
import { UNKNOWN_CONTENT_HASH, toPagePath } from './sitemap.ts';
import type {
  Chunk,
  ChunkEntry,
  ChunkedDocument,
  KnowledgeBaseIndex,
  KnowledgeBaseMetadata,
  SourceDocument,
  SourceEntry,
} from './types.ts';

/** What the run already knows about the knowledge base before it decides what to redo. */
export type UpdateContext = {
  repositoryRoot: string;
  previousMeta: KnowledgeBaseMetadata | undefined;
  previousIndex: KnowledgeBaseIndex | undefined;
  currentMeta: KnowledgeBaseMetadata;
  siteRoot: string;
  force: boolean;
};

/** Which documents a run splits again, and which keep the chunks an earlier run wrote for them. */
export type DocumentPlan = {
  process: SourceDocument[];
  reused: ChunkedDocument[];
  added: string[];
  changed: string[];
  unchanged: string[];
};

/**
 * Decides what a run has to redo, by comparing the content hash of every document against the one
 * recorded for it. A page whose content is unchanged keeps the chunks it already has.
 */
export async function planDocuments(
  sources: SourceDocument[],
  context: UpdateContext,
): Promise<DocumentPlan> {
  const recorded = byPagePath(context.previousMeta, context.siteRoot);
  const discovered = byPagePath(context.currentMeta, context.siteRoot);
  const entries = new Map(
    (context.previousIndex?.chunks ?? []).map((chunk) => [chunk.path, chunk]),
  );

  const plan: DocumentPlan = {
    process: [],
    reused: [],
    added: [],
    changed: [],
    unchanged: [],
  };

  for (const source of sources) {
    const previous = recorded.get(source.pagePath);
    if (!previous) {
      plan.added.push(source.pagePath);
      plan.process.push(source);
      continue;
    }

    // Without a real hash on both sides there is no telling the page apart from a changed one.
    const hash = discovered.get(source.pagePath)?.downloadHash;
    const same =
      hash !== UNKNOWN_CONTENT_HASH && hash === previous.downloadHash;

    const reused =
      same && !context.force
        ? await reusableChunks(context, previous.chunkPaths, entries)
        : undefined;
    if (reused === undefined) {
      (same ? plan.unchanged : plan.changed).push(source.pagePath);
      plan.process.push(source);
      continue;
    }

    plan.unchanged.push(source.pagePath);
    plan.reused.push(carriedOver(source.pagePath, reused));
  }

  // A page the download stage had nothing for keeps the chunks it has, so a portal that serves one
  // page badly does not take that page out of the knowledge base.
  const downloaded = new Set(sources.map((source) => source.pagePath));
  for (const pagePath of discovered.keys()) {
    const previous = recorded.get(pagePath);
    if (downloaded.has(pagePath) || !previous) {
      continue;
    }

    const reused = await reusableChunks(context, previous.chunkPaths, entries);
    if (reused && reused.length > 0) {
      plan.reused.push(carriedOver(pagePath, reused));
    }
  }

  return plan;
}

function carriedOver(pagePath: string, chunks: Chunk[]): ChunkedDocument {
  return {
    pagePath,
    // Nothing was derived for this document, so it reports neither a summary nor any warning.
    title: undefined,
    description: undefined,
    chunks,
    genericHeadings: [],
    weakDescriptions: [],
  };
}

/** What the run has to write below the chunk directory, and what it has to take away. */
export type ChunkUpdate = {
  added: Chunk[];
  changed: Chunk[];
  unchanged: Chunk[];
  removed: string[];
};

/**
 * Compares the chunks the run produced against the files the chunk directory holds, so only the
 * ones that differ are written. Everything else down there is a chunk the corpus no longer has.
 */
export async function planChunks(
  repositoryRoot: string,
  chunkDir: string,
  documents: ChunkedDocument[],
): Promise<ChunkUpdate> {
  const produced = new Map(
    documents.flatMap((document) =>
      document.chunks.map(
        (chunk) => [resolve(repositoryRoot, chunk.path), chunk] as const,
      ),
    ),
  );
  const existing = await chunkFiles(resolve(repositoryRoot, chunkDir));

  const update: ChunkUpdate = {
    added: [],
    changed: [],
    unchanged: [],
    removed: [...existing]
      .filter((path) => !produced.has(path))
      .map((path) => toRepositoryPath(repositoryRoot, path)),
  };

  for (const [path, chunk] of produced) {
    if (!existing.has(path)) {
      update.added.push(chunk);
    } else if (chunk.content === undefined) {
      // A carried-over chunk was never read, so the file it came from is what it still holds.
      update.unchanged.push(chunk);
    } else if ((await readIfPresent(path)) === fileContent(chunk)) {
      update.unchanged.push(chunk);
    } else {
      update.changed.push(chunk);
    }
  }

  return update;
}

/** Writes the chunks that differ, deletes the ones the corpus lost and prunes the empty directories. */
export async function applyChunks(
  repositoryRoot: string,
  chunkDir: string,
  update: ChunkUpdate,
): Promise<void> {
  for (const chunk of [...update.added, ...update.changed]) {
    await writeIfChanged(
      resolve(repositoryRoot, chunk.path),
      fileContent(chunk),
    );
  }

  for (const path of update.removed) {
    await rm(resolve(repositoryRoot, path));
  }
  await pruneBelow(resolve(repositoryRoot, chunkDir));
}

/** Reports whether the run has anything to write or delete below the chunk directory. */
export function touchesChunks(update: ChunkUpdate): boolean {
  return (
    update.added.length + update.changed.length + update.removed.length > 0
  );
}

function byPagePath(
  meta: KnowledgeBaseMetadata | undefined,
  root: string,
): Map<string, SourceEntry> {
  const sources = new Map<string, SourceEntry>();
  for (const source of meta?.sources ?? []) {
    const pagePath = toPagePath(source.url, root);
    if (pagePath) {
      sources.set(pagePath, source);
    }
  }
  return sources;
}

/**
 * Rebuilds a document's chunks from what the last run recorded, or reports that it cannot. A path
 * with no index entry or no file behind it leaves the document to be split again.
 */
async function reusableChunks(
  context: UpdateContext,
  chunkPaths: string[],
  entries: Map<string, ChunkEntry>,
): Promise<Chunk[] | undefined> {
  const chunks: Chunk[] = [];
  for (const path of chunkPaths) {
    const entry = entries.get(toRepositoryPath(context.repositoryRoot, path));
    if (!entry) {
      return undefined;
    }

    try {
      await access(resolve(context.repositoryRoot, path));
    } catch {
      return undefined;
    }

    chunks.push({
      path,
      heading: undefined,
      content: undefined,
      name: entry.name,
      description: entry.description,
    });
  }
  return chunks;
}

async function chunkFiles(root: string): Promise<Set<string>> {
  let entries: string[];
  try {
    entries = await readdir(root, { recursive: true });
  } catch (cause) {
    if ((cause as NodeJS.ErrnoException).code === 'ENOENT') {
      return new Set();
    }
    throw cause;
  }

  return new Set(
    entries
      .filter((entry) => entry.endsWith('.md'))
      .map((entry) => join(root, entry)),
  );
}

/** The chunk directory itself stays; only the directories below it follow the chunks they held. */
async function pruneBelow(root: string): Promise<void> {
  for (const directory of await subdirectories(root)) {
    await prune(join(root, directory));
  }
}

async function prune(path: string): Promise<void> {
  for (const directory of await subdirectories(path)) {
    await prune(join(path, directory));
  }

  if ((await readdir(path)).length === 0) {
    await rmdir(path);
  }
}

async function subdirectories(path: string): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(path, { withFileTypes: true });
  } catch (cause) {
    if ((cause as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw cause;
  }

  return entries.filter((entry) => entry.isDirectory()).map(({ name }) => name);
}

function fileContent(chunk: Chunk): string {
  return `${chunk.content}\n`;
}
