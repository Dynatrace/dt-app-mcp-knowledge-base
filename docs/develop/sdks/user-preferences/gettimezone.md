### getTimezone

**getTimezone(): string**

Retrieves the user preferred timezone.

Timezone can be either in ISO 8601 or tz database format.

#### Returns

| Return type | Description                           |
| ----------- | ------------------------------------- |
| string      | timezone defined in user preferences. |

**Code example**

```ts
// Import the getTimezone function
import { getTimezone } from '@dynatrace-sdk/user-preferences';

// Get the user's timezone preference
const timezone = getTimezone();
```
