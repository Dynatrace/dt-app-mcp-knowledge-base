import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  DESCRIPTION_LIMIT,
  describeSection,
  describeWeakness,
  holdsOnlyTitleAndIntro,
  nameChunk,
  pageTitle,
} from '../src/summary.ts';

const doc = (...lines: string[]) => lines.join('\n');

describe('pageTitle', () => {
  it('takes the title heading of the document', () => {
    const markdown = doc(
      '# Request Analysis',
      '',
      'Intro.',
      '',
      '## Request Attributes',
      'Body.',
    );

    assert.equal(
      pageTitle({ pagePath: 'docs/RequestAnalysis', markdown }),
      'Request Analysis',
    );
  });

  it('drops markdown inline syntax from the title', () => {
    const markdown = doc('# `DataTable`', '', '## Columns', 'Body.');

    assert.equal(pageTitle({ pagePath: 'a', markdown }), 'DataTable');
  });

  it('humanises the file name when the document opens straight into its sections', () => {
    const markdown = doc('## Key Attributes', 'One.', '', '## Traffic', 'Two.');

    assert.equal(
      pageTitle({ pagePath: 'docs/dql/RPCSpans', markdown }),
      'Rpc Spans',
    );
  });
});

describe('nameChunk', () => {
  it('carries the page context plus the heading', () => {
    assert.equal(
      nameChunk('RPC Span Analysis', 'Key Attributes'),
      'RPC Span Analysis: Key Attributes',
    );
  });

  it('is the page title alone for the content above the first main heading', () => {
    assert.equal(
      nameChunk('RPC Span Analysis', undefined),
      'RPC Span Analysis',
    );
  });

  it('does not repeat the page title when the heading says the same', () => {
    assert.equal(
      nameChunk('RPC Span Analysis', 'RPC span analysis'),
      'RPC Span Analysis',
    );
  });
});

describe('describeSection', () => {
  it('takes the paragraph below the heading', () => {
    const section = doc(
      '## Request Attributes',
      '',
      'Attributes appear on request root spans.',
      '',
      '```dql',
      'fetch spans',
      '```',
    );

    assert.equal(
      describeSection(section),
      'Attributes appear on request root spans.',
    );
  });

  it('keeps list items apart so each stays a term to match on', () => {
    const section = doc(
      '## Key Attributes',
      '',
      '- `rpc.system`: framework',
      '- `rpc.method`: method invoked',
    );

    assert.equal(
      describeSection(section),
      'rpc.system: framework; rpc.method: method invoked',
    );
  });

  it('keeps the underscores of an attribute name', () => {
    const section = doc(
      '## Request Roots',
      '',
      'Filter on `request.is_root_span` to find them.',
    );

    assert.equal(
      describeSection(section),
      'Filter on request.is_root_span to find them.',
    );
  });

  it('lists the subsections of a section that opens straight into them', () => {
    const section = doc(
      '## Performance',
      '',
      '### RPC Latency',
      '',
      'Chart it:',
      '',
      '### Slow Calls',
      '',
      'Find them.',
    );

    assert.equal(describeSection(section), 'RPC Latency; Slow Calls');
  });

  it('drops the colon that introduces a code block', () => {
    const section = doc(
      '## Calls',
      '',
      'Fetch every call:',
      '',
      '```dql',
      'fetch spans',
      '```',
    );

    assert.equal(describeSection(section), 'Fetch every call');
  });

  it('has no description for a section holding nothing but code', () => {
    assert.equal(
      describeSection(doc('## Calls', '', '```dql', 'fetch spans', '```')),
      undefined,
    );
  });

  it('cuts an overlong paragraph on a word boundary', () => {
    const description = describeSection(
      doc('## Calls', '', `${'word '.repeat(60)}end.`),
    );

    assert.ok(description !== undefined);
    assert.ok(description.length <= DESCRIPTION_LIMIT + 1);
    assert.match(description, /word…$/);
  });
});

describe('describeWeakness', () => {
  it('reports a section with no text of its own', () => {
    assert.equal(describeWeakness(undefined, 'Calls'), 'no text of its own');
  });

  it('reports a description that only repeats the heading', () => {
    assert.equal(
      describeWeakness('SOAP Operations', 'SOAP operations'),
      'only repeats the heading',
    );
  });

  it('reports a description too short to say anything', () => {
    assert.equal(
      describeWeakness('Chart it.', 'Latency'),
      'shorter than 30 characters',
    );
  });

  it('passes a description that names what the section shows', () => {
    assert.equal(
      describeWeakness(
        'Filter on request.is_root_span to find request roots.',
        'Request Roots',
      ),
      undefined,
    );
  });
});

describe('holdsOnlyTitleAndIntro', () => {
  it('holds only the title and its introduction', () => {
    const preamble = doc(
      '# Request Analysis',
      '',
      'Requests are spans marked as roots.',
    );

    assert.equal(holdsOnlyTitleAndIntro(preamble), true);
  });

  it('holds more than the introduction when a second paragraph follows', () => {
    const preamble = doc('# Request Analysis', '', 'Intro.', '', 'More prose.');

    assert.equal(holdsOnlyTitleAndIntro(preamble), false);
  });

  it('holds more than the introduction when a code block follows', () => {
    const preamble = doc(
      '# Request Analysis',
      '',
      'Intro.',
      '',
      '```dql',
      'fetch spans',
      '```',
    );

    assert.equal(holdsOnlyTitleAndIntro(preamble), false);
  });

  it('holds more than the introduction when a subheading follows', () => {
    const preamble = doc(
      '# Request Analysis',
      '',
      'Intro.',
      '',
      '### Note',
      '',
      'Detail.',
    );

    assert.equal(holdsOnlyTitleAndIntro(preamble), false);
  });

  it('holds more than the description can carry when the introduction is long', () => {
    const preamble = doc('# Request Analysis', '', 'word '.repeat(60));

    assert.equal(holdsOnlyTitleAndIntro(preamble), false);
  });
});
