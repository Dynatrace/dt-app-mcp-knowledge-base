import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import {
  chunkDocument,
  readSourceDocuments,
  writeChunks,
} from '../src/chunking.ts';
import { toPathSlug, toSlug } from '../src/slug.ts';

const doc = (...lines: string[]) => lines.join('\n');

const PAGE = doc(
  '# Request Analysis',
  '',
  'Intro.',
  '',
  '## Request Attributes',
  '',
  'Body.',
  '',
  '## Best Practices',
  '',
  'Advice.',
);

const tempDir = (prefix: string) => mkdtemp(join(tmpdir(), prefix));

describe('chunkDocument', () => {
  it('names every chunk after the page path and the heading slug', () => {
    const { chunks } = chunkDocument({
      pagePath: 'docs/dql/request-analysis',
      markdown: PAGE,
    });

    assert.deepEqual(
      chunks.map((chunk) => chunk.path),
      [
        'docs/docs/dql/request-analysis/index.md',
        'docs/docs/dql/request-analysis/request-attributes.md',
        'docs/docs/dql/request-analysis/best-practices.md',
      ],
    );
  });

  it('keeps a chunk name when a neighbouring section is removed', () => {
    const withoutFirst = PAGE.replace('## Request Attributes\n\nBody.\n\n', '');

    const before = chunkDocument({ pagePath: 'a', markdown: PAGE }).chunks.at(
      -1,
    );
    const after = chunkDocument({
      pagePath: 'a',
      markdown: withoutFirst,
    }).chunks.at(-1);

    assert.equal(before?.path, after?.path);
    assert.equal(after?.path, 'docs/a/best-practices.md');
  });

  it('writes the content above the first main heading to its own chunk', () => {
    const [preamble] = chunkDocument({ pagePath: 'a', markdown: PAGE }).chunks;

    assert.equal(preamble?.heading, undefined);
    assert.equal(preamble?.content, '# Request Analysis\n\nIntro.');
  });

  it('honours the chunk directory it is given', () => {
    const { chunks } = chunkDocument(
      { pagePath: 'a', markdown: PAGE },
      'generated',
    );

    assert.equal(chunks[0]?.path, 'generated/a/index.md');
  });

  it('disambiguates sections that slug to the same name', () => {
    const markdown = doc(
      '## Usage',
      'One.',
      '',
      '## usage',
      'Two.',
      '',
      '## Index',
      'Three.',
    );

    const { chunks } = chunkDocument({ pagePath: 'a', markdown });

    assert.deepEqual(
      chunks.map((chunk) => chunk.path),
      ['docs/a/usage.md', 'docs/a/usage-2.md', 'docs/a/index-2.md'],
    );
  });

  it('falls back to a placeholder when a heading slugs to nothing', () => {
    const { chunks } = chunkDocument({
      pagePath: 'a',
      markdown: doc('## 🚀', 'One.', '', '## ✨', 'Two.'),
    });

    assert.deepEqual(
      chunks.map((chunk) => chunk.path),
      ['docs/a/section.md', 'docs/a/section-2.md'],
    );
  });

  it('reports headings too generic to identify a feature', () => {
    const markdown = doc(
      '# Title',
      '',
      'Intro.',
      '',
      '## Overview',
      'One.',
      '',
      '## Span Attributes',
      'Two.',
    );

    const { genericHeadings } = chunkDocument({ pagePath: 'a', markdown });

    assert.deepEqual(genericHeadings, ['Overview']);
  });
});

describe('readSourceDocuments', () => {
  it('derives a page path from each file location and sorts the result', async () => {
    const root = await tempDir('kb-source-');
    await mkdir(join(root, 'docs', 'dql'), { recursive: true });
    await writeFile(join(root, 'docs', 'dql', 'spans.md'), '# Spans', 'utf8');
    await writeFile(join(root, 'index.md'), '# Home', 'utf8');
    await writeFile(join(root, 'notes.txt'), 'ignored', 'utf8');

    const documents = await readSourceDocuments(root);

    assert.deepEqual(documents, [
      { pagePath: 'docs/dql/spans', markdown: '# Spans' },
      { pagePath: 'index', markdown: '# Home' },
    ]);
  });

  it('fails with a readable error when the directory does not exist', async () => {
    await assert.rejects(
      readSourceDocuments(join(tmpdir(), 'kb-missing-source')),
      /Could not read the source directory/,
    );
  });
});

describe('writeChunks', () => {
  it('writes each chunk under the repository root, creating the directories it needs', async () => {
    const root = await tempDir('kb-chunks-');
    const document = chunkDocument({
      pagePath: 'docs/dql/request-analysis',
      markdown: PAGE,
    });

    await writeChunks(root, [document]);

    const written = await readFile(
      join(root, 'docs/docs/dql/request-analysis/best-practices.md'),
      'utf8',
    );
    assert.equal(written, '## Best Practices\n\nAdvice.\n');
  });
});

describe('toSlug', () => {
  it('drops markdown inline syntax and punctuation', () => {
    assert.equal(
      toSlug('**Bold** and [linked](https://example.com)'),
      'bold-and-linked',
    );
    assert.equal(toSlug('SOAP/Web Services'), 'soap-web-services');
    assert.equal(toSlug('gRPC Analysis'), 'grpc-analysis');
  });

  it('is empty when nothing usable is left', () => {
    assert.equal(toSlug('🚀'), '');
  });
});

describe('toPathSlug', () => {
  it('splits CamelCase so locally authored file names stay readable', () => {
    assert.equal(toPathSlug('RequestAnalysis'), 'request-analysis');
    assert.equal(toPathSlug('RPCSpans'), 'rpc-spans');
  });

  it('leaves the kebab-case paths the portal serves untouched', () => {
    assert.equal(toPathSlug('request-analysis'), 'request-analysis');
  });
});
