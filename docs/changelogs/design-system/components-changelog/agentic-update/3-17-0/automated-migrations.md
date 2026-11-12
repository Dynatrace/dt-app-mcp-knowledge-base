## Automated migrations

Run the automated migration tool first to apply all available codemods for this release:

```bash
dt-app update @dynatrace/strato-components
```

Sections marked **Automated by codemod** below have already been applied — verify the result rather than applying them manually. Sections without that marker require manual code changes.

---

Each section below corresponds to a change in this release that requires consumer attention. Sections are separated by `---`.

---

This is an opt-in feature. No existing code requires migration.

To make individual rows of the `DataTable` from `@dynatrace/strato-components/tables` non-interactive, pass a `disableRowInteractivity` function in the `interactiveRows` configuration object. It receives the row data and returns `true` for rows that must not be interactive.

```tsx
import { DataTable } from '@dynatrace/strato-components/tables';

<DataTable
  columns={columns}
  data={variables}
  interactiveRows={{
    disableRowInteractivity: (row) => !row.trusted,
  }}
/>;
```

Disabled rows show no hover, active or focus effects, are skipped by keyboard navigation and don't call `onActiveRowChange`. Row actions, cell actions and other interactive elements inside the row remain interactive.

---

To cap the size of an `EmptyState` from `@dynatrace/strato-components/content` that uses `size="auto"`, set `maxSize` to `'small'`, `'default'` or `'large'`, for example `<EmptyState size="auto" maxSize="default" />`. `maxSize` defaults to `'large'` and is only allowed with `size="auto"`. No existing code requires migration.

---

This is an opt-in feature. No existing code requires migration.

Set the `preset` prop of the `EmptyState` from `@dynatrace/strato-components/content` to a reason. Slots you pass replace the matching default.

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { EmptyState } from '@dynatrace/strato-components/content';

<EmptyState preset="something-wrong">
  <EmptyState.Actions>
    <Button>Try again</Button>
  </EmptyState.Actions>
</EmptyState>;
```

To change the visual context or hide the visual, pass an object, for example `preset={{ reason: 'something-wrong', context: 'table' }}` or `preset={{ reason: 'something-wrong', showVisual: false }}`.

For the `no-permission` preset, pass the permissions the user is missing to include them in the copyable details for an admin: `preset={{ reason: 'no-permission', missingPermissions: ['storage:logs:read'] }}`. To hide the Playground link, set `showPlaygroundLink: false`.
