## AnnotationsChart.XAxis

`AnnotationsChart.XAxis` provides a slot to configure the X-Axis of the chart.

**`XAxisProps`**

```ts
export declare type XAxisProps = BaseXAxisProps & (TimeXAxisProps | TimestampXAxisProps | NumericalXAxisProps);
```

**`BaseXAxisProps`**

| Prop     | Type      | Default | Description                             |
| -------- | --------- | ------- | --------------------------------------- |
| `label`  | `string`  |         | Defines x-axis label                    |
| `hidden` | `boolean` | `false` | Defines whether x-axis is showed or not |

**`TimeXAxisProps`**

| Prop  | Type   | Default | Description                                                                        |
| ----- | ------ | ------- | ---------------------------------------------------------------------------------- |
| `min` | `Date` |         | Defines minimum time x-axis domain. As a default, it takes the value from the data |
| `max` | `Date` |         | Defines maximum time x-axis domain. As a default, it takes the value from the data |

**`TimestampXAxisProps`**

| Prop              | Type             | Default | Description                                                                             |
| ----------------- | ---------------- | ------- | --------------------------------------------------------------------------------------- |
| `min`             | `Date \| number` |         | Defines minimum numerical x-axis domain. As a default, it takes the value from the data |
| `max`             | `Date \| number` |         | Defines maximum numerical x-axis domain. As a default, it takes the value from the data |
| `type` (required) | `'time'`         |         | If the value is set to time, it enables data casting from timestamps to Date objects    |

**`NumericalXAxisProps`**

| Prop        | Type                                                | Default    | Description                                                                                                     |
| ----------- | --------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| `min`       | `number`                                            |            | Defines minimum numerical x-axis domain. As a default, it takes the value from the data                         |
| `max`       | `number`                                            |            | Defines maximum numerical x-axis domain. As a default, it takes the value from the data                         |
| `type`      | `'linear' \| 'log'`                                 | `'linear'` | Defines x-axis scale type. If the value is set to time, it enables data casting from timestamps to Date objects |
| `formatter` | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |            | Defines x-axis tick formatting                                                                                  |
| `unit`      | `string`                                            |            | Defines x-axis unit                                                                                             |
