## Enable JSONPath filtering

JSONPath filtering lets users target nested JSON data using JSONPath expressions. To enable JSONPath filtering, set `jsonPathConversion: true` in the `parserConfig` prop and add `{ type: 'JSONPath' }` to the `valuePredicate` array in your validator map. You can combine JSONPath with other types, such as `{type: Number}` or specific values, for flexible filtering. When combined, the filter key appears twice in the suggestions: once with `$.` notation for JSONPath, and once without for the expected type.

**JSONPath**

```tsx
import {
  FilterField,
  type FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';

const jsonPathValidatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'JSONPath',
      valueType: 'JSONPath',
    },
    {
      key: 'JSONPathAndAdditionalTypes',
      valueType: ['JSONPath', 'Number'],
    },
    {
      key: 'JSONPathAndAdditionalValue',
      valuePredicate: ['active', 'inactive'],
      valueType: 'JSONPath',
    },
  ],
  exhaustive: true,
};

const JSONPath = () => {
  return (
    <FilterField
      aria-label="Filter data with JSONPath"
      validatorMap={jsonPathValidatorMap}
      // highlight-next-line
      parserConfig={{ jsonPathConversion: true }}
      autoSuggestions
    />
  );
};
```
