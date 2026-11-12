## Components 4.0.0 (planned)

**@dynatrace/strato-components**

### AiLoadingIndicator

The `aria-disabled` prop will be removed, since the attribute is only intended for interactive elements. Please remove this prop from your implementation.

### AppHeader

The following deprecated items will be removed:

- `AppHeader.AppNavLink`: Use `AppHeader.Logo` instead
- `AppNavLinkInternalOwnProps`: Use `AppHeaderLogoOwnProps` instead
- `AppHeader.NavItems`: Use `AppHeader.Navigation` instead
- `AppHeader.NavItem`: Use `AppHeader.NavigationItem` instead

We provide migrations.

### CodeSnippet

The following deprecated props will be removed, making the "Copy" button opt-in:

- `allowCopy`: Use `CodeSnippet.ActionsMenu` with `CodeSnippet.Copy` instead.
- `showCopyAction`: Use `CodeSnippet.ActionsMenu` with `CodeSnippet.Copy` instead.
- `onCopy`: Use the `onCopy` prop on `CodeSnippet.Copy` instead.

```jsx
// Before
<CodeSnippet showCopyAction onCopy={trackCopy}>{snippet}</CodeSnippet>

// After
<CodeSnippet>
  {snippet}
  <CodeSnippet.ActionsMenu>
    <CodeSnippet.Copy onCopy={trackCopy} />
  </CodeSnippet.ActionsMenu>
</CodeSnippet>
```

**Impact:**

- **No copy button by default**: A `CodeSnippet` without `CodeSnippet.ActionsMenu` will no longer show a "Copy" button. Add the slot wherever you rely on the copy action today. `showCopyAction={false}` and `allowCopy={false}` still work in 3.x.
- **To migrate early**: Switch to an empty `<CodeSnippet.ActionsMenu />` from 3.15, which renders no actions at all. Once the props are removed in 4.0, the empty slot will no longer be needed, since the button won't appear unless `CodeSnippet.Copy` is present.

### DataTable

The following will be removed with the next breaking change release:

- `date` column type: Use `datetime` instead.
- `link` option on `interactiveRows`: Use `onActiveRowChange` instead.
- `name` prop on `thresholds` option in `DataTableMeterbarColumnConfig`.
- `DataTableDownloadProps` type and `onDownloadData` prop on `DataTable`: Use the `onDownloadData` callback on the `DataTable.DownloadData` toolbar slot instead.
- `TableActionsMenu.ItemIcon` slot: Use `TableActionsMenu.Prefix` instead.
- `setupTableVirtualizationMock` and `clearTableVirtualizationMock` mock functions: These were used with the legacy DataTable V1 component, which has been removed. Use `setupVirtualizationMock` and `clearVirtualizationMock` for unit testing instead.

In addition to the above:

The `subset` parameter of `onDownloadData` callbacks will be extended with a new `'selectedWithParents'` value. This affects `DataTableDownloadSlotProps`, `DataTableDownloadDataOptions`, and the deprecated `DataTableDownloadProps`.

**Impact:**

- **Runtime handling**: Your `onDownloadData` handler may now receive `subset: 'selectedWithParents'`. If your handler only covers the existing values (`'all'`, `'page'`, `'selected'`), add a case for `'selectedWithParents'` or ensure your fallback handles it.
- **TypeScript error**: If your `onDownloadData` handler is explicitly typed with the narrow `subset` union, TypeScript will report a type error after upgrading. Update the union to include `'selectedWithParents'`.

### Editors

- The `isControlled` prop will be removed from `CodeEditor` and `DQLEditor`. Controlled behavior will be the default starting from version 4.0, so this prop will no longer be needed. You can use `isControlled` in 3.0 to try out the controlled behavior early, before it becomes the default.
- The `gutterConfiguration` prop will be removed from `CodeEditor`. Use the `showLintGutter` prop together with the `diagnostics` prop instead.
- The following deprecated props will be removed from `DQLEditor`: `enableValidationState`, `onValidityChange` (legacy `DQLEditorValidityInfo[]` payload), `onValidationStart`, and `onValidationEnd`. `ValidationState` will become the default payload for `onValidityChange`, and the `enableValidationState` migration flag will no longer be needed. To migrate early, set `enableValidationState` and use `onValidityChange` with the `ValidationState` payload. Replace `onValidationStart` with a check for `status: 'pending'` and `onValidationEnd` with a check for `status: 'done'` in `onValidityChange`.

### FilterField

The object notation of `keyPredicates` will be removed. Switch to the array notation:

```jsx
// Before
<FilterField validatorMap={{ keyPredicates: { status: { type: 'String' }, severity: { valuePredicate: { type: ['String', 'Number'] }, comparisonOperators: ['equals'] } } }} />

// After
<FilterField validatorMap={{ keyPredicates: [{ key: 'status', valueType: 'String' }, { key: 'severity', valueType: ['String', 'Number'], comparisonOperators: ['equals'] }] }} />
```

Use `migrateFilterFieldKeyPredicatesToArray` from `@dynatrace/strato-components` to convert your existing config.

- `FilterFieldValidatorMapTypePredicate` will be removed and can no longer be passed in `valuePredicate`. Use the `valueType` property instead.
- `FilterFieldDuration` will be removed. Instead of providing durations as `{ value, unit }` objects in the `validatorMap`, use plain strings such as `'10ms'`.

