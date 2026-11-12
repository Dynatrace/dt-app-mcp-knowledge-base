## Convert syntax tree to DQL

Use `convertFilterFieldTreeToDql` to turn the filter tree into a ready-to-use DQL fragment. The result combines filter and search statements automatically and can be passed directly to your DQL query.

**DqlConversion**

```tsx
import { useState } from 'react';

import { CodeSnippet } from '@dynatrace/strato-components/content';
import {
  convertFilterFieldTreeToDql,
  convertStringToFilterFieldTree,
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import { FormField, Label } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const DEFAULT_VALUE =
  'status = error healthy = false dt.source.ip = 192.168.1.1 * ~ timeout';

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    { key: 'status', valuePredicate: ['error', 'ok', 'warning'] },
    { key: 'healthy', valuePredicate: { type: 'Boolean' } },
    { key: 'replicaCount', valuePredicate: { type: 'Number' } },
    { key: 'dt.source.ip', valuePredicate: { type: 'IPAddress' } },
    { key: 'dt.entity.id', valuePredicate: { type: 'UID' } },
    { key: 'smartscapeId', valuePredicate: { type: 'SmartscapeId' } },
    { key: 'timestamp', valuePredicate: { type: 'Timestamp' } },
    { key: 'dt.entity.labels', valuePredicate: { type: 'JSONPath' } },
  ],
};

const parserConfig = {
  searchConversion: true,
  jsonPathConversion: true,
  ipAddressConversion: true,
  uidConversion: true,
  smartscapeIdConversion: true,
  timestampConversion: true,
};

const DqlConversion = () => {
  const [tree, setTree] = useState(
    () =>
      convertStringToFilterFieldTree(DEFAULT_VALUE, {
        validatorMap,
        parserConfig,
      }).tree,
  );

  // highlight-next-line
  const dql = convertFilterFieldTreeToDql(tree);

  return (
    <Flex flexDirection="column" gap={16}>
      <FormField>
        <Label>Filter</Label>
        <FilterField
          aria-label="DQL conversion demo"
          defaultValue={DEFAULT_VALUE}
          validatorMap={validatorMap}
          parserConfig={parserConfig}
          autoSuggestions
          onChange={(_, newTree) => setTree(newTree)}
        />
      </FormField>
      <FormField>
        <Label>DQL statement</Label>
        <CodeSnippet language="dql">
          <CodeSnippet.ActionsMenu>
            <CodeSnippet.Copy />
          </CodeSnippet.ActionsMenu>
          {dql || '(empty)'}
        </CodeSnippet>
      </FormField>
    </Flex>
  );
};
```

Use `enrichFilterFieldTreeWithDql` when you need the DQL expression for each filter statement individually rather than the composed string. It returns the same tree structure enriched with a `filterDql` fragment on every node and a `searchDql` term on every group, so you can inspect or combine individual statements before building your query.

**EnrichFilterFieldTreeWithDql**

```tsx
import { useState } from 'react';

import { CodeSnippet } from '@dynatrace/strato-components/content';
import {
  convertStringToFilterFieldTree,
  enrichFilterFieldTreeWithDql,
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import { FormField, Label } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const DEFAULT_VALUE =
  'status = error healthy = false dt.source.ip = 192.168.1.1 * ~ timeout';

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    { key: 'status', valuePredicate: ['error', 'ok', 'warning'] },
    { key: 'healthy', valuePredicate: { type: 'Boolean' } },
    { key: 'replicaCount', valuePredicate: { type: 'Number' } },
    { key: 'dt.source.ip', valuePredicate: { type: 'IPAddress' } },
    { key: 'dt.entity.id', valuePredicate: { type: 'UID' } },
    { key: 'smartscapeId', valuePredicate: { type: 'SmartscapeId' } },
    { key: 'timestamp', valuePredicate: { type: 'Timestamp' } },
    { key: 'dt.entity.labels', valuePredicate: { type: 'JSONPath' } },
  ],
};

const parserConfig = {
  searchConversion: true,
  jsonPathConversion: true,
  ipAddressConversion: true,
  uidConversion: true,
  smartscapeIdConversion: true,
  timestampConversion: true,
};

const EnrichFilterFieldTreeWithDql = () => {
  const [tree, setTree] = useState(
    () =>
      convertStringToFilterFieldTree(DEFAULT_VALUE, {
        validatorMap,
        parserConfig,
      }).tree,
  );

  // highlight-next-line
  const enriched = enrichFilterFieldTreeWithDql(tree);
  const enrichedTree = enriched ? JSON.stringify(enriched, null, 2) : '(empty)';

  return (
    <Flex flexDirection="column" gap={16}>
      <FormField>
        <Label>Filter</Label>
        <FilterField
          aria-label="Enrich filter field tree with DQL demo"
          defaultValue={DEFAULT_VALUE}
          validatorMap={validatorMap}
          parserConfig={parserConfig}
          autoSuggestions
          onChange={(_, newTree) => setTree(newTree)}
        />
      </FormField>
      <FormField>
        <Label>Enriched tree</Label>
        <CodeSnippet language="json" style={{ maxHeight: 400 }}>
          <CodeSnippet.ActionsMenu>
            <CodeSnippet.Copy />
          </CodeSnippet.ActionsMenu>
          {enrichedTree}
        </CodeSnippet>
      </FormField>
    </Flex>
  );
};
```

> **Note**
>
> To convert the global-search operator (`* ~`) to `search "value"`, you must enable it first via the `parserConfig`. See [Enable search (\* \~)](#enable-search--) for details.

> **Note**
>
> To convert `matches-wildcard` and `not-matches-wildcard` operators to DQL, you must first enable wildcard-in-middle matching via the `parserConfig`. See [Enable wildcard in middle](#enable-wildcard-in-middle) for details.

Both functions accept an optional `FilterFieldDqlOptions` object:

- **`keyMap`** — rename a FilterField key to a different DQL field name before the fragment is rendered (for example `{ 'k8s.namespace.name': 'dt.kubernetes.namespace' }`).
- **`overrides`** — a callback invoked for each statement, returning a custom DQL fragment string or `undefined` to fall back to the built-in mapping. Use this to handle statements that have no default DQL equivalent or that require additional logic.
