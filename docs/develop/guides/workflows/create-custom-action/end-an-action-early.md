## End an action early

If you want to exit from your action at any point, you can use the `UnsuccessfulActionError` error class from `@dynatrace-sdk/automation-action-utils/actions` as follows:

```tsx skip-testing
throw new UnsuccessfulActionError('A message why the action failed');
```

This will result in the action's failure with the given message.
