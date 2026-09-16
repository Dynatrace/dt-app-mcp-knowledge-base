import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { after, describe, it } from 'node:test';
import { readMetadata } from '../src/meta.ts';
import { startSitemapServer, type SitemapServer } from './helpers/server.ts';

const run = promisify(execFile);
const CLI = resolve(import.meta.dirname, '../src/cli.ts');

const SITEMAP =
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
  '<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>' +
  '<url><loc>https://developer.dynatrace.com/docs/b/</loc></url>' +
  '</urlset>';

const servers: SitemapServer[] = [];

async function serve(body: string, status?: number): Promise<string> {
  const server = await startSitemapServer({
    body,
    ...(status === undefined ? {} : { status }),
  });
  servers.push(server);
  return server.url;
}

const tempMetaPath = async () =>
  join(await mkdtemp(join(tmpdir(), 'kb-cli-')), 'meta.json');

/** execFile rejects on a non-zero exit, so failures are normalised into the same shape as successes. */
async function cli(
  args: string[],
): Promise<{ code: number; stdout: string; stderr: string }> {
  try {
    const { stdout, stderr } = await run(process.execPath, [CLI, ...args]);
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

after(async () => {
  await Promise.all(servers.map((server) => server.close()));
});

describe('preprocessing CLI', () => {
  it('writes meta.json and reports how many pages were found', async () => {
    const out = await tempMetaPath();

    const { code, stdout } = await cli([
      '--sitemap',
      await serve(SITEMAP),
      '--out',
      out,
    ]);

    assert.equal(code, 0);
    assert.match(stdout, /Found 2 pages \(2 new, 0 no longer listed\)/);
    assert.deepEqual(
      (await readMetadata(out))?.sources.map((source) => source.url),
      [
        'https://developer.dynatrace.com/docs/a.md',
        'https://developer.dynatrace.com/docs/b.md',
      ],
    );
  });

  it('leaves meta.json untouched on a dry run', async () => {
    const out = await tempMetaPath();

    const { code, stdout } = await cli([
      '--sitemap',
      await serve(SITEMAP),
      '--out',
      out,
      '--dry-run',
    ]);

    assert.equal(code, 0);
    assert.match(stdout, /Dry run/);
    await assert.rejects(access(out));
  });

  it('prints the discovered documents with --json', async () => {
    const out = await tempMetaPath();

    const { stdout } = await cli([
      '--sitemap',
      await serve(SITEMAP),
      '--out',
      out,
      '--json',
    ]);

    assert.match(
      stdout,
      /"url": "https:\/\/developer\.dynatrace\.com\/docs\/a\.md"/,
    );
  });

  it('prints JSON instead of the summary, so --json can be piped', async () => {
    const { stdout } = await cli([
      '--sitemap',
      await serve(SITEMAP),
      '--out',
      await tempMetaPath(),
      '--json',
    ]);

    const documents = JSON.parse(stdout) as { url: string }[];
    assert.deepEqual(
      documents.map((document) => document.url),
      [
        'https://developer.dynatrace.com/docs/a.md',
        'https://developer.dynatrace.com/docs/b.md',
      ],
    );
  });

  it('fails with a readable error when the sitemap is unreachable', async () => {
    const { code, stderr } = await cli([
      '--sitemap',
      'http://127.0.0.1:1/sitemap.xml',
      '--out',
      await tempMetaPath(),
    ]);

    assert.equal(code, 1);
    assert.match(
      stderr,
      /^Sitemap discovery failed\. Could not reach the sitemap/,
    );
  });

  it('fails with a readable error when the sitemap is malformed', async () => {
    const url = await serve(
      '<!doctype html><html><body>Not found</body></html>',
    );

    const { code, stderr } = await cli([
      '--sitemap',
      url,
      '--out',
      await tempMetaPath(),
    ]);

    assert.equal(code, 1);
    assert.match(stderr, /Sitemap discovery failed\./);
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
});

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

/** Writes one page below a fresh directory, at the location the given page path implies. */
async function sourceDir(pagePath = 'docs/a'): Promise<string> {
  const root = await mkdtemp(join(tmpdir(), 'kb-chunk-'));
  const file = join(root, `${pagePath}.md`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, PAGE, 'utf8');
  return root;
}

const chunkDir = async () => mkdtemp(join(tmpdir(), 'kb-out-'));

/** meta.json holding the two documents SITEMAP lists, so `docs/a` has a source entry to attach chunks to. */
async function discoveredMetaPath(): Promise<string> {
  const out = await tempMetaPath();
  await cli(['--sitemap', await serve(SITEMAP), '--out', out]);
  return out;
}

describe('preprocessing CLI chunk command', () => {
  it('splits every document and reports the chunk count in total and per document', async () => {
    const { code, stdout } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--dry-run',
    ]);

    assert.equal(code, 0);
    assert.match(stdout, /Split 1 document into 2 chunks/);
    assert.match(stdout, /^ {2}docs\/a {2}2 chunks$/m);
  });

  it('writes one file per chunk below the chunk directory', async () => {
    const chunks = await chunkDir();

    const { code } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--chunk-dir',
      chunks,
    ]);

    assert.equal(code, 0);
    assert.equal(
      await readFile(join(chunks, 'docs/a/span-attributes.md'), 'utf8'),
      '## Span Attributes\n\nBody.\n',
    );
    await assert.rejects(access(join(chunks, 'docs/a/index.md')));
  });

  it('prints the index entries it would write, since index.json is not produced yet', async () => {
    const { stdout } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--dry-run',
    ]);

    assert.match(stdout, /Index entries, not yet written to index\.json:/);
    assert.match(
      stdout,
      /^ {2}Page A: Span Attributes\n {4}docs\/docs\/a\/span-attributes\.md\n {4}Body\.$/m,
    );
  });

  it('records the chunks of a document on its meta.json source entry', async () => {
    const out = await discoveredMetaPath();

    await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--chunk-dir',
      await chunkDir(),
      '--out',
      out,
    ]);

    const sources = (await readMetadata(out))?.sources;
    assert.equal(sources?.[0]?.chunkPaths.length, 2);
    assert.deepEqual(sources?.[1]?.chunkPaths, []);
  });

  it('leaves the chunk directory and meta.json untouched on a dry run', async () => {
    const chunks = await chunkDir();

    const { code, stdout } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--chunk-dir',
      chunks,
      '--dry-run',
    ]);

    assert.equal(code, 0);
    assert.match(stdout, /Dry run/);
    await assert.rejects(access(join(chunks, 'docs')));
  });

  it('prints the produced chunks with --json', async () => {
    const { stdout } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--dry-run',
      '--json',
    ]);

    assert.match(stdout, /"heading": "Span Attributes"/);
  });

  it('prints JSON instead of the summary, so --json can be piped', async () => {
    const { stdout } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--dry-run',
      '--json',
    ]);

    const documents = JSON.parse(stdout) as {
      pagePath: string;
      title: string;
      chunks: { name: string }[];
    }[];
    assert.equal(documents[0]?.pagePath, 'docs/a');
    assert.equal(documents[0]?.title, 'Page A');
    assert.deepEqual(
      documents[0]?.chunks.map((chunk) => chunk.name),
      ['Page A: Span Attributes', 'Page A: Overview'],
    );
  });

  it('keeps warning on stderr while stdout carries JSON', async () => {
    const { stderr } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--dry-run',
      '--json',
    ]);

    assert.match(stderr, /Headings too generic to identify a feature/);
  });

  it('warns about headings too generic to identify a feature', async () => {
    const { stderr } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--dry-run',
    ]);

    assert.match(stderr, /Headings too generic to identify a feature/);
    assert.match(stderr, /^ {2}docs\/a: Overview$/m);
  });

  it('warns about descriptions too thin to decide on', async () => {
    const { stderr } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir(),
      '--dry-run',
    ]);

    assert.match(stderr, /Descriptions too thin to decide on/);
    assert.match(
      stderr,
      /^ {2}docs\/docs\/a\/span-attributes\.md: shorter than 30 characters$/m,
    );
  });

  it('reports documents that meta.json does not list', async () => {
    const out = await discoveredMetaPath();

    const { stderr } = await cli([
      'chunk',
      '--source-dir',
      await sourceDir('orphan'),
      '--out',
      out,
      '--dry-run',
    ]);

    assert.match(stderr, /chunk paths not recorded:\n {2}orphan$/m);
  });

  it('needs the documents to split', async () => {
    const { code, stderr } = await cli(['chunk']);

    assert.equal(code, 2);
    assert.match(stderr, /pass --source-dir <path>/);
  });

  it('fails when the source directory holds no markdown', async () => {
    const { code, stderr } = await cli([
      'chunk',
      '--source-dir',
      await chunkDir(),
    ]);

    assert.equal(code, 1);
    assert.match(stderr, /^No markdown documents found in /);
  });

  it('fails with a readable error when the source directory does not exist', async () => {
    const { code, stderr } = await cli([
      'chunk',
      '--source-dir',
      join(tmpdir(), 'kb-does-not-exist'),
    ]);

    assert.equal(code, 1);
    assert.match(stderr, /^Could not read the source directory /);
  });
});
