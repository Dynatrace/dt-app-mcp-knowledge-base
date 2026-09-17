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
import type { ChunkedDocument } from './types.ts';

const DEFAULT_META_PATH = 'meta.json';

// The repository root is the pipeline's output location, and the package lives one level below it.
const REPOSITORY_ROOT = resolve(import.meta.dirname, '../..');

const USAGE = `Usage: npm start -- [options]
       npm run chunk -- --source-dir <path> [options]

Commands:
  discover              Record every developer portal documentation page in meta.json (default)
  chunk                 Split documents at their main headings into one markdown file per chunk

discover options:
  --sitemap <url>       Sitemap to read (default: ${DEFAULT_SITEMAP_URL})
  --out <path>          meta.json to write, relative to the repository root (default: ${DEFAULT_META_PATH})
  --dry-run             Report what was found without writing anything
  --json                Print the discovered documents as JSON instead of a summary

chunk options:
  --source-dir <path>   Directory holding the markdown documents to split (required).
                        Temporary, to be removed once the download stage supplies the documents.
  --out <path>          meta.json to update, relative to the repository root (default: ${DEFAULT_META_PATH})
  --chunk-dir <path>    Chunk output directory, relative to the repository root (default: ${DEFAULT_CHUNK_DIR})
  --dry-run             Report what would be produced without writing anything
  --json                Print the produced chunks as JSON instead of a summary

  --help                Show this message
`;

// TODO: Fold chunking into the pipeline run once the download stage feeds it, so that it is a
// stage of `npm start` rather than a command called on its own.
export async function run(argv: string[]): Promise<number> {
  const [command, ...rest] = argv;
  if (command === 'chunk') {
    return runChunk(rest);
  }
  return runDiscover(command === 'discover' ? rest : argv);
}

