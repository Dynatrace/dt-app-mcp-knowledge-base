## How to deliver an intent

Intents reach users through different mechanisms, ordered by specificity. Choosing the right one determines whether users land where they need to go or get stuck picking from a list.

### Explicit intents

Use an explicit intent when your app knows **exactly** where to send the user. The user clicks, the target app opens with all context applied. No dialog, no choices.

![An IntentButton menu opened on a host entity, with the explicit intent "View host" (Hosts app icon highlighted) as the primary action, "Investigate" as a secondary action, and "Open with..." as the fallback entry at the bottom](https://developer.dynatrace.com/assets/images/intent-context-menu-99c671276043b238ac52dce6ef47d18a.png)

This is the most common pattern. It powers primary actions in intent menus and the left side of the `IntentButton` split button, the primary action such as **View in Hosts** or **Open in Notebooks**.

- **When to use**—the target app and action are obvious for the resource type. You're connecting a host entity to the Hosts app, a trace ID to Distributed Traces, a DQL query to Notebooks. The 80/20 case.

- **How it works**—your app calls `sendIntent()` with a `recommendedAppId` and `recommendedIntentId`, or uses the `<IntentButton>` with those options set. The AppShell skips the **Open with...** dialog and opens the target app directly.

```tsx
<IntentButton
  payload={{ 'dt.entity.host': 'HOST-F66B242CD3A5E38E' }}
  options={{
    recommendedAppId: 'dynatrace.classic.hosts',
    recommendedIntentId: 'view-host',
  }}
>
  View in Hosts
</IntentButton>
```

> **Tip**
>
> Do not hardcode your own entity-to-app mappings. Use the platform's recommended intents mapping to determine which target app and intent ID to use for a given resource type. This keeps navigation consistent across the platform.

### Add-ons

Use an add-on when the user should **stay in the current app** but borrow functionality from another. The target app renders inside an overlay. The user's context is preserved, and they return to where they were when they close it.

- **When to use**—when leaving the current app would disrupt the user's workflow. The user needs a capability from another app without leaving their current context. For example, creating an alert from a dashboard tile, or playing back a Session Replay inside a detail view.

- **How it works**—the target app declares an `overlay` mode in its intent configuration. When your app triggers the intent, the AppShell loads the target app's iframe inside an overlay instead of navigating to it.

```json
{
  "intents": {
    "create-alert": {
      "description": "Create an alert",
      "addonMode": "overlay",
      "properties": {
        "dt.query": { "required": true, "schema": { "type": "string" } }
      }
    }
  }
}
```

Add-ons differ from Design System components: a DS component gives you building blocks to shape your own UI, while an add-on delivers a self-contained experience built by a specialist team. Use an add-on when you need expert functionality (like Session Replay or anomaly detection) to appear identically across multiple apps.

For details on building and consuming add-ons, see [Add-on intents](https://developer.dynatrace.com/develop/guides/navigation/intents/addon-intents.md).

> **Caution**
>
> Application add-ons should not open other application add-ons. Currently, if an add-on triggers another add-on, the calling add-on closes and the new one opens, losing the user's context. Proper stacking for platform-level system primitives—such as the intent picker, file upload, or permission prompts—is in development.

### Open with... dialog (fallback)

The **Open with...** dialog is the fallback that surfaces **every** app capable of handling the current intent payload. It appears when no explicit intent is configured or when the user deliberately wants to see all options.

- **When it appears**:

  - Your app calls `sendIntent()` without specifying a `recommendedAppId`.
  - The user clicks the three-dot menu on an `IntentButton` and selects the **Open with...** option.
  - The `recommendedAppId` doesn't exist or can't handle the payload.

- **What to know**:

  - Always provide this as a fallback. Do not suppress it.
  - In the `IntentButton` split button, the **Open with...** option sits at the bottom of the three-dot menu, after explicit intents and add-ons.
  - The label must be exactly `Open with...` with no variations.
