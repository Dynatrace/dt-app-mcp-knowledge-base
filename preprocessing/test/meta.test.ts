import assert from 'node:assert/strict';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  mergeMetadata,
  readMetadata,
  recordChunkPaths,
  toPagePath,
  writeMetadata,
} from '../src/meta.ts';
import { UNKNOWN_CONTENT_HASH } from '../src/sitemap.ts';
import type { ChunkedDocument, KnowledgeBaseMetadata } from '../src/types.ts';
import { assertValidMetadata } from './helpers/schema.ts';

const GENERATED_AT = new Date('2026-09-09T06:00:00.000Z');

const discovered = (path: string) => ({
  url: `https://developer.dynatrace.com${path}.md`,
  contentHash: UNKNOWN_CONTENT_HASH,
});

const unprocessed = (path: string) => ({
  url: `https://developer.dynatrace.com${path}.md`,
  downloadHash: UNKNOWN_CONTENT_HASH,
  downloadedAt: '1970-01-01T00:00:00.000Z',
  chunkPaths: [],
});

const tempFile = async (name: string) =>
  join(await mkdtemp(join(tmpdir(), 'kb-meta-')), name);

describe('mergeMetadata', () => {
  it('records every discovered document with placeholder build fields', () => {
    const { meta, added, removed } = mergeMetadata(
      [discovered('/docs/a'), discovered('/docs/b')],
      undefined,
      GENERATED_AT,
    );

    assert.equal(meta.generatedAt, '2026-09-09T06:00:00.000Z');
    assert.deepEqual(meta.sources, [
      unprocessed('/docs/a'),
      unprocessed('/docs/b'),
    ]);
    assert.deepEqual(added, [
      'https://developer.dynatrace.com/docs/a.md',
      'https://developer.dynatrace.com/docs/b.md',
    ]);
    assert.deepEqual(removed, []);
  });

  it('produces metadata that satisfies meta.schema.json', () => {
    const { meta } = mergeMetadata(
      [discovered('/docs/a'), discovered('/index')],
      undefined,
      GENERATED_AT,
    );

    assertValidMetadata(meta);
  });

  it('gives every document its own chunkPaths array', () => {
    const { meta } = mergeMetadata(
      [discovered('/docs/a'), discovered('/docs/b')],
      undefined,
      GENERATED_AT,
    );

    meta.sources[0]?.chunkPaths.push('docs/docs/a/intro.md');

    assert.deepEqual(meta.sources[1]?.chunkPaths, []);
  });

  it('preserves the download and chunking fields written by later stages', () => {
    const processed = {
      url: 'https://developer.dynatrace.com/docs/a.md',
      downloadHash: 'a'.repeat(64),
      downloadedAt: '2026-09-01T00:00:00.000Z',
      chunkPaths: ['docs/docs/a/intro.md'],
    };
    const previous: KnowledgeBaseMetadata = {
      generatedAt: '2026-09-01T00:00:00.000Z',
      sources: [processed],
    };

    const { meta, added } = mergeMetadata(
      [discovered('/docs/a')],
      previous,
      GENERATED_AT,
    );

    assert.deepEqual(meta.sources, [processed]);
    assert.deepEqual(added, []);
  });

  it('takes a real content hash from discovery over the recorded one', () => {
    const previous: KnowledgeBaseMetadata = {
      generatedAt: '2026-09-01T00:00:00.000Z',
      sources: [{ ...unprocessed('/docs/a'), downloadHash: 'a'.repeat(64) }],
    };
    const document = { ...discovered('/docs/a'), contentHash: 'b'.repeat(64) };

    const { meta } = mergeMetadata([document], previous, GENERATED_AT);

    assert.equal(meta.sources[0]?.downloadHash, 'b'.repeat(64));
  });

  it('reports documents that are new and documents the sitemap no longer lists', () => {
    const previous: KnowledgeBaseMetadata = {
      generatedAt: '2026-09-01T00:00:00.000Z',
      sources: [unprocessed('/docs/a'), unprocessed('/docs/gone')],
    };

    const { meta, added, removed } = mergeMetadata(
      [discovered('/docs/a'), discovered('/docs/new')],
      previous,
      GENERATED_AT,
    );

    assert.deepEqual(added, ['https://developer.dynatrace.com/docs/new.md']);
    assert.deepEqual(removed, ['https://developer.dynatrace.com/docs/gone.md']);
    assert.deepEqual(
      meta.sources.map((source) => source.url),
      [
        'https://developer.dynatrace.com/docs/a.md',
        'https://developer.dynatrace.com/docs/new.md',
      ],
    );
  });
});

const chunked = (pagePath: string, ...paths: string[]): ChunkedDocument => ({
  pagePath,
  title: pagePath,
  description: undefined,
  chunks: paths.map((path) => ({
    path,
    heading: undefined,
    content: '',
    name: pagePath,
    description: '',
  })),
  genericHeadings: [],
  weakDescriptions: [],
});

