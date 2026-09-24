#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { resolve } from 'node:path';
import { DEFAULT_CHUNK_DIR, chunkDocument } from './chunking.ts';
import {
  downloadDocuments,
  withContentHashes,
  type DownloadResult,
} from './download.ts';
import {
  DEFAULT_INDEX_PATH,
  buildIndex,
  findMissingChunks,
  readIndex,
  validateIndex,
  writeIndex,
} from './indexing.ts';
import {
  mergeMetadata,
  readMetadata,
  recordChunkPaths,
  stampMetadata,
  writeMetadata,
} from './meta.ts';
import {
  DEFAULT_SITEMAP_URL,
  SitemapError,
  fetchSitemap,
  parseSitemap,
  siteRoot,
} from './sitemap.ts';
import {
  applyChunks,
  planChunks,
  planDocuments,
  touchesChunks,
  type ChunkUpdate,
  type DocumentPlan,
} from './update.ts';
import type { ChunkedDocument, SitemapDocument } from './types.ts';

const DEFAULT_META_PATH = 'meta.json';

// The repository root is the pipeline's output location, and the package lives one level below it.
const REPOSITORY_ROOT = resolve(import.meta.dirname, '../..');

const USAGE = `Usage: npm start -- [options]

Discovers every developer portal documentation page, downloads its markdown, splits each document
at its main headings and writes the knowledge base: one markdown file per section under the chunk
directory, one index entry per chunk, and the build metadata of the run. Only what the portal
changed is written again.

Options:
  --sitemap <url>       Sitemap to read (default: ${DEFAULT_SITEMAP_URL})
  --chunk-dir <path>    Chunk output directory, relative to the repository root (default: ${DEFAULT_CHUNK_DIR})
  --index <path>        index.json to write, relative to the repository root (default: ${DEFAULT_INDEX_PATH})
  --out <path>          meta.json to write, relative to the repository root (default: ${DEFAULT_META_PATH})
  --force               Split every document again, whatever the recorded content hashes say
  --dry-run             Report what would be produced without writing anything
  --json                Print what the run produced as JSON instead of a summary
  --help                Show this message
`;

