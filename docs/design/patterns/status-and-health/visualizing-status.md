## Visualizing status

We use **color, shape, and symbols as foundational building blocks** for indicators to ensure that similar status levels are visually consistent. Enabling users to understand the required level of attention, no matter in what form or context the status is communicated.

### Colors

The assigned colors to status levels stem from **universal mental models**. For example, we use red when something goes wrong and green when something goes well.

By reusing the user interface colors, we ensure that status indicators go hand in hand with other components, such as critical colored [Buttons](https://developer.dynatrace.com/design/components/buttons/Button/index.mdx/) and [Containers](https://developer.dynatrace.com/design/components/layouts/Container/index.mdx/). When you use data visualization components such as charts to indicate the statuses of specific data points, use the chart status palette or the tokens listed below.

| Status   | User interface colors                       | Chart color token                     | Indicates                                            |
| :------- | :------------------------------------------ | :------------------------------------ | :--------------------------------------------------- |
| Ideal    | Success color tokens or component variants  | Colors.Charts.Status.Ideal.Default    | Something is or went well                            |
| Good     | Primary color tokens or component variants  | Colors.Charts.Status.Good.Default     | Additional information, New features, Not concerning |
| Neutral  | Neutral color tokens or component variants  | Colors.Charts.Status.Neutral.Default  | Unknown, Undefined, Inactive                         |
| Warning  | Warning color tokens or component variants  | Colors.Charts.Status.Warning.Default  | Potential or upcoming issues                         |
| Critical | Critical color tokens or component variants | Colors.Charts.Status.Critical.Default | Something went wrong and needs immediate attention   |

### Shapes

Easily distinguishable shapes ensure accessibility and **quick recognition**, especially in smaller sizes in the user interface. Each shape has an assigned meaning and can be combined with other building blocks. For example, status-indicating icons utilize shapes combined with symbols.

| Status               | Shape    | Indicates                            |
| :------------------- | :------- | :----------------------------------- |
| Ideal, Good, Neutral | Circle   | Neutrality, Continuity, Completeness |
| Warning              | Triangle | Warning, Caution, Potential issues   |
| Critical             | Diamond  | Danger, Critical states              |

### Symbols

The symbols used for indicating statuses come with universally known meanings and can usually be **seen in status-indicating icons**. They serve as an additional information layer to the color, shape, and help communicate specific statuses. For example, a general critical situation vs. a critical status because something failed.

| Status            | Shape            | Indicates                             |
| :---------------- | :--------------- | :------------------------------------ |
| Ideal             | Checkmark        | Something went well                   |
| Good              | Info             | Additional information                |
| Neutral           | Slash            | Not existing, Inactive, Not available |
| Warning, Critical | Exclamation Mark | Something needs attention             |
| Warning, Critical | X / Cross        | Failed processes                      |

### Customization

Keep your custom building blocks to a minimum and use the ones defined in this foundational concept as much as possible. However, if you need to use your own color, shape, or symbol to build indicators that are more specific to your use case, there are a few things to consider:

- The already existing building blocks should always keep their intended meaning. For example, don't repurpose the cross when something is unavailable or use the circle for critical states.
- Ensure that your custom, additional building blocks are distinguishable from existing ones.
- Don't add custom building blocks with the same or a similar meaning to the already defined ones to avoid confusion.

![Examples of custom icons that follow the foundational concept as do and ones that don't as don't.](./assets/status-and-health-customization-light.webp)

### Accessibility

To create an accessible, inclusive, and enjoyable experience for every user on the platform, you should follow the [AA level](https://www.w3.org/WAI/WCAG21/Understanding/conformance#levels) of the [WCAG 2.1 accessibility guidelines](https://www.w3.org/TR/WCAG21). Therefore, never use color alone to convey information (see [success criterion 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color)).

Make sure that, if you indicate statuses with colors, they're always accompanied by either:

- Icons
- Shapes
- Text
- Multiple of the listed elements

Additionally, use the `aria-label` attribute for icon-only and shape-only indicators to ensure accessibility for screen readers.

![Indicators that use color in combination with a shape as do and indicators that only use colors to communicate a status as don't](./assets/status-and-health-accessibility-light.webp)
