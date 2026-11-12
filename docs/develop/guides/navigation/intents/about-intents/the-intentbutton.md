## The IntentButton

The `IntentButton` is a split button from the Strato Design System that implements all three mechanisms in one component. The left side triggers the primary explicit intent directly, for example, **View in Hosts**. The right side opens a menu with additional explicit intents, add-ons, and **Open with...** as the last option.

![Three IntentButton configurations: (1) explicit intent with alternative intents and "Open with..." fallback in the menu, (2) explicit intent with only "Open with..." as alternative, (3) explicit intent without any menu or fallback](https://developer.dynatrace.com/assets/images/intent-button-configurations-e82177a213779ab937f9c8eded8d3eaa.png)

Use `IntentButton` for straightforward cases. Use `sendIntent()` from `@dynatrace-sdk/navigation` when you need more control over the trigger. For example, responding to a table row click or a custom interaction.
