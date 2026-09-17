#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { resolve } from 'node:path';
import {
  DEFAULT_CHUNK_DIR,
  chunkDocument,
  readSourceDocuments,
  writeChunks,
} from './chunking.ts';
import {
  DEFAULT_INDEX_PATH,
  buildIndex,
  findMissingChunks,
  validateIndex,
  writeIndex,
} from './indexing.ts';
import {
  mergeMetadata,
  readMetadata,
  recordChunkPaths,
  writeMetadata,
} from './meta.ts';
import {
  DEFAULT_SITEMAP_URL,
  SitemapError,
  fetchSitemap,
  parseSitemap,
} from './sitemap.ts';
import type { ChunkedDocument, SitemapDocument } from './types.ts';

const DEFAULT_META_PATH = 'meta.json';

// The repository root is the pipeline's output location, and the package lives one level below it.
const REPOSITORY_ROOT = resolve(import.meta.dirname, '../..');

const USAGE = `Usage: npm start -- --source-dir <path> [options]

Discovers every developer portal documentation page, splits each document at its main headings and
writes the knowledge base: one markdown file per section under the chunk directory, one index entry
per chunk, and the build metadata of the run.

Options:
  --source-dir <path>   Directory holding the markdown documents to split (required).
                        Temporary, to be removed once the download stage supplies the documents.
  --sitemap <url>       Sitemap to read (default: ${DEFAULT_SITEMAP_URL})
  --chunk-dir <path>    Chunk output directory, relative to the repository root (default: ${DEFAULT_CHUNK_DIR})
  --index <path>        index.json to write, relative to the repository root (default: ${DEFAULT_INDEX_PATH})
  --out <path>          meta.json to write, relative to the repository root (default: ${DEFAULT_META_PATH})
  --dry-run             Report what would be produced without writing anything
  --json                Print what the run produced as JSON instead of a summary
  --help                Show this message
`;

export async function run(argv: string[]): Promise<number> {
  let options: {
    'source-dir'?: string;
    sitemap?: string;
    'chunk-dir'?: string;
    index?: string;
    out?: string;
    'dry-run'?: boolean;
    json?: boolean;
    help?: boolean;
  };
  try {
    ({ values: options } = parseArgs({
      args: argv,
      options: {
        'source-dir': { type: 'string' },
        sitemap: { type: 'string' },
        'chunk-dir': { type: 'string' },
        index: { type: 'string' },
        out: { type: 'string' },
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

  // TODO: Remove --source-dir once the download stage supplies the documents to split.
  const sourceDir = options['source-dir'];
  if (!sourceDir) {
    return usageError(
      'the pipeline needs the documents to split, pass --source-dir <path>',
    );
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
    const discovered = parseSitemap(await fetchSitemap(sitemapUrl));
    // One timestamp for the whole run, so every stage of a build reports the same build.
    const generatedAt = new Date();
    const {
      meta: discoveredMeta,
      added,
      removed,
    } = mergeMetadata(discovered, await readMetadata(metaPath), generatedAt);

    // TODO: Read the documents from the download stage instead, once it feeds the pipeline.
    const sources = await readSourceDocuments(sourceDir);
    if (sources.length === 0) {
      throw new Error(`No markdown documents found in ${resolve(sourceDir)}`);
    }

    const documents = sources.map((source) => chunkDocument(source, chunkDir));
    const { meta, unmatched } = recordChunkPaths(
      discoveredMeta,
      documents,
      generatedAt,
    );

    // An index dt-app-mcp cannot rely on is worse than none, so nothing is written until it holds.
    const index = buildIndex(REPOSITORY_ROOT, documents);
    const violations = validateIndex(index);
    if (violations.length > 0) {
      throw invalidIndex(indexPath, violations);
    }

    if (!dryRun) {
      await writeChunks(REPOSITORY_ROOT, documents);
      const missing = await findMissingChunks(REPOSITORY_ROOT, index);
      if (missing.length > 0) {
        throw invalidIndex(
          indexPath,
          missing.map((path) => `${path}: chunk file was not written`),
        );
      }

      await writeIndex(indexPath, index);
      await writeMetadata(metaPath, meta);
    }

    if (options.json === true) {
      process.stdout.write(
        `${JSON.stringify(toJson(discovered, documents), undefined, 2)}\n`,
      );
    } else {
      report({
        sitemapUrl,
        found: discovered.length,
        added: added.length,
        removed: removed.length,
        sourceDir,
        documents,
        entries: index.chunks.length,
        chunkDir,
        indexPath,
        metaPath,
        dryRun,
      });
    }
    // TODO: Fail on unmatched documents once the download stage feeds this, where a document
    // without a meta.json entry is a pipeline bug rather than a stand-in file.
    warn(documents, unmatched, metaPath);
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
  sourceDir: string;
  documents: ChunkedDocument[];
  entries: number;
  chunkDir: string;
  indexPath: string;
  metaPath: string;
  dryRun: boolean;
};

function report(run: RunReport): void {
  const total = run.documents.reduce(
    (count, document) => count + document.chunks.length,
    0,
  );
  const width = Math.max(
    ...run.documents.map((document) => document.pagePath.length),
  );
  const lines = [
    `Read ${run.sitemapUrl}`,
    `Found ${plural(run.found, 'page')} (${run.added} new, ${run.removed} no longer listed)`,
    `Read ${resolve(run.sourceDir)}`,
    `Split ${plural(run.documents.length, 'document')} into ${plural(total, 'chunk')}`,
    ...run.documents.map(
      (d) =>
        `  ${d.pagePath.padEnd(width)}  ${plural(d.chunks.length, 'chunk')}`,
    ),
  ];
  if (run.dryRun) {
    lines.push(
      `Validated ${plural(run.entries, 'index entry', 'index entries')}`,
      `Dry run, ${run.chunkDir}/, ${run.indexPath} and ${run.metaPath} left unchanged`,
    );
  } else {
    lines.push(
      `Wrote ${run.chunkDir}/`,
      `Wrote ${run.indexPath} (${plural(run.entries, 'entry', 'entries')})`,
      `Wrote ${run.metaPath}`,
    );
  }
  process.stdout.write(`${lines.join('\n')}\n`);
}

/** Warnings go to stderr so they survive --json, where stdout has to stay machine-readable. */
function warn(
  documents: ChunkedDocument[],
  unmatched: string[],
  metaPath: string,
): void {
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

  if (unmatched.length > 0) {
    const warning = [
      `Not listed in ${metaPath}, chunk paths not recorded:`,
      ...unmatched.map(indent),
    ];
    process.stderr.write(`${warning.join('\n')}\n`);
  }
}

function toJson(
  discovered: SitemapDocument[],
  documents: ChunkedDocument[],
): unknown {
  return {
    discovered,
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
