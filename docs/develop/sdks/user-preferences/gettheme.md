### getTheme

**getTheme(): ThemeType**

Retrieves the user preferred theme.

#### Returns

| Return type             | Description                        |
| ----------------------- | ---------------------------------- |
| [ThemeType](#themetype) | theme defined in user preferences. |

**Code example**

```ts
// Import the getTheme function
import { getTheme } from '@dynatrace-sdk/user-preferences';

// Get the user's theme preference
const theme = getTheme();
```
