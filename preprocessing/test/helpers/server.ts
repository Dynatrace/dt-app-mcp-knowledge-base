import { createServer } from 'node:http';
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

  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const { port } = server.address() as AddressInfo;

  return {
    url: `http://127.0.0.1:${port}/sitemap.xml`,
    close: async () => {
      server.closeAllConnections();
      server.close();
      await once(server, 'close');
    },
  };
}
