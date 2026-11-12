### getRegionalFormat

**getRegionalFormat(): string**

Retrieves the user regional format.

#### Returns

| Return type | Description                                  |
| ----------- | -------------------------------------------- |
| string      | regional format defined in user preferences. |

**Code example**

```ts
// Import the getRegionalFormat function
import { getRegionalFormat } from '@dynatrace-sdk/user-preferences';

// Get the user's regional format preference
const regionalFormat = getRegionalFormat();
```
