## Exclusive states

Rest, hover, active, drag, or disabled states are mutually exclusive, meaning that an interactive element can always only be in one of those states. These states are communicated by a change of color, which is reflected in the naming of our color tokens.

![Exclusive states](https://developer.dynatrace.com/assets/images/interaction-states-exclusive-light-5ee2924cc50495c0652165c868628434.webp)

### Rest

Rest states represent the default visual state of an element. By default, both interactive and non-interactive elements are in their rest state.

### Hover

Hover states communicate that a user’s pointer is currently over an interactive element.

### Active

Active states communicate that a user is pressing an interactive element. Active states can be triggered by any pointing device (mouse, finger, stylus,…), depending on users’ devices.

### Drag

Drag states communicate that a user is moving an interactive element.

### Disabled

Disabled states communicate that a user can’t currently interact with an otherwise interactive element or that an option isn’t available.

#### Disabling versus hiding elements

We advise you to always disable elements instead of hiding them. It ensures that users can still explore possible functionalities and capabilities of your app, even though they might be unavailable at the moment. Ensure that it's apparent or explain why an element is disabled.

You may hide elements instead of disabling them if:

- They contain sensitive data.
- They don’t provide value for the user.
- They interrupt the user flow.

### Read only

Read-only states are common for inputs and communicate that a user can view the content of an interactive element but can't modify it.

#### Read only versus disabled

Disabled and read-only states both prevent editing, but they each carry a different meaning:

|                  | Read only                                                                                                                                                                                                                                                                                                                                                                                      | Disabled                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| When to use      | - To display static information that's critical for context.
- If the value must be submitted with the form for processing.
- For system-generated values that can't be changed. For example, an auto-generated API key.
- If the field is pre-filled from another source and can't be changed, but is needed for context or form submission. For example, an email address in a user profile. | * If the element isn't applicable in the current context.
* If the field or action is permission-restricted for the user's current role.
* For conditional fields or actions that remain unavailable until a prerequisite is met. For example, a configuration field that only becomes available after a toggle is enabled. |
| What it signals  | A value exists, but the field cannot be edited in this context.                                                                                                                                                                                                                                                                                                                                | An action or input isn't possible right now.                                                                                                                                                                                                                                                                                |
| User interaction | Users can focus the input, read, and copy values, but not edit them.                                                                                                                                                                                                                                                                                                                           | Users cannot focus or interact with the element, but assistive technologies can still discover and announce it as disabled.                                                                                                                                                                                                 |
| Form submission  | Values are included in form submission.                                                                                                                                                                                                                                                                                                                                                        | Values are excluded from form submission.                                                                                                                                                                                                                                                                                   |

If a disabled element must remain accessible to explain why it's unavailable, use [ariaDisabled](https://developer.dynatrace.com/design/components/forms/FormField/props.md) and prevent interaction in your code.
