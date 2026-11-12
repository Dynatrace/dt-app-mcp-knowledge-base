## At a glance

### 1. Always use automation action components

Workflow task input configuration provides dynamic values from expressions, not only static values. To support this use case, use specialized UI components—automation action components—instead of generic Strato form components. These components support expression autocomplete, chip highlighting, and preview values alongside static values. For example, use AutomationSelect instead of a standard select or radio buttons.

### 2. Put Connection pickers on top (if you need one)

If your action connects to a third-party system, place the AutomationConnectionPicker at the top of the form—before any other fields. Skip it for actions that only interact with the Dynatrace platform. If you use the connection to power lookups in other fields (for example, fetching a list of tables), those lookups must degrade gracefully. A connection might be selected dynamically by expression at runtime, or the third-party system might be unavailable, so your UI must not rely on a valid connection to provide values or perform validation. Catch errors silently and show a hint such as "Can't retrieve list of tables currently" rather than displaying a form error; never block the user from editing the field manually.

### 3. Use groups to organize your form fields

Group related fields under a named heading — never leave them scattered across an undivided form. Each group can have an optional description for general context; if guidance applies to one specific field, put it in that field's hint instead. For longer actions, use multiple independent groups for separate concerns, and add subgroups when fields within a group share a sub-context for a better structured visual representation.

### 4. Use a common location for linking to doc

Place a help icon in the top-right corner of each group — this is where users look for documentation links across all actions. It opens an overlay menu with links to the relevant docs users need to complete their task. Don't use a regular tooltip for this — tooltips disappear, and documentation links are task-critical.

![Workflow action anatomy summary](https://developer.dynatrace.com/assets/images/workflow_action_anatomy_summary-86b048de2ca9e871642285e6d3bfa95b.png)
