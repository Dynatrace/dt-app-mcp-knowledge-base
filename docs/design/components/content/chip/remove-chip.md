## Remove chip

You can add a `DeleteButton` to the `Chip` to allow removing it. This comes with a default 'Delete Chip' translation used for the `aria-label`. If necessary, you can also override it with a different translation by setting the `aria-label`.

**DeleteButton**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Chip } from '@dynatrace/strato-components/content';

const DeleteButton = () => {
  const [showChip, setShowChip] = useState(true);

  return (
    // oxlint-disable-next-line react/jsx-no-useless-fragment -- extract-usecase-snippets requires a JSX element at the top of the Jsx region; a bare conditional expression is not valid JSX and causes a parse error.
    <>
      {showChip ? (
        <Chip>
          kxo25992
          {/* highlight-start */}
          <Chip.DeleteButton
            aria-label="My custom translation"
            onClick={() => setShowChip(false)}
          />
          {/* highlight-end */}
        </Chip>
      ) : (
        <Button onClick={() => setShowChip(true)}>Add Chip</Button>
      )}
    </>
  );
};
```
