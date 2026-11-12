## Content guidelines

Write in a calm, direct tone. The user has hit a dead end, so the copy should point them forward without making them panic.

- Use sentence case throughout.
- Use common contractions ("isn't" rather than "is not").
- Don't make the user feel responsible for the empty state.
- Don't be overly apologetic. Phrases like "Sorry, nothing here!" add noise without helping.

### Visual

- Use the `VisualPreset` slot to add a contextual illustration.
  - Set the `type`—the reason the state is empty—first: `something-missing` (question mark), `no-result` (empty circle), `something-wrong` (cross), `create-new` (plus), `no-permission` (lock). See [Use cases](#use-cases) for more details.
  - Then, set the `context`—what would normally appear in that area: `generic`, `document`, `table`, `chart`, `query` (e.g., `chart` for a chart area; `generic` when it's uncertain or mixed).
- When using the small component size inside a section, tile, or panel, prefer an icon over an illustration, as illustrations can feel heavy in tight spaces. Skip the illustration in search or filter views, where the `EmptyState` can appear and disappear as the user types. An illustration is still appropriate when a small `EmptyState` fills an entire view, such as when no item has been selected yet.

### Title

In a few words, tell the user what's missing or what state is in effect.

- Don't add punctuation at the end.
- Don't open with an apology or vague exclamation.

|  Do              |                                     |
| ---------------- | ----------------------------------- |
| No matching logs | Oops, there's nothing to show here! |

### Details

In one or two sentences, explain what the user can do next. If there's no action available, tell them who to contact or where to go.

- End with a period.
- Don't repeat the title.
- Lead with the action or next step, not a restatement of the problem.

|  Do                                             |                                   |
| ----------------------------------------------- | --------------------------------- |
| Try changing the keywords or clear your search. | Sorry, no logs match your search. |

### Actions

Keep the label to one or two words, starting with an imperative verb. Learn more about the [Button](https://developer.dynatrace.com/design/components/buttons/Button.md) component.

- The label should describe the action the user will take.
- Omit the button:
  - If no action is available.
  - In a no-result state; guide the user to adjust their query instead and consider adding a "Clear filters" or "Clear search" button.

|  Do         |          |
| ----------- | -------- |
| Upload file | Continue |

### Footer

Include a footer only when a documentation link or support article is genuinely useful. Don't add one by default. See [Links](https://developer.dynatrace.com/design/components/typography/Link.md).

|  Do                            |            |
| ------------------------------ | ---------- |
| Learn more about log ingestion | Learn more |
