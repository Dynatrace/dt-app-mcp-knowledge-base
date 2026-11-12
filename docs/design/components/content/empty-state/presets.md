## Presets

Use the optional `preset` prop to show an empty state with or without an illustration, plus a title and details about why the view is empty. Pass the reason for the empty state as a string, or as an object to set further options.

| Reason              | Title                                                          | Details                                      |
| ------------------- | -------------------------------------------------------------- | -------------------------------------------- |
| `something-missing` | Data can't be displayed                                        | Complete the required setup to display data. |
| `no-result`         | No results found                                               | Try adjusting your timeframe or filters.     |
| `something-wrong`   | Something went wrong                                           | Try again or contact your admin.             |
| `create-new`        | There's nothing here yet                                       | Create something to get started.             |
| `no-permission`     | You'll need some additional permissions to access \<app name>. | Contact your admin for more information.     |
| `cancelled`         | Query cancelled                                                | Try again to fetch data.                     |

**Presets**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { EmptyState } from '@dynatrace/strato-components/content';

const Presets = () => {
  return (
    // highlight-next-line
    <EmptyState preset="something-wrong">
      <EmptyState.Actions>
        <Button color="primary" variant="accent">
          Try again
        </Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};
```

Slots you pass replace the matching default, so you can add actions or adjust the copy. To hide the illustration or change its context, pass an object with `context` or `showVisual`, for example `preset={{ reason: 'no-result', context: 'table' }}`. The context defaults to `generic`.

### No permission

Use the `no-permission` preset only when the user can't access the app at all. The title names the current app, and the details end with a link to the app in the Playground.

Pass the permissions the user is missing with the `missingPermissions` option to add a copyable code snippet with the missing permissions, the environment, the app name, and the user's email and ID.

To hide the Playground link, set the `showPlaygroundLink` option to `false`.

**NoPermission**

```tsx
import { EmptyState } from '@dynatrace/strato-components/content';

const NoPermission = () => {
  return (
    <EmptyState
      // highlight-start
      preset={{
        reason: 'no-permission',
        missingPermissions: ['storage:logs:read', 'storage:spans:read'],
      }}
      // highlight-end
    />
  );
};
```

When a policy hides only part of the data, use the `no-result` preset instead.
