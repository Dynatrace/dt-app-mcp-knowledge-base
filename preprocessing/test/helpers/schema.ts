import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Ajv2020 } from 'ajv/dist/2020.js';
import { fullFormats } from 'ajv-formats/dist/formats.js';
import type { KnowledgeBaseMetadata } from '../../src/types.ts';

const SCHEMA_PATH = resolve(
  import.meta.dirname,
  '../../../schemas/meta.schema.json',
);

// Taking the formats directly avoids the CommonJS interop of the ajv-formats plugin entrypoint.
const { uri, 'date-time': dateTime } = fullFormats;
const ajv = new Ajv2020({
  allErrors: true,
  formats: { uri, 'date-time': dateTime },
});
const validate = ajv.compile(JSON.parse(readFileSync(SCHEMA_PATH, 'utf8')));

/** Guards the contract between the pipeline and dt-app-mcp against the committed schema. */
export function assertValidMetadata(meta: KnowledgeBaseMetadata): void {
  assert.ok(
    validate(meta),
    ajv.errorsText(validate.errors, { separator: '\n' }),
  );
}
