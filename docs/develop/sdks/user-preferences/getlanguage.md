### getLanguage

**getLanguage(): string**

Retrieves the user preferred language.

#### Returns

| Return type | Description                           |
| ----------- | ------------------------------------- |
| string      | language defined in user preferences. |

**Code example**

```ts
// Import the getLanguage function
import { getLanguage } from '@dynatrace-sdk/user-preferences';

// Get the user's language preference
const language = getLanguage();
```
