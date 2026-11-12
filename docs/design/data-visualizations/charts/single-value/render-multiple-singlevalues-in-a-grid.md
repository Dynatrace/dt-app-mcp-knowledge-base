## Render multiple SingleValues in a grid

In order to render multiple `SingleValue` components in a grid, you can use the `SingleValueGrid` component. `SingleValue` components in the grid will share the internal layout and styles to create a consistent look and feel. The component will occupy all the available space in the container it's located in and automatically render the `SingleValue` components.

The `SingleValueGrid` component expects an array of strings, numbers, or objects of a free shape.

**SimpleGrid**

```tsx
import { type PropsWithChildren } from 'react';

import { SingleValueGrid } from '@dynatrace/strato-components/charts';

const StyledContainer = (props: PropsWithChildren) => (
  <div
    style={{
      outline: 'solid 1px black',
      outlineOffset: '1px',
      width: '600px',
      height: '250px',
      marginBottom: '16px',
    }}
  >
    {props.children}
  </div>
);

const SimpleGrid = () => {
  const numericalData = [
    9.12, 24.19, 16.8, 44.73, 83, 61.13, 97.16, 87.49, 100,
  ];
  const stringData = [
    'HOST-1',
    'HOST-2',
    'HOST-3',
    'HOST-4',
    'HOST-5',
    'HOST-6',
    'HOST-7',
    'HOST-8',
  ];

  return (
    <>
      <StyledContainer>
        {/* highlight-next-line */}
        <SingleValueGrid data={numericalData} />
      </StyledContainer>

      <StyledContainer>
        {/* highlight-next-line */}
        <SingleValueGrid data={stringData} />
      </StyledContainer>
    </>
  );
};
```

### Control grid elements using accessors

In order to have more granular control over the grid elements look, you can pass an array of objects to the `SingleValueGrid` component. Using `Value`, `Trend`, and `Sparkline` subcomponents with various accessors you can customize the grid elements. Accessor is a string that represents a name of a prop name (or nested prop name using a dot notation, e.g. `trend.direction`) in the data array object that should be used to override original prop of the `SingleValue` component and it's subcomponents.

#### Grid accessors and props

On the `SingleValueGrid` component, you can use the following accessors:

- `colorAccessor` - accessor to override a colors for individual grid elements.
- `labelAccessor` - accessor to override a label.
- `prefixIconAccessor` - accessor to override a prefix icon.

The `SingleValueGrid` also accepts a `color` prop to set a default color for all grid elements. When both `color` and `colorAccessor` props are provided, the grid element will try to access a color in the data object using the `colorAccessor`, and if it's not found, the `color` prop value will be applied. The same logic applies to most of the accessors.

On a grid level it's also possible to set value alignment using the `alignment` prop and thresholds using the `thresholds` prop.

