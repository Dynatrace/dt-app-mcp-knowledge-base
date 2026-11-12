## Show lint gutter

Set `showLintGutter` to display a severity marker in the gutter column next to each line that has a warning or syntax error. `showLintGutter` has no effect when no warnings or syntax errors are present.

> **Note**
>
> Use lint gutters for larger editors with lengthy or complex queries to help users quickly spot errors and warnings. For small editors with simple content, such as basic form inputs, a lint gutter isn't needed.

**LintGutter**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';

const LintGutter = () => {
  return (
    <DQLEditor
      defaultValue="fetch"
      // highlight-next-line
      showLintGutter
    />
  );
};
```
