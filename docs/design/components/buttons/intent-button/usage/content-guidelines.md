## Content guidelines

![Anatomy of an IntentButton with three numbered callouts mapping to the parts described below: App icon, Intent label, and Three-dot menu.](../../components-docs-assets/intentbutton-content-anatomy-light.webp)

1. App icon (required)
2. Intent label (required)
3. Three-dot menu (optional)

### App icon

- Use the icon of the app that will open the intent.
- Use the app icon as a prefix, not a suffix.
- When the intent redirects to another app, use that app's icon and add a divider to separate it from add-ons.
- For add-ons, use functional icons or no icon.
- Don't combine the intent icon with other functional icons.

### Intent label

- Keep it to one to three words.
- Use sentence case (capitalize only the first word and any proper nouns, such as brand names).
- Don't use punctuation (no commas, ellipses, full stops, exclamations, or question marks). This differs from inline text links such as [ExternalLink](https://developer.dynatrace.com/design/components/typography/ExternalLink/usage.md) or [Link](https://developer.dynatrace.com/design/components/typography/Link/usage.md), which can end a sentence with a period.
- Use a consistent structure: **[Verb] + [object]**. For example: View trace, View host, Add to dashboard, Analyze query results.
- Don't use different verbs for the same action. For example, use "view" consistently instead of "show" or "open".
- Focus on the user's goal and be specific about what will happen.

To check if your label works, complete the sentence: "This will [label]." If it reads naturally, it's a good label. For example, "This will add to dashboard" works, but "This will dashboard" doesn't.

![Example of a correct intent label "Add to dashboard" using a descriptive verb, and an incorrect label "Go to Dashboards" pointing only to the destination.](https://developer.dynatrace.com/assets/images/intentbutton-content-examples-1-light-6c3545a2fef171e5565f3efd7984a0ad.webp)

![Example of a correct intent label "View service" with a three-dot menu listing verb-led options "Analyze exceptions", "Analyze failures", "Analyze response time", and "Open with...". Next to it, an incorrect example with labels using app names only.](https://developer.dynatrace.com/assets/images/intentbutton-content-examples-2-light-4a571f9c6103243d9a353642618071d2.webp)

### Three-dot menu

- Use to show multiple options when more than one app can handle the intent.
- Place all intents at the bottom of the menu.
- List each available app as a separate entry, using the same intent label conventions → [Verb] + [object].
- Place "Open with..." (with ellipsis) last. It's the fallback that lets users choose which app handles the intent.

![Example of correct three-dot menu entries with verb-led labels "View trace", "View user session", and "Open with...". Next to it, an incorrect example with destination-based labels "Open in Distributed Tracing", and "Open with" missing the ellipsis.](https://developer.dynatrace.com/assets/images/intentbutton-content-examples-3-light-05b019d567b34946e961a9f8d4a76d55.webp)
