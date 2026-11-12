## Group form fields

As shown in the overview, workflow actions should follow the laid-out structure. To reduce cognitive load for users, try to combine related information into smaller groups.

You can do this by thinking about **which information relates to another**. If form fields are related, they should be grouped. It's about creating meaningful, visually distinct content units that make sense in the context of the larger whole.

Each group can have an optional description for general context. If guidance applies to a specific field rather than the whole group, put it in that field's hint instead. For longer actions, use multiple independent groups for separate concerns, and add subgroups when fields within a group share a sub-context.

![workflow action form grouping](https://developer.dynatrace.com/assets/images/workflow_action_form_grouping-31bf5089c7ae562a6d75745ff8015507.png)

### Anatomy of each group

You can structure your Workflow action by using the following building blocks.

![workflow action form group anatomy](https://developer.dynatrace.com/assets/images/workflow_action_form_group_anatomy-c0a939411dfd7ca6337b66f58eeba8e9.png)

1. **Heading:** Give the group a meaningful title, to make the user understand what input is expected. This could also mimic the structure of an external documentation.

2. **Description (optional):** It's not always needed to give additional instructions, but if there is general information that users need to finish the task (goal), add it here. Make sure to provide it in clear, concise, and short sentences. If information is needed only for specific fields, provide a hint below the respective field instead.

3. **Form fields:** The input fields that users need to fill in. Try to follow the naming of the system you integrate with as much as possible, so that it's easy to find documentation and determine what the input is for.

4. **Whitespace:** We use the appropriate spacing between form groups, to visually separate them. You can find more details on [form field spacing](https://developer.dynatrace.com/design/patterns/forms-validation.md/#spacing) in our UI design documentation.
