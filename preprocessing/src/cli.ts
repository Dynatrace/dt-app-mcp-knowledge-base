#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { resolve } from 'node:path';
import { mergeMetadata, readMetadata, writeMetadata } from './meta.ts';
import { DEFAULT_SITEMAP_URL, SitemapError, fetchSitemap, parseSitemap } from './sitemap.ts';

const DEFAULT_META_PATH = 'meta.json';

const USAGE = `Usage: npm start -- [options]

Discovers every developer portal documentation page from the sitemap and records it in meta.json.

Options:
  --sitemap <url>   Sitemap to read (default: ${DEFAULT_SITEMAP_URL})
  --out <path>      meta.json to write, relative to the repository root (default: ${DEFAULT_META_PATH})
  --dry-run         Report what was found without writing meta.json
  --json            Print the discovered documents as JSON instead of a summary
  --help            Show this message
`;

export async function run(argv: string[]): Promise<number> {
  let options: { sitemap?: string; out?: string; 'dry-run'?: boolean; json?: boolean; help?: boolean };
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
    process.stderr.write(`${cause instanceof Error ? cause.message : String(cause)}\n\n${USAGE}`);
    return 2;
  }

  if (options.help === true) {
    process.stdout.write(USAGE);
    return 0;
  }

  const sitemapUrl = options.sitemap ?? DEFAULT_SITEMAP_URL;
  // The repository root is the pipeline's output location, and the package lives one level below it.
  const metaPath = resolve(import.meta.dirname, '../..', options.out ?? DEFAULT_META_PATH);

  try {
    const documents = parseSitemap(await fetchSitemap(sitemapUrl));

    if (options.json === true) {
      process.stdout.write(`${JSON.stringify(documents, undefined, 2)}\n`);
    }

    const { meta, added, removed } = mergeMetadata(documents, await readMetadata(metaPath), new Date());
    if (options['dry-run'] !== true) {
      await writeMetadata(metaPath, meta);
    }

    report(sitemapUrl, metaPath, documents.length, added.length, removed.length, options['dry-run'] === true);
    return 0;
  } catch (cause) {
    const detail = cause instanceof Error ? cause.message : String(cause);
    process.stderr.write(cause instanceof SitemapError ? `Sitemap discovery failed. ${detail}\n` : `${detail}\n`);
    return 1;
  }
}

function report(
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

if (import.meta.main) {
  process.exitCode = await run(process.argv.slice(2));
}
