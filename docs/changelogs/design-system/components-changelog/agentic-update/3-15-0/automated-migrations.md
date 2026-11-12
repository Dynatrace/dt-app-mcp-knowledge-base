## Automated migrations

Run the automated migration tool first to apply all available codemods for this release:

```bash
dt-app update @dynatrace/strato-components
```

Sections marked **Automated by codemod** below have already been applied — verify the result rather than applying them manually. Sections without that marker require manual code changes.

---

Each section below corresponds to a change in this release that requires consumer attention. Sections are separated by `---`.

---

The visual refresh is now the default styling for all components. Design tokens now carry visual-refresh values, and all components render in the updated visual style automatically.

If the app used an opt in override via `globalThis.dtVisualRefreshEnabled = true`, that line can be removed. To restore the classic values in an app that has not yet migrated, set this before any component renders — typically at the app entry point:

```tsx
globalThis.dtVisualRefreshEnabled = false;
```

---

**Automated by codemod** — this step is applied by `dt-app update @dynatrace/strato-components`. Verify the result matches the examples below.

`showCopyAction`, `allowCopy`, and `onCopy` on `CodeSnippet` from `@dynatrace/strato-components` are deprecated and will be removed in the next major release. The replacement is `CodeSnippet.ActionsMenu` with `CodeSnippet.Copy` and/or `CodeSnippet.Download` as children. Import everything from `@dynatrace/strato-components/content`.

Replace `onCopy` with the `onCopy` prop on `CodeSnippet.Copy`:

```tsx
// Before
<CodeSnippet onCopy={trackCopy}>{snippet}</CodeSnippet>

// After
<CodeSnippet>
  {snippet}
  <CodeSnippet.ActionsMenu>
    <CodeSnippet.Copy onCopy={trackCopy} />
  </CodeSnippet.ActionsMenu>
</CodeSnippet>
```

To hide the copy button, replace `showCopyAction={false}` or `allowCopy={false}` with an empty `CodeSnippet.ActionsMenu`:

```tsx
// Before
<CodeSnippet showCopyAction={false}>{snippet}</CodeSnippet>

// After
<CodeSnippet>
  {snippet}
  <CodeSnippet.ActionsMenu />
</CodeSnippet>
```

Until the next major release, `showCopyAction` and `allowCopy` still control the plain, single-button copy path. Once the "Copy" button becomes opt-in only, a plain `CodeSnippet` without `CodeSnippet.ActionsMenu` won't show it by default, and the empty `CodeSnippet.ActionsMenu` can be removed.

`CodeSnippet.Download` can be added alongside `CodeSnippet.Copy`. When both are present they escalate to a kebab menu. The downloaded file's extension is derived from `language`; the file name defaults to `code-snippet.<extension>` and can be overridden via `fileName`:

```tsx
<CodeSnippet language="python">
  {pythonScript}
  <CodeSnippet.ActionsMenu>
    <CodeSnippet.Copy />
    <CodeSnippet.Download fileName="script.py" />
  </CodeSnippet.ActionsMenu>
</CodeSnippet>
```

---

`DownloadCSV` on `HistogramChart` from `@dynatrace/strato-components` is deprecated — the download button is now enabled by default and the slot is no longer needed. Remove any `<HistogramChart.DownloadCSV />` children.

`DownloadCSV` on `CategoricalBarChart` is also deprecated and will be removed once the download button is enabled by default for that chart. Do not add new `<CategoricalBarChart.DownloadCSV />` usage.

---

`useKeyboardShortcut` is a new opt-in hook from `@dynatrace/strato-components/core` — no existing code requires migration. When adding keyboard shortcut behaviour to a component, call it inside the React component body:

```tsx
import { useKeyboardShortcut } from '@dynatrace/strato-components/core';

useKeyboardShortcut({
  keys: 'mod+k',
  onTrigger: () => openSearch(),
});
```

`keys` takes a combination in `aria-keyshortcuts` format. The `mod` modifier resolves to `Meta` on macOS and `Control` elsewhere. For a combination that differs by more than the modifier, pass an object with `default` and `macos` keys instead of a string.

Additional options:

- `eventTarget` — a ref or DOM element to scope the listener; defaults to the document.
- `enabled` — set to `false` to disable the shortcut without unmounting.
- `shouldIgnoreTarget` — use the exported predicates (`isValueEntryTarget`, `isEditableTarget`, `isInputTarget`, `isTextboxTarget`, `isTextareaTarget`, `isSelectTarget`) to widen, narrow, or replace the default suppression (which skips the shortcut when focus is inside a value-entry control).

---

`DataTable` from `@dynatrace/strato-components/tables` now accepts an `anchorScrollTo` prop to control which edge of the list stays fixed when data changes. No existing code requires migration.

