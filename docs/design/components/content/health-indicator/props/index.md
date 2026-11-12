Use the `HealthIndicator` to communicate the status of a system, process, or object using semantic color and visual shape or icon indicators.

**`HealthIndicatorProps`**

| Prop     | Type                                                        | Default     | Description                                                                                       |
| -------- | ----------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `status` | `'ideal' \| 'good' \| 'neutral' \| 'warning' \| 'critical'` | `'neutral'` | The status of the component. This should be chosen based on the context the indicator is used in. |
| `visual` | `'shape' \| 'icon'`                                         | `'shape'`   | Configures the visual representation of the component, which is a shape by default.               |
