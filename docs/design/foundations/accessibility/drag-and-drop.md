## Drag and drop

> **Tip**
>
> Relates to [WCAG 2.5.7](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) and [WCAG 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard).

Any functionality that relies on drag and drop must also be achievable without dragging, to support users who can't perform precise pointer movements. This is a WCAG 2.2 AA requirement.

Ensure this by providing an alternative that works with a single pointer, such as menu-based move actions, alongside any drag-and-drop functionality, so all users can complete tasks. Keyboard users must also be able to move items without a mouse, which a keyboard-operable drag handle or a keyboard drag mode provides.

Draggable elements that contain interactive content, such as links or buttons, need a way to be moved that doesn't conflict with that content. Check the accessibility documentation of the component you're making draggable for specific guidance.
