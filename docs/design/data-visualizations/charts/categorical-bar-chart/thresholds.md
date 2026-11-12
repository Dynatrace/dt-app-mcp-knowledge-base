## Thresholds

Thresholds are used to mark meaningful ranges or values on a `CategoricalBarChart` and they add contextual information to a numerical axis. There are two variants of thresholds:

- a specific point represented on the value axis and a line across.
- a range - or filled area - represented by a pill on the value axis and a band across.

### Point and range

**ThresholdsPointAndRange**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const thresholdData = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const ThresholdsPointAndRange = () => {
  return (
    <CategoricalBarChart layout="vertical" data={thresholdData}>
      {/* highlight-start */}
      <CategoricalBarChart.ThresholdIndicator
        data={{ value: 96 }}
        color={Colors.Charts.Threshold.Good.Default}
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 150, max: 245 }}
        color={Colors.Charts.Threshold.Bad.Default}
      />
      {/* highlight-end */}
      <CategoricalBarChart.Legend hidden={true} />
    </CategoricalBarChart>
  );
};
```

There is no limit defined for the number of threshold ranges or points that can be used in a single `CategoricalBarChart`. The threshold will be positioned on the left axis if the layout is vertical or on the bottom axis if the layout is horizontal.

### Points and ranges on vertical layout

**ThresholdsPointsAndRangesOnVerticalLayout**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const thresholdData = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const ThresholdsPointsAndRangesOnVerticalLayout = () => {
  return (
    <CategoricalBarChart
      // highlight-next-line
      layout="vertical"
      data={thresholdData}
    >
      <CategoricalBarChart.ThresholdIndicator
        data={{ value: 180 }}
        color={Colors.Charts.Threshold.Warning.Default}
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 200, max: 245 }}
        color={Colors.Charts.Threshold.Good.Default}
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ value: 50 }}
        color={Colors.Charts.Threshold.Good.Default}
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 100, max: 150 }}
        color={Colors.Charts.Threshold.Warning.Default}
      />
      <CategoricalBarChart.Legend hidden={true} />
    </CategoricalBarChart>
  );
};
```

### Points and ranges on horizontal layout

**ThresholdsPointsAndRangesOnHorizontalLayout**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const thresholdData = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const ThresholdsPointsAndRangesOnHorizontalLayout = () => {
  return (
    <CategoricalBarChart
      // highlight-next-line
      layout="horizontal"
      data={thresholdData}
    >
      <CategoricalBarChart.ThresholdIndicator
        data={{ value: 180 }}
        color={Colors.Charts.Apdex.Poor.Default}
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 200, max: 245 }}
        color={Colors.Charts.Apdex.Unacceptable.Default}
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ value: 50 }}
        color={Colors.Charts.Apdex.Good.Default}
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 100, max: 150 }}
        color={Colors.Charts.Apdex.Fair.Default}
      />
      <CategoricalBarChart.Legend hidden={true} />
    </CategoricalBarChart>
  );
};
```

There are three different types of threshold markers:

- Range filled, where the value range is defined in order to display the threshold band. The stroke lines are not drawn unless the pill is hovered.

- Range stroke-only variant, where a value range is defined in order to display the threshold band represented by dashed stroke lines. The stroke lines become continuous lines when the pill is hovered.

- Point, where only one value is required to display the threshold. It's represented by a dashed line and when the point is hovered the line becomes a continuous line.

### Stroke only ranges on vertical layout

**ThresholdsRangeStrokeOnlyVertical**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const thresholdData = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const ThresholdsRangeStrokeOnlyVertical = () => {
  return (
    <CategoricalBarChart layout="vertical" data={thresholdData}>
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 50, max: 150 }}
        color={Colors.Charts.Threshold.Warning.Default}
        // highlight-next-line
        strokeOnly
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 200, max: 245 }}
        color={Colors.Charts.Threshold.Good.Default}
        // highlight-next-line
        strokeOnly
      />
      <CategoricalBarChart.Legend hidden={true} />
    </CategoricalBarChart>
  );
};
```

### Stroke only ranges on horizontal layout

**ThresholdsRangeStrokeOnlyHorizontal**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const thresholdData = [
  { category: 'Unacceptable', value: 5 },
  { category: 'Poor', value: 56 },
  { category: 'Fair', value: 280 },
  { category: 'Good', value: 129 },
  { category: 'Excellent', value: 17 },
];

const ThresholdsRangeStrokeOnlyHorizontal = () => {
  return (
    <CategoricalBarChart layout="horizontal" data={thresholdData}>
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 50, max: 150 }}
        color={Colors.Charts.Threshold.Bad.Default}
        // highlight-next-line
        strokeOnly
      />
      <CategoricalBarChart.ThresholdIndicator
        data={{ min: 200, max: 245 }}
        color={Colors.Charts.Threshold.Warning.Default}
        // highlight-next-line
        strokeOnly
      />
      <CategoricalBarChart.Legend hidden={true} />
    </CategoricalBarChart>
  );
};
```
