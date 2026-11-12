## Add more information

To display more information about the progress, use `ProgressBar` compounds. `ProgressBar.Label` can be used to describe what's happening (e.g. Downloading, Uploading, Processing). `ProgressBar.Icon` allows you to add visual icons. `ProgressBar.Value` displays the progress in numerical values.

**Compounds**

```tsx
import { ProgressBar } from '@dynatrace/strato-components/content';
import { DownloadIcon } from '@dynatrace/strato-icons';

const Compounds = () => {
  return (
    <ProgressBar value={75}>
      {/* highlight-start */}
      <ProgressBar.Label>Downloading</ProgressBar.Label>
      <ProgressBar.Icon>
        <DownloadIcon />
      </ProgressBar.Icon>
      <ProgressBar.Value>75 / 100 MB</ProgressBar.Value>
      {/* highlight-end */}
    </ProgressBar>
  );
};
```
