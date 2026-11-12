The `FocusScope` helps you manage the focus when opening any overlay. If you want to create a custom overlay, you can wrap the content of your overlay in the `FocusScope` to help you make the overlay accessible and handle focus appropriately.

**`FocusScopeProps`**

| Prop        | Type      | Default | Description                                                                               |
| ----------- | --------- | ------- | ----------------------------------------------------------------------------------------- |
| `autoFocus` | `boolean` | `false` | If set to true, the focus scope automatically focuses the first focusable element inside. |
| `contain`   | `boolean` | `false` | If set to true, the focus scope traps the focus inside.                                   |
