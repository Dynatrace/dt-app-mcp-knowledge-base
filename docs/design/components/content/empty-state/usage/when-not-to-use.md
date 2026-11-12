## When not to use

- Existing content is still on screen and an action only failed. Use [Error messages](https://developer.dynatrace.com/design/patterns/error-messages.md) instead.
- The state is temporary, such as loading or saving. Use the [Loading and saving](https://developer.dynatrace.com/design/patterns/loading-saving.md) pattern.
- When a single action is blocked, such as a disabled control for which the user lacks permission.