export async function run(argv: string[]): Promise<number> {
  let options: {
    sitemap?: string;
    'chunk-dir'?: string;
    index?: string;
    out?: string;
    force?: boolean;
    'dry-run'?: boolean;
    json?: boolean;
    help?: boolean;
  };
  try {
    ({ values: options } = parseArgs({
      args: argv,
      options: {
        sitemap: { type: 'string' },
        'chunk-dir': { type: 'string' },
        index: { type: 'string' },
        out: { type: 'string' },
        force: { type: 'boolean' },
        'dry-run': { type: 'boolean' },
        json: { type: 'boolean' },
        help: { type: 'boolean' },
      },
    }));
  } catch (cause) {
    return usageError(cause instanceof Error ? cause.message : String(cause));
  }

  if (options.help === true) {
    process.stdout.write(USAGE);
    return 0;
  }

  const sitemapUrl = options.sitemap ?? DEFAULT_SITEMAP_URL;
  const chunkDir = options['chunk-dir'] ?? DEFAULT_CHUNK_DIR;
  const indexPath = resolve(
    REPOSITORY_ROOT,
    options.index ?? DEFAULT_INDEX_PATH,
  );
  const metaPath = resolve(REPOSITORY_ROOT, options.out ?? DEFAULT_META_PATH);
  const dryRun = options['dry-run'] === true;

  try {
    const root = siteRoot(sitemapUrl);
    const discovered = parseSitemap(await fetchSitemap(sitemapUrl), sitemapUrl);
    // One timestamp for the whole run, so every stage of a build reports the same build.
    const generatedAt = new Date();
    const previousMeta = await readMetadata(metaPath);
    const previousIndex = await readIndex(indexPath);

    const download = await downloadDocuments(discovered, root);
    if (download.documents.length === 0) {
      throw new Error(
        `None of the ${plural(discovered.length, 'page')} ${sitemapUrl} lists served any markdown`,
      );
    }

    const hashed = withContentHashes(discovered, download.documents);
    const {
      meta: discoveredMeta,
      added,
      removed,
    } = mergeMetadata(hashed, previousMeta, generatedAt);

    const plan = await planDocuments(download.documents, {
      repositoryRoot: REPOSITORY_ROOT,
      previousMeta,
      previousIndex,
      currentMeta: discoveredMeta,
      siteRoot: root,
      force: options.force === true,
    });
    const split = plan.process.map((source) => chunkDocument(source, chunkDir));
    // A page holds its place however this run arrived at its chunks, so the index stays stable.
    const documents = [...plan.reused, ...split].sort((a, b) =>
      a.pagePath.localeCompare(b.pagePath),
    );

    const { meta: chunked, unmatched } = recordChunkPaths(
      discoveredMeta,
      documents,
      generatedAt,
      root,
    );
    // Every document came from the sitemap, so one the metadata does not list is a pipeline bug.
    if (unmatched.length > 0) {
      throw new Error(
        [`Not listed in ${metaPath}:`, ...unmatched.map(indent)].join('\n'),
      );
    }

    // An index dt-app-mcp cannot rely on is worse than none, so nothing is written until it holds.
    const index = buildIndex(REPOSITORY_ROOT, documents);
    const violations = validateIndex(index);
    if (violations.length > 0) {
      throw invalidIndex(indexPath, violations);
    }

    const update = await planChunks(REPOSITORY_ROOT, chunkDir, documents);
    const meta = stampMetadata(
      chunked,
      previousMeta,
      generatedAt,
      touchesChunks(update),
    );

    let wroteIndex = false;
    let wroteMeta = false;
    if (!dryRun) {
      await applyChunks(REPOSITORY_ROOT, chunkDir, update);
      const missing = await findMissingChunks(REPOSITORY_ROOT, index);
      if (missing.length > 0) {
        throw invalidIndex(
          indexPath,
          missing.map((path) => `${path}: chunk file was not written`),
        );
      }

      wroteIndex = await writeIndex(indexPath, index);
      wroteMeta = await writeMetadata(metaPath, meta);
    }

    if (options.json === true) {
      process.stdout.write(
        `${JSON.stringify(toJson(discovered, download, documents, plan, update), undefined, 2)}\n`,
      );
    } else {
      report({
        sitemapUrl,
        found: discovered.length,
        added: added.length,
        removed: removed.length,
        download,
        split,
        plan,
        update,
        entries: index.chunks.length,
        chunkDir,
        indexPath,
        metaPath,
        dryRun,
        wroteIndex,
        wroteMeta,
      });
    }
    warn(documents, download);
    return 0;
  } catch (cause) {
    const detail = cause instanceof Error ? cause.message : String(cause);
    process.stderr.write(
      cause instanceof SitemapError
        ? `Sitemap discovery failed. ${detail}\n`
        : `${detail}\n`,
    );
    return 1;
  }
}

type RunReport = {
  sitemapUrl: string;
  found: number;
  added: number;
  removed: number;
  download: DownloadResult;
  split: ChunkedDocument[];
  plan: DocumentPlan;
  update: ChunkUpdate;
  entries: number;
  chunkDir: string;
  indexPath: string;
  metaPath: string;
  dryRun: boolean;
  wroteIndex: boolean;
  wroteMeta: boolean;
};

function report(run: RunReport): void {
  const total = run.split.reduce(
    (count, document) => count + document.chunks.length,
    0,
  );
  const documents =
    run.plan.added.length + run.plan.changed.length + run.plan.unchanged.length;
  const width = Math.max(
    0,
    ...run.split.map((document) => document.pagePath.length),
  );
  const touched = run.update.added.length + run.update.changed.length;
  const lines = [
    `Read ${run.sitemapUrl}`,
    `Found ${plural(run.found, 'page')} (${run.added} new, ${run.removed} no longer listed)`,
    `Downloaded ${plural(run.download.documents.length, 'document')}` +
      ` (${run.download.skipped.length} without markdown, ${run.download.failed.length} failed)`,
    `Split ${run.split.length} of ${plural(documents, 'document')} into ${plural(total, 'chunk')}` +
      ` (${run.plan.added.length} new, ${run.plan.changed.length} changed,` +
      ` ${run.plan.unchanged.length} unchanged)`,
    ...run.split.map(
      (d) =>
        `  ${d.pagePath.padEnd(width)}  ${plural(d.chunks.length, 'chunk')}`,
    ),
    `${run.dryRun ? 'Would update' : 'Updated'} ${plural(touched, 'chunk')}` +
      ` and ${run.dryRun ? 'remove' : 'removed'} ${run.update.removed.length}` +
      ` (${run.update.unchanged.length} left alone)`,
  ];
  if (run.dryRun) {
    lines.push(
      `Validated ${plural(run.entries, 'index entry', 'index entries')}`,
      `Dry run, ${run.chunkDir}/, ${run.indexPath} and ${run.metaPath} left unchanged`,
    );
  } else {
    lines.push(
      touchesChunks(run.update)
        ? `Wrote ${run.chunkDir}/`
        : `${run.chunkDir}/ unchanged`,
      run.wroteIndex
        ? `Wrote ${run.indexPath} (${plural(run.entries, 'entry', 'entries')})`
        : `${run.indexPath} unchanged (${plural(run.entries, 'entry', 'entries')})`,
      run.wroteMeta ? `Wrote ${run.metaPath}` : `${run.metaPath} unchanged`,
    );
  }
  process.stdout.write(`${lines.join('\n')}\n`);
}

