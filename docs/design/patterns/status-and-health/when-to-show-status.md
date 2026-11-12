## When to show status

Status indicators help you guide the users' attention and highlight the most essential information in your app. You should take into account the following points when communicating statuses:

- Always include them when **communicating warnings and critical statuses**. It will help users to make informed decisions, to respond to issues accordingly, and to assess whether they're required to act.
- Indicating ideal statuses can help to reassure users that everything is okay.
- Be aware that **over-communicating statuses can overwhelm users** and may cause frustration. Try to reduce the number of indicators you're using and only highlight the most important information required to understand the context.
- Always prioritize negative over positive statuses to convey crucial information first.

![A table row with a decent amount of status indicators as do and too many status indicators as don't](https://developer.dynatrace.com/assets/images/status-and-health-when-to-show-light-efb5c58c5ed32de2967a54e51c6e14a6.webp)

### Communicating status changes

Statuses might change over time due to user actions or something happening on a system level.

- Use the [Toast](https://developer.dynatrace.com/design/components/notifications/Toast/index.mdx/) component to inform users about important status changes. Keep in mind that Toasts will draw users' attention away from their actual task, so use them sparingly and only if users must know about a status change.
- Otherwise, updating existing status indicators without actively informing users is usually enough.
