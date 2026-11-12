## Variants

Depending on the value set for the `truncationMode` prop, the `TextEllipsis` component can truncate text at the `start`, `middle`, or `end`. It is important to note that `start` and `end` truncation rely on the CSS `text-overflow` ellipsis, making them more performant than the `middle` ellipsis.

**Variants**

```tsx
import { TextEllipsis } from '@dynatrace/strato-components/typography';

const Variants = () => {
  const text = '1 synthetic event, every 1 hour, 1/1 location unavailable';

  return (
    <div style={{ width: 200 }}>
      <TextEllipsis
        // highlight-next-line
        truncationMode="start"
      >
        {text}
      </TextEllipsis>
      <TextEllipsis
        // highlight-next-line
        truncationMode="middle"
      >
        {text}
      </TextEllipsis>
      <TextEllipsis
        // highlight-next-line
        truncationMode="end"
      >
        {text}
      </TextEllipsis>
    </div>
  );
};
```
