import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, it } from 'node:test';
import { Ajv2020 } from 'ajv/dist/2020.js';
import { fullFormats } from 'ajv-formats/dist/formats.js';

const ROOT = resolve(import.meta.dirname, '../..');

function readJson(path: string): object {
  return JSON.parse(readFileSync(resolve(ROOT, path), 'utf8')) as object;
}

// Taking the formats directly avoids the CommonJS interop of the ajv-formats plugin entrypoint.
const { uri, 'date-time': dateTime } = fullFormats;

// A fresh instance per schema, since Ajv rejects a second schema with the same $id
function compile(path: string) {
  const ajv = new Ajv2020({
    allErrors: true,
    formats: { uri, 'date-time': dateTime },
  });
  return { ajv, validate: ajv.compile(readJson(path)) };
}

describe('committed JSON', () => {
  for (const schema of [
    'schemas/index.schema.json',
    'schemas/meta.schema.json',
  ]) {
    it(`${schema} is a valid JSON Schema`, () => {
      assert.doesNotThrow(() => compile(schema));
    });
  }

  it('meta.json satisfies meta.schema.json', () => {
    const { ajv, validate } = compile('schemas/meta.schema.json');
    assert.ok(
      validate(readJson('meta.json')),
      ajv.errorsText(validate.errors, { separator: '\n' }),
    );
  });
});
