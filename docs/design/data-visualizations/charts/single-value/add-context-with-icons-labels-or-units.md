## Add context with icons, labels, or units

In order to add additional context to a `SingleValue`, you can add any combination of the following props to the visualization:

- `prefixIcon`: This prop allows you to set a prefixed symbol as a ReactNode, consisting of an icon, emoji, single character, glyph, or Design System icon. It will be displayed to the left of the value.
- `unit`: With this prop it is possible to set a custom unit to be displayed with the single value, which will be appended to the right of the value. This prop takes priority over units provided with the formatter prop.
- `label`: This prop enables you to set a custom text which will be shown above the value.

**AddIconAndLabel**

```tsx
import {
  ConvertibleUnit,
  FormatOptions,
  Unit,
  units,
} from '@dynatrace-sdk/units';
import { Formatter, SingleValue } from '@dynatrace/strato-components/charts';
import { ViewIcon } from '@dynatrace/strato-icons';

const AddIconAndLabel = () => {
  const formatter: Formatter | FormatOptions<Unit, ConvertibleUnit> = {
    input: units.data.byte,
    maximumFractionDigits: 2,
  };
  const label = 'My Linux VM';

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
        data={70000000}
        formatter={formatter}
        // highlight-start
        prefixIcon={<ViewIcon />}
        unit="B"
        label={label}
        // highlight-end
      />
    </div>
  );
};
```