async function runDiscover(argv: string[]): Promise<number> {
  let options: {
    sitemap?: string;
    out?: string;
    'dry-run'?: boolean;
    json?: boolean;
    help?: boolean;
  };
  try {
    ({ values: options } = parseArgs({
      args: argv,
      options: {
        sitemap: { type: 'string' },
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

  const sitemapUrl = options.sitemap ?? DEFAULT_SITEMAP_URL;
  const metaPath = resolve(REPOSITORY_ROOT, options.out ?? DEFAULT_META_PATH);

  try {
    const documents = parseSitemap(await fetchSitemap(sitemapUrl));

    const { meta, added, removed } = mergeMetadata(
      documents,
      await readMetadata(metaPath),
      new Date(),
    );
    if (options['dry-run'] !== true) {
      await writeMetadata(metaPath, meta);
    }

    if (options.json === true) {
      process.stdout.write(`${JSON.stringify(documents, undefined, 2)}\n`);
    } else {
      reportDiscovery(
        sitemapUrl,
        metaPath,
        documents.length,
        added.length,
        removed.length,
        options['dry-run'] === true,
      );
    }
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

async function runChunk(argv: string[]): Promise<number> {
  let options: {
    'source-dir'?: string;
    out?: string;
    'chunk-dir'?: string;
    'dry-run'?: boolean;
    json?: boolean;
    help?: boolean;
  };
  try {
    ({ values: options } = parseArgs({
      args: argv,
      options: {
        'source-dir': { type: 'string' },
        out: { type: 'string' },
        'chunk-dir': { type: 'string' },
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
  if (sourceDir === undefined || sourceDir === '') {
    return usageError(
      'chunk needs the documents to split, pass --source-dir <path>',
    );
  }

  const metaPath = resolve(REPOSITORY_ROOT, options.out ?? DEFAULT_META_PATH);
  const chunkDir = options['chunk-dir'] ?? DEFAULT_CHUNK_DIR;
  const dryRun = options['dry-run'] === true;

  try {
    const sources = await readSourceDocuments(sourceDir);
    if (sources.length === 0) {
      throw new Error(`No markdown documents found in ${resolve(sourceDir)}`);
    }

    const documents = sources.map((source) => chunkDocument(source, chunkDir));
    const { meta, unmatched } = recordChunkPaths(
      await readMetadata(metaPath),
      documents,
      new Date(),
    );
    // Rewriting meta.json when not a single source entry matched would only churn its timestamp.
    const recorded = unmatched.length < documents.length;
    if (!dryRun) {
      await writeChunks(REPOSITORY_ROOT, documents);
      if (recorded) {
        await writeMetadata(metaPath, meta);
      }
    }

    if (options.json === true) {
      process.stdout.write(
        `${JSON.stringify(toJson(documents), undefined, 2)}\n`,
      );
    } else {
      reportChunking(
        sourceDir,
        chunkDir,
        metaPath,
        documents,
        unmatched,
        recorded,
        dryRun,
      );
      reportIndexEntries(documents);
    }
    // TODO: Fail on unmatched documents once the download stage feeds this, where a document
    // without a meta.json entry is a pipeline bug rather than a stand-in file.
    warnChunking(documents, unmatched, metaPath);
    return 0;
  } catch (cause) {
    process.stderr.write(
      `${cause instanceof Error ? cause.message : String(cause)}\n`,
    );
    return 1;
  }
}

function reportDiscovery(
  sitemapUrl: string,
  metaPath: string,
  found: number,
  added: number,
  removed: number,
  dryRun: boolean,
): void {
  const lines = [
    `Read ${sitemapUrl}`,
    `Found ${found} page${found === 1 ? '' : 's'} (${added} new, ${removed} no longer listed)`,
    dryRun ? `Dry run, ${metaPath} left unchanged` : `Wrote ${metaPath}`,
  ];
  process.stdout.write(`${lines.join('\n')}\n`);
}

function reportChunking(
  sourceDir: string,
  chunkDir: string,
  metaPath: string,
  documents: ChunkedDocument[],
  unmatched: string[],
  recorded: boolean,
  dryRun: boolean,
): void {
  const total = documents.reduce(
    (count, document) => count + document.chunks.length,
    0,
  );
  const width = Math.max(
    ...documents.map((document) => document.pagePath.length),
  );
  const lines = [
    `Read ${resolve(sourceDir)}`,
    `Split ${plural(documents.length, 'document')} into ${plural(total, 'chunk')}`,
    ...documents.map(
      (d) =>
        `  ${d.pagePath.padEnd(width)}  ${plural(d.chunks.length, 'chunk')}`,
    ),
    dryRun
      ? `Dry run, ${chunkDir}/ and ${metaPath} left unchanged`
      : `Wrote ${chunkDir}/`,
  ];
  if (!dryRun) {
    lines.push(
      recorded
        ? `Wrote ${metaPath}`
        : `No source entry matched, ${metaPath} left unchanged`,
    );
  }
  process.stdout.write(`${lines.join('\n')}\n`);
}

// TODO: Write these entries to index.json once the download stage feeds the pipeline, and report
// them the way the other stages report their output.
function reportIndexEntries(documents: ChunkedDocument[]): void {
  const lines = documents.flatMap((document) =>
    document.chunks.flatMap((chunk) => [
      `  ${chunk.name}`,
      `    ${chunk.path}`,
      `    ${chunk.description}`,
    ]),
  );
  process.stdout.write(
    `\nIndex entries, not yet written to index.json:\n${lines.join('\n')}\n`,
  );
}

/** Warnings go to stderr so they survive --json, where stdout has to stay machine-readable. */
function warnChunking(
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

function toJson(documents: ChunkedDocument[]) {
  return documents.map((document) => ({
    pagePath: document.pagePath,
    title: document.title,
    description: document.description,
    chunks: document.chunks.map((chunk) => ({
      path: chunk.path,
      heading: chunk.heading,
      name: chunk.name,
      description: chunk.description,
    })),
  }));
}

function usageError(message: string): number {
  process.stderr.write(`${message}\n\n${USAGE}`);
  return 2;
}

function plural(count: number, noun: string): string {
  return `${count} ${noun}${count === 1 ? '' : 's'}`;
}

function indent(line: string): string {
  return `  ${line}`;
}

if (import.meta.main) {
  process.exitCode = await run(process.argv.slice(2));
}
