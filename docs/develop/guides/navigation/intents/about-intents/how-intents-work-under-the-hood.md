## How intents work under the hood

### Lifecycle

1. **Source app sends an intent**—your app calls `sendIntent(payload, options)` or renders an `<IntentButton>`. The communication uses the `window.postMessage` API to reach the AppShell.

2. **AppShell resolves the target**—if a `recommendedAppId` and `recommendedIntentId` are provided and valid, the AppShell opens that app directly. Otherwise, it finds all installed apps whose intent declarations match the payload properties and shows the "Open with..." dialog.

3. **AppShell launches the target app**—the target app opens in an iframe (full page for navigation intents, overlay for add-ons). The intent payload is passed as URL query arguments.

4. **Target app handles the intent**—the target app calls `getIntent()` to read the payload and perform the requested action.

### Intent matching

The AppShell matches an intent payload against every installed app's intent declarations in `app.config.json`. A match occurs when an app declares intent properties that the source app's payload satisfies:

- If the target declares `dt.entity.host` as `required: true`, the source must include `dt.entity.host` in the payload.
- Extra properties in the payload that the target does not declare are stripped before delivery.
- Use `keyProperties` in `sendIntent()` to narrow matching when your payload contains multiple properties.

### Payload structure

An intent payload is a set of key-value pairs carrying the context to share:

```ts testable
import { IntentPayload } from '@dynatrace-sdk/navigation';

const intent: IntentPayload = {
  'dt.entity.host': 'HOST-F66B242CD3A5E38E',
  'dt.timeframe': { from: 'now-2h', to: 'now' },
};
```

Common payload properties include entity IDs (`dt.entity.*`), DQL queries (`dt.query`), and timeframes (`dt.timeframe`). The target app defines which properties it accepts and requires in its intent declaration.

### Limitations

- **One-way payload delivery**—the initial intent payload is passed via URL query arguments when the target app loads. For two-way communication, use intents-with-response, where the target add-on can pass data back asynchronously.
- **Keep payloads concise**—while the previous URL length limitation has been fixed, it's still best practice to pass identifiers and queries rather than large data blobs.
