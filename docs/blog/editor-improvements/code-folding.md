## Code folding

The `DQLEditor` now supports folding of multi-line block comments (`/*…*/`) and subqueries (`[…]`).

Both `DQLEditor` and `CodeEditor` expose two folding APIs:

- `defaultFolding`—pre-folds specific blocks on initial render (uncontrolled).
- `folding` / `onFoldingChange`—controlled folding that lets you programmatically fold or unfold blocks from outside the component.

![DQLEditor with code folding: a fold marker visible in the gutter next to a foldable block — light mode](https://developer.dynatrace.com/assets/images/2026-10-01-editor-improvements-code-folding-light-f925d62099b8c715c628c3aa813b12d0.webp)
