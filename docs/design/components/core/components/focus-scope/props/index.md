The `FocusScope` helps you manage the focus when opening any overlay. If you want to create a custom overlay, you can wrap the content of your overlay in the `FocusScope` to help you make the overlay accessible and handle focus appropriately.

**`FocusScopeProps`**

| Prop        | Type      | Default | Description                                                                                                                                                                                                  |
| ----------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `autoFocus` | `boolean` | `false` | If set to true, the focus scope focuses the first focusable element inside when it mounts, unless an element inside already has focus.                                                                       |
| `contain`   | `boolean` | `false` | If set to true, the focus scope traps the focus inside and makes the content outside of it inert. When it mounts, it focuses the first focusable element inside, unless an element inside already has focus. |
