import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import {
  SitemapError,
  UNKNOWN_CONTENT_HASH,
  fetchSitemap,
  parseSitemap,
  siteRoot,
  toMarkdownUrl,
  toPagePath,
} from '../src/sitemap.ts';
import { startSitemapServer } from './helpers/server.ts';

const urlset = (body: string) =>
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;

const SITEMAP_URL = 'https://developer.dynatrace.com/sitemap.xml';
const SITE = 'https://developer.dynatrace.com/';

/** Every sitemap below is the one the portal serves at its own site root. */
const parse = (xml: string) => parseSitemap(xml, SITEMAP_URL);

describe('siteRoot', () => {
  it('is the origin for a sitemap the portal serves at its root', () => {
    assert.equal(siteRoot(SITEMAP_URL), SITE);
  });

  it('is the directory the sitemap sits in, for a portal published below a path', () => {
    assert.equal(
      siteRoot('https://preview.example.com/portal-preview/sitemap.xml'),
      'https://preview.example.com/portal-preview/',
    );
  });
});

describe('toMarkdownUrl', () => {
  it('drops the trailing slash the portal adds to every page URL', () => {
    assert.equal(
      toMarkdownUrl('https://developer.dynatrace.com/blog/dt-app-vite/', SITE),
      'https://developer.dynatrace.com/blog/dt-app-vite.md',
    );
  });

  it('maps the site root to index.md', () => {
    assert.equal(
      toMarkdownUrl('https://developer.dynatrace.com/', SITE),
      'https://developer.dynatrace.com/index.md',
    );
  });

  it('handles page URLs without a trailing slash', () => {
    assert.equal(
      toMarkdownUrl('https://developer.dynatrace.com/docs/intro', SITE),
      'https://developer.dynatrace.com/docs/intro.md',
    );
  });

  it('strips query strings and fragments', () => {
    assert.equal(
      toMarkdownUrl(
        'https://developer.dynatrace.com/docs/intro/?a=1#top',
        SITE,
      ),
      'https://developer.dynatrace.com/docs/intro.md',
    );
  });

  it('reads the document from the host the sitemap came from', () => {
    // A preview deployment lists the URLs its pages will have once they are published.
    assert.equal(
      toMarkdownUrl(
        'https://developer.dynatrace.com/portal-preview/docs/intro/',
        'https://preview.example.com/portal-preview/',
      ),
      'https://preview.example.com/portal-preview/docs/intro.md',
    );
  });

  it('maps the root of a portal published below a path to its index.md', () => {
    assert.equal(
      toMarkdownUrl(
        'https://developer.dynatrace.com/portal-preview/',
        'https://preview.example.com/portal-preview/',
      ),
      'https://preview.example.com/portal-preview/index.md',
    );
  });
});

describe('toPagePath', () => {
  it('is the location of the document below the site root', () => {
    assert.equal(
      toPagePath('https://developer.dynatrace.com/docs/intro.md', SITE),
      'docs/intro',
    );
  });

  it('leaves the path a portal is published below out of the page path', () => {
    assert.equal(
      toPagePath(
        'https://preview.example.com/portal-preview/docs/intro.md',
        'https://preview.example.com/portal-preview/',
      ),
      'docs/intro',
    );
  });

  it('reports nothing for a URL it cannot read', () => {
    assert.equal(toPagePath('not a url', SITE), undefined);
  });
});

describe('parseSitemap', () => {
  it('returns the markdown URL of every <url> element, sorted', () => {
    const documents = parse(
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
    const documents = parse(
      urlset('<url><loc>https://developer.dynatrace.com/</loc></url>'),
    );

    assert.equal(documents.length, 1);
    assert.equal(documents[0]?.url, 'https://developer.dynatrace.com/index.md');
  });

  it('records a sentinel content hash the download stage replaces', () => {
    const documents = parse(
      urlset('<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>'),
    );

    assert.match(documents[0]?.contentHash ?? '', /^[0-9a-f]{64}$/);
  });

  it('addresses every document on the host the sitemap was read from', () => {
    // A preview of the portal lists the URLs its pages will have in production, which serve nothing yet.
    const documents = parseSitemap(
      urlset('<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>'),
      'https://preview.example.com/sitemap.xml',
    );

    assert.deepEqual(documents, [
      {
        url: 'https://preview.example.com/docs/a.md',
        contentHash: UNKNOWN_CONTENT_HASH,
      },
    ]);
  });

  it('collapses page URLs that map to the same markdown URL', () => {
    const loc = '<url><loc>https://developer.dynatrace.com/docs/a/</loc></url>';

    assert.equal(parse(urlset(loc + loc)).length, 1);
  });

  it('rejects a body that is not XML', () => {
    assert.throws(
      () => parse('<!doctype html><html><body>Not found</body></html>'),
      SitemapError,
    );
  });

  it('rejects a sitemap index', () => {
    assert.throws(
      () =>
        parse(
          '<?xml version="1.0"?><sitemapindex><sitemap><loc>https://developer.dynatrace.com/a.xml</loc></sitemap></sitemapindex>',
        ),
      /nested sitemaps are not supported/,
    );
  });

  it('rejects a urlset without <url> elements', () => {
    assert.throws(() => parse(urlset('')), /no <url> elements/);
  });

  it('rejects a <url> element without <loc>', () => {
    assert.throws(
      () => parse(urlset('<url><changefreq>weekly</changefreq></url>')),
      /element 1 has no <loc> value/,
    );
  });

  it('rejects a malformed <loc> value', () => {
    assert.throws(
      () => parse(urlset('<url><loc>not a url</loc></url>')),
      /malformed <loc> value/,
    );
  });

  it('rejects a non-HTTP <loc> value', () => {
    assert.throws(
      () =>
        parse(urlset('<url><loc>ftp://developer.dynatrace.com/a/</loc></url>')),
      /non-HTTP <loc> value/,
    );
  });

  it('names the offending element when a later <url> is broken', () => {
    assert.throws(
      () =>
        parse(
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
