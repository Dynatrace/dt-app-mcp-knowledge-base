import assert from 'node:assert/strict';
import { access, mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { describe, it } from 'node:test';
import { chunkDocument } from '../src/chunking.ts';
import { UNKNOWN_CONTENT_HASH } from '../src/sitemap.ts';
import {
  applyChunks,
  planChunks,
  planDocuments,
  touchesChunks,
  type UpdateContext,
} from '../src/update.ts';
import type {
  ChunkedDocument,
  KnowledgeBaseIndex,
  KnowledgeBaseMetadata,
  SourceDocument,
} from '../src/types.ts';

const PAGE = [
  '# Request Analysis',
  '',
  'Intro.',
  '',
  '## Request Attributes',
  '',
  'The attributes a request carries.',
  '',
  '## Best Practices',
  '',
  'Advice worth following.',
].join('\n');

const HASH = 'a'.repeat(64);

const SITE = 'https://developer.dynatrace.com/';

const tempDir = (prefix: string) => mkdtemp(join(tmpdir(), prefix));

const source = (pagePath = 'docs/a', markdown = PAGE): SourceDocument => ({
  pagePath,
  markdown,
});

const recorded = (
  pagePath: string,
  downloadHash: string,
  chunkPaths: string[],
): KnowledgeBaseMetadata => ({
  generatedAt: '2026-09-01T00:00:00.000Z',
  sources: [
    {
      url: `https://developer.dynatrace.com/${pagePath}.md`,
      downloadHash,
      downloadedAt: '2026-09-01T00:00:00.000Z',
      chunkPaths,
    },
  ],
});

const indexed = (...paths: string[]): KnowledgeBaseIndex => ({
  chunks: paths.map((path) => ({
    name: `Name of ${path}`,
    description: `Description of ${path}`,
    path,
  })),
});

/** A context whose previous and current run agree, which is the unchanged case every test varies. */
function context(
  repositoryRoot: string,
  options: Partial<UpdateContext> = {},
): UpdateContext {
  const previousMeta = recorded('docs/a', HASH, ['docs/docs/a/intro.md']);
  return {
    repositoryRoot,
    previousMeta,
    previousIndex: indexed('docs/docs/a/intro.md'),
    currentMeta: previousMeta,
    siteRoot: SITE,
    force: false,
    ...options,
  };
}

/** Puts a chunk file where the recorded chunk path says it is, so it can be carried over. */
async function existingChunk(root: string, path: string, content = 'Body.\n') {
  const file = join(root, path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content, 'utf8');
  return file;
}

describe('planDocuments', () => {
  it('splits a document no earlier run recorded', async () => {
    const plan = await planDocuments([source()], {
      ...context(await tempDir('kb-update-')),
      previousMeta: undefined,
      previousIndex: undefined,
    });

    assert.deepEqual(plan.added, ['docs/a']);
    assert.deepEqual(plan.changed, []);
    assert.deepEqual(plan.unchanged, []);
    assert.equal(plan.process.length, 1);
    assert.deepEqual(plan.reused, []);
  });

  it('splits a document whose content hash no longer matches the recorded one', async () => {
    const root = await tempDir('kb-update-');
    await existingChunk(root, 'docs/docs/a/intro.md');

    const plan = await planDocuments([source()], {
      ...context(root),
      currentMeta: recorded('docs/a', 'b'.repeat(64), ['docs/docs/a/intro.md']),
    });

    assert.deepEqual(plan.changed, ['docs/a']);
    assert.equal(plan.process.length, 1);
    assert.deepEqual(plan.reused, []);
  });

  it('carries over the chunks of a document whose content hash is unchanged', async () => {
    const root = await tempDir('kb-update-');
    await existingChunk(root, 'docs/docs/a/intro.md');

    const plan = await planDocuments([source()], context(root));

    assert.deepEqual(plan.unchanged, ['docs/a']);
    assert.deepEqual(plan.process, []);
    assert.deepEqual(plan.reused[0]?.chunks, [
      {
        path: 'docs/docs/a/intro.md',
        heading: undefined,
        content: undefined,
        name: 'Name of docs/docs/a/intro.md',
        description: 'Description of docs/docs/a/intro.md',
      },
    ]);
  });

  it('splits an unchanged document again when a rebuild is forced', async () => {
    const root = await tempDir('kb-update-');
    await existingChunk(root, 'docs/docs/a/intro.md');

    const plan = await planDocuments([source()], {
      ...context(root),
      force: true,
    });

    // The content did not change; only the work this run does.
    assert.deepEqual(plan.unchanged, ['docs/a']);
    assert.equal(plan.process.length, 1);
    assert.deepEqual(plan.reused, []);
  });

  it('splits an unchanged document again when a chunk file went missing', async () => {
    const plan = await planDocuments(
      [source()],
      context(await tempDir('kb-update-')),
    );

    assert.deepEqual(plan.unchanged, ['docs/a']);
    assert.equal(plan.process.length, 1);
  });

  it('splits an unchanged document again when the index lost its entry', async () => {
    const root = await tempDir('kb-update-');
    await existingChunk(root, 'docs/docs/a/intro.md');

    const plan = await planDocuments([source()], {
      ...context(root),
      previousIndex: indexed('docs/docs/a/somewhere-else.md'),
    });

    assert.equal(plan.process.length, 1);
  });

  it('cannot tell a document apart from a changed one without a real hash', async () => {
    const root = await tempDir('kb-update-');
    await existingChunk(root, 'docs/docs/a/intro.md');
    const meta = recorded('docs/a', UNKNOWN_CONTENT_HASH, [
      'docs/docs/a/intro.md',
    ]);

    const plan = await planDocuments([source()], {
      ...context(root),
      previousMeta: meta,
      currentMeta: meta,
    });

    assert.deepEqual(plan.changed, ['docs/a']);
    assert.equal(plan.process.length, 1);
  });

  it('carries the chunks of a page the download stage had nothing for over', async () => {
    const root = await tempDir('kb-update-');
    await existingChunk(root, 'docs/docs/a/intro.md');

    // The page is still listed, so it keeps its chunks rather than dropping out of the corpus.
    const plan = await planDocuments([], context(root));

    assert.deepEqual(plan.process, []);
    assert.deepEqual(plan.added, []);
    assert.deepEqual(plan.changed, []);
    assert.deepEqual(plan.unchanged, []);
    assert.equal(plan.reused[0]?.pagePath, 'docs/a');
    assert.deepEqual(
      plan.reused[0]?.chunks.map((chunk) => chunk.path),
      ['docs/docs/a/intro.md'],
    );
  });

  it('has nothing to carry over for a page whose chunk file is gone', async () => {
    const plan = await planDocuments([], context(await tempDir('kb-update-')));

    assert.deepEqual(plan.reused, []);
  });

  it('has nothing to carry over for a page no earlier run recorded', async () => {
    const plan = await planDocuments([], {
      ...context(await tempDir('kb-update-')),
      previousMeta: undefined,
      previousIndex: undefined,
    });

    assert.deepEqual(plan.reused, []);
  });

  it('carries over a document that produced no chunks at all', async () => {
    const root = await tempDir('kb-update-');

    const plan = await planDocuments([source()], {
      ...context(root),
      previousMeta: recorded('docs/a', HASH, []),
      currentMeta: recorded('docs/a', HASH, []),
    });

    assert.deepEqual(plan.unchanged, ['docs/a']);
    assert.deepEqual(plan.process, []);
    assert.deepEqual(plan.reused[0]?.chunks, []);
  });
});

const split = (chunkDir: string, markdown = PAGE): ChunkedDocument =>
  chunkDocument({ pagePath: 'docs/a', markdown }, chunkDir);

describe('planChunks', () => {
  it('counts every chunk as added when the chunk directory is empty', async () => {
    const root = await tempDir('kb-chunks-');

    const update = await planChunks(root, 'docs', [split('docs')]);

    assert.equal(update.added.length, 2);
    assert.deepEqual(update.changed, []);
    assert.deepEqual(update.unchanged, []);
    assert.deepEqual(update.removed, []);
    assert.equal(touchesChunks(update), true);
  });

  it('leaves every chunk alone when the files already hold what the run produced', async () => {
    const root = await tempDir('kb-chunks-');
    const documents = [split('docs')];
    await applyChunks(root, 'docs', await planChunks(root, 'docs', documents));

    const update = await planChunks(root, 'docs', documents);

    assert.deepEqual(update.added, []);
    assert.deepEqual(update.changed, []);
    assert.equal(update.unchanged.length, 2);
    assert.equal(touchesChunks(update), false);
  });

  it('reports a chunk whose content changed', async () => {
    const root = await tempDir('kb-chunks-');
    await applyChunks(
      root,
      'docs',
      await planChunks(root, 'docs', [split('docs')]),
    );

    const update = await planChunks(root, 'docs', [
      split('docs', PAGE.replace('Advice worth following.', 'New advice.')),
    ]);

    assert.equal(update.changed.length, 1);
    assert.equal(update.unchanged.length, 1);
  });

  it('reports a chunk file the run no longer produces', async () => {
    const root = await tempDir('kb-chunks-');
    await existingChunk(root, 'docs/docs/a/gone.md');

    const update = await planChunks(root, 'docs', [split('docs')]);

    assert.deepEqual(update.removed, ['docs/docs/a/gone.md']);
  });

  it('never reads the file behind a chunk carried over from an earlier run', async () => {
    const root = await tempDir('kb-chunks-');
    await existingChunk(root, 'docs/docs/a/intro.md', 'Whatever it holds.\n');
    const carried: ChunkedDocument = {
      pagePath: 'docs/a',
      title: undefined,
      description: undefined,
      chunks: [
        {
          path: 'docs/docs/a/intro.md',
          heading: undefined,
          content: undefined,
          name: 'Intro',
          description: 'Description.',
        },
      ],
      genericHeadings: [],
      weakDescriptions: [],
    };

    const update = await planChunks(root, 'docs', [carried]);

    assert.equal(update.unchanged.length, 1);
    assert.deepEqual(update.removed, []);
  });
});

describe('applyChunks', () => {
  it('writes each chunk under the repository root, creating the directories it needs', async () => {
    const root = await tempDir('kb-chunks-');
    const documents = [
      chunkDocument({ pagePath: 'docs/dql/request-analysis', markdown: PAGE }),
    ];

    await applyChunks(root, 'docs', await planChunks(root, 'docs', documents));

    assert.equal(
      await readFile(
        join(root, 'docs/docs/dql/request-analysis/best-practices.md'),
        'utf8',
      ),
      '## Best Practices\n\nAdvice worth following.\n',
    );
  });

  it('deletes the chunks the run no longer produces, and the directories they emptied', async () => {
    const root = await tempDir('kb-chunks-');
    await existingChunk(root, 'docs/docs/gone/intro.md');

    await applyChunks(
      root,
      'docs',
      await planChunks(root, 'docs', [split('docs')]),
    );

    await assert.rejects(access(join(root, 'docs/docs/gone/intro.md')));
    await assert.rejects(access(join(root, 'docs/docs/gone')));
    // The chunk directory itself stays, whatever is left below it.
    await access(join(root, 'docs'));
  });

  it('leaves a chunk file untouched when its content did not change', async () => {
    const root = await tempDir('kb-chunks-');
    const documents = [split('docs')];
    await applyChunks(root, 'docs', await planChunks(root, 'docs', documents));
    const path = join(root, 'docs/docs/a/best-practices.md');
    const before = await readFile(path, 'utf8');

    await applyChunks(root, 'docs', await planChunks(root, 'docs', documents));

    assert.equal(await readFile(path, 'utf8'), before);
  });
});
