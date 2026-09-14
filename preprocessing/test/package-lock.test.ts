import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, it } from 'node:test';

const LOCK_PATH = resolve(import.meta.dirname, '../package-lock.json');
const PUBLIC_REGISTRY = 'https://registry.npmjs.org/';

type Lockfile = { packages: Record<string, { resolved?: string }> };

describe('package-lock.json', () => {
  it('resolves every package from the public npm registry', () => {
    const lock = JSON.parse(readFileSync(LOCK_PATH, 'utf8')) as Lockfile;

    const unreachable = Object.entries(lock.packages).flatMap(
      ([name, entry]) =>
        entry.resolved === undefined ||
        entry.resolved.startsWith(PUBLIC_REGISTRY)
          ? []
          : [`  ${name} -> ${new URL(entry.resolved).host}`],
    );

    assert.deepEqual(
      unreachable,
      [],
      `package-lock.json resolves packages from a registry CI cannot reach:\n${unreachable.join('\n')}\n\n` +
        'Regenerate the lockfile as described in preprocessing/README.md.',
    );
  });
});
