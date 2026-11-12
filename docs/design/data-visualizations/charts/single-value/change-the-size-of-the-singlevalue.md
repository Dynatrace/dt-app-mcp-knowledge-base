## Change the size of the SingleValue

The `SingleValue` component will always use all of the available space that it is given. In order to control the size of the `SingleValue`, it has to be wrapped inside a container and the container set to your desired size.

**ChangeSize**

```tsx
import { SingleValue } from '@dynatrace/strato-components/charts';

const ChangeSize = () => {
  return (
    <div
      style={{
        resize: 'both',
        overflow: 'hidden',
        outline: 'solid 1px black',
        outlineOffset: '1px',
        minWidth: '4vw',
        minHeight: '44px',
        width: '600px',
        height: '200px',
        paddingRight: '10px',
      }}
    >
      {/* highlight-next-line */}
      <SingleValue data="HOST-1CB78E6BCE1E768C" />
    </div>
  );
};
```
