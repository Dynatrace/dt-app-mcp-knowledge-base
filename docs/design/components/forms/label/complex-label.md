## Complex label

When using a more complex custom label (not string-based), it is necessary to handle the visualization of the required property in the custom label itself. In the basic implementation, it adds an asterisk in the `:after` of the label.

```
&:after {
  content: ' *';
}
```

**Complex**

```tsx
import styled from 'styled-components';

import { Label } from '@dynatrace/strato-components/forms';
import { Strong } from '@dynatrace/strato-components/typography';

const StyledLabel = styled(Label)((props) => {
  //  highlight-start
  if (props.required) {
    return {
      '&:after': {
        content: '*',
      },
    };
  }
  // highlight-end
});

const Complex = () => {
  return (
    <StyledLabel
      htmlFor="id-simple"
      // highlight-next-line
      required
    >
      <Strong>The label used for the "from" datepicker input.</Strong>
    </StyledLabel>
  );
};
```
