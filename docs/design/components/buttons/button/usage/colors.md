## Colors

Buttons come in five colors, each with a unique semantic meaning.

![Five Button colors — Neutral, Primary, Success, Warning, and Critical — each shown in default, emphasized, and accent variants.](https://developer.dynatrace.com/assets/images/button-colors-light-1d78765190b1012594c34e6615cec576.webp)&#x20;

### Neutral

- Use for common actions that shouldn't stand out.
- Neutral has no semantic meaning and is, therefore, the default color.

### Primary

- Use for important actions that need to stand out. For example, a submit button in a form.
- Use a maximum of one primary button per view or context to support a clear visual hierarchy.
- If placing the primary button on a background (for example, in a `Container`), only use the primary-colored background.

### Success

- Don't use a success-colored button for positive or confirming actions such as "Submit" or "Save." Instead, use a primary-colored button.
- If placing the success button on a background (for example, in a `Container`), only use the success-colored background.

### Warning

- Use for actions that trigger significant changes and could be harmful. For example, a "Stop import" button in a dialog or an action that could affect the cost of Dynatrace, such as "Update query".
- Use to ensure that users pay special attention before triggering an action.
- If placing the warning button on a background (for example, in a `Container`), only use the warning-colored background.

### Critical

- Use for the final confirmation of a destructive action. For example, a "Delete" button in a dialog.
- If placing the critical button on a background (for example, in a `Container`), only use the critical-colored background.
