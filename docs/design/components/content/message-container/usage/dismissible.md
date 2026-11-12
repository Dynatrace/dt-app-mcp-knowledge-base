## Dismissible

- Use dismissible `MessageContainer` components if the information doesn't have to be addressed by users to continue their current task. For example, when promoting a new version of an app.
- Don't use dismissible `MessageContainer` components if the information they contain is essential and dismissing it would leave users confused or stuck in their task. For example, when informing about a problem that needs to be resolved.
- Hide the `MessageContainer` if the situation is resolved or the information becomes irrelevant. Don't wait until users hide it if it's dismissible.
- Consider storing that users have dismissed a `MessageContainer` and avoid showing it again.

![A dismissible MessageContainer announcing a new app version, with an "Update now" action and a close button, above a non-dismissible one for a permission error.](https://developer.dynatrace.com/assets/images/messagecontainer-dismiss-light-cab976c308e4b225b43e5e2eef80f129.webp)&#x20;