Set `anchorScrollTo="end"` with a stable `rowId` to keep the user's reading position in place when rows are inserted above it — the pattern needed for live logs or event feeds:

```tsx
import { DataTable } from '@dynatrace/strato-components/tables';

<DataTable
  data={rows}
  columns={columns}
  rowId={(row) => row.id}
  anchorScrollTo="end"
/>;
```

The default `'start'` keeps the previous behaviour (top of the list is the fixed point). With `'end'`, rows inserted above the viewport leave the view untouched. When the user is scrolled to the very top, `'end'` temporarily reverts to `'start'` so newly arrived rows appear immediately rather than being hidden above the viewport.

---

`Menu.Content` from `@dynatrace/strato-components` now accepts `onInteractOutside` — no existing code requires migration. Pass a callback to intercept pointer-down and focus events that occur outside an open menu:

```tsx
import { Menu } from '@dynatrace/strato-components/navigation';

<Menu>
  <Menu.Trigger>
    <Button>Open</Button>
  </Menu.Trigger>
  <Menu.Content
    onInteractOutside={(event) => {
      // call event.preventDefault() to cancel the interaction
    }}
  >
    <Menu.Item onSelect={() => undefined}>Item</Menu.Item>
  </Menu.Content>
</Menu>;
```

Call `event.preventDefault()` inside the callback to cancel the interaction and prevent the menu from closing.

---

`SegmentsProvider` and `SegmentApplicabilityProvider` from `@dynatrace/strato-components/filters` now accept a `requires` prop — no existing code requires migration. Pass it to declare the data objects a view depends on; when the active segment does not cover them all, a non-blocking warning appears automatically in the overlay:

```tsx
import {
  SegmentsProvider,
  SegmentSelector,
} from '@dynatrace/strato-components/filters';

<SegmentsProvider
  requires={[{ dataObject: 'entities', entityTypes: ['K8S_CLUSTER'] }]}
>
  <SegmentSelector />
</SegmentsProvider>;
```

Omitting `requires` keeps the previous behaviour, with no warning shown.

---

`_FilterCompositionMenuGroup` from `@dynatrace/strato-components/filters` is a new opt-in menu group — no existing code requires migration. It renders one menu item per filter operation available for a key/value pair, and selecting an item writes the statement into the `FilterField` of the composition it names by id. Because it names the composition by id, it works from a menu rendered anywhere in the app, such as a table cell menu.

Pass the `id` of the target composition, the key and value to filter by, and the type the key is declared as in the `FilterField`'s `validatorMap`:

```tsx
import {
  _createFilterCompositionStore,
  _FilterCompositionMenuGroup as FilterCompositionMenuGroup,
  FilterComposition,
} from '@dynatrace/strato-components/filters';
import {
  DataTable,
  TableActionsMenu,
} from '@dynatrace/strato-components/tables';

const store = _createFilterCompositionStore({
  id: 'hosts',
  filterField: {
    validatorMap: { keyPredicates: [{ key: 'status', valueType: 'String' }] },
  },
});

<FilterComposition store={store} onApply={runQuery}>
  <FilterComposition.FilterField aria-label="Filter" />
  <FilterComposition.ApplyButton />
</FilterComposition>;

<DataTable columns={columns} data={rows}>
  <DataTable.CellActions>
    {({ columnDef, cellValue }) => (
      <TableActionsMenu>
        <FilterCompositionMenuGroup
          filterCompositionId="hosts"
          filterKey={columnDef.id}
          filterValue={String(cellValue)}
          filterType="String"
        />
      </TableActionsMenu>
    )}
  </DataTable.CellActions>
</DataTable>;
```

`filterType` decides which operators the menu offers and which type the statement is written into the `FilterField` as, so it has to match how the key is declared in the `validatorMap`.

---

`HelpMenu` from `@dynatrace/strato-components/layouts` now accepts `aria-label`, `aria-labelledby`, `aria-describedby`, and `aria-details` — no existing code requires migration.

Pass any `AriaLabelingProps` directly on `HelpMenu`. They are forwarded to the underlying menu content element (the `role="menu"` node).

```tsx
import { HelpMenu } from '@dynatrace/strato-components/layouts';

<HelpMenu entries={entries} aria-describedby="version-description" />;
```

---

`Menu.Content` from `@dynatrace/strato-components/navigation` now accepts an `aria-describedby` prop — no existing code requires migration.

Pass the `id` of a description element to `aria-describedby` on `Menu.Content`. Screen readers will announce the description text after the menu's accessible name when the panel opens.

```tsx
import { Menu } from '@dynatrace/strato-components/navigation';

<>
  <p id="menu-desc">These actions apply to the selected item.</p>
  <Menu>
    <Menu.Trigger>...</Menu.Trigger>
    <Menu.Content aria-describedby="menu-desc">...</Menu.Content>
  </Menu>
</>;
```
