## appEngineRegistryAppsClient

```js
import { appEngineRegistryAppsClient } from '@dynatrace-sdk/client-app-engine-registry';
```

### getApp

**appEngineRegistryAppsClient.getApp(config): Promise\<[AppInfo](#appinfo)>**

Get an installed app

**Required scope:** app-engine:apps:run

During an app update, when a current version and a new version exists, the current one is returned.

#### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields        | string  | Comma-separated list of field names that are added to the default set of fields. You can include the following additional fields: * `resourceContext`
* `resourceStatus.subResourceTypes`
* `resourceStatus.subResourceStatuses`
* `manifest`
* any top-level manifest field to include a part of the manifest, for example,&#x20;
  `manifest.scopes`
   or&#x20;
  `manifest.intents`
* `isBuiltin`
* `isolatedUri`
* `deactivationReasons` |
| config.id (required)    | string  | The unique identifier for the app                                                                                                                                                                                                                                                                                                                                                                                                             |
| config.latestAppVersion | boolean | If `true`, the latest version of the app is returned. If `false`, the current version of the app is returned. During an update, an app typically has two versions: the current version and the latest version with `status=PENDING`. <br /><br />**Default:** `false`                                                                                                                                                                         |

#### Returns

| Return type         | Status code | Description |
| ------------------- | ----------- | ----------- |
| [AppInfo](#appinfo) | 200         | OK          |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistryAppsClient } from "@dynatrace-sdk/client-app-engine-registry";

const data = await appEngineRegistryAppsClient.getApp({
  id: "...",
});
```

### getApps

**appEngineRegistryAppsClient.getApps(config): Promise\<[AppInfoList](#appinfolist)>**

List all installed apps.

**Required scope:** app-engine:apps:run

#### Parameters

| Name                         | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.addFields             | string  | Comma-separated list of field names that are added to the default set of fields. You can include the following additional fields: * `resourceContext`
* `resourceStatus.subResourceTypes`
* `resourceStatus.subResourceStatuses`
* `manifest`
* any top-level manifest field to include a part of the manifest, for example,&#x20;
  `manifest.scopes`
   or&#x20;
  `manifest.intents`
* `isBuiltin`
* `isolatedUri`
* `deactivationReasons`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.filter                | string  | The filter parameter, as explained [here](https://dt-url.net/platform-services-filtering). Filtering is supported on the following fields: * `id`
* `resourceStatus.subResourceTypes`
* top-level manifest fields, for example&#x20;
  `manifest.description`
   or&#x20;
  `manifest.version`
   Examples:
* `id = 'my.custom-app'`
* `id contains 'custom'`
* `id starts-with 'my.'`
* `not(id starts-with 'my.')`
* `id in ('my.custom-app', 'my.other-custom-app')`
* `resourceStatus.subResourceTypes contains 'DOCUMENTS'`
* `resourceStatus.subResourceTypes contains 'DOCUMENTS'   or resourceStatus.subResourceTypes contains 'FUNCTIONS'`
* `not (id starts-with 'dynatrace.classic.')`
   (to exclude classic apps)
* `not (manifest.document-types is-empty)`
* `manifest.document-types contains 'Notebook'`
   (to filter the json content of the top-level manifest field&#x20;
  `document-types`
   for apps that provide the&#x20;
  `Notebook`
   document type) If this parameter is omitted, all apps will be returned. The maximum nesting depth (via parentheses) is 3. The maximum expression length is 256 characters. Fields that are used for filtering are always included in the response, even if they are not in the default set of fields. |
| config.includeAllAppVersions | boolean | If `true`, all versions of every app are included in the response. If `false`, only the current version of every app is included. During an update, an app typically has two versions: the current version and the latest version with `status=PENDING`. After the update, the old version may remain for some time with `status=PENDING_DELETION`. <br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.includeDeactivated    | boolean | If `true`, apps that are `DEACTIVATED` are included in the response.<br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| config.includeNonRunnable    | boolean | If `true`, apps that the user is not allowed to run because of missing permissions are included in the response.<br /><br />**Default:** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Returns

| Return type                 | Status code | Description |
| --------------------------- | ----------- | ----------- |
| [AppInfoList](#appinfolist) | 200         | OK          |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistryAppsClient } from "@dynatrace-sdk/client-app-engine-registry";

const data = await appEngineRegistryAppsClient.getApps();
```

### installApp

**appEngineRegistryAppsClient.installApp(config): Promise\<[AppStub](#appstub)>**

Install or update an app.

**Required scope:** app-engine:apps:install

An app ID always starts with a namespace and a dot, e.g. `dynatrace.` for Dynatrace apps. Custom apps can be installed in the `my` namespace, e.g. `my.first-app`.

*The zipped app bundle has to be provided via the request body*

#### Parameters

| Name                   | Type |
| ---------------------- | ---- |
| config.body (required) | Blob |

#### Returns

| Return type         | Status code | Description                                 |
| ------------------- | ----------- | ------------------------------------------- |
| [AppStub](#appstub) | 202         | Accepted; new app will be installed/updated |

#### Throws

| Error Type         | Error Message                                           |
| ------------------ | ------------------------------------------------------- |
| ErrorEnvelopeError | Bad Request \| Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistryAppsClient } from "@dynatrace-sdk/client-app-engine-registry";

const data = await appEngineRegistryAppsClient.installApp({
  body: new Blob(),
});
```

### searchActions

**appEngineRegistryAppsClient.searchActions(config): Promise\<[SearchAppActionList](#searchappactionlist)>**

Search actions of installed apps.

**Required scope:** app-engine:apps:run

#### Parameters

| Name         | Type   | Description                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.query | string | A whitespace separated list of search terms. For an action to match, each search term must be contained in either: app name, app description, action name, action title or action description. Search terms are case insensitive and each additional search term restricts actions further. Maximum length is 256 characters. |

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [SearchAppActionList](#searchappactionlist) | 200         | OK          |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistryAppsClient } from "@dynatrace-sdk/client-app-engine-registry";

const data =
  await appEngineRegistryAppsClient.searchActions();
```

### uninstallApp

**appEngineRegistryAppsClient.uninstallApp(config): Promise\<void>**

Uninstall an app.

**Required scope:** app-engine:apps:delete

#### Parameters

| Name                 | Type   | Description                       |
| -------------------- | ------ | --------------------------------- |
| config.id (required) | string | The unique identifier for the app |

#### Returns

| Return type | Status code | Description                       |
| ----------- | ----------- | --------------------------------- |
| void        | 202         | Accepted; app will be uninstalled |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { appEngineRegistryAppsClient } from "@dynatrace-sdk/client-app-engine-registry";

const data = await appEngineRegistryAppsClient.uninstallApp(
  { id: "..." },
);
```
