Use the `Accordion` to progressively disclose grouped content, letting users reveal and hide sections to reduce page length and focus on what matters.

**`AccordionProps`**

```ts
export declare type AccordionProps<Multiple extends boolean> = AccordionOwnProps<Multiple> & (AccordionControlledProps<Multiple> | AccordionUncontrolledProps<Multiple>);
```

**`AccordionOwnProps`**

| Prop              | Type                                                             | Default     | Description                                                                                                                                     |
| ----------------- | ---------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `multiple`        | `Multiple`                                                       | `false`     | Determines whether multiple sections can be open at the same time.                                                                              |
| `triggerPosition` | `'start' \| 'end'`                                               | `'end'`     | The position of the trigger that expands and collapses a section.                                                                               |
| `onExpandChange`  | `(value: OnChangeValue<Multiple>) => void`                       |             | Callback fired when a section is expanded/collapsed.                                                                                            |
| `interactive`     | `boolean`                                                        | `true`      | If the accordion is interactive, the whole header is interactive and can open or close the accordion. Otherwise, only the button is interactive |
| `color`           | `'neutral' \| 'primary' \| 'success' \| 'warning' \| 'critical'` | `'neutral'` | The color of the accordion. Setting the color affects the button, label, content and divider color.                                             |
| `size`            | `'default' \| 'condensed'`                                       | `'default'` | The size of the accordion.                                                                                                                      |
| `showDividers`    | `boolean`                                                        | `true`      | Whether a divider is shown between the sections.                                                                                                |

**`AccordionControlledProps`**

| Prop                  | Type                                                     | Default | Description                                                                   |
| --------------------- | -------------------------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `defaultExpanded`     | `never`                                                  |         | Determines which sections are initially expanded in an uncontrolled scenario. |
| `expanded` (required) | `Multiple extends true ? MultiExpanded : SingleExpanded` |         | Determines which sections are expanded in a controlled scenario.              |

**`AccordionUncontrolledProps`**

| Prop              | Type                                                     | Default | Description                                                                   |
| ----------------- | -------------------------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `defaultExpanded` | `Multiple extends true ? MultiExpanded : SingleExpanded` | `false` | Determines which sections are initially expanded in an uncontrolled scenario. |
| `expanded`        | `never`                                                  |         | Determines which sections expanded in a controlled scenario.                  |
