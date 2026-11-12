## Severity and placement

Match the component's disruptiveness, color, and icon to the error's severity:

| Error severity | How it appears                                                            | Icon and variant                                                                                                                                              | Examples           |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **Low**        | Inline or below an input — doesn't interrupt the user's flow              | - Warning icon + Warning color tokens or component variants
- Critical icon + Critical color tokens or component variants (for form validation by convention) | * Field error      |
| **Medium**     | Page-level summary at the top of the view — interrupts until acknowledged | - Warning icon + Warning color tokens or component variants
- Critical icon + Critical color tokens or component variants                                     | * MessageContainer |
| **High**       | Blocking modal or full-page error — blocks entirely until resolved        | - Critical icon + Critical color tokens or component variants                                                                                                 | * Modal            |

> **Note**
>
> Never rely on color alone to signal severity. Always pair an icon with text so the meaning remains clear for users who can't distinguish colors. For both warning and critical states, use the base icon (`WarningIcon` or `CriticalIcon`) when something needs attention, and the failed variant (`WarningFailedIcon` or `CriticalFailedIcon`) when a process has failed.

Error messages should sit as close to the source of the problem as possible:

- Place field errors directly below its input and clear it when the value is valid.

|  Do                                   |  Don't              |
| ------------------------------------- | ------------------- |
| Add an end time after the start time. | Invalid time range. |

- When applicable, show a summary that mirrors each field's exact wording so the summary and field errors read identically. Place it where the problem surfaces: near the submit button for form errors that appear on submission, or at the top of the view or its relevant section for issues not tied to a direct form, such as a missing configuration.

|  Do                                                                                      |  Don't                                    |
| ---------------------------------------------------------------------------------------- | ----------------------------------------- |
| To save your configuration:- Add a target between 0 and 100
- Define at least one entity | Validation failed:- Invalid input
- Error |
