## Apply filters

Users can apply filters to a dataset by triggering a dedicated button or using a keyboard shortcut.

- Filter values must be case-insensitive, while keys must be case-sensitive. For example, `Status = Open` and `Status = open` should return the same results, while `Status` and `status` are treated as different keys.
- When "Clear all" is used, wait for a confirmation before applying filter changes. For example, the user selects the "Apply" button or presses `Cmd+Enter` on macOS, or `Ctrl+Enter` on Windows/Linux.
- Never apply filters automatically while users are typing. Wait for an explicit user action instead.

### Apply button

- Always provide a dedicated button near the FilterField to apply filters to the dataset.
- Use different button colors and variants to indicate if a filter has changed or is already applied:
  - If the FilterField is empty, or the filters have already been applied, use a neutral-colored, emphasized button.
  - If the filters have changed but haven't been applied yet, use a primary-colored, accent button.
- Include a `ProgressCircle` in the `Button.Prefix` and change the button label to "Cancel" while changes are being applied or the data is refreshing.
  - See [Loading and saving behavior](https://developer.dynatrace.com/design/patterns/loading-saving.md#behavior) for guidance on when and for how long to show a loading indicator.
- Always keep the button clickable. Never disable it.

![Four numbered states of the apply button beside a FilterField: "Refresh"
with an empty field, "Apply" in primary accent when filters have changed,
"Cancel" with a loading indicator, and "Refresh" once filters are
applied.](https://developer.dynatrace.com/assets/images/filterfield-apply-button-light-e7a5a4be708bac86c4a872e7d68cbde6.webp)

Example of a button near the FilterField that refreshes the dataset (1, 4),
reacts to filter changes (2), and allows cancellation when something is
loading (3).

### Keyboard shortcuts

- Trigger the refresh or apply action when users press `Cmd+Enter` on macOS and `Ctrl+Enter` on Windows/Linux while interacting with the FilterField. Find more details in the [Use the FilterField in a form documentation](https://developer.dynatrace.com/design/components/filters/FilterField.md#use-filterfield-in-a-form).
- Trigger the filter submission when users press `Enter` while the FilterField input is focused.
