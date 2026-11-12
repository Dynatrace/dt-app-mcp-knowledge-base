## Response state

The `responseState` prop controls how the component renders and animates content:

- `streaming` (default): Use while the AI response is actively being generated. The component animates each new word as it arrives, giving users a live typing effect.
- `complete`: Set this once streaming has finished and the full response text has been passed. The component finishes animating any remaining words that have not yet been displayed.
- `static`: Use when the full response is available upfront and no animation is needed. The content is rendered immediately without any animation.

**DynamicResponse**

```tsx
import { useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { AiResponse } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const responseExample = `
# Analyze, chart and share data together.
* Query and analyze logs, metrics, events and much more from Grail
* Write custom javascript code to get external data
* Annotate with markdown

**Also, everything is saved inside a notebook. So, what you see is what you get, even when sharing with others.**

### 1. Let's get started with a new query.

There are three types of section you can add to any notebook:
* **Query section**
* **Code section**
* **Markdown section**

![placeholder image 150x150 px](https://dt-cdn.net/images/placeholder-150-150-79230043aa.png)

Select \`Add data\` first to create a new query section.

First, select \`logs\`, adjust the timeframe if you need to, and then you're ready to \`Run query \`.

### 2. Now let's try refining the query result with a simple host filter.

Select the cell with the relevant host in the table and select \`Filter\`. Voilà, you just filtered by host!

> This filter only applies to the current section of your notebook. But you can add a new section with this host filter applied by holding \`Alt\` or \`Option\`.

### 3. You can share your query by selecting Share on the dot menu

---

To learn more about using Strato, you can visit [About Strato](/design/about-strato-design-system/).

`;

function getRandomOffset(): number {
  return Math.floor(Math.random() * 400) + 1;
}

const DynamicResponse = () => {
  const [responseState, setResponseState] = useState<'streaming' | 'complete'>(
    'streaming',
  );
  const [responseText, setResponseText] = useState('');
  const indexRef = useRef(getRandomOffset());

  const handleSimulateResponse = () => {
    const responseLength = responseExample.length;

    // animates the response text in parts to simulate a dynamic AI response
    const animateResponse = () => {
      const currentIndex = indexRef.current;
      if (currentIndex > responseLength) {
        return;
      }

      setResponseText(
        responseExample.slice(0, Math.min(indexRef.current, responseLength)),
      );

      const offset = getRandomOffset();
      indexRef.current += offset;
      if (currentIndex === responseLength) {
        indexRef.current = responseLength + 1;
      } else if (currentIndex + offset > responseLength) {
        indexRef.current = responseLength;
      }

      if (indexRef.current <= responseLength) {
        setTimeout(animateResponse, Math.random() * 500);
        return;
      }
      setResponseState('complete');
    };
    animateResponse();
  };

  return (
    <Flex flexDirection="column" gap={4}>
      <Button variant="emphasized" onClick={handleSimulateResponse}>
        Simulate response
      </Button>
      <AiResponse
        // oxlint-disable-next-line no-console
        onAnimationStateChange={(isAnimating) => console.log(isAnimating)}
        // highlight-next-line
        responseState={responseState}
      >
        {responseText}
      </AiResponse>
    </Flex>
  );
};
```
