import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

/** Reads a file, or nothing at all when it does not exist yet. */
export async function readIfPresent(path: string): Promise<string | undefined> {
  try {
    return await readFile(path, 'utf8');
  } catch (cause) {
    if ((cause as NodeJS.ErrnoException).code === 'ENOENT') {
      return undefined;
    }
    throw cause;
  }
}

/**
 * Writes only what a file does not already hold and reports whether it did, so a nightly run
 * that produced the same knowledge base leaves every file, and the diff, untouched.
 */
export async function writeIfChanged(
  path: string,
  content: string,
): Promise<boolean> {
  if ((await readIfPresent(path)) === content) {
    return false;
  }

  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, 'utf8');
  return true;
}
