### UiButtonCustomization

UI customization for defining a button that calls a function when pressed

| Name                   | Type                                        | Description                                                            |
| ---------------------- | ------------------------------------------- | ---------------------------------------------------------------------- |
| description            | string                                      | The description to be shown in a tooltip when hovering over the button |
| displayName (required) | string                                      | The label of the button                                                |
| identifier (required)  | string                                      | The identifier of the function to be called when the button is pressed |
| insert (required)      | string \| [InsertPosition](#insertposition) | The position where the button should be shown in the UI                |
