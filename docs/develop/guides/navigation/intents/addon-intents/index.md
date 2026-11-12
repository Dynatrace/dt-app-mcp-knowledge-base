Add-ons allow users to complete quick actions without switching apps. An add-on is a lightweight app component that responds to an intent—a request from another app to perform a specific task—and renders the target app in an overlay on top of the current app, rather than navigating away.
The user stays in their current context, borrows functionality from the add-on, and returns to where they were when they close it. Add-ons can also return a value to the app that sent the intent.

Examples include:

- Pick a Slack channel
- Refine a Dynatrace Pattern Language (DPL) pattern
- Replay a user session

From a code perspective, add-ons and regular intents use the same declaration format. The difference is the `addonMode` property in the intent configuration: setting it to `"overlay"` tells the AppShell to load the target app in an overlay instead of navigating to it.

![Add-on anatomy ](https://developer.dynatrace.com/assets/images/add-on-anatomy-599470c839100cff490664affaade7ef.png)
