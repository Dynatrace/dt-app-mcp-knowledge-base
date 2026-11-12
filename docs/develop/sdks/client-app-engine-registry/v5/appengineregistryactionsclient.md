## appEngineRegistryActionsClient

```js
import { appEngineRegistryActionsClient } from '@dynatrace-sdk/client-app-engine-registry';
```

### getAppAction

**appEngineRegistryActionsClient.getAppAction(config): Promise\<[ActionDetails](#actiondetails)>**

Get a single action of an installed app.

**Required scope:** app-engine:apps:run

**Early adopter:** May be changed in non-compatible ways, although we try to avoid this.

Returns the action with all its fields, as declared in the manifest of the app.

#### Parameters

| Name                         | Type   | Description                                                                                       |
| ---------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| config.actionName (required) | string | The name of the action (`action.name` in the response).<br /><br />**Example:** `jira-link-issue` |
| config.appId (required)      | string | The id of the app (`app.id` in the response).<br /><br />**Example:** `dynatrace.jira`            |

#### Returns

| Return type                     | Status code | Description |
| ------------------------------- | ----------- | ----------- |
| [ActionDetails](#actiondetails) | 200         | OK          |

#### Throws

| Error Type         | Error Message                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ErrorEnvelopeError | The app isn't installed, the user isn't allowed to run it, or it has no action with this name. \| Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistryActionsClient } from "@dynatrace-sdk/client-app-engine-registry";

const data =
  await appEngineRegistryActionsClient.getAppAction({
    appId: "dynatrace.jira",
    actionName: "jira-link-issue",
  });
```

### getAppActions

**appEngineRegistryActionsClient.getAppActions(config): Promise\<[ActionList](#actionlist)>**

Get actions of installed apps.

**Required scope:** app-engine:apps:run

**Early adopter:** May be changed in non-compatible ways, although we try to avoid this.

Returns a flat list of the actions of all installed apps.

Every entry carries a minimal set of fields. Use `add-fields` to request more fields, or
`GET /actions/{appId}/{actionName}` to get a single action with all its fields.

#### Parameters

| Name             | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields | string | Comma-separated list of field names that are added to the default set of fields. The default set of fields is: * `app.id`
* `action.name`
* `action.title`
* `action.description` You can add any top-level field of the action, as declared in the manifest, with the prefix `action.`. Fields that an action doesn't declare are left out for that action.                                                                                                                                                                                                                                                                                                                                                                                  |
| config.filter    | string | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `app.id`
* `action.<field>`
  : top-level fields of the action, as declared in the manifest Use `search` for a free-text search. Use `filter` for conditions on specific fields. If you use both, an action must match both. Examples: * `app.id = 'dynatrace.jira'`
* `action.name starts-with 'jira-'`
* `not (action.inputSchema is-empty)` If this parameter is omitted, all actions are returned. The maximum nesting depth (via parentheses) is 3. The maximum expression length is 256 characters. Filtering on a field doesn't add the field to the response. Use `add-fields` for that. |
| config.search    | string | A whitespace separated list of search terms. For an action to match, each search term must be contained in either: app id, app name, action name, action title or action description. Search terms are case insensitive and each additional search term restricts actions further. Maximum length is 256 characters. If you also use `filter`, an action must match both. Example: `search=jira issue` returns actions that contain both `jira` and `issue`. If this parameter is omitted, all actions are returned.                                                                                                                                                                                                                          |

#### Returns

| Return type               | Status code | Description |
| ------------------------- | ----------- | ----------- |
| [ActionList](#actionlist) | 200         | OK          |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistryActionsClient } from "@dynatrace-sdk/client-app-engine-registry";

const data =
  await appEngineRegistryActionsClient.getAppActions();
```
