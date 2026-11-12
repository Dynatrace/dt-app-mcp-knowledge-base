## Content guidelines

1. Trigger button (required)
2. Options (required)

![Anatomy of a Menu with two numbered callouts mapping to the parts described above: Trigger button and Options.](../../components-docs-assets/menu-content-anatomy-light.webp)

### Trigger button

The trigger button may include short, clear labels, and prefix and suffix icons. One or more of these elements may be used. The options can also be opened from a dot menu or the app help menu. See the [Accessibility tab](https://developer.dynatrace.com/design/components/navigation/Menu/a11y.md) for guidance on labeling trigger buttons properly for screen readers.

### Options

#### Labels

For actions, start with a verb. For consistency and easy reading, use the same grammatical pattern for all items in a group.

- Use sentence case (capitalize only the first word and any proper nouns, such as brand names).
- Keep it short, just one to three words.
- Remove unnecessary words such as "the", "a", or "an".
- Don't add trademarks or registered symbols.
- Don't add periods or ellipses. If the action opens a new view or navigates elsewhere, use an `IntentButton`. If it opens a nested or multi-level menu, use a chevron.
- Only use a `Tooltip` for additional context.

![Example of correct Menu options using the short labels "Rename", "Duplicate", and "Delete", and incorrect ones using wordier phrases such as "Change name" and "Move to Trash".](https://developer.dynatrace.com/assets/images/menu-content-example-1-light-5cea73c8eef5bd83754cefec2688f0f6.webp)

#### Icons

##### Prefix

- Use the appropriate [functional icon](https://developer.dynatracelabs.com/design/icons/functional-icons/).
- Use an [app icon](https://developer.dynatrace.com/design/icons/app-icons.md) only if the action redirects to another app.

##### Suffix

- Include keyboard shortcuts with the `KeyboardShortcut` component when relevant.

![Example of a correct Menu where each option shows a keyboard shortcut as a suffix, such as "Assist" with Shift I and "Code" with Shift C.](https://developer.dynatrace.com/assets/images/menu-content-example-2-light-e55b200ac9d163f2c14edcba6cd96dba.webp)

- Use the `ExternalLink` icon when the item links to an external resource. External resources are anything outside of the user's current environment, including:

- Other Dynatrace environments (from ENV-ID.dynatrace.com to ENV-ID-2.dynatrace.com).

- Dynatrace documentation or domains (from ENV-ID.dynatrace.com to docs.dynatrace.com).

- Third-party domains (from ENV-ID.dynatrace.com to anothercompany.com).

![A Menu with two options: "Documentation", which carries an external-link icon because it leads outside the environment, and "About this app", which links internally.](https://developer.dynatrace.com/assets/images/menu-externallink-light-da4d815f1aa3ae666ce4d025ba52c352.webp)

#### MenuGroup

When a menu contains a mix of actions, functions, and links:

- Group similar items together.
- Separate groups with divider lines.
- Consider adding section labels for context. See [Groups and icons](https://developer.dynatrace.com/design/components/navigation/Menu.md) for more details.

![Example of a correct Menu where "Edit workflow" and "Delete workflow" are grouped above a divider line, separated from "Share" and "Download".](https://developer.dynatrace.com/assets/images/menu-content-example-3-light-77085e6a4129adefb6ea36f1ad144e7f.webp)
