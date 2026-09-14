import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import {
  SitemapError,
  UNKNOWN_CONTENT_HASH,
  fetchSitemap,
  parseSitemap,
  toMarkdownUrl,
} from '../src/sitemap.ts';
import { startSitemapServer } from './helpers/server.ts';

const urlset = (body: string) =>
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;

describe('toMarkdownUrl', () => {
  it('drops the trailing slash the portal adds to every page URL', () => {
    assert.equal(
      toMarkdownUrl('https://developer.dynatrace.com/blog/dt-app-vite/'),
      'https://developer.dynatrace.com/blog/dt-app-vite.md',
    );
  });

  it('maps the site root to index.md', () => {
    assert.equal(
      toMarkdownUrl('https://developer.dynatrace.com/'),
      'https://developer.dynatrace.com/index.md',
    );
  });

  it('handles page URLs without a trailing slash', () => {
    assert.equal(
      toMarkdownUrl('https://developer.dynatrace.com/docs/intro'),
      'https://developer.dynatrace.com/docs/intro.md',
    );
  });

  it('strips query strings and fragments', () => {
    assert.equal(
      toMarkdownUrl('https://developer.dynatrace.com/docs/intro/?a=1#top'),
      'https://developer.dynatrace.com/docs/intro.md',
    );
  });
});

describe('parseSitemap', () => {
  it('returns the markdown URL of every <url> element, sorted', () => {
    const documents = parseSitemap(
      urlset(
        '<url><loc>https://developer.dynatrace.com/docs/b/</loc><changefreq>weekly</changefreq><priority>0.5</priority></url>' +
          '<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>',
      ),
    );

    assert.deepEqual(documents, [
      {
        url: 'https://developer.dynatrace.com/docs/a.md',
        contentHash: UNKNOWN_CONTENT_HASH,
      },
      {
        url: 'https://developer.dynatrace.com/docs/b.md',
        contentHash: UNKNOWN_CONTENT_HASH,
      },
    ]);
  });

  it('accepts a sitemap with a single <url> element', () => {
    const documents = parseSitemap(
      urlset('<url><loc>https://developer.dynatrace.com/</loc></url>'),
    );

    assert.equal(documents.length, 1);
    assert.equal(documents[0]?.url, 'https://developer.dynatrace.com/index.md');
  });

  it('records a sentinel content hash the download stage replaces', () => {
    const documents = parseSitemap(
      urlset('<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>'),
    );

    assert.match(documents[0]?.contentHash ?? '', /^[0-9a-f]{64}$/);
  });

  it('collapses page URLs that map to the same markdown URL', () => {
    const loc = '<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>';

    assert.equal(parseSitemap(urlset(loc + loc)).length, 1);
  });

  it('rejects a body that is not XML', () => {
    assert.throws(
      () => parseSitemap('<!doctype html><html><body>Not found</body></html>'),
      SitemapError,
    );
  });

  it('rejects a sitemap index', () => {
    assert.throws(
      () =>
        parseSitemap(
          '<?xml version="1.0"?><sitemapindex><sitemap><loc>https://developer.dynatrace.com/a.xml</loc></sitemap></sitemapindex>',
        ),
      /nested sitemaps are not supported/,
    );
  });

  it('rejects a urlset without <url> elements', () => {
    assert.throws(() => parseSitemap(urlset('')), /no <url> elements/);
  });

  it('rejects a <url> element without <loc>', () => {
    assert.throws(
      () => parseSitemap(urlset('<url><changefreq>weekly</changefreq></url>')),
      /element 1 has no <loc> value/,
    );
  });

  it('rejects a malformed <loc> value', () => {
    assert.throws(
      () => parseSitemap(urlset('<url><loc>not a url</loc></url>')),
      /malformed <loc> value/,
    );
  });

  it('rejects a non-HTTP <loc> value', () => {
    assert.throws(
      () =>
        parseSitemap(
          urlset('<url><loc>ftp://developer.dynatrace.com/a/</loc></url>'),
        ),
      /non-HTTP <loc> value/,
    );
  });

  it('names the offending element when a later <url> is broken', () => {
    assert.throws(
      () =>
        parseSitemap(
          urlset(
            '<url><loc>https://developer.dynatrace.com/a/</loc></url><url><loc></loc></url>',
          ),
        ),
      /element 2 has no <loc> value/,
    );
  });
});

describe('fetchSitemap', () => {
  const servers: Array<{ close: () => Promise<void> }> = [];

  after(async () => {
    await Promise.all(servers.map((server) => server.close()));
  });

  it('returns the body of a reachable sitemap', async () => {
    const body = urlset(
      '<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>',
    );
    const server = await startSitemapServer({ body });
    servers.push(server);

    assert.equal(await fetchSitemap(server.url), body);
  });

  it('fails with the status code when the sitemap is missing', async () => {
    const server = await startSitemapServer({ status: 404, body: 'Not Found' });
    servers.push(server);

    await assert.rejects(fetchSitemap(server.url), /returned HTTP 404/);
  });

  it('fails when the sitemap is empty', async () => {
    const server = await startSitemapServer({ body: '  ' });
    servers.push(server);

    await assert.rejects(fetchSitemap(server.url), /is empty/);
  });

  it('fails with a readable error when the host is unreachable', async () => {
    await assert.rejects(
      fetchSitemap('http://127.0.0.1:1/sitemap.xml'),
      /Could not reach the sitemap/,
    );
  });

  it('fails when the sitemap does not respond in time', async () => {
    const server = await startSitemapServer({ body: urlset(''), delayMs: 200 });
    servers.push(server);

    await assert.rejects(
      fetchSitemap(server.url, 20),
      /Could not reach the sitemap/,
    );
  });
});
