## Browser console methods

The AppShell exposes two global methods for debugging intents from the browser's developer tools.

### Prerequisites

1. Open your browser's developer tools by pressing F12 or `Ctrl+Shift+I` in Windows/Linux and `Cmd+Option+I` in Mac.
2. Set the JavaScript context to **top**, not the app's iFrame. This is important because the AppShell methods are only available in the top-level context.

![Debug intents](https://developer.dynatrace.com/assets/images/debug-intents-cd80e2cc214e2d2b58307fed0b5f86ed.png)

### `sendIntent` method

Use this method to test the receiving side of your app without building the sending UI first. The global `sendIntent` method has the same functionality as the SDK method.

Use it to manually trigger an intent from the console and test how the AppShell resolves it:

```ts
// Test if your intent payload opens the right target
sendIntent({ 'dt.entity.host': 'HOST-F66B242CD3A5E38E' });

// Test with explicit target to bypass the dialog
sendIntent(
  { 'dt.entity.host': 'HOST-F66B242CD3A5E38E' },
  {
    recommendedAppId: 'dynatrace.classic.hosts',
    recommendedIntentId: 'view-host',
  },
);
```

### `lastIntent` variable

Use it to verify that the source app sent the payload you expected. If the payload is missing properties or has unexpected values, the issue is on the sending side. The `lastIntent` variable holds a reference to the most recently sent intent in your browser window:

```ts
lastIntent;
// -> { intentPayload: { 'dt.entity.host': 'HOST-F66B242CD3A5E38E' } }
```
