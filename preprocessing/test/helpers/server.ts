import { createServer, type Server } from 'node:http';
import { once } from 'node:events';
import type { AddressInfo } from 'node:net';

export type SitemapServer = {
  url: string;
  close: () => Promise<void>;
};

/** Serves a canned sitemap response so fetch behaviour can be tested without the real portal. */
export async function startSitemapServer(response: {
  body: string;
  status?: number;
  delayMs?: number;
}): Promise<SitemapServer> {
  const server = createServer((_request, res) => {
    const send = () => {
      res.writeHead(response.status ?? 200, {
        'content-type': 'application/xml',
      });
      res.end(response.body);
    };
    if (response.delayMs === undefined) send();
    else setTimeout(send, response.delayMs).unref();
  });

  return listen(server, '/sitemap.xml');
}

/** What the portal answers for one page: its markdown, or how the request fails instead. */
export type PortalPage =
  string | { body?: string; status?: number; contentType?: string };

export type Portal = SitemapServer & {
  /** The pages the portal serves, keyed by page path. Mutable, so a test can publish a change. */
  pages: Map<string, PortalPage>;
  /** Every markdown path the portal was asked for, in the order the requests arrived. */
  requested: string[];
};

/**
 * Stands in for the developer portal: a sitemap listing every page it was given, and the markdown
 * of each below `<page-path>.md`. A page it does not hold answers 404, as the portal does.
 */
export async function startPortal(
  pages: Record<string, PortalPage>,
  options: { basePath?: string } = {},
): Promise<Portal> {
  const held = new Map(Object.entries(pages));
  const requested: string[] = [];
  const base = options.basePath ?? '/';

  const server = createServer((request, res) => {
    const path = new URL(request.url ?? '/', 'http://portal').pathname;
    if (path === `${base}sitemap.xml`) {
      res.writeHead(200, { 'content-type': 'application/xml' });
      res.end(sitemap([...held.keys()], base));
      return;
    }

    requested.push(path);
    const page =
      path.startsWith(base) && path.endsWith('.md')
        ? held.get(path.slice(base.length, -'.md'.length))
        : undefined;
    if (page === undefined) {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end('<!doctype html><html><body>Not found</body></html>');
      return;
    }

    const response = typeof page === 'string' ? { body: page } : page;
    res.writeHead(response.status ?? 200, {
      'content-type': response.contentType ?? 'text/plain; charset=utf-8',
    });
    res.end(response.body ?? '');
  });

  return {
    ...(await listen(server, `${base}sitemap.xml`)),
    pages: held,
    requested,
  };
}

/** The sitemap the portal serves, which lists page URLs rather than the markdown behind them. */
function sitemap(pagePaths: string[], base: string): string {
  const urls = pagePaths.map(
    (pagePath) =>
      `<url><loc>https://developer.dynatrace.com${base}${pagePath}/</loc></url>`,
  );
  return (
    '<?xml version="1.0" encoding="UTF-8"?>' +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`
  );
}

async function listen(server: Server, path: string): Promise<SitemapServer> {
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const { port } = server.address() as AddressInfo;

  return {
    url: `http://127.0.0.1:${port}${path}`,
    close: async () => {
      server.closeAllConnections();
      server.close();
      await once(server, 'close');
    },
  };
}
