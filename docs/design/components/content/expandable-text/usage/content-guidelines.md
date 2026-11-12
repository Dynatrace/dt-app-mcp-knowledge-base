## Content guidelines

![Anatomy of an ExpandableText component with callouts mapping to the parts described below: summary, expand/collapse button, details.](https://developer.dynatrace.com/assets/images/expandabletext-content-anatomy-light-19484e55f46ff23920a5b66f03c624c8.webp)

1. Summary (required)
2. Expand/collapse button (required)
3. Details (required)

### Summary

- Any critical information must go here, not in the details.
- Make sure summary text makes sense on its own. Users should see what's necessary without clicking the expand button.
- Avoid cutting the summary text off abruptly. Where possible, end it at a natural pause, such as the end of a sentence.
- For user-generated content that can't be shortened by hand, such as descriptions, clip the text after a fixed number of characters.
- Write in sentence case and end sentences with periods.

### Expand/collapse button

- The expand/collapse button reveals and hides the details.
- For consistency with other Dynatrace apps, use the default "Show more" and "Show less" labels.

### Details

- Use for additional, non-critical information that is relevant and meaningful to the user's context. This is often the rest of the clipped summary text.
- Be clear and concise. If the details are an explanation and even more information would be relevant, provide links. Use the [ExternalLink](https://developer.dynatrace.com/design/components/typography/ExternalLink.md) component for external pages or the [Link](https://developer.dynatrace.com/design/components/typography/Link.md) component for pages within the same app.
- Write in sentence case and end sentences with periods.
