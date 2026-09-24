import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import {
  downloadDocuments,
  stripFrontmatter,
  withContentHashes,
} from '../src/download.ts';
import { UNKNOWN_CONTENT_HASH } from '../src/sitemap.ts';
import type { SitemapDocument } from '../src/types.ts';
import { startPortal, type Portal, type PortalPage } from './helpers/server.ts';

const portals: Portal[] = [];

after(async () => {
  await Promise.all(portals.map((portal) => portal.close()));
});

/** A portal holding the given pages, and the discovered documents pointing at its markdown. */
async function portal(pages: Record<string, PortalPage>) {
  const served = await startPortal(pages);
  portals.push(served);

  const root = new URL('.', served.url).toString();
  const discovered = Object.keys(pages).map<SitemapDocument>((pagePath) => ({
    url: `${root}${pagePath}.md`,
    contentHash: UNKNOWN_CONTENT_HASH,
  }));
  return { served, root, discovered };
}

describe('downloadDocuments', () => {
  it('downloads the markdown of every discovered page', async () => {
    const { root, discovered } = await portal({
      'docs/a': '# Page A\n',
      'docs/b': '# Page B\n',
    });

    const { documents, skipped, failed } = await downloadDocuments(
      discovered,
      root,
    );

    assert.deepEqual(
      documents.map((document) => [document.pagePath, document.markdown]),
      [
        ['docs/a', '# Page A\n'],
        ['docs/b', '# Page B\n'],
      ],
    );
    assert.deepEqual(skipped, []);
    assert.deepEqual(failed, []);
  });

  it('returns the documents in page path order, whatever order they arrived in', async () => {
    const { root, discovered } = await portal({
      'docs/c': '# C\n',
      'docs/a': '# A\n',
      'docs/b': '# B\n',
    });

    const { documents } = await downloadDocuments(discovered, root, {
      concurrency: 3,
    });

    assert.deepEqual(
      documents.map((document) => document.pagePath),
      ['docs/a', 'docs/b', 'docs/c'],
    );
  });

  it('digests the markdown of every document it downloaded', async () => {
    const { root, discovered } = await portal({ 'docs/a': '# Page A\n' });

    const [document] = (await downloadDocuments(discovered, root)).documents;

    assert.match(document?.contentHash ?? '', /^[0-9a-f]{64}$/);
    assert.notEqual(document?.contentHash, UNKNOWN_CONTENT_HASH);
  });

  it('digests the same document to the same hash twice', async () => {
    const { root, discovered } = await portal({ 'docs/a': '# Page A\n' });

    const first = await downloadDocuments(discovered, root);
    const second = await downloadDocuments(discovered, root);

    assert.equal(
      first.documents[0]?.contentHash,
      second.documents[0]?.contentHash,
    );
  });

  it('digests a rewritten document to a different hash', async () => {
    const { served, root, discovered } = await portal({ 'docs/a': '# A\n' });
    const before = await downloadDocuments(discovered, root);
    served.pages.set('docs/a', '# A, rewritten\n');

    const after = await downloadDocuments(discovered, root);

    assert.notEqual(
      before.documents[0]?.contentHash,
      after.documents[0]?.contentHash,
    );
  });

  it('skips a page the portal has no markdown of', async () => {
    const { root, discovered } = await portal({
      'docs/a': '# Page A\n',
      'docs/b': { status: 404, body: 'Not Found' },
    });

    const { documents, skipped, failed } = await downloadDocuments(
      discovered,
      root,
    );

    assert.equal(documents.length, 1);
    assert.match(skipped[0]?.url ?? '', /docs\/b\.md$/);
    assert.match(skipped[0]?.reason ?? '', /^HTTP 404/);
    assert.deepEqual(failed, []);
  });

  it('skips a page a bucket refuses rather than admitting it holds nothing', async () => {
    const { root, discovered } = await portal({
      'docs/a': {
        status: 403,
        body: '<Error><Code>AccessDenied</Code></Error>',
      },
    });

    const { skipped } = await downloadDocuments(discovered, root);

    assert.match(skipped[0]?.reason ?? '', /^HTTP 403/);
  });

  it('skips a page that serves a rendered page instead of markdown', async () => {
    const { root, discovered } = await portal({
      'docs/a': {
        body: '<!doctype html><html><body>Page A</body></html>',
        contentType: 'text/html; charset=utf-8',
      },
    });

    const { documents, skipped } = await downloadDocuments(discovered, root);

    assert.deepEqual(documents, []);
    assert.match(skipped[0]?.reason ?? '', /rendered page instead of markdown/);
  });

  it('skips a page that serves nothing at all', async () => {
    const { root, discovered } = await portal({ 'docs/a': '   \n' });

    const { skipped } = await downloadDocuments(discovered, root);

    assert.match(skipped[0]?.reason ?? '', /empty document/);
  });

  it('reports a download that went wrong as failed rather than skipped', async () => {
    const { root, discovered } = await portal({
      'docs/a': { status: 500, body: 'Server Error' },
    });

    const { skipped, failed } = await downloadDocuments(discovered, root);

    assert.deepEqual(skipped, []);
    assert.match(failed[0]?.reason ?? '', /^HTTP 500/);
  });

  it('reports an unreachable portal as failed instead of throwing', async () => {
    const documents: SitemapDocument[] = [
      {
        url: 'http://127.0.0.1:1/docs/a.md',
        contentHash: UNKNOWN_CONTENT_HASH,
      },
    ];

    const { failed } = await downloadDocuments(
      documents,
      'http://127.0.0.1:1/',
    );

    assert.equal(failed.length, 1);
  });

  it('fails a document the portal does not answer in time', async () => {
    const { root, discovered } = await portal({ 'docs/a': '# Page A\n' });

    const { failed } = await downloadDocuments(discovered, root, {
      timeoutMs: 0,
    });

    assert.equal(failed.length, 1);
  });

  it('keeps one page failing from taking the others down with it', async () => {
    const { root, discovered } = await portal({
      'docs/a': '# Page A\n',
      'docs/b': { status: 500 },
      'docs/c': '# Page C\n',
    });

    const { documents, failed } = await downloadDocuments(discovered, root);

    assert.equal(documents.length, 2);
    assert.equal(failed.length, 1);
  });

  it('downloads every page exactly once, however many workers share the queue', async () => {
    const pages = Object.fromEntries(
      Array.from({ length: 20 }, (_, index) => [
        `docs/${index}`,
        `# ${index}\n`,
      ]),
    );
    const { served, root, discovered } = await portal(pages);

    const { documents } = await downloadDocuments(discovered, root, {
      concurrency: 4,
    });

    assert.equal(documents.length, 20);
    assert.equal(served.requested.length, 20);
    assert.equal(new Set(served.requested).size, 20);
  });
});

