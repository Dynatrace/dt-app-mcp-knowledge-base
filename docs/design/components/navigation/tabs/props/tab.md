### Tab

Use the `Tab` component to specify the content and title for a single tab.

**`TabProps`**

| Prop                  | Type        | Default | Description                                                                                                           |
| --------------------- | ----------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `children` (required) | `ReactNode` |         | Rendered contents of the option.                                                                                      |
| `disabled`            | `boolean`   | `false` | Whether the tab should be disabled. If true, the tab cannot be clicked and its tab panel does not render any content. |
| `title` (required)    | `string`    |         | The text shown on the tab. This must be unique.                                                                       |
| `prefixIcon`          | `ReactNode` |         | The prefix icon shown in front of the tab text.                                                                       |
| `keepMounted`         | `boolean`   | `false` | Defines if the tabs content will be kept in the DOM, even if the content is not shown to the user.                    |
