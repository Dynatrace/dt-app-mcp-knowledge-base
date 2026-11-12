## Props

**`AutomationCodeEditorProps`**

| Prop           | Type                                                                    | Default     | Description                                                                                                    |
| -------------- | ----------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `value`        | `string`                                                                |             | The content value of the editor in controlled mode. Not allowed together with \`defaultValue\`.                |
| `defaultValue` | `string`                                                                |             | The default value of the editor for uncontrolled usage. Not allowed together with \`value\`.                   |
| `onChange`     | `(value: string) => void`                                               |             | Callback that is called when the value in the editor changes.                                                  |
| `placeholder`  | `string`                                                                |             | Displayed initially in the editor when there is no other content.                                              |
| `language`     | `'json' \| 'js' \| 'jsx' \| 'ts' \| 'tsx' \| 'md' \| 'yaml' \| 'other'` | `'other'`   | The language for syntax highlighting and autocompletion.                                                       |
| `size`         | `'default' \| 'condensed'`                                              | `'default'` | Editor layout size, 'default' for standard spacing and 'condensed' for reduced font size, padding and margins. |
| `fullHeight`   | `boolean`                                                               | `false`     | If set to true, the code editor uses the full height available in its parent.                                  |
