## stateClient

```js
import { stateClient } from '@dynatrace-sdk/client-state';
```

### deleteAppState

**stateClient.deleteAppState(config): Promise\<void>**

Deletes app state

**Required scope:** state:app-states:delete

#### Parameters

| Name                  | Type   | Description                                                     |
| --------------------- | ------ | --------------------------------------------------------------- |
| config.key (required) | string | Specify the key of the state<br /><br />**Example:** `some-key` |

#### Throws

| Error Type          | Error Message         |
| ------------------- | --------------------- |
| Unauthorized        | Unauthorized          |
| Forbidden           | Forbidden             |
| NotFound            | Not found             |
| InternalServerError | Internal server error |
| GeneralError        | Unexpected error      |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.deleteAppState({
  key: "some-key",
});
```

### deleteAppStates

**stateClient.deleteAppStates(config): Promise\<void>**

Delete all app states

**Required scope:** state:app-states:delete

Deletes all app states for an app to reset the app into a clean state.

#### Throws

| Error Type   | Error Message    |
| ------------ | ---------------- |
| GeneralError | Unexpected error |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.deleteAppStates();
```

### deleteUserAppState

**stateClient.deleteUserAppState(config): Promise\<void>**

Delete user app state

**Required scope:** state:user-app-states:delete

#### Parameters

| Name                  | Type   | Description                                                     |
| --------------------- | ------ | --------------------------------------------------------------- |
| config.key (required) | string | Specify the key of the state<br /><br />**Example:** `some-key` |

#### Throws

| Error Type          | Error Message         |
| ------------------- | --------------------- |
| Unauthorized        | Unauthorized          |
| Forbidden           | Forbidden             |
| NotFound            | Not found             |
| InternalServerError | Internal server error |
| GeneralError        | Unexpected error      |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.deleteUserAppState({
  key: "some-key",
});
```

### deleteUserAppStates

**stateClient.deleteUserAppStates(config): Promise\<void>**

Delete all user app states

**Required scope:** state:user-app-states:delete

Deletes all user app states for the calling user and app.

#### Throws

| Error Type   | Error Message    |
| ------------ | ---------------- |
| GeneralError | Unexpected error |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.deleteUserAppStates();
```

### getAppState

