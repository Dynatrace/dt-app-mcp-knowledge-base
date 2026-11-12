## When not to use

- To continue a user flow in another Dynatrace app. Use [IntentButton](https://developer.dynatrace.com/design/components/buttons/IntentButton.md) instead and read about [intents](https://developer.dynatrace.com/develop/guides/navigation/intents.md).
- To navigate to a resource outside the current app (another environment, a Dynatrace site such as docs.dynatrace.com, or a third-party domain). Use [ExternalLink](https://developer.dynatrace.com/design/components/typography/ExternalLink.md) instead, which always opens in a new tab.
- To trigger actions or events. Use [Button](https://developer.dynatrace.com/design/components/buttons/Button.md) instead, even in those rare cases when a button serves a navigational purpose — for example, to align visually with surrounding actions, or for "Next" and "Previous" in a guided user flow.

![Side-by-side comparison: Link for in-app navigation, ExternalLink (with an external-link icon) for pages outside the app, Button for triggering actions, and IntentButton (with an app icon) for opening another app.](https://developer.dynatrace.com/assets/images/link-externallink-vs-buttons-light-696c41dd580cf9bf986e22f4d4e5588c.webp)
