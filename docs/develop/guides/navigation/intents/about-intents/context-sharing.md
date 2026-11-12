## Context sharing

When a target app opens through an intent, it can access:

- **Platform context** shared between all apps: timeframe, segment, tenant info
- **Intent payload**—the specific data passed by the source app via the intent
- The target app does **not** have access to the source app's internal state beyond what is in the intent payload.

This applies equally to full-page navigation intents and overlay add-ons.
