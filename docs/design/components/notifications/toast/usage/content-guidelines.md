## Content guidelines

![Anatomy of a Toast with three numbered callouts mapping to the parts described below: Title, Details, and Action.](https://developer.dynatrace.com/assets/images/toast-content-anatomy-light-7c4a53e8c9c032250a793b664976c1f7.webp)

1. Title (required)
2. Details (optional)
3. Action (optional)

### General guidelines

- Use sentence case (capitalize only the first word and any proper nouns, such as brand names).
- Avoid unnecessary words such as “the”, “a”, “an”, “successfully”, and “unsuccessfully".

### Title

The title is always required. A single line is enough for simple confirmations (mostly default and success toasts) that don't require extra context or actions.

- Keep it short: Five words or fewer.
- Start with a verb in the past tense for completed actions: Verb ends in [-ed] + [item name]. Match it with the trigger action (For example: Delete -> Deleted).

![Example of a correct success Toast titled "Created segment", using verb-then-item order, and an incorrect one titled "Segment created", reversing the order.](../../components-docs-assets/toast-content-example-1-light.webp)

- Don't use end punctuation (no periods or exclamation marks) in titles.

![Example of a correct success Toast titled "Permanently deleted Nb123" with no punctuation, and an incorrect one reading "Success! The notebook Nb123 was deleted permanently."](https://developer.dynatrace.com/assets/images/toast-content-example-2-light-f6eac5eddb7c31c05996f5c59e19317e.webp)

- For errors, start with "Couldn't".

![Example of a correct error Toast titled "Couldn't save changes", and an incorrect one titled "Saving failed." that doesn't start with "Couldn't".](../../components-docs-assets/toast-content-example-3-light.webp)

- If you must include file names, place them at the end, unformatted (no quotes, all caps, or symbols).

![Example of a correct success Toast titled "Created Copy of dashboard-123", and an incorrect one titled "(Copy of dashboard-123) successfully created".](https://developer.dynatrace.com/assets/images/toast-content-example-4-light-144bd3cfdb6471d3a97abce9c5f8fd53.webp)

- For bulk actions, use a number instead of listing items.

![Example of a correct bulk-action success Toast titled "Deleted 4 guardians", and an incorrect one titled "Deleted Easytravel, Four golden signals, carts, search." listing every item.](https://developer.dynatrace.com/assets/images/toast-content-example-5-light-5e981b530d5acc4e653103463be1a6b5.webp)

### Details

Details are optional. Add details to toasts (mostly warning or critical) that need a brief clarification or context, such as why it failed.

- In one to two short sentences, explain what happened or what to do next.
- Punctuate details with a period at the end.

![Example of a correct error Toast titled "Couldn't delete Untitled dashboard" and details "Check your connection and try again." ending in a period, and an incorrect one missing it.](https://developer.dynatrace.com/assets/images/toast-content-example-6-light-b4e5c2275fe964b34f14876fc73c5b56.webp)

### Action button

The action button is optional. Only add buttons to actionable toasts, such as follow-up steps or cross-app actions.

- Limit to one action button per toast.
- Use icons only if they clearly support the action (for example: copy or add).

![Two correct success Toasts, each with one action button: "Deleted dashboard123" with "See recently deleted", and "Created my_SLO" with "Add to Dashboards".](https://developer.dynatrace.com/assets/images/toast-content-example-7-light-8533b4431c0e575715ef73ef69d9f6d8.webp)

![Two correct examples: an error Toast titled "Couldn't load results" with a plain "Try again" button, and a success Toast titled "Created SLO fast burn rate alert" with an "Automate" IntentButton.](https://developer.dynatrace.com/assets/images/toast-content-example-8-light-5e56e09b675dbc29c1750c0775aa2232.webp)
