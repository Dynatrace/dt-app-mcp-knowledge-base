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

/** Shape of meta.json as defined by schemas/meta.schema.json. */
export type KnowledgeBaseMetadata = {
  $schema?: string;
  generatedAt: string;
  sources: SourceEntry[];
};