describe('recordChunkPaths', () => {
  it('records the chunks of each document on its source entry', () => {
    const previous: KnowledgeBaseMetadata = {
      generatedAt: '2026-09-01T00:00:00.000Z',
      sources: [unprocessed('/docs/a'), unprocessed('/docs/b')],
    };

    const { meta, unmatched } = recordChunkPaths(
      previous,
      [chunked('docs/a', 'docs/docs/a/index.md', 'docs/docs/a/usage.md')],
      GENERATED_AT,
    );

    assert.deepEqual(meta.sources[0]?.chunkPaths, [
      'docs/docs/a/index.md',
      'docs/docs/a/usage.md',
    ]);
    assert.deepEqual(meta.sources[1]?.chunkPaths, []);
    assert.deepEqual(unmatched, []);
    assertValidMetadata(meta);
  });

  it('replaces the chunk paths of an earlier run instead of adding to them', () => {
    const previous: KnowledgeBaseMetadata = {
      generatedAt: '2026-09-01T00:00:00.000Z',
      sources: [
        { ...unprocessed('/docs/a'), chunkPaths: ['docs/docs/a/gone.md'] },
      ],
    };

    const { meta } = recordChunkPaths(
      previous,
      [chunked('docs/a', 'docs/docs/a/index.md')],
      GENERATED_AT,
    );

    assert.deepEqual(meta.sources[0]?.chunkPaths, ['docs/docs/a/index.md']);
  });

  it('matches on page path, so the origin a document came from does not have to agree', () => {
    const previous: KnowledgeBaseMetadata = {
      generatedAt: '2026-09-01T00:00:00.000Z',
      sources: [
        {
          ...unprocessed('/docs/a'),
          url: 'https://developer.dynatracelabs.com/docs/a.md',
        },
      ],
    };

    const { meta, unmatched } = recordChunkPaths(
      previous,
      [chunked('docs/a', 'docs/docs/a/index.md')],
      GENERATED_AT,
    );

    assert.deepEqual(meta.sources[0]?.chunkPaths, ['docs/docs/a/index.md']);
    assert.deepEqual(unmatched, []);
  });

  it('reports documents that no source entry claims', () => {
    const previous: KnowledgeBaseMetadata = {
      generatedAt: '2026-09-01T00:00:00.000Z',
      sources: [unprocessed('/docs/a')],
    };

    const { unmatched } = recordChunkPaths(
      previous,
      [chunked('RequestAnalysis', 'docs/request-analysis/index.md')],
      GENERATED_AT,
    );

    assert.deepEqual(unmatched, ['RequestAnalysis']);
  });

  it('leaves the download fields of every source untouched', () => {
    const processed = {
      url: 'https://developer.dynatrace.com/docs/a.md',
      downloadHash: 'a'.repeat(64),
      downloadedAt: '2026-09-01T00:00:00.000Z',
      chunkPaths: [],
    };
    const previous: KnowledgeBaseMetadata = {
      generatedAt: '2026-09-01T00:00:00.000Z',
      sources: [processed],
    };

    const { meta } = recordChunkPaths(
      previous,
      [chunked('docs/a', 'docs/docs/a/index.md')],
      GENERATED_AT,
    );

    assert.equal(meta.sources[0]?.downloadHash, 'a'.repeat(64));
    assert.equal(meta.sources[0]?.downloadedAt, '2026-09-01T00:00:00.000Z');
  });
});

describe('toPagePath', () => {
  it('reduces a document URL to the path the chunking stage addresses it by', () => {
    assert.equal(
      toPagePath('https://developer.dynatrace.com/docs/a.md'),
      'docs/a',
    );
    assert.equal(
      toPagePath('https://developer.dynatrace.com/index.md'),
      'index',
    );
  });

  it('has no page path for a value that is not a URL', () => {
    assert.equal(toPagePath('docs/a.md'), undefined);
  });
});

describe('readMetadata', () => {
  it('returns undefined when meta.json does not exist yet', async () => {
    assert.equal(await readMetadata(await tempFile('meta.json')), undefined);
  });

  it('round-trips a written file', async () => {
    const path = await tempFile('meta.json');
    const { meta } = mergeMetadata(
      [discovered('/docs/a')],
      undefined,
      GENERATED_AT,
    );

    await writeMetadata(path, meta);

    assert.deepEqual(await readMetadata(path), meta);
  });

  it('fails with a readable error on a corrupt file', async () => {
    const path = await tempFile('meta.json');
    await writeFile(path, '{ not json', 'utf8');

    await assert.rejects(
      readMetadata(path),
      /is not valid JSON, fix or delete it/,
    );
  });
});
