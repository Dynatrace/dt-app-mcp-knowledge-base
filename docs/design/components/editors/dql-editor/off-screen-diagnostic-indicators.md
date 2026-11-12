## Off-screen diagnostic indicators

Set `showOffScreenDiagnosticIndicators` to show floating pill buttons at the top and/or bottom edge of the editor when one or more error-severity validation problems are scrolled out of view. Each pill displays the count of off-screen errors in its direction; clicking it scrolls the nearest such error into view.

When the editor has enough height for both indicators, they appear simultaneously. When only one fits, the top indicator takes priority — the bottom one appears only if there are no errors above.

`showOffScreenDiagnosticIndicators` has no effect when the query has no error-severity validation problems.

**OffScreenDiagnosticIndicators**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';

const query = [
  'fetch lgos',
  '| filter loglevel == "ERROR"',
  '| fields timestamp, content',
  '| sort timestamp desc',
  '| summarize count(), by:{loglevel}',
  '| limit 10',
  '| fieldsAdd extra = 1',
  '| fieldsAdd more = 2',
  '| fieldsAdd evenMore = 3',
  '| fieldsRemove extra',
  '| summarize total = count()',
  '| fieldsAdd bogus = nosuchfunction(total)',
].join('\n');

const OffScreenDiagnosticIndicators = () => {
  return (
    <div style={{ height: 160 }}>
      <DQLEditor
        defaultValue={query}
        // highlight-next-line
        showOffScreenDiagnosticIndicators
        showLintGutter
        fullHeight
        aria-label="DQL query editor with off-screen diagnostic indicators"
      />
    </div>
  );
};
```