The deprecated `convertStringToFilterFieldTree` overload that accepts positional arguments will be removed. Instead, pass a `ConvertStringToFilterFieldTreeOptions` object as the second argument.

The following props will be removed from `FilterField.SuggestionGroup`: `DOMProps`, `StylingProps`, `data-testid`, `aria-labelledby`, `aria-describedby`, and `aria-details`. The component no longer renders your custom groups as DOM wrapper elements. Instead, it decomposes them before mounting. Each group label becomes a visually-hidden `<span>`, while each suggestion receives a matching `aria-describedby` attribute. Only `aria-label` will be retained to populate the hidden label text. The same props will be removed from `FilterField.Suggestion`.

When you select a suggestion inside an `in (...)` list, the component automatically appends a trailing `, ` (for example, `cluster in (dev, )`). Ensure your implementation accepts this trailing `, `.

### Core

The `FocusEvents` interface will be removed, along with its re-export from the `core` entry point. Use the `onFocus` and `onBlur` props on `FormControlProps` instead. See the property reference of any form component, such as [Checkbox](https://developer.dynatrace.com/design/components/forms/Checkbox/props.md), to see how it works.

In addition, the `onFocusChange` prop will be removed from the following form components, with no replacement:

- `Checkbox`
- `Radio`
- `TextArea`
- `NumberInputV2`
- `NumberInputBase`

Use `onFocus` and `onBlur` instead. Removing `onFocusChange` avoids redundancy, as `onFocus` and `onBlur` are now available on all form components.

### FormField

The `FormFieldReducerActionPayload` and `FormFieldReducerAction` types will be removed from public exports. These are internal reducer types. If your implementation used the `id` field on `FormFieldReducerActionPayload`, pass `id` directly to the form control instead.

### Forms

The `controlState` prop and the following related types will be removed: `FormControlState`, `FormControlValueState`, and `FormControlStateProps`. The prop will be removed from all form components, including `BaseInput`, `Calendar`, `Checkbox`, `DateTimePicker`, `DateTimeRangePicker`, `NumberInput`, `PasswordInput`, `Radio`, `RadioGroup`, `Select`, `Switch`, and `TextArea`. Use `FormFieldMessages` and native validation props instead.

The internal helpers `_useFormControlState` and `_useFormControlStateReturnType` will also be removed from public exports.

- The `focus` method will become mandatory.
- `validateAsync` will be removed. Use `validate()` instead, which will return `Promise<ValidationState>` directly.

The following deprecated exports will be removed:

- `parseTime`. Use `parseTimeAsTimeValue` from the SDK instead.
- `TimeDetails`. Use `TimeValue` instead.
- `TimeframeDetails`. Use `Timeframe` instead.

The `Hint` component and its associated `HintProps` type will be removed. Instead, use `FormFieldMessage` with `variant="hint"`.

### InlineButton

The `InlineButton` will no longer render a `<button/>` but a `<span/>`. Therefore, the forwarded ref type will change from `HTMLButtonElement` to `HTMLSpanElement`. Update any ref types in your code accordingly.

### NumberInput

- The `NumberInput` component will be removed. It is replaced by `NumberInputV2`. Note that `NumberInputV2` fires `onChange` whenever the value changes. If your implementation relied on `onBlur` to receive the updated value, switch to `onChange` instead.

### NumberInputV2

The `onFocus` and `onBlur` event types will change from `React.FocusEvent<HTMLInputElement>` to `React.FocusEvent<HTMLDivElement>` with the next major release, bringing them in line with the rest of the form-control surface where focus events consistently fire at the component boundary and report the root element as the event target. Update your handler signatures accordingly.

### PasswordInput

The `onFocus` and `onBlur` event types will change from `React.FocusEvent<HTMLInputElement>` to `React.FocusEvent<HTMLDivElement>` with the next major release, bringing them in line with the rest of the form-control surface where focus events consistently fire at the component boundary and report the root element as the event target. Update your handler signatures accordingly.

### SearchInput

The `onFocus` and `onBlur` event types will change from `React.FocusEvent<HTMLInputElement>` to `React.FocusEvent<HTMLDivElement>` with the next major release, bringing them in line with the rest of the form-control surface where focus events consistently fire at the component boundary and report the root element as the event target. Update your handler signatures accordingly.

In addition, `SearchInput` will stop firing `onBlur` when focus moves internally to the clear or suffix button. With this change, `onBlur` will fire only when focus leaves the entire component. If you rely on the current behavior, refactor before upgrading.

### Select

The `onFocus` and `onBlur` event types will change from `React.FocusEvent<HTMLElement>` to `React.FocusEvent<HTMLDivElement>` with the next major release to align with the shared form-control surface. Update your handler signatures accordingly.

### TextInput

The `onFocus` and `onBlur` event types will change from `React.FocusEvent<HTMLInputElement>` to `React.FocusEvent<HTMLDivElement>` with the next major release, bringing them in line with the rest of the form-control surface where focus events consistently fire at the component boundary and report the root element as the event target. Update your handler signatures accordingly.

The `TextInputControlledProps` and `TextInputUncontrolledProps` types will be removed. Instead, use `TextInputProps`.

### TimeframeSelector

The following deprecated items will be removed:

- The `_isSelected` prop on the `PresetItem` slot. This prop was for internal use only.
- The `clearable` prop along with the "Reset timeframe" button. The clear action is now available directly in the input. Therefore, remove `clearable` from your implementation.
