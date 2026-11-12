## Demo

It's recommended to include the `AiLoadingIndicator.Icon` slot to show the default icon, which helps users identify AI-generated content.

**Basic**

```tsx
import { useState, useEffect } from 'react';

import { AiLoadingIndicator } from '@dynatrace/strato-components/content';

const Basic = () => {
  const labels = [
    'Generating answer…',
    'Analyzing data…',
    'Processing query…',
    'Retrieving context…',
    'Preparing results…',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Random interval between 1.5 and 3 seconds
    const randomDelay = Math.random() * 1_500 + 1_500;
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % labels.length);
    }, randomDelay);

    return () => clearTimeout(timeout);
  }, [currentIndex, labels.length]);

  return (
    <AiLoadingIndicator>
      {/* highlight-next-line */}
      <AiLoadingIndicator.Icon />
      {labels[currentIndex]}
    </AiLoadingIndicator>
  );
};
```
