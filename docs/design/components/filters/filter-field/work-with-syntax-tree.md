## Work with syntax tree

`FilterField` provides a tokenized version of the entered value and groups statements that are connected by the same logical operator. As the logical `AND` takes precedence over the logical `OR`, the statements `a = 1 b = 2 OR c = 3` will be grouped as follows:

**TreePrecedence**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';
import { convertStringToFilterFieldTree } from '@dynatrace/strato-components/filters';

const TreePrecedence = () => {
  return (
    <CodeEditor
      value={JSON.stringify(
        convertStringToFilterFieldTree('a = 1 b = 2 OR c = 3'),
        null,
        2,
      )}
      readOnly
    />
  );
};
```

Each statement is represented by a node holding the key, operator, and value of the statement, provided as properties of the statement node. Depending on the type of value and operator used, additional information (e.g. `starts-with`, `contains`) is provided in the syntax tree.

If there is an error in the syntax, a node with type `Error` is included in the syntax tree and the accompanying `isValid` flag is set to `false`.

### Explicit logical operator nodes

Explicit logical operators are included in the syntax tree so it can be converted back into a string without losing information. The logical operator needed to evaluate a group of statements is included on the `Group` node. Ignore logical operators in the `children` array of groups.

### Convert string to syntax tree

Use the `convertStringToFilterFieldTree` utility to convert a string into a `FilterTree`. Setting the value programmatically doesn't trigger the `onChange` callback. Use the provided utility function for the converted syntax tree and filter data.

### Convert syntax tree to string

Use the `convertFilterFieldTreeToString` utility to convert a syntax tree to a string.

> **Caution**
>
> We can't guarantee that converting a string to a tree and back yields the exact same result. The `value` of every node (except for `Error` nodes) doesn't contain escape characters (both wrapping doublequotes and backslashes). Hence, the simple value `foo` may be written `"foo"`, `\f\o\o`, or using any other combination of escape characters. With the `textValue` of tree nodes being optional for the conversion util input, it is impossible to re-build the exact same string as the original input for certain trees unless the `textValue` is included.

This example demonstrates the conversion from string to tree, and back:

**ConversionUtils**

```tsx
import { useMemo, useState } from 'react';

import { CodeEditor } from '@dynatrace/strato-components/editors';
import {
  convertFilterFieldTreeToString,
  convertStringToFilterFieldTree,
  FilterField,
} from '@dynatrace/strato-components/filters';
import { FormField, Label } from '@dynatrace/strato-components/forms';
import { Grid } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const ConversionUtils = () => {
  const [value, setValue] = useState('Health = healthy');
  const [syntaxTree, setSyntaxTree] = useState(() =>
    JSON.stringify(convertStringToFilterFieldTree(value).tree, null, 2),
  );
  const convertedTree = useMemo(() => {
    try {
      return convertFilterFieldTreeToString(JSON.parse(syntaxTree));
    } catch {
      return undefined;
    }
  }, [syntaxTree]);

  return (
    <Grid style={{ position: 'relative' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          padding: `${Spacings.Size4} 0`,
          backgroundColor: Colors.Background.Surface.Default,
          zIndex: 10,
        }}
      >
        <FormField>
          <Label>String to FilterField tree</Label>
          <FilterField
            defaultValue={value}
            onChange={(value, tree) => {
              setValue(value);
              setSyntaxTree(JSON.stringify(tree, null, 2));
            }}
            style={{ gridTemplateColumns: '1 / 3' }}
          />
        </FormField>
      </div>
      <CodeEditor
        language="ts"
        defaultFolding={[138, 291, 453]}
        value={syntaxTree}
        onChange={setSyntaxTree}
        style={{ marginBottom: Spacings.Size48 }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: `calc(100% - 2 * ${Spacings.Size16})`,
          padding: `${Spacings.Size4} 0`,
          backgroundColor: Colors.Background.Surface.Default,
        }}
      >
        <FormField>
          <Label>FilterField tree to string</Label>
          <FilterField value={convertedTree} onChange={() => null} readOnly />
        </FormField>
      </div>
    </Grid>
  );
};
```
