## Demo

The `SingleValue` expects a single value as an input. You must pass this value to the visualisation's `data` prop as either a `Number` or `String`. Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/SingleValue/props.md).

**AddData**

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

const AddData = () => {
  return (
    <>
      <StyledContainer>
        {/* highlight-next-line */}
        <SingleValue data={45} />
      </StyledContainer>

      <StyledContainer>
        {/* highlight-next-line */}
        <SingleValue data="HOST-1CB78E6BCE1E768C" />
      </StyledContainer>
    </>
  );
};
```
