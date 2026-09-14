import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  mainHeadingLevel,
  findHeadings,
  splitMarkdown,
} from '../src/markdown.ts';

const doc = (...lines: string[]) => lines.join('\n');

const TITLED = doc(
  '# Page Title',
  '',
  'Intro paragraph.',
  '',
  '## First Section',
  '',
  'Body.',
  '',
  '### Nested',
  '',
  'More.',
  '',
  '## Second Section',
  '',
  'End.',
);

const headingsOf = (markdown: string) =>
  splitMarkdown(markdown).map((section) => section.heading?.text);

describe('splitMarkdown', () => {
  it('splits at the main sections and keeps the page title with the preamble', () => {
    const sections = splitMarkdown(TITLED);

    assert.deepEqual(headingsOf(TITLED), [
      undefined,
      'First Section',
      'Second Section',
    ]);
    assert.equal(sections[0]?.content, '# Page Title\n\nIntro paragraph.');
  });

  it('keeps subsections with the section they belong to', () => {
    const sections = splitMarkdown(TITLED);

    assert.equal(
      sections[1]?.content,
      '## First Section\n\nBody.\n\n### Nested\n\nMore.',
    );
  });

  it('splits at the top level when no single heading opens the document as a title', () => {
    const markdown = doc('# Alpha', '', 'One.', '', '# Beta', '', 'Two.');

    assert.deepEqual(headingsOf(markdown), ['Alpha', 'Beta']);
  });

  it('stops descending when the only deeper level holds a single section', () => {
    const markdown = doc(
      '# Page Title',
      '',
      'Intro.',
      '',
      '## Only Section',
      '',
      '### A',
      '',
      '### B',
    );

    assert.deepEqual(headingsOf(markdown), [undefined, 'Only Section']);
  });

  it('omits the preamble when the document opens with a main heading', () => {
    const markdown = doc('## First', '', 'One.', '', '## Second', '', 'Two.');

    assert.deepEqual(headingsOf(markdown), ['First', 'Second']);
  });

  it('splits a document written with setext headings', () => {
    const markdown = doc(
      'Page Title',
      '==========',
      '',
      'Intro.',
      '',
      'First',
      '-----',
      '',
      'One.',
      '',
      'Second',
      '------',
      '',
      'Two.',
    );
    const sections = splitMarkdown(markdown);

    assert.deepEqual(headingsOf(markdown), [undefined, 'First', 'Second']);
    assert.equal(sections[1]?.content, 'First\n-----\n\nOne.');
  });

  it('returns the whole document as one headingless section when it has no headings', () => {
    const sections = splitMarkdown(
      doc('Just a paragraph.', '', 'And another.'),
    );

    assert.deepEqual(sections, [
      { content: 'Just a paragraph.\n\nAnd another.' },
    ]);
  });

  it('returns nothing for an empty document', () => {
    assert.deepEqual(splitMarkdown(''), []);
  });

  it('normalises CRLF line endings', () => {
    const sections = splitMarkdown(
      '# Title\r\n\r\nIntro.\r\n\r\n## Section\r\n\r\nBody.\r\n',
    );

    assert.equal(sections[1]?.content, '## Section\n\nBody.');
  });
});

describe('findHeadings', () => {
  it('ignores headings inside fenced code blocks', () => {
    const markdown = doc(
      '# Title',
      '',
      '## Real',
      '',
      '```sh',
      '## Not a heading',
      '```',
      '',
      '## Also Real',
    );

    assert.deepEqual(
      findHeadings(markdown).map((heading) => heading.text),
      ['Title', 'Real', 'Also Real'],
    );
  });

  it('closes a fence only on a matching marker, so nested fences stay code', () => {
    const markdown = doc(
      '~~~',
      '```',
      '## Not a heading',
      '```',
      '~~~',
      '## Real',
    );

    assert.deepEqual(
      findHeadings(markdown).map((heading) => heading.text),
      ['Real'],
    );
  });

  it('strips a closing hash sequence from the heading text', () => {
    assert.deepEqual(findHeadings('## Closed ##'), [
      { level: 2, text: 'Closed', line: 0 },
    ]);
  });

  it('ignores a hash that is not followed by a space', () => {
    assert.deepEqual(findHeadings(doc('#hashtag', '', '#### Real')), [
      { level: 4, text: 'Real', line: 2 },
    ]);
  });

  it('finds setext headings alongside ATX ones', () => {
    const markdown = doc(
      'Page Title',
      '==========',
      '',
      'Intro.',
      '',
      'First Section',
      '-------------',
      '',
      '## Second Section',
    );

    assert.deepEqual(findHeadings(markdown), [
      { level: 1, text: 'Page Title', line: 0 },
      { level: 2, text: 'First Section', line: 5 },
      { level: 2, text: 'Second Section', line: 8 },
    ]);
  });

  it('keeps a thematic break out of the headings', () => {
    assert.deepEqual(
      findHeadings(doc('Paragraph.', '', '---', '', 'Another.')),
      [],
    );
  });

  it('ignores frontmatter, so its closing delimiter is no setext heading', () => {
    assert.deepEqual(
      findHeadings(doc('---', 'title: Page Title', '---', '', '## Section')),
      [{ level: 2, text: 'Section', line: 4 }],
    );
  });
});

describe('mainHeadingLevel', () => {
  it('has no level for a document without headings', () => {
    assert.equal(mainHeadingLevel([]), undefined);
  });

  it('keeps the shallowest level when it is not a lone opening title', () => {
    const headings = [
      { level: 2, text: 'A', line: 0 },
      { level: 3, text: 'B', line: 1 },
      { level: 2, text: 'C', line: 2 },
    ];

    assert.equal(mainHeadingLevel(headings), 2);
  });
});
