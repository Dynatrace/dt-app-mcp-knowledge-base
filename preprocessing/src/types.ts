/** A single document discovered in the developer portal sitemap, addressed by its markdown URL. */
export type SitemapDocument = {
  url: string;
  contentHash: string;
};

/** One `sources` entry of meta.json, where `url` is the markdown document later stages download. */
export type SourceEntry = {
  url: string;
  downloadHash: string;
  downloadedAt: string;
  chunkPaths: string[];
};

/** A document handed to the chunking stage, identified by its portal page path (no origin, no `.md`). */
export type SourceDocument = {
  pagePath: string;
  markdown: string;
};

/** One chunk file, addressed by its repository-relative path as recorded in meta.json and index.json. */
export type Chunk = {
  path: string;
  heading: string | undefined;
  content: string;
};

/** Everything one source document contributed to the knowledge base. */
export type ChunkedDocument = {
  pagePath: string;
  chunks: Chunk[];
  genericHeadings: string[];
};

/** Shape of meta.json as defined by schemas/meta.schema.json. */
export type KnowledgeBaseMetadata = {
  $schema?: string;
  generatedAt: string;
  sources: SourceEntry[];
};
