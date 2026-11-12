## Custom code block renderers

Use the `customCodeBlockRenderers` prop to render the content of a fenced code block as a component instead of as a code snippet. It maps a fence language to the component that renders blocks of that language:

````markdown
```dt-visualization
{ "labelAccessor": "category", "valueAccessor": "value", "data": [] }
```
````

Blocks with any other language, and inline code, keep their default rendering. Pass a stable reference, for example by wrapping the map in `useMemo`.

The renderer receives the `code` of the block, its `language`, and `isComplete`. A response is revealed word by word, so a code block is rendered long before its content is complete, and processing a partial content — parsing JSON, for example — fails until the closing fence arrives. Use `isComplete` to show a placeholder until then.

**CustomCodeBlockRenderers**

```tsx
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { DonutChart } from '@dynatrace/strato-components/charts';
import {
  AiResponse,
  type AiResponseCodeBlockProps,
  Skeleton,
} from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const responseExample = `## Conversions by region

The last quarter is dominated by EMEA, with LATAM in second place.

\`\`\`dt-visualization
{
  "labelAccessor": "category",
  "valueAccessor": "value",
  "data": [
    { "category": "EMEA", "value": 66 },
    { "category": "APAC", "value": 25 },
    { "category": "LATAM", "value": 33 },
    { "category": "NA", "value": 5 }
  ]
}
\`\`\`

Ask a follow-up question to break the numbers down further.
`;

interface VisualizationPayload {
  data: Record<string, unknown>[];
  labelAccessor: string;
  valueAccessor: string;
}

const parsePayload = (code: string): VisualizationPayload | undefined => {
  try {
    return JSON.parse(code) as VisualizationPayload;
  } catch {
    return undefined;
  }
};

// highlight-next-line
const Visualization = ({ code, isComplete }: AiResponseCodeBlockProps) => {
  // The payload is only parsable once the closing fence of the block has arrived.
  if (!isComplete) {
    return <Skeleton height={300} />;
  }

  const payload = parsePayload(code);

  if (!payload) {
    return <Text>The visualization could not be rendered.</Text>;
  }

  return (
    <DonutChart
      data={payload.data}
      labelAccessor={payload.labelAccessor}
      valueAccessor={payload.valueAccessor}
    />
  );
};

const CustomCodeBlockRenderers = () => {
  const [responseText, setResponseText] = useState('');

  /* highlight-start */
  const customCodeBlockRenderers = useMemo(
    () => ({ 'dt-visualization': Visualization }),
    [],
  );
  /* highlight-end */

  return (
    <Flex flexDirection="column" gap={16}>
      <Button
        variant="emphasized"
        onClick={() => setResponseText(responseExample)}
      >
        Animate response
      </Button>
      <AiResponse
        // highlight-next-line
        customCodeBlockRenderers={customCodeBlockRenderers}
        responseState="complete"
      >
        {responseText}
      </AiResponse>
    </Flex>
  );
};
```
