## Highlight multiple terms

To highlight multiple terms within the same `Highlight` component, pass the substrings you want to highlight as an array to the `term` prop.

**MultipleTerms**

```tsx
import { Highlight } from '@dynatrace/strato-components/typography';

const MultipleTerms = () => {
  return (
    <>
      <Highlight
        // highlight-next-line
        term={['app', 'observability', 'dynatrace']}
      >
        With the Dynatrace AppEngine, you can build custom apps on top of all
        the observability data collected by Dynatrace.
      </Highlight>
      <Highlight
        //  highlight-next-line
        term={['app', 'observability', 'dynatrace']}
      >
        <div>
          <div>With the Dynatrace AppEngine,</div>
          <div>
            <span>you can build custom apps</span>
          </div>
          on top of all the <span>observability data</span> collected by
          Dynatrace.
        </div>
      </Highlight>
    </>
  );
};
```
