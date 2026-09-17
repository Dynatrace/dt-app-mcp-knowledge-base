import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { describe, it } from 'node:test';
import {
  buildIndex,
  findMissingChunks,
  validateIndex,
  writeIndex,
} from '../src/indexing.ts';
import type {
  Chunk,
  ChunkedDocument,
  KnowledgeBaseIndex,
} from '../src/types.ts';

const REPOSITORY_ROOT = '/repo';

const chunk = (path: string, name: string): Chunk => ({
  path,
  heading: name,
  content: `## ${name}\n\nBody.`,
  name: `Request Analysis: ${name}`,
  description: `Everything about ${name.toLowerCase()}.`,
});

const document = (pagePath: string, chunks: Chunk[]): ChunkedDocument => ({
  pagePath,
  title: 'Request Analysis',
  description: 'Intro.',
  chunks,
  genericHeadings: [],
  weakDescriptions: [],
});

const DOCUMENTS = [
  document('docs/a', [
    chunk('docs/docs/a/request-attributes.md', 'Request Attributes'),
    chunk('docs/docs/a/span-attributes.md', 'Span Attributes'),
  ]),
  document('docs/b', [chunk('docs/docs/b/index.md', 'Overview')]),
];

const tempDir = (prefix: string) => mkdtemp(join(tmpdir(), prefix));

describe('buildIndex', () => {
  it('carries the name, description and path of every chunk', () => {
    const index = buildIndex(REPOSITORY_ROOT, DOCUMENTS);

    assert.deepEqual(index.chunks, [
      {
        name: 'Request Analysis: Request Attributes',
        description: 'Everything about request attributes.',
        path: 'docs/docs/a/request-attributes.md',
      },
      {
        name: 'Request Analysis: Span Attributes',
        description: 'Everything about span attributes.',
        path: 'docs/docs/a/span-attributes.md',
      },
      {
        name: 'Request Analysis: Overview',
        description: 'Everything about overview.',
        path: 'docs/docs/b/index.md',
      },
    ]);
  });

  it('points at the committed schema, so the file says what it has to satisfy', () => {
    const index = buildIndex(REPOSITORY_ROOT, DOCUMENTS);

    assert.match(index.$schema ?? '', /\/schemas\/index\.schema\.json$/);
  });

  it('records paths relative to the repository root, whatever chunk directory was used', () => {
    const index = buildIndex(REPOSITORY_ROOT, [
      document('docs/a', [
        chunk('/repo/out/docs/a/attributes.md', 'Attributes'),
      ]),
    ]);

    assert.equal(index.chunks[0]?.path, 'out/docs/a/attributes.md');
  });

  it('produces an index that satisfies index.schema.json', () => {
    assert.deepEqual(validateIndex(buildIndex(REPOSITORY_ROOT, DOCUMENTS)), []);
  });
});

describe('validateIndex', () => {
  const invalid = (entry: Partial<KnowledgeBaseIndex['chunks'][number]>) =>
    validateIndex({
      chunks: [
        {
          name: 'Request Analysis: Request Attributes',
          description: 'Everything about request attributes.',
          path: 'docs/docs/a/request-attributes.md',
          ...entry,
        },
      ],
    });

  it('names the offending chunk rather than its position in the index', () => {
    const violations = invalid({ description: '' });

    assert.deepEqual(violations, [
      'docs/docs/a/request-attributes.md: description must NOT have fewer than 1 characters',
    ]);
  });

  it('rejects a path that would resolve outside the knowledge base', () => {
    const violations = invalid({ path: '/etc/passwd' });

    assert.equal(violations.length, 1);
    assert.match(
      violations[0] ?? '',
      /^\/etc\/passwd: path must match pattern/,
    );
  });

  it('falls back to the index file when a violation belongs to no entry', () => {
    const violations = validateIndex({
      chunks: [],
      extra: true,
    } as unknown as KnowledgeBaseIndex);

    assert.equal(violations.length, 1);
    assert.match(violations[0] ?? '', /^index\.json: entry must NOT have/);
  });
});

describe('findMissingChunks', () => {
  it('reports every entry whose chunk file was not written', async () => {
    const root = await tempDir('kb-index-');
    const present = join(root, 'docs/a/attributes.md');
    await mkdir(dirname(present), { recursive: true });
    await writeFile(present, '## Attributes\n', 'utf8');

    const missing = await findMissingChunks(root, {
      chunks: [
        { name: 'A', description: 'A.', path: 'docs/a/attributes.md' },
        { name: 'B', description: 'B.', path: 'docs/a/gone.md' },
      ],
    });

    assert.deepEqual(missing, ['docs/a/gone.md']);
  });
});

describe('writeIndex', () => {
  it('writes formatted JSON with a trailing newline', async () => {
    const path = join(await tempDir('kb-index-'), 'index.json');
    const index = buildIndex(REPOSITORY_ROOT, DOCUMENTS);

    await writeIndex(path, index);

    const raw = await readFile(path, 'utf8');
    assert.ok(raw.endsWith('}\n'));
    assert.deepEqual(JSON.parse(raw), index);
  });
});
