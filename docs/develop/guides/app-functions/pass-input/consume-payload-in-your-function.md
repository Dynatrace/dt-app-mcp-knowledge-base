## Consume payload in your function

You can access the data you passed to your function via the `payload` parameter. As mentioned above, you can benefit from all the advantages of TypeScript by using the same type for both your app code and your function code.
Your function would look like this eventually:

```ts title="api/consume.function.ts" untestable
import { Input } from '../shared/types';

type Output = {
  result: string;
};

export default (payload: Input): Output => {
  return {
    result: 'Hello ' + payload.name,
  };
};
```