The `SingleValueGrid` also supports intent options using the `SingleValueGrid.Intent` subcomponent, which works the same way as the `SingleValue.Intent` subcomponent described in the [Intent options](#intent-options) section above.

**GridAccessors**

```tsx
import { SingleValueGrid } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  ActionIcon,
  AssetIcon,
  BugReportIcon,
  ChatIcon,
  EventIcon,
  ResearchIcon,
} from '@dynatrace/strato-icons';

const GridAccessors = () => {
  const data = [
    {
      data: 40,
      label: 'HOST-1A',
      color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
      icon: <ResearchIcon />,
    },
    {
      data: 27,
      label: 'HOST-2A',
      icon: <BugReportIcon />,
    },
    {
      data: 69,
      label: 'HOST-3A',
      color: Colors.Charts.CategoricalThemed.Swamps.Color01.Default,
      icon: <EventIcon />,
    },
    {
      data: 47,
      label: 'HOST-1B',
      color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
      icon: <AssetIcon />,
    },
    {
      data: 34,
      label: 'HOST-2B',
      color: 'rebeccaPurple',
      icon: <ChatIcon />,
    },
    {
      data: 83,
      label: 'HOST-3B',
      icon: <ActionIcon />,
    },
  ];

  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: '1px',
        width: '600px',
        height: '250px',
        marginBottom: '16px',
      }}
    >
      <SingleValueGrid
        data={data}
        alignment="center"
        color="black"
        // highlight-start
        colorAccessor="color"
        labelAccessor="label"
        prefixIconAccessor="icon"
        // highlight-end
      >
        <SingleValueGrid.Value dataAccessor="data"></SingleValueGrid.Value>
        <SingleValueGrid.ColorRule
          comparator="less-or-equal"
          matchValue={66.66}
          color="#f1c40f"
        />
        <SingleValueGrid.ColorRule
          comparator="less-or-equal"
          matchValue={33.33}
          color="#c0392b"
        />
        <SingleValueGrid.ColorRule
          comparator="greater-than"
          matchValue={66.66}
          color="#27ae60"
        />
      </SingleValueGrid>
    </div>
  );
};
```

Additionally, you can also toggle the prop `applyThresholdBackground` to set the applicable threshold color to the background of all the SingleValue components inside the grid.

**GridAccessorsWithColoredBackground**

```tsx
import { SingleValueGrid } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  ActionIcon,
  AssetIcon,
  BugReportIcon,
  ChatIcon,
  EventIcon,
  ResearchIcon,
} from '@dynatrace/strato-icons';

const GridAccessorsWithColoredBackground = () => {
  const data = [
    {
      data: 40,
      label: 'HOST-1A',
      color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
      icon: <ResearchIcon />,
    },
    {
      data: 27,
      label: 'HOST-2A',
      icon: <BugReportIcon />,
    },
    {
      data: 69,
      label: 'HOST-3A',
      color: Colors.Charts.CategoricalThemed.Swamps.Color01.Default,
      icon: <EventIcon />,
    },
    {
      data: 47,
      label: 'HOST-1B',
      color: Colors.Charts.CategoricalThemed.Fireplace.Color03.Default,
      icon: <AssetIcon />,
    },
    {
      data: 34,
      label: 'HOST-2B',
      color: 'rebeccaPurple',
      icon: <ChatIcon />,
    },
    {
      data: 83,
      label: 'HOST-3B',
      icon: <ActionIcon />,
    },
  ];

  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: '1px',
        width: '600px',
        height: '250px',
        marginBottom: '16px',
      }}
    >
      <SingleValueGrid
        data={data}
        alignment="center"
        color="black"
        colorAccessor="color"
        labelAccessor="label"
        prefixIconAccessor="icon"
        // highlight-next-line
        applyThresholdBackground={true}
      >
        <SingleValueGrid.Value dataAccessor="data"></SingleValueGrid.Value>
        <SingleValueGrid.ColorRule
          comparator="less-or-equal"
          matchValue={66.66}
          color="#f1c40f"
        />
        <SingleValueGrid.ColorRule
          comparator="less-or-equal"
          matchValue={33.33}
          color="#c0392b"
        />
        <SingleValueGrid.ColorRule
          comparator="greater-than"
          matchValue={66.66}
          color="#27ae60"
        />
      </SingleValueGrid>
    </div>
  );
};
```

#### Loading state in grid

The `SingleValueGrid` supports a grid-level `loading` prop. When `loading` is set to `true`:

- a single `SingleValue` loading indicator/overlay is set over the whole grid,
- individual item values may be `null`/`undefined` while the overlay is shown.

GIVEN a `SingleValueGrid` with `loading` set to `true` WHEN the component renders THEN a loading overlay with spinner is set over the grid

Use the dedicated Loading use case below to inspect the overlay across all grid items.

**GridLoading**

```tsx
import { SingleValueGrid } from '@dynatrace/strato-components/charts';

const GridLoading = () => {
  const items = [
    { key: 1, label: 'Revenue', data: null },
    { key: 2, label: 'Orders', data: null },
    { key: 3, label: 'Conversion', data: null },
    { key: 4, label: 'Active Users', data: null },
  ];

  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: 1,
        width: 600,
        height: 240,
      }}
    >
      <SingleValueGrid
        // highlight-next-line
        loading
        data={items}
      >
        <SingleValueGrid.Value dataAccessor="data" />
      </SingleValueGrid>
    </div>
  );
};
```

#### Value accessors and props

On the `Value` subcomponent, you can use the following accessors:

- `dataAccessor` - accessor to get a value from data array object.
- `formatterAccessor` - accessor to retrieve the formatter options for the value.
- `unitAccessor` - accessor to retrieve the unit for the value.

The `unit` and `formatter` props can be used to set a default unit and formatter for all grid elements. The `unit` prop accepts either a string or a Unit type from `@dynatrace-sdk/units`:

```tsx
// Using string units in data objects
const data = [
  { data: 38.9, label: 'Temperature', unit: '°C' },
  { data: 12, label: 'Count', unit: 'hosts' },
];

// Using Unit types in data objects
import { units } from '@dynatrace-sdk/units';
const data = [{ data: 1024, label: 'Memory', unit: units.data.byte }];

// Setting default unit on SingleValueGrid.Value component
<SingleValueGrid.Value
  dataAccessor="data"
  unit="ms" // string unit
  unitAccessor="unit"
/>;
```

**ValueAccessors**

```tsx
import {
  ConvertibleUnit,
  FormatOptions,
  Unit,
  units,
} from '@dynatrace-sdk/units';
import {
  Formatter,
  SingleValueGrid,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const ValueAccessors = () => {
  const byteFormatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.data.byte,
    maximumFractionDigits: 3,
  };
  const percentFormatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.percentage.percent,
    output: units.percentage.percent,
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  };
  const data = [
    {
      data: 23490823049,
      label: 'HOST-AAA45667S',
      formatter: byteFormatter,
    },
    {
      data: 27,
      label: 'CPU Usage',
      formatter: percentFormatter,
    },
    {
      data: 4835058905,
      label: 'HOST-EUT34509-4567455',
      formatter: byteFormatter,
    },
    {
      data: 2349082834,
      label: 'HOST-EUT34509',
      formatter: byteFormatter,
    },
    {
      data: 12,
      label: 'HOST-AUT77512',
      unit: 'hosts',
    },
    {
      data: 38.9,
      label: 'Host CPU temperature',
      unit: '°C',
    },
  ];
  const valueColor = Colors.Charts.CategoricalThemed.PurpleRain.Color02.Default;

  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: '1px',
        width: '600px',
        height: '250px',
        marginBottom: '16px',
      }}
    >
      <SingleValueGrid
        data={data}
        alignment="center"
        color={valueColor}
        labelAccessor="label"
      >
        {/* highlight-start */}
        <SingleValueGrid.Value
          dataAccessor="data"
          formatter={byteFormatter}
          formatterAccessor="formatter"
          unitAccessor="unit"
        ></SingleValueGrid.Value>
        {/* highlight-end */}
      </SingleValueGrid>
    </div>
  );
};
```

#### Trend accessors and props

On the `Trend` subcomponent, you can use the following accessors:

- `directionAccessor` - accessor to get a trend direction.
- `valueAccessor` - accessor to get a trend value.
- `labelAccessor` - accessor to get a trend value.
- `formatterAccessor` - accessor to get formatter for the trend value.
- `inverseTrendAccessor` - accessor to retrieve an inverse trend options.

**TrendAccessors**

```tsx
import {
  ConvertibleUnit,
  FormatOptions,
  Unit,
  units,
} from '@dynatrace-sdk/units';
import {
  Formatter,
  SingleValueGrid,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const TrendAccessors = () => {
  const byteFormatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.data.byte,
    maximumFractionDigits: 3,
  };
  const percentFormatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.percentage.percent,
    output: units.percentage.percent,
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  };
  const data = [
    {
      data: 23490823049,
      label: 'HOST-AAA45667S',
      formatter: byteFormatter,
      trend: {
        direction: 'upward',
        value: 12,
        label: 'Last 24 hours',
      },
    },
    {
      data: 27,
      label: 'CPU Usage',
      formatter: percentFormatter,
      trend: {
        direction: 'downward',
        value: 26,
        label: 'Last 4 hours',
      },
    },
    {
      data: 4835058905,
      label: 'HOST-EUT34509-4567455',
      formatter: byteFormatter,
      trend: {
        direction: 'upward',
        value: 12,
        label: 'Last 12 hours',
      },
    },
    {
      data: 2349082834,
      label: 'HOST-EUT34509',
      formatter: byteFormatter,
      trend: {
        direction: 'neutral',
        label: 'Last 30 minutes',
      },
    },
    {
      data: 12,
      label: 'HOST-AUT77512',
      unit: 'hosts',
      trend: {
        direction: 'upward',
        value: 10,
        label: 'Last 2 months',
      },
    },
    {
      data: 38.9,
      label: 'Host CPU temperature',
      unit: '°C',
      trend: {
        direction: 'downward',
        value: 7,
        label: 'Last 6 hours',
      },
    },
  ];
  const trendColor = Colors.Charts.CategoricalThemed.Fireplace.Color03.Default;

  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: '1px',
        width: '600px',
        height: '250px',
        marginBottom: '16px',
      }}
    >
      <SingleValueGrid
        data={data}
        alignment="center"
        color={trendColor}
        labelAccessor="label"
      >
        <SingleValueGrid.Value
          dataAccessor="data"
          formatter={byteFormatter}
          formatterAccessor="formatter"
          unitAccessor="unit"
        ></SingleValueGrid.Value>
        {/* highlight-start */}
        <SingleValueGrid.Trend
          directionAccessor="trend.direction"
          valueAccessor="trend.value"
          labelAccessor="trend.label"
          formatter={{
            input: units.percentage.percent,
            output: units.percentage.percent,
          }}
          formatterAccessor="trend.formatter"
        ></SingleValueGrid.Trend>
        {/* highlight-end */}
      </SingleValueGrid>
    </div>
  );
};
```

#### Sparkline accessors and props

The `Sparkline` subcomponent extends the standard `Sparkline` component with two accessors:

- `dataAccessor` - accessor to get a data for the sparkline.
- `colorAccessor` - accessor to get a color of the sparkline.

**SparklineAccessors**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import {
  ConvertibleUnit,
  FormatOptions,
  Unit,
  units,
} from '@dynatrace-sdk/units';
import {
  Formatter,
  SingleValueGrid,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const SparklineAccessors = () => {
  const [timeseriesData1, timeseriesData2, timeseriesData3] =
    mockTimeseriesCpuUsage;
  const byteFormatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.data.byte,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  };
  const percentFormatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.percentage.percent,
    output: units.percentage.percent,
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  };
  const data = [
    {
      data: 23490823049,
      label: 'HOST-AAA45667S',
      formatter: byteFormatter,
      sparkline: {
        data: timeseriesData1,
        color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
      },
    },
    {
      data: 27,
      label: 'CPU Usage',
      formatter: percentFormatter,
      sparkline: {
        data: timeseriesData2,
        color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
      },
    },
    {
      data: 4835058905,
      label: 'HOST-EUT34509-4567455',
      formatter: byteFormatter,
      sparkline: {
        data: timeseriesData3,
      },
    },
    {
      data: 2349082834,
      label: 'HOST-EUT34509',
      formatter: byteFormatter,
      sparkline: {
        data: timeseriesData3,
      },
    },
    {
      data: 12,
      label: 'HOST-AUT77512',
      unit: 'hosts',
      sparkline: {
        data: timeseriesData1,
        color: Colors.Charts.CategoricalThemed.BlueSteel.Color01.Default,
      },
    },
    {
      data: 38.9,
      label: 'Host CPU temperature',
      unit: '°C',
      sparkline: {
        data: timeseriesData2,
        color: Colors.Charts.CategoricalThemed.Fireplace.Color04.Default,
      },
    },
  ];
  const valueColor = Colors.Charts.CategoricalThemed.BlueSteel.Color04.Default;
  const sparklineColor =
    Colors.Charts.CategoricalThemed.PurpleRain.Color02.Default;

  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: '1px',
        width: '600px',
        height: '250px',
        marginBottom: '16px',
      }}
    >
      <SingleValueGrid
        data={data}
        alignment="center"
        color={valueColor}
        labelAccessor="label"
      >
        <SingleValueGrid.Value
          dataAccessor="data"
          formatter={byteFormatter}
          formatterAccessor="formatter"
          unitAccessor="unit"
        ></SingleValueGrid.Value>
        {/* highlight-start */}
        <SingleValueGrid.Sparkline
          dataAccessor="sparkline.data"
          color={sparklineColor}
          colorAccessor="sparkline.color"
          variant="area"
        ></SingleValueGrid.Sparkline>
        {/* highlight-end */}
      </SingleValueGrid>
    </div>
  );
};
```

### Grid - putting it all together

Let's have a look at the grid with all the accessors and props in action.

**GridAllAccessors**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import {
  ConvertibleUnit,
  FormatOptions,
  Unit,
  units,
} from '@dynatrace-sdk/units';
import {
  Formatter,
  SingleValueGrid,
} from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const GridAllAccessors = () => {
  const [timeseriesData1, timeseriesData2, timeseriesData3] =
    mockTimeseriesCpuUsage;
  const byteFormatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.data.byte,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  };
  const percentFormatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.percentage.percent,
    output: units.percentage.percent,
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  };
  const data = [
    {
      data: 23490823049,
      label: 'HOST-AAA45667S',
      formatter: byteFormatter,
      sparkline: {
        data: timeseriesData1,
        color: Colors.Charts.CategoricalThemed.BlueSteel.Color06.Default,
      },
      trend: {
        direction: 'upward',
        value: 12,
        label: 'Last 24 hours',
      },
    },
    {
      data: 27,
      label: 'CPU Usage',
      formatter: percentFormatter,
      sparkline: {
        data: timeseriesData2,
        color: Colors.Charts.CategoricalThemed.Swamps.Color03.Default,
      },
      trend: {
        direction: 'downward',
        value: 26,
        label: 'Last 4 hours',
      },
    },
    {
      data: 4835058905,
      label: 'HOST-EUT34509-4567455',
      formatter: byteFormatter,
      sparkline: {
        data: timeseriesData3,
      },
      trend: {
        direction: 'upward',
        value: 12,
        label: 'Last 12 hours',
      },
    },
    {
      data: 2349082834,
      label: 'HOST-EUT34509',
      formatter: byteFormatter,
      sparkline: {
        data: timeseriesData3,
      },
      trend: {
        direction: 'neutral',
        label: 'Last 30 minutes',
      },
    },
    {
      data: 12,
      label: 'HOST-AUT77512',
      unit: 'hosts',
      sparkline: {
        data: timeseriesData1,
        color: Colors.Charts.CategoricalThemed.BlueSteel.Color01.Default,
      },
      trend: {
        direction: 'upward',
        value: 10,
        label: 'Last 2 months',
      },
    },
    {
      data: 38.9,
      label: 'Host CPU temperature',
      unit: '°C',
      sparkline: {
        data: timeseriesData2,
        color: Colors.Charts.CategoricalThemed.Fireplace.Color04.Default,
      },
      trend: {
        direction: 'downward',
        value: 7,
        label: 'Last 6 hours',
      },
    },
  ];
  const valueColor = Colors.Charts.CategoricalThemed.BlueSteel.Color04.Default;
  const sparklineColor =
    Colors.Charts.CategoricalThemed.PurpleRain.Color02.Default;

  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: '1px',
        width: '600px',
        height: '250px',
        marginBottom: '16px',
      }}
    >
      <SingleValueGrid
        data={data}
        alignment="center"
        color={valueColor}
        labelAccessor="label"
      >
        <SingleValueGrid.Value
          dataAccessor="data"
          formatter={byteFormatter}
          formatterAccessor="formatter"
          unitAccessor="unit"
        ></SingleValueGrid.Value>
        <SingleValueGrid.Trend
          directionAccessor="trend.direction"
          valueAccessor="trend.value"
          labelAccessor="trend.label"
          formatter={percentFormatter}
          formatterAccessor="trend.formatter"
        ></SingleValueGrid.Trend>
        <SingleValueGrid.Sparkline
          dataAccessor="sparkline.data"
          color={sparklineColor}
          colorAccessor="sparkline.color"
          variant="area"
        ></SingleValueGrid.Sparkline>
      </SingleValueGrid>
    </div>
  );
};
```
