import { readFileSync } from 'node:fs';
import { access, writeFile } from 'node:fs/promises';
import { relative, resolve, sep } from 'node:path';
import { Ajv2020 } from 'ajv/dist/2020.js';
import type { ErrorObject } from 'ajv';
import type {
  ChunkEntry,
  ChunkedDocument,
  KnowledgeBaseIndex,
} from './types.ts';

/** The one file dt-app-mcp starts from, at the repository root next to the chunks it points at. */
export const DEFAULT_INDEX_PATH = 'index.json';

const SCHEMA_URL =
  'https://raw.githubusercontent.com/dynatrace/dt-app-mcp-knowledge-base/main/schemas/index.schema.json';

// The committed schema is the contract, so a run validates against that file rather than a copy.
const SCHEMA_PATH = resolve(
  import.meta.dirname,
  '../../schemas/index.schema.json',
);

const ajv = new Ajv2020({ allErrors: true });
const validate = ajv.compile<KnowledgeBaseIndex>(
  JSON.parse(readFileSync(SCHEMA_PATH, 'utf8')),
);

/** Collects one index entry per chunk, in the order the documents were read and split. */
export function buildIndex(
  repositoryRoot: string,
  documents: ChunkedDocument[],
): KnowledgeBaseIndex {
  return {
    $schema: SCHEMA_URL,
    chunks: documents.flatMap((document) =>
      document.chunks.map<ChunkEntry>((chunk) => ({
        name: chunk.name,
        description: chunk.description,
        path: toEntryPath(repositoryRoot, chunk.path),
      })),
    ),
  };
}

/**
 * Validates the index against its schema, naming the chunk behind every violation rather than
 * its position, which says nothing about the document that has to be fixed.
 */
export function validateIndex(index: KnowledgeBaseIndex): string[] {
  if (validate(index)) {
    return [];
  }
  return (validate.errors ?? []).map((error) =>
    describeViolation(index, error),
  );
}

/** Reports every entry whose chunk file is missing, so no consumer resolves a dangling path. */
export async function findMissingChunks(
  repositoryRoot: string,
  index: KnowledgeBaseIndex,
): Promise<string[]> {
  const checked = await Promise.all(
    index.chunks.map(async (chunk) => {
      try {
        await access(resolve(repositoryRoot, chunk.path));
        return [];
      } catch {
        return [chunk.path];
      }
    }),
  );
  return checked.flat();
}

export async function writeIndex(
  path: string,
  index: KnowledgeBaseIndex,
): Promise<void> {
  await writeFile(path, `${JSON.stringify(index, undefined, 2)}\n`, 'utf8');
}

// The schema records paths relative to the repository root, whatever --chunk-dir was given.
function toEntryPath(repositoryRoot: string, path: string): string {
  return relative(repositoryRoot, resolve(repositoryRoot, path))
    .split(sep)
    .join('/');
}

function describeViolation(
  index: KnowledgeBaseIndex,
  error: ErrorObject,
): string {
  const [, , position, field] = error.instancePath.split('/');
  const entry = position ? index.chunks[Number(position)] : undefined;
  const subject = entry?.path || entry?.name || DEFAULT_INDEX_PATH;
  return `${subject}: ${field || 'entry'} ${error.message}`;
}
