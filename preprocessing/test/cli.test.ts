import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import {
  access,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  stat,
  writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { after, describe, it } from 'node:test';
import { readMetadata } from '../src/meta.ts';
import { startSitemapServer, type SitemapServer } from './helpers/server.ts';

const exec = promisify(execFile);
const CLI = resolve(import.meta.dirname, '../src/cli.ts');

// The root the CLI writes its output below, and the base every index entry is relative to.
const REPOSITORY_ROOT = resolve(import.meta.dirname, '../..');

const SITEMAP =
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
  '<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>' +
  '<url><loc>https://developer.dynatrace.com/docs/b/</loc></url>' +
  '</urlset>';

const PAGE = [
  '# Page A',
  '',
  'Intro.',
  '',
  '## Span Attributes',
  '',
  'Body.',
  '',
  '## Overview',
  '',
  'More.',
].join('\n');

const servers: SitemapServer[] = [];

async function serve(body: string, status?: number): Promise<string> {
  const server = await startSitemapServer({
    body,
    ...(status === undefined ? {} : { status }),
  });
  servers.push(server);
  return server.url;
}

/** Writes one page below a fresh directory, at the location the given page path implies. */
async function sourceDir(pagePath = 'docs/a'): Promise<string> {
  const root = await mkdtemp(join(tmpdir(), 'kb-source-'));
  const file = join(root, `${pagePath}.md`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, PAGE, 'utf8');
  return root;
}

/** execFile rejects on a non-zero exit, so failures are normalised into the same shape as successes. */
async function cli(
  args: string[],
): Promise<{ code: number; stdout: string; stderr: string }> {
  try {
    const { stdout, stderr } = await exec(process.execPath, [CLI, ...args]);
    return { code: 0, stdout, stderr };
  } catch (error) {
    const failure = error as {
      code?: number;
      stdout?: string;
      stderr?: string;
    };
    return {
      code: failure.code ?? 1,
      stdout: failure.stdout ?? '',
      stderr: failure.stderr ?? '',
    };
  }
}

type Outputs = { meta: string; chunks: string; index: string };

/** Somewhere for one knowledge base to live, which a second run can be pointed back at. */
async function outputs(): Promise<Outputs> {
  return {
    meta: join(await mkdtemp(join(tmpdir(), 'kb-meta-')), 'meta.json'),
    chunks: await mkdtemp(join(tmpdir(), 'kb-chunks-')),
    index: join(await mkdtemp(join(tmpdir(), 'kb-index-')), 'index.json'),
  };
}

/** One full pipeline run, with every output in a temporary location of its own. */
async function pipeline(
  options: {
    sitemap?: string;
    source?: string;
    args?: string[];
    outputs?: Outputs;
  } = {},
) {
  const { meta, chunks, index } = options.outputs ?? (await outputs());
  const sitemap = options.sitemap ?? (await serve(SITEMAP));
  const result = await cli([
    '--sitemap',
    sitemap,
    '--source-dir',
    options.source ?? (await sourceDir()),
    '--chunk-dir',
    chunks,
    '--index',
    index,
    '--out',
    meta,
    ...(options.args ?? []),
  ]);
  return { ...result, sitemap, meta, chunks, index };
}

const readIndex = async (path: string) =>
  JSON.parse(await readFile(path, 'utf8')) as {
    chunks: { name: string; description: string; path: string }[];
  };

after(async () => {
  await Promise.all(servers.map((server) => server.close()));
});

describe('preprocessing CLI', () => {
  it('reports every stage of the run', async () => {
    const { code, stdout, sitemap, index, meta } = await pipeline();

    assert.equal(code, 0);
    assert.match(stdout, new RegExp(`^Read ${sitemap}$`, 'm'));
    assert.match(stdout, /^Found 2 pages \(2 new, 0 no longer listed\)$/m);
    assert.match(
      stdout,
      /^Split 1 of 1 document into 2 chunks \(1 new, 0 changed, 0 unchanged\)$/m,
    );
    assert.match(stdout, /^ {2}docs\/a {2}2 chunks$/m);
    assert.match(stdout, /^Updated 2 chunks and removed 0 \(0 left alone\)$/m);
    assert.match(stdout, new RegExp(`^Wrote ${index} \\(2 entries\\)$`, 'm'));
    assert.match(stdout, new RegExp(`^Wrote ${meta}$`, 'm'));
  });

  it('leaves every output untouched on a dry run', async () => {
    const { code, stdout, meta, chunks, index } = await pipeline({
      args: ['--dry-run'],
    });

    assert.equal(code, 0);
    assert.match(stdout, /^Validated 2 index entries$/m);
    assert.match(stdout, /Dry run/);
    await assert.rejects(access(meta));
    await assert.rejects(access(join(chunks, 'docs')));
    await assert.rejects(access(index));
  });

  it('prints what it produced with --json', async () => {
    const { stdout } = await pipeline({ args: ['--json'] });

    assert.match(
      stdout,
      /"url": "https:\/\/developer\.dynatrace\.com\/docs\/a\.md"/,
    );
    assert.match(stdout, /"heading": "Span Attributes"/);
  });

  it('prints JSON instead of the summary, so --json can be piped', async () => {
    const { stdout } = await pipeline({ args: ['--json'] });

    const produced = JSON.parse(stdout) as {
      discovered: { url: string }[];
      documents: {
        pagePath: string;
        title: string;
        chunks: { name: string }[];
      }[];
    };
    assert.deepEqual(
      produced.discovered.map((document) => document.url),
      [
        'https://developer.dynatrace.com/docs/a.md',
        'https://developer.dynatrace.com/docs/b.md',
      ],
    );
    assert.equal(produced.documents[0]?.pagePath, 'docs/a');
    assert.equal(produced.documents[0]?.title, 'Page A');
    assert.deepEqual(
      produced.documents[0]?.chunks.map((chunk) => chunk.name),
      ['Page A: Span Attributes', 'Page A: Overview'],
    );
  });

  it('keeps warnings on stderr while stdout carries JSON', async () => {
    const { stderr } = await pipeline({ args: ['--json'] });

    assert.match(stderr, /Headings too generic to identify a feature/);
  });

  it('prints usage for --help', async () => {
    const { code, stdout } = await cli(['--help']);

    assert.equal(code, 0);
    assert.match(stdout, /--sitemap <url>/);
  });

  it('rejects unknown options with usage', async () => {
    const { code, stderr } = await cli(['--nope']);

    assert.equal(code, 2);
    assert.match(stderr, /Usage:/);
  });

  it('needs the documents to split', async () => {
    const { code, stderr } = await cli([]);

    assert.equal(code, 2);
    assert.match(stderr, /pass --source-dir <path>/);
  });

  it('fails with a readable error when the sitemap is unreachable', async () => {
    const { code, stderr } = await pipeline({
      sitemap: 'http://127.0.0.1:1/sitemap.xml',
    });

    assert.equal(code, 1);
    assert.match(
      stderr,
      /^Sitemap discovery failed\. Could not reach the sitemap/,
    );
  });

  it('fails with a readable error when the sitemap is malformed', async () => {
    const { code, stderr } = await pipeline({
      sitemap: await serve(
        '<!doctype html><html><body>Not found</body></html>',
      ),
    });

    assert.equal(code, 1);
    assert.match(stderr, /Sitemap discovery failed\./);
  });

  it('fails when the source directory holds no markdown', async () => {
    const { code, stderr } = await pipeline({
      source: await mkdtemp(join(tmpdir(), 'kb-empty-')),
    });

    assert.equal(code, 1);
    assert.match(stderr, /^No markdown documents found in /m);
  });

  it('fails with a readable error when the source directory does not exist', async () => {
    const { code, stderr } = await pipeline({
      source: join(tmpdir(), 'kb-does-not-exist'),
    });

    assert.equal(code, 1);
    assert.match(stderr, /^Could not read the source directory /m);
  });
});

describe('the knowledge base the pipeline writes', () => {
  it('records every discovered page in meta.json', async () => {
    const { meta } = await pipeline();

    assert.deepEqual(
      (await readMetadata(meta))?.sources.map((source) => source.url),
      [
        'https://developer.dynatrace.com/docs/a.md',
        'https://developer.dynatrace.com/docs/b.md',
      ],
    );
  });

  it('records the chunks of a document on its meta.json source entry', async () => {
    const { meta } = await pipeline();

    const sources = (await readMetadata(meta))?.sources;
    assert.equal(sources?.[0]?.chunkPaths.length, 2);
    assert.deepEqual(sources?.[1]?.chunkPaths, []);
  });

  it('writes one file per chunk below the chunk directory', async () => {
    const { code, chunks } = await pipeline();

    assert.equal(code, 0);
    assert.equal(
      await readFile(join(chunks, 'docs/a/span-attributes.md'), 'utf8'),
      '## Span Attributes\n\nBody.\n',
    );
    await assert.rejects(access(join(chunks, 'docs/a/index.md')));
  });

  it('writes one index entry per chunk, with the name and description of that chunk', async () => {
    const { index } = await pipeline();

    const { chunks } = await readIndex(index);
    assert.deepEqual(
      chunks.map((entry) => [entry.name, entry.description]),
      [
        ['Page A: Span Attributes', 'Body.'],
        ['Page A: Overview', 'More.'],
      ],
    );
  });

  it('points every index entry at a chunk file that exists', async () => {
    const { index } = await pipeline();

    // Entries are recorded relative to the repository root, so that is where they resolve from.
    const { chunks } = await readIndex(index);
    assert.equal(chunks.length, 2);
    await Promise.all(
      chunks.map((entry) => access(resolve(REPOSITORY_ROOT, entry.path))),
    );
  });

  it('fails naming the offending entries when the index does not satisfy its schema', async () => {
    // A document with neither a file name nor a title heading leaves its chunk nothing to be named after.
    const source = await mkdtemp(join(tmpdir(), 'kb-source-'));
    await writeFile(join(source, '.md'), 'Body.', 'utf8');

    const { code, stderr, index, meta } = await pipeline({ source });

    assert.equal(code, 1);
    assert.match(stderr, /index\.json is invalid:/);
    assert.match(
      stderr,
      /index\.md: name must NOT have fewer than 1 characters/,
    );
    await assert.rejects(access(index));
    await assert.rejects(access(meta));
  });

  it('warns about headings too generic to identify a feature', async () => {
    const { stderr } = await pipeline({ args: ['--dry-run'] });

    assert.match(stderr, /Headings too generic to identify a feature/);
    assert.match(stderr, /^ {2}docs\/a: Overview$/m);
  });

  it('warns about descriptions too thin to decide on', async () => {
    const { stderr } = await pipeline({ args: ['--dry-run'] });

    assert.match(stderr, /Descriptions too thin to decide on/);
    assert.match(stderr, /span-attributes\.md: shorter than 30 characters$/m);
  });

  it('reports documents the sitemap does not list', async () => {
    const { stderr } = await pipeline({
      source: await sourceDir('orphan'),
      args: ['--dry-run'],
    });

    assert.match(stderr, /chunk paths not recorded:\n {2}orphan$/m);
  });
});

/** Every modification time below a directory, which is how a rewrite gives itself away. */
async function touchedAt(root: string): Promise<Map<string, number>> {
  const entries = await readdir(root, { recursive: true, withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile());
  return new Map(
    await Promise.all(
      files.map(
        async (entry) =>
          [
            join(entry.parentPath, entry.name),
            (await stat(join(entry.parentPath, entry.name))).mtimeMs,
          ] as const,
      ),
    ),
  );
}

describe('a second run over the same documents', () => {
  it('rewrites nothing at all when no document changed', async () => {
    const source = await sourceDir();
    const out = await outputs();
    await pipeline({ source, outputs: out });
    const before = await touchedAt(out.chunks);
    const meta = await readFile(out.meta, 'utf8');
    const index = await readFile(out.index, 'utf8');

    const { code, stdout } = await pipeline({ source, outputs: out });

    assert.equal(code, 0);
    assert.deepEqual(await touchedAt(out.chunks), before);
    assert.equal(await readFile(out.meta, 'utf8'), meta);
    assert.equal(await readFile(out.index, 'utf8'), index);
    assert.match(stdout, new RegExp(`^${out.chunks}/ unchanged$`, 'm'));
    assert.match(stdout, new RegExp(`^${out.meta} unchanged$`, 'm'));
  });

  it('carries the chunks of an unchanged document over instead of splitting it again', async () => {
    const source = await sourceDir();
    const out = await outputs();
    await pipeline({ source, outputs: out });

    const { stdout } = await pipeline({ source, outputs: out });

    assert.match(
      stdout,
      /^Split 0 of 1 document into 0 chunks \(0 new, 0 changed, 1 unchanged\)$/m,
    );
    assert.match(stdout, /^Updated 0 chunks and removed 0 \(2 left alone\)$/m);
  });

  it('splits a document again once its content changed', async () => {
    const source = await sourceDir();
    const out = await outputs();
    await pipeline({ source, outputs: out });
    await writeFile(
      join(source, 'docs/a.md'),
      PAGE.replace('Body.', 'A longer body that says something.'),
      'utf8',
    );

    const { stdout, index } = await pipeline({ source, outputs: out });

    assert.match(
      stdout,
      /^Split 1 of 1 document into 2 chunks \(0 new, 1 changed, 0 unchanged\)$/m,
    );
    assert.match(stdout, /^Updated 1 chunk and removed 0 \(1 left alone\)$/m);
    const { chunks } = await readIndex(index);
    assert.equal(chunks[0]?.description, 'A longer body that says something.');
  });

  it('takes a chunk whose heading disappeared out of docs, index.json and meta.json', async () => {
    const source = await sourceDir();
    const out = await outputs();
    await pipeline({ source, outputs: out });
    const gone = join(out.chunks, 'docs/a/overview.md');
    await access(gone);
    await writeFile(
      join(source, 'docs/a.md'),
      PAGE.slice(0, PAGE.indexOf('## Overview')).trimEnd(),
      'utf8',
    );

    const { stdout, index, meta } = await pipeline({ source, outputs: out });

    assert.match(stdout, /^Updated 0 chunks and removed 1 \(1 left alone\)$/m);
    await assert.rejects(access(gone));
    const { chunks } = await readIndex(index);
    assert.deepEqual(
      chunks.map((entry) => entry.name),
      ['Page A: Span Attributes'],
    );
    assert.equal((await readMetadata(meta))?.sources[0]?.chunkPaths.length, 1);
  });

  it('drops the chunks of a document the sitemap no longer lists', async () => {
    const source = await sourceDir();
    const out = await outputs();
    await pipeline({ source, outputs: out });

    // A source directory holding nothing for the page leaves the chunks nobody produces any more.
    const { stdout, index } = await pipeline({
      source: await sourceDir('docs/b'),
      outputs: out,
    });

    assert.match(stdout, /^Updated 2 chunks and removed 2 \(0 left alone\)$/m);
    await assert.rejects(access(join(out.chunks, 'docs/a')));
    const { chunks } = await readIndex(index);
    assert.deepEqual(
      chunks.map((entry) => entry.path.endsWith('docs/b/overview.md')),
      [false, true],
    );
  });

  it('splits every document again with --force', async () => {
    const source = await sourceDir();
    const out = await outputs();
    await pipeline({ source, outputs: out });

    const { stdout } = await pipeline({
      source,
      outputs: out,
      args: ['--force'],
    });

    assert.match(
      stdout,
      /^Split 1 of 1 document into 2 chunks \(0 new, 0 changed, 1 unchanged\)$/m,
    );
    // Splitting a document again is not a reason to rewrite files it did not change.
    assert.match(stdout, /^Updated 0 chunks and removed 0 \(2 left alone\)$/m);
  });

  it('records when a document was last seen to change', async () => {
    const source = await sourceDir();
    const out = await outputs();
    await pipeline({ source, outputs: out });
    const first = (await readMetadata(out.meta))?.sources[0];

    await pipeline({ source, outputs: out });

    const second = (await readMetadata(out.meta))?.sources[0];
    assert.notEqual(first?.downloadHash, '0'.repeat(64));
    assert.equal(second?.downloadedAt, first?.downloadedAt);
  });
});
