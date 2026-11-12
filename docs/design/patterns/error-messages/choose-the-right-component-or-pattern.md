## Choose the right component or pattern

There are multiple components designed for displaying errors, warnings, and user feedback. Before anything, check whether the error can be prevented or whether a different pattern fits. Not every problem needs an error message.

- Prevent it first. Show a confirmation dialog before irreversible or risky actions, such as permanently deleting or overwriting. Label the button with the specific action ("Delete", not "Confirm") and keep "Cancel" available. See [Modal](https://developer.dynatrace.com/design/components/overlays/Modal/usage.md) for reusable text.

- If there's nothing to show, use an [EmptyState](https://developer.dynatrace.com/design/components/content/EmptyState/usage.md). This applies when nothing has been created yet, a search has no results, or an error prevented data from loading.

- To communicate an entity's status rather than an error to act on, use a [HealthIndicator](https://developer.dynatrace.com/design/components/content/HealthIndicator/usage.md). It shows the state at a glance without taking over the page, and it's best for an ongoing status that users can check at their own pace.

| Component or pattern                                                                                    | When to use                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Forms and validation](https://developer.dynatrace.com/design/patterns/forms-validation.md)             | For field errors: <br />- Provide hints to prevent errors and validate groups of inputs on submission.
- Validate individual fields on blur, or immediately if the field is already in an invalid state.                                                                  |
| [MessageContainer](https://developer.dynatrace.com/design/components/content/MessageContainer/usage.md) | For persistent, contextual messages scoped to the current page or section: <br />- Ideal for first-time setup flows, important notifications, account-level warnings, or surfacing form errors on submission.
- Don't auto-dismiss anything the user still has to act on. |
| [Toast](https://developer.dynatrace.com/design/components/notifications/Toast/usage.md)                 | For temporary, non-disruptive feedback: <br />- Give subtle feedback on actions or background processes, regardless of where the user is in the app.
- Avoid for errors requiring immediate action or impactful changes.                                                  |
