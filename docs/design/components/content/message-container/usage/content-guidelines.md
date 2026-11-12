## Content guidelines

1. Prefix (required)
2. Title (optional)
3. Details (required)
4. Actions (optional)

### Prefix

- Use the prefix, which is usually an icon, to communicate the semantic meaning of the message quickly.
- Don't use colored `MessageContainer` components without a prefix if quick recognition of the semantic meaning is needed.
- The prefix comes with pre-configured icons for the different `MessageContainer` variants. If you customize the prefix because a different icon better fits your use case, follow the [Status and health guidelines](https://developer.dynatrace.com/design/patterns/status-and-health.md).

![Example of a correct warning MessageContainer with a prefix icon for quick recognition, and an incorrect one without a prefix icon.](../../components-docs-assets/messagecontainer-prefix-light.webp)&#x20;

### Title

- If the message is long or complex, add a title and a description to the `MessageContainer`. This helps users quickly understand what the message is about when scanning the page.

![Example of a correct long MessageContainer with a title and description to aid scanning, and an incorrect one with a long message and no title.](https://developer.dynatrace.com/assets/images/messagecontainer-title-long-light-1a1b5ee42e2e4c4ddfd83f14ea9a8523.webp)&#x20;

### Details

- When the message is short, clear, and easy to understand, avoid adding a title.

![Example of a correct short MessageContainer without a title, and an incorrect one where a short, clear message is unnecessarily given a title.](https://developer.dynatrace.com/assets/images/messagecontainer-title-short-light-ca472006a1b3456a09e83959ac9761c8.webp)&#x20;

### Actions

- If possible, include actions that either help users resolve the situation or navigate them to more detailed information.
- Avoid including more than two actions.

![A critical MessageContainer about blocked segment access, with two actions: "Clear segments" to resolve the issue and "Copy details" to share with an admin.](https://developer.dynatrace.com/assets/images/messagecontainer-actions-light-44de49f51a4a48a5c58277992cc044da.webp)&#x20;
