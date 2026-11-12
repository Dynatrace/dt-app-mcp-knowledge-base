## Add-on UX guidelines

### Icons and visual treatment

Add-ons should **blend into the parent app's UI**. There is no requirement that add-ons use a specific icon, layout, or visual treatment to mark themselves as add-ons. Treat the add-on like any other in-context action and let it inherit the surrounding app's visual language.

For menu entries, a functional icon (rather than an app icon) is a useful signal that the action stays in context, but it is not mandatory. Choose what reads best for the user.

![Three examples of icon usage in intent menus. Left (Do): a functional icon for "View session". Center (Do): a menu with functional icon for the add-on "Watch session" and app icons for "View session" and "View user" with "Open with..." fallback. Right (Don't): an intent icon incorrectly used as a suffix next to a functional icon.](https://developer.dynatrace.com/assets/images/icon-guidelines-c59b78ba3f0d72f04728af0398daccb5.png)

### Placement in IntentButton

In the `IntentButton` three-dot menu, add-ons can appear **before or after** additional explicit intents, but always **before** the **Open with...** fallback. This keeps in-context actions (add-ons) grouped near navigation actions (explicit intents), with the discovery fallback always last.

![Add-on intents (Watch session, New Jira ticket) appearing before explicit intents in the IntentButton menu, with "Open with..." as the last item.](https://developer.dynatrace.com/assets/images/addon-placement-e880c3b48da9cbec7b08529e01991e4d.png)

![Three examples of menu placement. Left (Do): full menu with actions, add-on intents, and "Open with..." at the bottom. Center (Do): simpler menu with add-on intents and "Open with..." fallback. Right (Don't): incorrect icon usage and non-standard labels like "Edit in notebook" or "Pin to dashboard".](https://developer.dynatrace.com/assets/images/menu-placement-guidelines-64775eeb3a1558acd0fd7b68e548a684.png)
