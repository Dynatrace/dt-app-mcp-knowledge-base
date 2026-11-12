## Content guidelines

![Anatomy of a Tooltip with two numbered callouts mapping to the parts described below: Trigger and Details.](https://developer.dynatrace.com/assets/images/tooltip-content-anatomy-light-62cb5ac9fd7e5b63eea0bbf4dda0e7d7.webp)&#x20;

1. Trigger (required)
2. Details (required)

### General guidelines

- Use sentence case (capitalize only the first word and any proper nouns, such as brand names).
- Use plain English and avoid technical jargon, unless it's industry standard.
- Only add details that aren't in the trigger text. For example, if the trigger says “Share”, don't repeat "Share" in the tooltip.
- Don't add headers or buttons.
- Don't add links. If you want to add a link, use [InformationOverlay](https://developer.dynatrace.com/design/components/content/InformationOverlay.md).
- Don't use any formatting, such as bold or italics.
- Don't use quotation marks.

### Types of tooltip

Below are three different types of tooltip, including do and don't examples.

#### Display action or item name

Use a tooltip to show the name and purpose of an icon-only button.

- Keep names simple and consistent with those of other apps.
- Don't add periods or exclamation marks.

![Example of a correct Tooltip labeled "Move" with no period, and an incorrect one labeled "Move section." that adds an extra word and end punctuation.](https://developer.dynatrace.com/assets/images/tooltip-content-1-light-e35ffc63ac81ba32bb1d5ed11a61484a.webp)&#x20;

#### Explain something briefly

Use a tooltip to provide a short explanation of something that isn't self-explanatory or commonly understood.

- Only use a tooltip for extra information that isn't crucial for the user to complete their task.
- Keep to one sentence or a maximum of two short sentences.
  - One sentence: Don't put a period at the end.
  - Two sentences: Put periods after both sentences.

![Example of a correct single-sentence Tooltip "No segment applied" with no period, and an incorrect one "No segment applied." that adds one.](https://developer.dynatrace.com/assets/images/tooltip-content-2-light-d7afb19cea8b0bfe8aacc6eb267ff623.webp)&#x20;

![Example of a correct two-sentence Tooltip with a period after each sentence, and an incorrect one with the same two sentences missing both periods.](https://developer.dynatrace.com/assets/images/tooltip-content-3-light-236088b35e3e9942af5ef0258a1c2b09.webp)&#x20;

#### Display truncated text

Use a tooltip to show the full text of something that truncates in the UI, for example a document name. Only do this if there's no other way to display the full text, such as line wrapping.

- Show the complete text as it would appear without truncation.
- Don't change the wording or add extra information.
- Don't add quotation marks, periods, or formatting.

![Example of a correct Tooltip showing the exact truncated text "Log ingestion overview", and an incorrect one adding quotation marks and the extra word "dashboard".](https://developer.dynatrace.com/assets/images/tooltip-do-dont-4-light-d846fed54f79bf3cc2c16c72fc40ed63.webp)&#x20;
