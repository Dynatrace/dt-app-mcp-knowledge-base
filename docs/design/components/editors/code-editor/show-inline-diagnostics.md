## Show inline diagnostics

Use the `diagnostics` prop to attach per-range validation feedback from any source. Each entry specifies a character range or position, a message, and an optional severity (`'error'`, `'warning'`, or `'info'`). Passing `diagnostics` also disables the built-in JSON linter so you have full control over what is shown.

> **Note**
>
> Keep the `diagnostics` array referentially stable by storing it in state or wrapping it in `useMemo`. A new array reference on every render causes the editor to redispatch diagnostics unnecessarily.

**InlineDiagnostics**

```tsx
import {
  CodeEditor,
  type InlineDiagnostic,
} from '@dynatrace/strato-components/editors';

const code = 'const count: number = "hello";\nconst result = 42;';

const diagnostics: InlineDiagnostic[] = [
  {
    from: 22,
    to: 29,
    message: "Type 'string' is not assignable to type 'number'.",
    severity: 'error',
  },
  {
    from: 37,
    to: 43,
    message: "'result' is declared but its value is never read.",
    severity: 'warning',
  },
  {
    from: 0,
    to: 5,
    message: 'Consider using `let` or `const` based on reassignment.',
    severity: 'info',
  },
];

const InlineDiagnostics = () => {
  return (
    <CodeEditor
      language="ts"
      defaultValue={code}
      // highlight-next-line
      diagnostics={diagnostics}
      aria-label="TypeScript editor with diagnostics"
    />
  );
};
```

### Validate with a server

Combine `diagnostics` with a debounced `useEffect` and `AbortController` to run server-side validation. The abort controller cancels any in-flight request when a new keystroke arrives before the previous response has been applied.

**ServerSideValidation**

```tsx
import { useEffect, useRef, useState } from 'react';

import {
  CodeEditor,
  type InlineDiagnostic,
} from '@dynatrace/strato-components/editors';

const initialCode = 'const count: number = "hello";\nconst result = 42;';

async function validateOnServer(
  code: string,
  signal: AbortSignal,
): Promise<InlineDiagnostic[]> {
  const match = /"[^"]*"/.exec(code);
  if (!match || signal.aborted) {
    return [];
  }
  return [
    {
      from: match.index,
      to: match.index + match[0].length,
      message: 'Server: cannot assign string to number.',
      severity: 'error',
    },
  ];
}

const ServerSideValidation = () => {
  const [value, setValue] = useState(initialCode);
  const [diagnostics, setDiagnostics] = useState<InlineDiagnostic[]>([]);
  const abortRef = useRef<AbortController | undefined>(undefined);

  useEffect(() => {
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    const timeout = setTimeout(async () => {
      const result = await validateOnServer(value, ctrl.signal);
      if (!ctrl.signal.aborted) {
        setDiagnostics(result);
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
      ctrl.abort();
    };
  }, [value]);

  return (
    <CodeEditor
      language="ts"
      value={value}
      onChange={setValue}
      // highlight-next-line
      diagnostics={diagnostics}
      aria-label="TypeScript editor with server-side validation"
    />
  );
};
```

### Off-screen diagnostic indicators

Set `showOffScreenDiagnosticIndicators` to show floating pill buttons at the top and/or bottom edge of the editor when one or more `error`-severity diagnostics are scrolled out of view. Each pill displays the count of off-screen errors in its direction; clicking it scrolls the nearest such error into view.

When the editor has enough height for both indicators, they appear simultaneously. When only one fits, the top indicator takes priority — the bottom one appears only if there are no errors above.

`showOffScreenDiagnosticIndicators` has no effect when there are no `error`-severity diagnostics in the editor — whether provided via the `diagnostics` prop or produced by the built-in CodeMirror linter.

**OffScreenDiagnosticIndicators**

```tsx
import {
  CodeEditor,
  type InlineDiagnostic,
} from '@dynatrace/strato-components/editors';

const code = [
  'const firstError: number = "wrong type";',
  '',
  'function greet(name: string) {',
  '  return name;',
  '}',
  '',
  'greet("world");',
  '',
  '',
  'const a = 1;',
  'const b = 2;',
  'const secondError: string = 42;',
  'const c = 3;',
  'const d = 4;',
  '',
  'const thirdError: boolean = "not a boolean";',
].join('\n');

const topErrorOffset = code.indexOf('"wrong type"');
const secondErrorOffset = code.indexOf('42');
const thirdErrorOffset = code.indexOf('"not a boolean"');

const diagnostics: InlineDiagnostic[] = [
  {
    from: topErrorOffset,
    to: topErrorOffset + 12,
    severity: 'error',
    message: "Type 'string' is not assignable to type 'number'.",
  },
  {
    from: secondErrorOffset,
    to: secondErrorOffset + 2,
    severity: 'error',
    message: "Type 'number' is not assignable to type 'string'.",
  },
  {
    from: thirdErrorOffset,
    to: thirdErrorOffset + 15,
    severity: 'error',
    message: "Type 'string' is not assignable to type 'boolean'.",
  },
];

const OffScreenDiagnosticIndicators = () => {
  return (
    <div style={{ height: 160 }}>
      <CodeEditor
        language="ts"
        defaultValue={code}
        diagnostics={diagnostics}
        // highlight-next-line
        showOffScreenDiagnosticIndicators
        fullHeight
        aria-label="TypeScript editor with off-screen error indicators"
      />
    </div>
  );
};
```

### Show lint gutter

Set `showLintGutter` to display a severity marker in the gutter column next to each line that has a diagnostic. `showLintGutter` has no effect when `diagnostics` is `undefined` or empty.

> **Note**
>
> Use lint gutters for larger editors with lengthy or complex queries to help users quickly spot errors and warnings. For small editors with simple content, such as basic form inputs, a lint gutter isn't needed.

**LintGutter**

```tsx
import {
  CodeEditor,
  type InlineDiagnostic,
} from '@dynatrace/strato-components/editors';

const code =
  'var x: number = "hello";\nconst config = {\n  value: 42,\n};\nconst result = x as number;';

const diagnostics: InlineDiagnostic[] = [
  {
    from: 0,
    to: 3,
    severity: 'warning',
    message: "Unexpected 'var'. Use 'let' or 'const'.",
  },
  {
    from: 16,
    to: 23,
    severity: 'error',
    message: "Type 'string' is not assignable to type 'number'.",
  },
  {
    from: 25,
    to: 57,
    severity: 'warning',
    message: "'config' is declared but its value is never read.",
  },
  {
    from: 75,
    to: 84,
    severity: 'info',
    message: "Type assertion is redundant: 'x' is already 'number'.",
  },
];

const LintGutter = () => {
  return (
    <CodeEditor
      language="ts"
      defaultValue={code}
      diagnostics={diagnostics}
      // highlight-next-line
      showLintGutter
    />
  );
};
```
