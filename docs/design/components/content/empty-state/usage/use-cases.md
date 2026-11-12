## Use cases

Each use case maps to one illustration `type`. The elements you include depend on the component size. Refer to [Sizes](#sizes) for what's recommended, or optional, and what to avoid depending on the size.

### Create new

The user visits for the first time and hasn't created anything yet, or needs to add, upload, or select an item.

#### Recommended content structure

- **Visual**—pick the illustration that matches what would normally appear here: `generic`, `document`, `table`, `chart`, or `query`.
- **Title**—name what hasn't been created yet.
- **Details**—describe what the user needs to create and any relevant requirements.
- **Actions**—use a context-appropriate label, such as "New" or "Upload".
- **Footer**—include only if it genuinely helps.

#### Examples

![Medium-size create-new EmptyState: an illustration with a plus cue, a title, details text, a primary create button, and a learn-more link.](https://developer.dynatrace.com/assets/images/empty-state-create-new-light-561bae2a3f2f1736c67de5cd1e54ff82.webp)

![Small-size create-new EmptyState: an illustration with a plus cue, a title, and details text, with no button or footer.](../../components-docs-assets/empty-state-create-new-small-light.webp)

### Something missing

The user hasn't configured or enabled a setting or feature, so the data can't be displayed.

#### Recommended content structure

- **Visual**—pick the illustration that matches what would normally appear here: `generic`, `document`, `table`, `chart`, or `query`.
- **Title**—name what's missing or not yet configured.
- **Details**—explain how the user can fix it. If there's no fix, give them a way back.
- **Actions**—add an action if there's something the user can do.
- **Footer**—include only if it genuinely helps.

#### Examples

![Medium-size something-missing EmptyState: an illustration with a question-mark cue, a title, details text, a primary set-up button, and a learn-more link.](https://developer.dynatrace.com/assets/images/empty-state-something-missing-light-374129dd77338c97b9c6b92777dc5d44.webp)

![Small-size something-missing EmptyState: a single line of details text, with no visual, title, button, or footer.](../../components-docs-assets/empty-state-something-missing-small-light.webp)

> **Note**
>
> If the small empty state only needs a single line of text with no other elements, consider using a plain text component instead of `EmptyState`.

### No result

A search, filter, or query returned nothing, or a requested page isn't available (404).

> **Note**
>
> If results are hidden by conditional access rather than a true "no match", apply the conditional-access guidance from [No permission](#no-permission). Don't reveal that the data exists.

#### Recommended content structure

- **Visual**—pick the illustration that matches what would normally appear here: `generic`, `document`, `table`, `chart`, or `query`.
- **Title**—name what the system couldn't find.
- **Details**—guide the user to adjust their query, filters, keywords, or timeframe.
- **Actions**—skip the action button. You're already guiding the user to refine their query in the details.
- **Footer**—include only if it genuinely helps.

#### Examples

![Medium-size no-result EmptyState: an illustration with an empty-circle cue, a title, details text, and a secondary clear-search button, with no footer.](https://developer.dynatrace.com/assets/images/empty-state-no-result-light-d9244d49639c0a067a65a0c299c9fb2d.webp)

![Small-size no-result EmptyState: a small icon with an empty-circle cue, a title, and details text, with no action button or footer.](../../components-docs-assets/empty-state-no-result-small-light.webp)

### Something is wrong

The system couldn't load data due to an error, either identifiable or unknown. Use this when the error leaves a section or component with nothing to show. If existing content is still visible, or the error needs to surface alongside the UI, refer to [Error messages](https://developer.dynatrace.com/design/patterns/error-messages.md) to choose the right component.

#### Recommended content structure

- **Visual**—pick the illustration that matches what would normally appear here: `generic`, `document`, `table`, `chart`, or `query`.
- **Title**—say what went wrong.
- **Details**—include an error code and a recovery step. If there's no fix, give the user a way back.
- **Actions**—let the user go back or try again if no better action is available.
- **Footer**—include only if it genuinely helps.

#### Examples

![Medium-size something-wrong EmptyState: an illustration with a cross cue, a title, details text, an error code, and a secondary refresh button, with no footer.](https://developer.dynatrace.com/assets/images/empty-state-something-wrong-light-95939431390660e88c3ad085a887673f.webp)

![Small-size something-wrong EmptyState: a title and details text, with no visual, button, or footer.](../../components-docs-assets/empty-state-something-wrong-small-light.webp)

### No permission

This use case covers two situations.

- **Full denial** (no access to the app or its core data)—Use `no-permission`. Show "You'll need some additional permissions to access \<app name>." Include the copyable details and the "Try Playground" link.
- **Conditional access** (data exists but a condition hides it)—Use `no-result`. Show "No \<entity> available", and never reveal that the data exists.

![Medium-size no-permission EmptyState: an illustration with a lock cue, a title, details text, a copyable code block of permission details to share with an admin, and a link.](https://developer.dynatrace.com/assets/images/empty-state-no-permission-light-a6d987462d4644cfa6e97f07095de6a9.webp)
