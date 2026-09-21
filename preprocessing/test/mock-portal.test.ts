import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { describe, it } from 'node:test';
import { mockContentHashes } from '../src/mock-portal.ts';
import { UNKNOWN_CONTENT_HASH } from '../src/sitemap.ts';

const discovered = (path: string) => ({
  url: `https://developer.dynatrace.com${path}.md`,
  contentHash: UNKNOWN_CONTENT_HASH,
});

const sha256 = (content: string) =>
  createHash('sha256').update(content, 'utf8').digest('hex');

describe('mockContentHashes', () => {
  it('hashes the document the source directory holds for a page', () => {
    const hashed = mockContentHashes(
      [discovered('/docs/a')],
      [{ pagePath: 'docs/a', markdown: '# Page A' }],
    );

    assert.equal(hashed[0]?.contentHash, sha256('# Page A'));
  });

  it('changes the hash of a page as soon as its document changes', () => {
    const [first] = mockContentHashes(
      [discovered('/docs/a')],
      [{ pagePath: 'docs/a', markdown: '# Page A' }],
    );
    const [second] = mockContentHashes(
      [discovered('/docs/a')],
      [{ pagePath: 'docs/a', markdown: '# Page A, rewritten' }],
    );

    assert.notEqual(first?.contentHash, second?.contentHash);
  });

  it('leaves the discovery sentinel on a page the source directory has nothing for', () => {
    const hashed = mockContentHashes(
      [discovered('/docs/a')],
      [{ pagePath: 'docs/elsewhere', markdown: '# Elsewhere' }],
    );

    assert.equal(hashed[0]?.contentHash, UNKNOWN_CONTENT_HASH);
  });
});