**stateClient.getAppState(config): Promise\<[AppState](#appstate)>**

Gets app state

**Required scope:** state:app-states:read

#### Parameters

| Name                  | Type   | Description                                                     |
| --------------------- | ------ | --------------------------------------------------------------- |
| config.key (required) | string | Specify the key of the state<br /><br />**Example:** `some-key` |

#### Returns

| Return type           | Status code | Description   |
| --------------------- | ----------- | ------------- |
| [AppState](#appstate) | 200         | The app state |

#### Throws

| Error Type          | Error Message         |
| ------------------- | --------------------- |
| Unauthorized        | Unauthorized          |
| Forbidden           | Forbidden             |
| NotFound            | Not found             |
| InternalServerError | Internal server error |
| GeneralError        | Unexpected error      |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.getAppState({
  key: "some-key",
});
```

### getAppStates

**stateClient.getAppStates(config): Promise\<[AppStates](#appstates)>**

List app states

**Required scope:** state:app-states:read

Lists app states. By default, only provides property **key** per state. Use *add-fields* parameter to include more fields and the *filter* parameter to narrow down the returned states.

#### Parameters

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | string | Provide a comma separated list of additional properties to be included in the response.<br /><br />**Example:** `value,modificationInfo`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.filter    | string | The filter parameter for filtering the set of returned resources If this parameter is omitted, no filtering is applied and all states will be returned. Filtering by string type parameters `key`, `modificationInfo.lastModifiedBy` when using one of the operators `contains`, `starts-with` and `ends-with` is **case insensitive**. When using the operators `=`and `!=`, filtering is **case sensitive**. The following fields are legal filtering parameters - any other field names will result in a HTTP 400 response: * &#x20;
  `key`, supported operators: `=`, `!=`, `contains`, `starts-with`, `ends-with`:
  &#x20;
* &#x20;
  `modificationInfo.lastModifiedTime`, supported operators:	`=`, `!=`, `<`, `<=`, `>`, `>=`
  &#x20;
* &#x20;
  `modificationInfo.lastModifiedBy`, supported operators: `=`, `!=`, `contains`, `starts-with`, `ends-with`
  &#x20;
* &#x20;
  `validUntilTime`, supported operators:	`=`, `!=`, `<`, `<=`, `>`, `>=`
  &#x20; The following constraints apply: * &#x20;
  Field names are **case-sensitive**.
  &#x20;
* &#x20;
  Conditions can be connected via operators `and` and `or`. A single condition can be negated by `not`.
  &#x20;
* &#x20;
  Strings **must** be enclosed in **single quotes**. e.g. `key contains 'my-string'`
  &#x20;
* &#x20;
  Single quotes within a string must be escaped with a backslash: e.g. `key starts-with 'it\'s a string'`
  &#x20;
* &#x20;
  Maximum nesting depth (via brackets) is 2.
  &#x20;
* &#x20;
  Maximum length is 256 characters.
  &#x20; Examples: * &#x20;
  `key starts-with 'game-'`
  &#x20;
* &#x20;
  `modificationInfo.lastModifiedTime >= '2022-07-01T00:10:05.000Z' and not (key contains 'new')`
  &#x20; <br /><br />**Example:** `modificationInfo.lastModifiedTime >= '2022-02-06T11:00:00Z'` |

#### Returns

| Return type             | Status code | Description            |
| ----------------------- | ----------- | ---------------------- |
| [AppStates](#appstates) | 200         | The list of app states |

#### Throws

| Error Type          | Error Message         |
| ------------------- | --------------------- |
| Unauthorized        | Unauthorized          |
| Forbidden           | Forbidden             |
| InternalServerError | Internal server error |
| GeneralError        | Unexpected error      |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.getAppStates();
```

### getUserAppState

**stateClient.getUserAppState(config): Promise\<[UserAppState](#userappstate)>**

Get user app state

**Required scope:** state:user-app-states:read

#### Parameters

| Name                  | Type   | Description                                                     |
| --------------------- | ------ | --------------------------------------------------------------- |
| config.key (required) | string | Specify the key of the state<br /><br />**Example:** `some-key` |

#### Returns

| Return type                   | Status code | Description        |
| ----------------------------- | ----------- | ------------------ |
| [UserAppState](#userappstate) | 200         | The user app state |

#### Throws

| Error Type          | Error Message         |
| ------------------- | --------------------- |
| Unauthorized        | Unauthorized          |
| Forbidden           | Forbidden             |
| NotFound            | Not found             |
| InternalServerError | Internal server error |
| GeneralError        | Unexpected error      |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.getUserAppState({
  key: "some-key",
});
```

### getUserAppStates

**stateClient.getUserAppStates(config): Promise\<[UserAppStates](#userappstates)>**

List user app states

**Required scope:** state:user-app-states:read

Lists user app states. By default, only provides property **key** per state. Use *add-fields* parameter to include more fields and the *filter* parameter to narrow down the returned states

#### Parameters

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | string | Provide a comma separated list of additional properties to be included in the response.<br /><br />**Example:** `value,modificationInfo`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.filter    | string | The filter parameter for filtering the set of returned resources If this parameter is omitted, no filtering is applied and all states will be returned. Filtering by string type parameters `key`, `modificationInfo.lastModifiedBy` when using one of the operators `contains`, `starts-with` and `ends-with` is **case insensitive**. When using the operators `=`and `!=`, filtering is **case sensitive**. The following fields are legal filtering parameters - any other field names will result in a HTTP 400 response: * &#x20;
  `key`, supported operators: `=`, `!=`, `contains`, `starts-with`, `ends-with`:
  &#x20;
* &#x20;
  `modificationInfo.lastModifiedTime`, supported operators:	`=`, `!=`, `<`, `<=`, `>`, `>=`
  &#x20;
* &#x20;
  `modificationInfo.lastModifiedBy`, supported operators: `=`, `!=`, `contains`, `starts-with`, `ends-with`
  &#x20;
* &#x20;
  `validUntilTime`, supported operators:	`=`, `!=`, `<`, `<=`, `>`, `>=`
  &#x20; The following constraints apply: * &#x20;
  Field names are **case-sensitive**.
  &#x20;
* &#x20;
  Conditions can be connected via operators `and` and `or`. A single condition can be negated by `not`.
  &#x20;
* &#x20;
  Strings **must** be enclosed in **single quotes**. e.g. `key contains 'my-string'`
  &#x20;
* &#x20;
  Single quotes within a string must be escaped with a backslash: e.g. `key starts-with 'it\'s a string'`
  &#x20;
* &#x20;
  Maximum nesting depth (via brackets) is 2.
  &#x20;
* &#x20;
  Maximum length is 256 characters.
  &#x20; Examples: * &#x20;
  `key starts-with 'game-'`
  &#x20;
* &#x20;
  `modificationInfo.lastModifiedTime >= '2022-07-01T00:10:05.000Z' and not (key contains 'new')`
  &#x20; <br /><br />**Example:** `modificationInfo.lastModifiedTime >= '2022-02-06T11:00:00Z'` |

#### Returns

| Return type                     | Status code | Description                 |
| ------------------------------- | ----------- | --------------------------- |
| [UserAppStates](#userappstates) | 200         | The list of user app states |

#### Throws

| Error Type          | Error Message         |
| ------------------- | --------------------- |
| Unauthorized        | Unauthorized          |
| Forbidden           | Forbidden             |
| InternalServerError | Internal server error |
| GeneralError        | Unexpected error      |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.getUserAppStates();
```

### setAppState

**stateClient.setAppState(config): Promise\<void>**

Updates app state

**Required scope:** state:app-states:write

Updates the *cross-user* app state for the given key. Be aware that other users will be able to read the value.
Use the user-scoped user-app-state to only store values for the authenticated user.

**[Certain limits](https://dt-url.net/platform-services-state-service/#limitations)** apply when updating app states.

#### Parameters

| Name                   | Type                  | Description                                                     |
| ---------------------- | --------------------- | --------------------------------------------------------------- |
| config.body (required) | [AppState](#appstate) |                                                                 |
| config.key (required)  | string                | Specify the key of the state<br /><br />**Example:** `some-key` |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | OK          |

#### Throws

| Error Type             | Error Message                                                   |
| ---------------------- | --------------------------------------------------------------- |
| AppStateLimitsExceeded | Exceeded size limit for combined size of app states of this app |
| Unauthorized           | Unauthorized                                                    |
| Forbidden              | Forbidden                                                       |
| InternalServerError    | Internal server error                                           |
| GeneralError           | Unexpected error                                                |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.setAppState({
  key: "some-key",
  body: { value: "some-state", validUntilTime: "now+2d" },
});
```

### setUserAppState

**stateClient.setUserAppState(config): Promise\<void>**

Updates user app state

**Required scope:** state:user-app-states:write

Updates the user specific app state for the given key and calling user.

**[Certain limits](https://dt-url.net/platform-services-state-service/#limitations)** apply when updating user app states.

#### Parameters

| Name                   | Type                          | Description                                                     |
| ---------------------- | ----------------------------- | --------------------------------------------------------------- |
| config.body (required) | [UserAppState](#userappstate) |                                                                 |
| config.key (required)  | string                        | Specify the key of the state<br /><br />**Example:** `some-key` |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | OK          |

#### Throws

| Error Type                 | Error Message                                                                   |
| -------------------------- | ------------------------------------------------------------------------------- |
| UserAppStateLimitsExceeded | Exceeded limit for number of user app states to be stored for this user and app |
| Unauthorized               | Unauthorized                                                                    |
| Forbidden                  | Forbidden                                                                       |
| InternalServerError        | Internal server error                                                           |
| GeneralError               | Unexpected error                                                                |

**Code example**

```ts
import { stateClient } from "@dynatrace-sdk/client-state";

const data = await stateClient.setUserAppState({
  key: "some-key",
  body: { value: "some-state", validUntilTime: "now+2d" },
});
```
