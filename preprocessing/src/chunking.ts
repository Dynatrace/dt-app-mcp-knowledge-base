import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve, sep } from 'node:path';
import { splitMarkdown } from './markdown.ts';
import { toPathSlug, toSlug } from './slug.ts';
import type { Chunk, ChunkedDocument, SourceDocument } from './types.ts';

/** Chunks live under this repository-relative directory, as meta.json and index.json record them. */
export const DEFAULT_CHUNK_DIR = 'docs';

// Reserved for the content above the first main heading, so a section never takes the name.
const PREAMBLE_SLUG = 'index';

// Fallback for headings that slug to nothing, such as a heading made up entirely of emoji.
const UNNAMED_SLUG = 'section';

/**
 * Headings that name a kind of content instead of a feature. Agents retrieve chunks by name,
 * so these are reported to be fixed at the source rather than silently indexed.
 */
// TODO: Stopgap. Replace with a corpus-derived check once every document is chunked — a slug that
// recurs across many pages is generic by definition, which no hand-written word list can capture.
const GENERIC_HEADINGS = new Set([
  'about',
  'api',
  'basics',
  'best-practices',
  'configuration',
  'description',
  'details',
  'example',
  'examples',
  'faq',
  'getting-started',
  'how-it-works',
  'installation',
  'intro',
  'introduction',
  'limitations',
  'more-information',
  'notes',
  'options',
  'overview',
  'parameters',
  'prerequisites',
  'properties',
  'reference',
  'related-topics',
  'requirements',
  'see-also',
  'setup',
  'summary',
  'troubleshooting',
  'usage',
]);

/**
 * Splits one document into chunk files. Names come from the page path and the heading slug only,
 * so a chunk keeps its name when neighbouring sections are added, removed or reordered.
 */
export function chunkDocument(
  document: SourceDocument,
  chunkDir = DEFAULT_CHUNK_DIR,
): ChunkedDocument {
  const directory = [
    chunkDir,
    ...document.pagePath.split('/').map(toPathSlug).filter(Boolean),
  ].join('/');
  // Reserved even when the document has no preamble, so `index.md` never means two different things.
  const taken = new Set([PREAMBLE_SLUG]);
  const genericHeadings: string[] = [];

  const chunks = splitMarkdown(document.markdown).map<Chunk>((section) => {
    if (section.heading === undefined) {
      // TODO: Candidate for removal. The title and introduction here describe the page rather than
      // a section, so they belong in index.json as every chunk's name and description.
      return {
        path: `${directory}/${PREAMBLE_SLUG}.md`,
        heading: undefined,
        content: section.content,
      };
    }

    const slug = toSlug(section.heading.text) || UNNAMED_SLUG;
    if (GENERIC_HEADINGS.has(slug)) {
      genericHeadings.push(section.heading.text);
    }
    return {
      path: `${directory}/${disambiguate(slug, taken)}.md`,
      heading: section.heading.text,
      content: section.content,
    };
  });

  return { pagePath: document.pagePath, chunks, genericHeadings };
}

/** Reads every markdown file below `directory`, deriving each page path from its location. */
export async function readSourceDocuments(
  directory: string,
): Promise<SourceDocument[]> {
  const root = resolve(directory);
  let entries: string[];
  try {
    entries = await readdir(root, { recursive: true });
  } catch (cause) {
    throw new Error(
      `Could not read the source directory ${root}: ${describe(cause)}`,
      { cause },
    );
  }

  const documents = await Promise.all(
    entries
      .filter((entry) => entry.endsWith('.md'))
      .map(async (entry) => ({
        pagePath: entry.slice(0, -'.md'.length).split(sep).join('/'),
        markdown: await readFile(join(root, entry), 'utf8'),
      })),
  );

  return documents.sort((a, b) => a.pagePath.localeCompare(b.pagePath));
}

/** Writes every chunk below `repositoryRoot`, creating the directories each chunk path implies. */
export async function writeChunks(
  repositoryRoot: string,
  documents: ChunkedDocument[],
): Promise<void> {
  for (const chunk of documents.flatMap((document) => document.chunks)) {
    const path = resolve(repositoryRoot, chunk.path);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, `${chunk.content}\n`, 'utf8');
  }
}

function disambiguate(slug: string, taken: Set<string>): string {
  let candidate = slug;
  for (let suffix = 2; taken.has(candidate); suffix += 1) {
    candidate = `${slug}-${suffix}`;
  }
  taken.add(candidate);
  return candidate;
}

function describe(cause: unknown): string {
  return cause instanceof Error ? cause.message : String(cause);
}
