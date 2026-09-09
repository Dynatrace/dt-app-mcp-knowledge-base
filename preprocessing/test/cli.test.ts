import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { access, mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
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
  const server = await startSitemapServer({ body, ...(status === undefined ? {} : { status }) });
  servers.push(server);
  return server.url;
}

const tempMetaPath = async () => join(await mkdtemp(join(tmpdir(), 'kb-cli-')), 'meta.json');

/** execFile rejects on a non-zero exit, so failures are normalised into the same shape as successes. */
async function cli(args: string[]): Promise<{ code: number; stdout: string; stderr: string }> {
  try {
    const { stdout, stderr } = await run(process.execPath, [CLI, ...args]);
    return { code: 0, stdout, stderr };
  } catch (error) {
    const failure = error as { code?: number; stdout?: string; stderr?: string };
    return { code: failure.code ?? 1, stdout: failure.stdout ?? '', stderr: failure.stderr ?? '' };
  }
}

after(async () => {
  await Promise.all(servers.map((server) => server.close()));
});

describe('preprocessing CLI', () => {
  it('writes meta.json and reports how many pages were found', async () => {
    const out = await tempMetaPath();

    const { code, stdout } = await cli(['--sitemap', await serve(SITEMAP), '--out', out]);

    assert.equal(code, 0);
    assert.match(stdout, /Found 2 pages \(2 new, 0 no longer listed\)/);
    assert.deepEqual((await readMetadata(out))?.sources.map((source) => source.url), [
      'https://developer.dynatrace.com/docs/a.md',
      'https://developer.dynatrace.com/docs/b.md',
    ]);
  });

  it('leaves meta.json untouched on a dry run', async () => {
    const out = await tempMetaPath();

    const { code, stdout } = await cli(['--sitemap', await serve(SITEMAP), '--out', out, '--dry-run']);

    assert.equal(code, 0);
    assert.match(stdout, /Dry run/);
    await assert.rejects(access(out));
  });

  it('prints the discovered documents with --json', async () => {
    const out = await tempMetaPath();

    const { stdout } = await cli(['--sitemap', await serve(SITEMAP), '--out', out, '--json']);

    assert.match(stdout, /"url": "https:\/\/developer\.dynatrace\.com\/docs\/a\.md"/);
  });

  it('fails with a readable error when the sitemap is unreachable', async () => {
    const { code, stderr } = await cli(['--sitemap', 'http://127.0.0.1:1/sitemap.xml', '--out', await tempMetaPath()]);

    assert.equal(code, 1);
    assert.match(stderr, /^Sitemap discovery failed\. Could not reach the sitemap/);
  });

  it('fails with a readable error when the sitemap is malformed', async () => {
    const url = await serve('<!doctype html><html><body>Not found</body></html>');

    const { code, stderr } = await cli(['--sitemap', url, '--out', await tempMetaPath()]);

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
