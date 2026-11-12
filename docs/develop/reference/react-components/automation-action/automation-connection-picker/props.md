## Props

**`AutomationConnectionPickerProps`**

| Prop                  | Type                             | Default | Description                                              |
| --------------------- | -------------------------------- | ------- | -------------------------------------------------------- |
| `schema` (required)   | `string`                         |         | App settings schema identifier.                          |
| `onChange` (required) | `(connectionId: string) => void` |         | Callback that is called when the selected value changes. |
| `placeholder`         | `string`                         |         | ID of the app settings object of \`schema\`.             |
