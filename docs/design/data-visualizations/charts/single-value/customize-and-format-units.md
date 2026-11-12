## Customize and format units

When passing a number to the `data` attribute, you can use the `formatter` prop to change how the number is represented. All the Design System formatters together with their respective configurations are supported. The suffix provided by certain formatters will be overwritten by the `unit` prop if defined.

### Unit prop usage

The `unit` prop accepts either a string or a Unit type from `@dynatrace-sdk/units`:

```tsx
// String unit
<SingleValue data={95174635.2456} unit="GigaByte" />

// Unit type from @dynatrace-sdk/units
import { units } from '@dynatrace-sdk/units';
<SingleValue data={1024} unit={units.data.byte} />

// Custom string units
<SingleValue data={38.9} unit="°C" />
<SingleValue data={1500} unit="ms" />
```

**CustomizeUnits**

```tsx
import {
  ConvertibleUnit,
  FormatOptions,
  Unit,
  units,
} from '@dynatrace-sdk/units';
import { Formatter, SingleValue } from '@dynatrace/strato-components/charts';

const CustomizeUnits = () => {
  const formatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.data.byte,
    output: units.data.gigabyte,
    maximumFractionDigits: 2,
  };

  return (
    <div
      style={{
        outline: 'solid 1px black',
        outlineOffset: '1px',
        width: '600px',
        height: '200px',
      }}
    >
      <SingleValue
        data={95174635.2456}
        // highlight-start
        formatter={formatter}
        unit="GigaByte"
        // highlight-end
      />
    </div>
  );
};
```
