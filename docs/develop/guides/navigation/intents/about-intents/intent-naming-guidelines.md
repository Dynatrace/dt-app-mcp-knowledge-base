## Intent naming guidelines

Every intent has two user-facing identifiers, which affect discoverability and clarity:

- The **intent ID**—which is the key in `app.config`
- The **description**—shown on hover in the intent menu

### Intent IDs

The intent ID is the key you declare in your app configuration under `app.intents`. It should be short, lowercase, and describe the action your app performs.

Use `kebab-case` for new intent IDs:

| Do             | Don't                  |
| -------------- | ---------------------- |
| `view-host`    | `ViewHost`             |
| `share-chart`  | `shareChart`           |
| `create-alert` | `alert`                |
| `view-host-v2` | `view_host_deprecated` |

Some older intents use `snake_case` as in `view_host` or `view_service`. Both formats work, but `kebab-case` is the preferred convention for new intents.

Follow these rules:

- Use lowercase letters, underscores, and hyphens only. No spaces, no camelCase.
- Start with a verb that describes the action. For example, `view`, `create`, `edit`, `share`, `add`, or `analyze`.
- Don't include the app name. The intent ID should describe the action, not the destination. The platform maps actions to apps.
- Don't include `deprecated`, `new`, or `old` in the intent ID. Use a `-v2` suffix for versioned replacements.
- Keep it short. The ID appears in URLs and API calls.

### Descriptions

The `description` field is a short sentence that appears as the label in the intent context menu and in the **Open with...** dialog. It tells the user what will happen.

Follow this format: `[action verb] + [object]`. See the following table:

| Good                    | Bad         | Why                                    |
| ----------------------- | ----------- | -------------------------------------- |
| "View the host"         | "Host"      | Names the destination, not the action  |
| "Add to dashboard"      | "Dashboard" | Names the destination, not the action  |
| "Analyze query results" | "Notebooks" | Users choose by action, not app name   |
| "Create alert"          | "Alerting"  | Gerund or category name, not an action |

The description should complete the sentence `This will...`. If `This will Host` doesn't make sense, rewrite it.
