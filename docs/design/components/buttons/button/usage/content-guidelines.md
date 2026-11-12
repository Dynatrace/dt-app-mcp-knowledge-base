## Content guidelines

![Anatomy of a Button with three numbered callouts mapping to the parts described below: Button label, Prefix icon, and Suffix icon.](../../components-docs-assets/button-content-anatomy-light.webp)&#x20;

1. Button label
2. Prefix icon
3. Suffix icon

### Button label

- Use sentence case (capitalize only the first word and any proper nouns, such as brand names). In the following example, the action deletes a user's workflow:

![Example of a correct label "Delete workflow" using sentence case, and an incorrect label "Delete Workflow" that capitalizes the noun confusing it for the app name.](../../components-docs-assets/button-content-examples-1-light.webp)&#x20;

In the next example, the action opens the Notebooks app:

![Example of a correct label "Open Notebooks" that capitalizes the app name, and an incorrect label "Open notebooks" that does not.](../../components-docs-assets/button-content-examples-2-light.webp)&#x20;

- Keep it to one to three words.
- Remove unnecessary words such as "the", "a", or "an".
- Don't use punctuation (no commas, ellipses, full stops, exclamations, or question marks). This differs from inline text links such as [ExternalLink](https://developer.dynatrace.com/design/components/typography/ExternalLink/usage.md) or [Link](https://developer.dynatrace.com/design/components/typography/Link/usage.md), which can end a sentence with a period. A button label never takes punctuation.
- Start with a verb describing the user's next action → [Verb] or [Verb] + [noun].

![Example of two correct label forms: "Run" (verb only) and "Run query" (verb + noun) — both start with a verb and are acceptable.](../../components-docs-assets/button-content-examples-3-light.webp)&#x20;

![Example of two correct label forms: "Save" (verb only) and "Save changes" (verb + noun) — both start with a verb and are acceptable.](../../components-docs-assets/button-content-examples-4-light.webp)&#x20;

![Example of two correct label forms: "Delete" (verb only) and "Delete dashboard" (verb + noun) — both start with a verb and are acceptable.](../../components-docs-assets/button-content-examples-5-light.webp)&#x20;

- Avoid vague labels, especially for warning and critical buttons.

![Example of a correct label "Save changes" that is specific and clear, and an incorrect label "Submit" that is too vague, especially for warning or critical actions.](../../components-docs-assets/button-content-examples-6-light.webp)&#x20;

![Example of a correct label "Set up" that starts with a verb and describes the action, and an incorrect label "Let's go" that is vague and does not describe what happens.](../../components-docs-assets/button-content-examples-7-light.webp)&#x20;

![Example of a correct label "Delete" that names the destructive action specifically, and an incorrect label "Confirm" that is too vague for a critical button.](../../components-docs-assets/button-content-examples-8-light.webp)&#x20;

- For restricted buttons (for example, due to missing permissions), use a tooltip to add more details.

### Prefix and suffix icons

- Only use icons if they visually support the action. Don't rely solely on an icon to convey meaning.

![Example of a correct label "Edit workflow" that pairs a verb with the pencil icon, and an incorrect label "Workflow" that omits the verb and relies solely on the icon for meaning.](../../components-docs-assets/button-content-examples-9-light.webp)&#x20;

- If the button opens another app, use [IntentButton](https://developer.dynatrace.com/design/components/buttons/IntentButton.md) instead. In `IntentButton`, the icon of the app that will open appears before the label.

![Example of a correct "Automate" button as an IntentButton with an app icon and overflow menu, and an incorrect use as a plain Button without an icon that opens another app.](https://developer.dynatrace.com/assets/images/button-content-examples-10-light-cbdc45fcb98bca5d1aed0a26e72d665d.webp)&#x20;
