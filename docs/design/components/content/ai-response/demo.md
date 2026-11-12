## Demo

**Basic**

```tsx
import { useState } from 'react';

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

const Basic = () => {
  const [responseText, setResponseText] = useState('');

  return (
    <Flex flexDirection="column" gap={4}>
      <Button
        variant="emphasized"
        onClick={() => setResponseText(responseExample)}
      >
        Animate response
      </Button>
      <AiResponse responseState="complete">{responseText}</AiResponse>
    </Flex>
  );
};
```