/** Warnings go to stderr so they survive --json, where stdout has to stay machine-readable. */
function warn(documents: ChunkedDocument[], download: DownloadResult): void {
  if (download.failed.length > 0) {
    const warning = [
      'Downloads that went wrong, these pages keep the chunks the last run wrote:',
      ...download.failed.map((entry) =>
        indent(`${entry.url}: ${entry.reason}`),
      ),
    ];
    process.stderr.write(`${warning.join('\n')}\n`);
  }

  if (download.skipped.length > 0) {
    const warning = [
      'Pages the portal serves no markdown for, not part of the knowledge base:',
      ...download.skipped.map((entry) =>
        indent(`${entry.url}: ${entry.reason}`),
      ),
    ];
    process.stderr.write(`${warning.join('\n')}\n`);
  }

  const generic = documents.flatMap((d) =>
    d.genericHeadings.map((heading) => `${d.pagePath}: ${heading}`),
  );
  if (generic.length > 0) {
    const warning = [
      'Headings too generic to identify a feature, fix them at the source:',
      ...generic.map(indent),
    ];
    process.stderr.write(`${warning.join('\n')}\n`);
  }

  const weak = documents.flatMap((d) =>
    d.weakDescriptions.map((entry) => `${entry.path}: ${entry.reason}`),
  );
  if (weak.length > 0) {
    const warning = [
      'Descriptions too thin to decide on, fix them at the source:',
      ...weak.map(indent),
    ];
    process.stderr.write(`${warning.join('\n')}\n`);
  }
}

function toJson(
  discovered: SitemapDocument[],
  download: DownloadResult,
  documents: ChunkedDocument[],
  plan: DocumentPlan,
  update: ChunkUpdate,
): unknown {
  return {
    discovered,
    downloaded: {
      documents: download.documents.map((document) => ({
        url: document.url,
        pagePath: document.pagePath,
        contentHash: document.contentHash,
      })),
      skipped: download.skipped,
      failed: download.failed,
    },
    documents: documents.map((document) => ({
      pagePath: document.pagePath,
      title: document.title,
      description: document.description,
      chunks: document.chunks.map((chunk) => ({
        path: chunk.path,
        heading: chunk.heading,
        name: chunk.name,
        description: chunk.description,
      })),
    })),
    changed: {
      documents: {
        added: plan.added,
        changed: plan.changed,
        unchanged: plan.unchanged,
      },
      chunks: {
        added: update.added.map((chunk) => chunk.path),
        changed: update.changed.map((chunk) => chunk.path),
        removed: update.removed,
      },
    },
  };
}

function invalidIndex(indexPath: string, violations: string[]): Error {
  return new Error(
    [`${indexPath} is invalid:`, ...violations.map(indent)].join('\n'),
  );
}

function usageError(message: string): number {
  process.stderr.write(`${message}\n\n${USAGE}`);
  return 2;
}

function plural(count: number, noun: string, many = `${noun}s`): string {
  return `${count} ${count === 1 ? noun : many}`;
}

function indent(line: string): string {
  return `  ${line}`;
}

if (import.meta.main) {
  process.exitCode = await run(process.argv.slice(2));
}
