## YAML frontmatter

A document that starts with a YAML frontmatter block renders that block as a metadata table above the document body. This matches how common Markdown viewers present frontmatter, and makes the frontmatter easier to scan than a block of text would be.

Markdown only recognizes frontmatter at the very start of a document, delimited by a line of three hyphens before and after the block. If the block is not valid YAML, Markdown renders the document unchanged.

**Frontmatter**

```tsx
import { Markdown } from '@dynatrace/strato-components/content';

const markdownExample = `---
title: Analyze, chart and share data together
author: Dynatrace
tags:
  - notebooks
  - markdown
draft: false
---

## Get started with a new query

There are three section types you can add to any notebook:
* **Query section**
* **Code section**
* **Markdown section**
`;

const Frontmatter = () => {
  return <Markdown>{markdownExample}</Markdown>;
};
```
