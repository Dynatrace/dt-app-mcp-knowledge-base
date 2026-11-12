## Add detailed information about the trend

Another way to add detailed information about the `SingleValue` trend is to use a `Trend` component.

### Trend

The `Trend` allows you to configure and display a current state of trend including trend direction icon, color, trend value, and label.

In order to display a `Trend` within the `SingleValue` component you need to add the `<Trend />` subcomponent to the `SingleValue` component.

### Trend anatomy

The `Trend` component consists of the following elements:

- icon
- value
- label

If label and value are empty the trend direction icon will be hidden.

To set the trend direction the `direction` prop should be used. The `direction` prop accepts one of the following values: `upward`, `downward`, and `neutral`.

The `showIcon` prop is used to show or hide the trend direction icon. By default, the `showIcon` prop is set to `true`.

The `value` prop is used to set the trend value. The `value` prop accepts a numeric value.

The `label` prop is used to set the trend label.

**AddTrend**

```tsx
import { type PropsWithChildren } from 'react';

import { SingleValue } from '@dynatrace/strato-components/charts';

const StyledContainer = (props: PropsWithChildren) => (
  <div
    style={{
      outline: 'solid 1px black',
      outlineOffset: '1px',
      width: '600px',
      height: '200px',
      marginBottom: '16px',
    }}
  >
    {props.children}
  </div>
);

const AddTrend = () => {
  return (
    <>
      <StyledContainer>
        <SingleValue data={45}>
          {/* highlight-start */}
          <SingleValue.Trend
            direction="upward"
            value={17}
            label="for the last 7 days"
          />
          {/* highlight-end */}
        </SingleValue>
      </StyledContainer>

      <StyledContainer>
        <SingleValue data={45}>
          {/* highlight-start */}
          <SingleValue.Trend
            direction="downward"
            value={34}
            label="for the last 7 days"
          />
          {/* highlight-end */}
        </SingleValue>
      </StyledContainer>

      <StyledContainer>
        <SingleValue data={45}>
          {/* highlight-start */}
          <SingleValue.Trend
            direction="neutral"
            value={0}
            label="for the last 7 days"
          />
          {/* highlight-end */}
        </SingleValue>
      </StyledContainer>
    </>
  );
};
```

### Trend direction calculation based on value

When a `value` prop is provided without a `direction` prop, the trend direction is calculated based on the `value` prop's sign: positive value results in `upward` trend direction, negative value in `downward` trend, and zero value in `neutral` trend direction.

In case neither the `direction` nor `value` prop is provided, the trend direction is set to `neutral`.

**TrendAutomaticCalculation**

```tsx
import { type PropsWithChildren } from 'react';

import { SingleValue } from '@dynatrace/strato-components/charts';

const StyledContainer = (props: PropsWithChildren) => (
  <div
    style={{
      outline: 'solid 1px black',
      outlineOffset: '1px',
      width: '600px',
      height: '200px',
      marginBottom: '16px',
    }}
  >
    {props.children}
  </div>
);

const TrendAutomaticCalculation = () => {
  return (
    <>
      <StyledContainer>
        <SingleValue data={45}>
          {/* highlight-next-line */}
          <SingleValue.Trend value={17} label="for the last 7 days" />
        </SingleValue>
      </StyledContainer>

      <StyledContainer>
        <SingleValue data={45}>
          {/* highlight-next-line */}
          <SingleValue.Trend value={-34} label="for the last 7 days" />
        </SingleValue>
      </StyledContainer>

      <StyledContainer>
        <SingleValue data={45}>
          {/* highlight-next-line */}
          <SingleValue.Trend value={0} label="for the last 7 days" />
        </SingleValue>
      </StyledContainer>

      <StyledContainer>
        <SingleValue data={45}>
          {/* highlight-next-line */}
          <SingleValue.Trend label="for the last 7 days" />
        </SingleValue>
      </StyledContainer>
    </>
  );
};
```

### Trend coloring and formatting options

The color for each direction of a trend can be customized using the `colorOverrides` prop. The `colorOverrides` prop accepts an object with the following optional keys: `upward`, `downward`, and `neutral`. Each key accepts a string representing a valid CSS color.

The `formatter` prop can be used to format the trend value including adding a unit (e.g. `bytes`, `bits`, etc.).

**TrendColorAndFormatting**

```tsx
import { type PropsWithChildren } from 'react';

import {
  ConvertibleUnit,
  FormatOptions,
  Unit,
  units,
} from '@dynatrace-sdk/units';
import { Formatter, SingleValue } from '@dynatrace/strato-components/charts';

const StyledContainer = (props: PropsWithChildren) => (
  <div
    style={{
      outline: 'solid 1px black',
      outlineOffset: '1px',
      width: '600px',
      height: '200px',
      marginBottom: '16px',
    }}
  >
    {props.children}
  </div>
);
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

const TrendColorAndFormatting = () => {
  return (
    <>
      <StyledContainer>
        <SingleValue data={45}>
          <SingleValue.Trend
            direction="upward"
            value={17}
            label="for the last 7 days"
            // highlight-start
            colorsOverride={{ upward: 'purple' }}
            formatter={percentFormatter}
            // highlight-end
          />
        </SingleValue>
      </StyledContainer>

      <StyledContainer>
        <SingleValue data={122834} formatter={byteFormatter}>
          <SingleValue.Trend
            direction="downward"
            value={42834}
            label="for the last 7 days"
            // highlight-start
            colorsOverride={{ upward: 'purple', downward: 'orange' }}
            formatter={byteFormatter}
            // highlight-end
          />
        </SingleValue>
      </StyledContainer>
    </>
  );
};
```

### Inverse trend

An upward trend direction doesn't always represent a positive change, and the downtrend doesn't always represent a negative one. For example, when displaying a trend of a response time, a downward trend direction represents a positive change, while an upward trend in a host CPU usage represents a negative change.

To inverse a trend the `inverseTrend` prop should be used. Currently, the `inverseTrend` prop accepts two options: `none` and `color`. The `none` option doesn't affect the trend in any way and is a default behaviour. The `color` option inverts the default colors of the icon and the value (i.e. the icon and the value are colored as if the trend direction is opposite to the actual trend direction).

When `colorOverrides` are used, the `inverseTrend` prop with `color` option gets ignored.

**InverseTrend**

```tsx
import { type PropsWithChildren } from 'react';

import { SingleValue } from '@dynatrace/strato-components/charts';

const StyledContainer = (props: PropsWithChildren) => (
  <div
    style={{
      outline: 'solid 1px black',
      outlineOffset: '1px',
      width: '600px',
      height: '200px',
      marginBottom: '16px',
    }}
  >
    {props.children}
  </div>
);

const InverseTrend = () => {
  return (
    <>
      <StyledContainer>
        <SingleValue data={45}>
          <SingleValue.Trend
            direction="upward"
            value={27}
            label="for the last 7 days"
            // highlight-next-line
            inverseTrend="color"
          />
        </SingleValue>
      </StyledContainer>

      <StyledContainer>
        <SingleValue data={45}>
          <SingleValue.Trend
            direction="downward"
            value={27}
            label="for the last 7 days"
            // highlight-next-line
            inverseTrend="color"
            colorsOverride={{ upward: 'purple', downward: 'yellow' }}
          />
        </SingleValue>
      </StyledContainer>
    </>
  );
};
```
