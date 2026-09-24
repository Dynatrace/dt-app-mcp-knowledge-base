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
  it('takes the title the page author wrote over anything derived', () => {
    const markdown = doc('# Button', '', '## Columns', 'One.');

    assert.equal(
      pageTitle({
        pagePath: 'design/components/Button/props',
        markdown,
        title: 'Button - Properties',
      }),
      'Button - Properties',
    );
  });

  it('keeps the version of a page whose author titles every version alike', () => {
    const markdown = doc('## Functions', 'One.');

    assert.equal(
      pageTitle({
        pagePath: 'develop/sdks/client-classic-environment-v2/v7',
        markdown,
        title: 'Classic environment v2',
      }),
      'Classic environment v2: V7',
    );
  });

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

  it('qualifies a page named after a kind of content with the page above it', () => {
    const markdown = doc('## Columns', 'One.', '', '## Rows', 'Two.');

    assert.equal(
      pageTitle({ pagePath: 'design/components/DataTable/props', markdown }),
      'Data Table: Props',
    );
  });

  it('qualifies a version page, which every SDK repeats', () => {
    const markdown = doc('## Functions', 'One.', '', '## Types', 'Two.');

    assert.equal(
      pageTitle({ pagePath: 'develop/sdks/user-preferences/v1', markdown }),
      'User Preferences: V1',
    );
  });

  it('leaves a page named after its own subject unqualified', () => {
    const markdown = doc('## Columns', 'One.', '', '## Rows', 'Two.');

    assert.equal(
      pageTitle({ pagePath: 'design/components/DataTable', markdown }),
      'Data Table',
    );
  });

  it('takes the title heading over the page path even on a kind page', () => {
    const markdown = doc('# Data Table - Properties', '', '## Columns', 'One.');

    assert.equal(
      pageTitle({ pagePath: 'design/components/DataTable/props', markdown }),
      'Data Table - Properties',
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

  it('does not repeat the kind a qualified title already ends on', () => {
    assert.equal(nameChunk('Data Table: Props', 'Props'), 'Data Table: Props');
  });

  it('keeps the qualifying page in front of the heading', () => {
    assert.equal(
      nameChunk('Data Table: Usage', 'When to use'),
      'Data Table: Usage: When to use',
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

  it('describes the section behind an admonition rather than the callout', () => {
    const section = doc(
      '## Number Input',
      '',
      ':::caution Deprecated',
      '',
      'Use the NumberInputV2 component instead of this one.',
      '',
      ':::',
    );

    assert.equal(
      describeSection(section),
      'Use the NumberInputV2 component instead of this one.',
    );
  });

  it('takes the fences off an admonition written without blank lines', () => {
    const section = doc(
      '## Number Input',
      '',
      ':::note',
      'Number inputs accept integers and floating-point numbers.',
      ':::',
    );

    assert.equal(
      describeSection(section),
      'Number inputs accept integers and floating-point numbers.',
    );
  });

  it('skips a table and describes the section with the prose below it', () => {
    const section = doc(
      '## Props',
      '',
      '| Prop | Type |',
      '| ---- | ---- |',
      '| size | string |',
      '',
      'Every prop of the base input applies as well.',
    );

    assert.equal(
      describeSection(section),
      'Every prop of the base input applies as well.',
    );
  });

  it('lists the subsections of a section that holds nothing but a table', () => {
    const section = doc(
      '## Props',
      '',
      '| Prop | Type |',
      '| ---- | ---- |',
      '',
      '### Illustration Cues',
      '',
      '| Cue | Meaning |',
      '| --- | ------- |',
    );

    assert.equal(describeSection(section), 'Illustration Cues');
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
