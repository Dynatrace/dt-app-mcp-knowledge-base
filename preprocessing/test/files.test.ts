import assert from 'node:assert/strict';
import { mkdtemp, readFile, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { readIfPresent, writeIfChanged } from '../src/files.ts';

const tempFile = async (name = 'file.md') =>
  join(await mkdtemp(join(tmpdir(), 'kb-files-')), name);

describe('readIfPresent', () => {
  it('reads a file that is there', async () => {
    const path = await tempFile();
    await writeFile(path, 'Body.', 'utf8');

    assert.equal(await readIfPresent(path), 'Body.');
  });

  it('reads nothing at all from a file that is not', async () => {
    assert.equal(await readIfPresent(await tempFile()), undefined);
  });
});

describe('writeIfChanged', () => {
  it('writes a file that does not exist yet, creating the directories it needs', async () => {
    const path = join(await mkdtemp(join(tmpdir(), 'kb-files-')), 'a/b.md');

    assert.equal(await writeIfChanged(path, 'Body.\n'), true);
    assert.equal(await readFile(path, 'utf8'), 'Body.\n');
  });

  it('leaves a file that already holds the content untouched', async () => {
    const path = await tempFile();
    await writeIfChanged(path, 'Body.\n');
    const { mtimeMs } = await stat(path);

    assert.equal(await writeIfChanged(path, 'Body.\n'), false);
    assert.equal((await stat(path)).mtimeMs, mtimeMs);
  });

  it('writes a file whose content differs', async () => {
    const path = await tempFile();
    await writeIfChanged(path, 'Body.\n');

    assert.equal(await writeIfChanged(path, 'Another body.\n'), true);
    assert.equal(await readFile(path, 'utf8'), 'Another body.\n');
  });
});
