## Content guidelines

![Anatomy of an ExternalLink with two numbered callouts mapping to the parts described below: the link text and the ExternalLink icon that signals the destination is outside the app.](../../components-docs-assets/externallink-content-anatomy-light.webp)

1. External link text (required)
2. External link icon (required)

External links can be inline or standalone:

- Inline links sit within a sentence or paragraph, usually for further reading or to provide additional context.
- Standalone links appear on their own, separate from surrounding text. For example, a resource name like "Dynatrace Documentation" shown on its own.

### External link text

- Describe the destination environment, resource, or domain, so it makes sense on its own. Avoid generic link text such as "here", "this page", or "more".
- Give each link unique text. Don't reuse the same link text for different links on the same page.
- Don't use a raw URL as the label.
- Keep it short. Remove unnecessary words such as "the", "a", or "an".
- Use sentence case (capitalize only the first word and any proper nouns, such as brand names).
- Link only the destination text, not the whole sentence.
- Use external links sparingly. Too many links clutter a view and make it harder for users to find their next step.
- Use patterns such as "Learn more about [topic]" or "Visit [resource name]".
- When an external link ends a sentence, place the period directly after the `ExternalLinkIcon` with no space in between, and keep it outside the link so it isn't part of the underlined text. This differs from [Button](https://developer.dynatrace.com/design/components/buttons/Button/usage.md) and [IntentButton](https://developer.dynatrace.com/design/components/buttons/IntentButton/usage.md) labels, which never take punctuation.

![Example of a correct external link in a sentence, linking only the descriptive page "Ingest data into Dynatrace," within "Learn how to Ingest data into Dynatrace," and the incorrect example linking the whole sentence.](../../components-docs-assets/externallink-content-examples-1-light.webp)

![Example of a correct external link using descriptive text, "Dynatrace documentation," and an incorrect example using vague text, "Find out more here," that doesn't describe the destination.](../../components-docs-assets/externallink-content-examples-2-light.webp)

### External link icon

Always show the `ExternalLinkIcon` so users know the link leaves the current app and opens in a new tab.

For further guidance, see [Link text](https://styleguide.dynatrace.com/docs/style/link-text) in the Dynatrace Content Style Guide.