describe('stripFrontmatter', () => {
  it('takes the frontmatter block off a document that carries one', () => {
    const markdown = [
      '---',
      'title: Page A',
      'description: What the page covers.',
      '---',
      '',
      '## Section',
    ].join('\n');

    assert.equal(stripFrontmatter(markdown), '## Section');
  });

  it('leaves a document without frontmatter alone', () => {
    const markdown = '# Page A\n\nIntro.\n';

    assert.equal(stripFrontmatter(markdown), markdown);
  });

  it('leaves a thematic break that opens a document alone', () => {
    const markdown = '---\n\n# Page A\n';

    assert.equal(stripFrontmatter(markdown), markdown);
  });

  it('keeps the dashes of a document that only looks like it opens one', () => {
    const markdown = '# Page A\n\n---\n\ntitle: not frontmatter\n---\n';

    assert.equal(stripFrontmatter(markdown), markdown);
  });

  it('takes an empty frontmatter block off', () => {
    assert.equal(stripFrontmatter('---\n---\n# Page A\n'), '# Page A\n');
  });
});

describe('withContentHashes', () => {
  it('replaces the discovery sentinel with the digest of the downloaded document', async () => {
    const { root, discovered } = await portal({ 'docs/a': '# Page A\n' });
    const { documents } = await downloadDocuments(discovered, root);

    const [hashed] = withContentHashes(discovered, documents);

    assert.equal(hashed?.contentHash, documents[0]?.contentHash);
  });

  it('leaves the sentinel on a page nothing was downloaded for', async () => {
    const { root, discovered } = await portal({
      'docs/a': '# Page A\n',
      'docs/b': { status: 404 },
    });
    const { documents } = await downloadDocuments(discovered, root);

    const hashed = withContentHashes(discovered, documents);

    assert.equal(hashed[1]?.contentHash, UNKNOWN_CONTENT_HASH);
  });
});
