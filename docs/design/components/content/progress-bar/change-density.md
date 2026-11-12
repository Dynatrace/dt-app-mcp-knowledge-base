## Change density

The `ProgressBar` can also be condensed. To enhance the layout, any additional information can be shown above the `ProgressBar`. If there's insufficient space to display the entire label or value text, it will be truncated automatically.

**Density**

```tsx
import { ProgressBar } from '@dynatrace/strato-components/content';
import { DownloadIcon } from '@dynatrace/strato-icons';

const Density = () => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <ProgressBar
        value={75}
        // highlight-next-line
        density="condensed"
      >
        <ProgressBar.Label>
          Very long label that will be truncated in a condensed ProgressBar
        </ProgressBar.Label>
        <ProgressBar.Icon>
          <DownloadIcon />
        </ProgressBar.Icon>
        <ProgressBar.Value>75 / 100 MB</ProgressBar.Value>
      </ProgressBar>
    </div>
  );
};
```
