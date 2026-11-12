## Change the color of the SingleValue

You can customize the `SingleValue`'s appearance in several ways:

1. **Direct Color Assignment**: Use the `color` prop to set any `Design System color token`, `rgb`, `hex`, or `CSS color`.
2. **Color Rules**: Apply conditional coloring based on the value or other properties.

### Direct color assignment

With the `color` prop you can change the `SingleValue`'s color to any `Design System color token` as well as any `rgb`, `hex` or `CSS color`. If no color is set, the default color is automatically set based on the current theme.

**ChangeColors**

```tsx
import { SingleValue } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const ChangeColors = () => {
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
        data="HOST-1CB78E6BCE1E768C"
        // highlight-next-line
        color={Colors.Text.Critical.Default}
      />
    </div>
  );
};
```

### Using color rules

For more advanced coloring scenarios, you can use the `SingleValue.ColorRule` slot to apply conditional coloring based on your data values. This is particularly useful for highlighting specific data points or applying business logic to your visualizations.

**ColorRules**

```tsx
import { SingleValue } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { TechnologiesIcon } from '@dynatrace/strato-icons';

const stringData = 'HOST-1CB78E6BCE1E768C';
const numericData = 8;

const ColorRules = () => {
  const dimensions = { height: '100px', width: '200px' };
  return (
    <Flex flexDirection="column">
      <h3>String-based color rules</h3>
      <Flex flexDirection="row">
        <div>
          <h4>Starts with "HOST"</h4>
          <div style={dimensions}>
            <SingleValue data={stringData} prefixIcon={<TechnologiesIcon />}>
              {/* highlight-start */}
              <SingleValue.ColorRule
                comparator="starts-with"
                matchValue="HOST"
                colorPalette="magenta-inverted"
              />
              {/* highlight-end */}
            </SingleValue>
          </div>
        </div>

        <div>
          <h3>Ends with "768C"</h3>
          <div style={dimensions}>
            <SingleValue data={stringData}>
              <SingleValue.ColorRule
                comparator="ends-with"
                matchValue="768C"
                color="#00ffff"
              />
            </SingleValue>
          </div>
        </div>

        <div>
          <h3>Matches phrase</h3>
          <div style={dimensions}>
            <SingleValue data="Series 2">
              <SingleValue.ColorRule
                comparator="matches-phrase"
                matchValue="Series 2"
                colorPalette="blue-turquoise-inverted"
              />
            </SingleValue>
          </div>
        </div>
      </Flex>

      <h3>Numeric color rules</h3>
      <Flex flexDirection="row">
        <div>
          <h4>Greater or equal to 5</h4>
          <div style={dimensions}>
            <SingleValue data={numericData}>
              <SingleValue.ColorRule
                comparator="greater-or-equal"
                matchValue={5}
                color="#00ff00"
              />
            </SingleValue>
          </div>
        </div>

        <div>
          <h4>Equals 8</h4>
          <div style={dimensions}>
            <SingleValue data={numericData}>
              <SingleValue.ColorRule
                comparator="equals"
                matchValue={8}
                color="#ff00ff"
              />
            </SingleValue>
          </div>
        </div>

        <div>
          <h3>With threshold background</h3>
          <div style={dimensions}>
            <SingleValue
              data={numericData}
              prefixIcon={<TechnologiesIcon />}
              label="HOST-78E69CE1EY420C"
              applyThresholdBackground
            >
              <SingleValue.ColorRule
                comparator="greater-or-equal"
                matchValue={5}
                colorPalette="red-inverted"
              />
            </SingleValue>
          </div>
        </div>
      </Flex>
    </Flex>
  );
};
```

Color rules can be applied based on different criteria:

- **String-based rules**: Match text patterns in your data using comparators like 'starts-with', 'ends-with', or 'matches-phrase'
- **Numeric rules**: Apply colors based on numeric comparisons like 'greater-than', 'less-than', etc.
- **Multiple rules**: Combine multiple rules for complex coloring logic

In the example above, we're using several rules:

1. Color any value starting with "HOST" using the 'magenta-inverted' color palette
2. Color any value ending with "768C" with a specific hex color (#00ffff)
3. Color any value exactly matching "Series 2" using the 'blue-turquoise-inverted' palette

For more details about available comparators and options, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.
