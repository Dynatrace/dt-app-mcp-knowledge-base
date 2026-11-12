## Types

### ActionApp

The app that declares the action.

| Name          | Type   | Description                                                 |
| ------------- | ------ | ----------------------------------------------------------- |
| id (required) | string | The id of the app.<br /><br />**Example:** `dynatrace.jira` |

### ActionDefinition

The action as declared in the manifest of the app.

Any further field that the app declares for the action is passed through as is.

| Name            | Type   | Description                                                                                    |
| --------------- | ------ | ---------------------------------------------------------------------------------------------- |
| description     | string | The description of the action.<br /><br />**Example:** `Link two Jira issues`                  |
| name (required) | string | The name of the action. It is unique within the app.<br /><br />**Example:** `jira-link-issue` |
| title           | string | The human readable title of the action.<br /><br />**Example:** `Link issue`                   |

### ActionDetails

An action of an app with all its fields.

`action` contains every field that the app declares for the action in its manifest.

| Name              | Type                                  | Description                                                                                                                        |
| ----------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| action (required) | [ActionDefinition](#actiondefinition) | The action as declared in the manifest of the app. Any further field that the app declares for the action is passed through as is. |
| app (required)    | [ActionApp](#actionapp)               | The app that declares the action.                                                                                                  |

### ActionList

A flat list of app actions.

| Name               | Type                              | Description                                                                                         |
| ------------------ | --------------------------------- | --------------------------------------------------------------------------------------------------- |
| actions (required) | Array\<[ActionStub](#actionstub)> | A flat list of actions. Actions are sorted by action name, then by app id, both in ascending order. |

### ActionStub

An action of an app with a minimal set of fields.

`action` contains the default fields and the fields requested through `add-fields`.

| Name              | Type                                  | Description                                                                                                                        |
| ----------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| action (required) | [ActionDefinition](#actiondefinition) | The action as declared in the manifest of the app. Any further field that the app declares for the action is passed through as is. |
| app (required)    | [ActionApp](#actionapp)               | The app that declares the action.                                                                                                  |

### AppDefaultCsp

Default Content Security Policies for apps.

| Name                        | Type                                                            | Description           |
| --------------------------- | --------------------------------------------------------------- | --------------------- |
| policyDirectives (required) | [AppDefaultCspPolicyDirectives](#appdefaultcsppolicydirectives) | The policy directives |

### AppDefaultCspPolicyDirectives

The policy directives

**type**: Record\<string, string[]>

### AppIcon

Representation of an app icon.

| Name            | Type   | Description                  |
| --------------- | ------ | ---------------------------- |
| href (required) | string | The reference to an app icon |

### AppInfo

A minimal representation of an app.

| Name                        | Type                                                                           | Description                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| appIcon                     | [AppIcon](#appicon)                                                            | Representation of an app icon.                                                                                     |
| deactivationReasons         | Array\<"CapabilityAppEngineFunctionsSmallDisabled" \| "AppCertificateRevoked"> | Contains the reasons if the app has the status `DEACTIVATED`                                                       |
| description (required)      | string                                                                         | The description of the app                                                                                         |
| id (required)               | string                                                                         | The id of the app                                                                                                  |
| isBuiltin                   | boolean                                                                        | Whether this is a built-in app or not. Built-in apps are provided by Dynatrace and installed on every environment. |
| isolatedUri                 | [AppIsolatedUri](#appisolateduri)                                              | Representation of an app's isolated uri.                                                                           |
| manifest                    | AppInfoManifest                                                                | The manifest of the app                                                                                            |
| modificationInfo (required) | [ModificationInfo](#modificationinfo)                                          | Modification information about the app                                                                             |
| name (required)             | string                                                                         | The name of the app                                                                                                |
| resourceContext             | [ResourceContext](#resourcecontext)                                            | Additional resource context information                                                                            |
| resourceStatus (required)   | [ResourceStatus](#resourcestatus)                                              | The status of the app plus additional details.                                                                     |
| signatureInfo (required)    | [AppSignatureInfo](#appsignatureinfo)                                          | Representation of an app's signature verification.                                                                 |
| version (required)          | string                                                                         | The version of the app                                                                                             |

### AppInfoList

A list of minimal app representations.

| Name            | Type                        | Description                              |
| --------------- | --------------------------- | ---------------------------------------- |
| apps (required) | Array\<[AppInfo](#appinfo)> | The list of minimal app representations. |

### AppIsolatedUri

Representation of an app's isolated uri.

| Name                 | Type   | Description                        |
| -------------------- | ------ | ---------------------------------- |
| baseUrl (required)   | string | The base URL of an app             |
| url (required)       | string | The URL of an app                  |
| widgetUrl (required) | string | The base URL for widgets of an app |

### AppSignatureInfo

Representation of an app's signature verification.

| Name              | Type    | Description                                        |
| ----------------- | ------- | -------------------------------------------------- |
| publisher         | string  | The organization name of the app publisher.        |
| signed (required) | boolean | App is signed and its signature has been verified. |

### AppStub

A minimal representation of an installed/updated app.

| Name          | Type                        | Description                                                      |
| ------------- | --------------------------- | ---------------------------------------------------------------- |
| id (required) | string                      | Id of the installed/updated app                                  |
| warnings      | Array\<[Warning](#warning)> | Contains warning information although the request was successful |

### ConstraintViolation

Contains information about a constraint violation caused by invalid input.

| Name                | Type                                                                              | Description                                                                                                                                                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| errorCode           | "DependencyVersionIncompatible" \| "DependencyUnknown"                            | An optional error code that contains more detailed error information. Possible error codes: * `DependencyVersionIncompatible`
  : The app's manifest contains a dependency with an incompatible version.
* `DependencyUnknown`
  : The app's manifest contains a dependency that is unknown. |
| errorCodeProperties | [ConstraintViolationErrorCodeProperties](#constraintviolationerrorcodeproperties) | Additional properties related to the provided error code.                                                                                                                                                                                                                                    |
| message (required)  | string                                                                            | The error message                                                                                                                                                                                                                                                                            |
| path (required)     | string                                                                            | The path of the property that caused the constraint violation                                                                                                                                                                                                                                |

### ConstraintViolationErrorCodeProperties

Additional properties related to the provided error code.

| Name                | Type   | Description                                                                                                                                                                         |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| availableVersion    | string | The version that is available. This value is present if the error code is `DependencyVersionIncompatible`.<br /><br />**Example:** `1.2.0`                                          |
| dependency          | string | The name of the dependency. This value is present if the error code is `DependencyUnknown` or `DependencyVersionIncompatible`.<br /><br />**Example:** `/platform/storage/query/v1` |
| incompatibleVersion | string | The version that is incompatible. This value is present if the error code is `DependencyVersionIncompatible`.<br /><br />**Example:** `1.1.0`                                       |

### Error

Contains information for 4xx and 5xx errors.

| Name               | Type                          | Description                                 |
| ------------------ | ----------------------------- | ------------------------------------------- |
| code (required)    | number                        | The HTTP status code                        |
| details            | [ErrorDetails](#errordetails) | Contains details for 4xx and 5xx errors.    |
| help               | string                        | Additional information related to the error |
| message (required) | string                        | The error message                           |
| retryAfterSeconds  | number                        | Seconds to wait until the next retry        |

### ErrorDetails

Contains details for 4xx and 5xx errors.

| Name                 | Type                                                                | Description                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| constraintViolations | Array\<[ConstraintViolation](#constraintviolation)>                 | A list of constraint violations                                                                                                                                                                                                                                                                                                                      |
| errorCode            | "MaxNumberOfInstalledAppsExceeded"                                  | An optional error code that contains more detailed error information than the HTTP response code alone. Possible error codes: * `MaxNumberOfInstalledAppsExceeded`
  : The app bundle couldn't be uploaded because the max number of apps was exceeded. Learn more:&#x20;
  [https://dt-url.net/upgrade-license](https://dt-url.net/upgrade-license) |
| errorCodeProperties  | [ErrorDetailsErrorCodeProperties](#errordetailserrorcodeproperties) | Additional properties related to the provided error code                                                                                                                                                                                                                                                                                             |
| errorRef             | string                                                              | Generated unique value for 5xx errors.                                                                                                                                                                                                                                                                                                               |
| missingPermissions   | Array\<string>                                                      | The IAM permissions the authorization token would need to be granted for this request.                                                                                                                                                                                                                                                               |
| missingScopes        | Array\<string>                                                      | The OAuth scopes the authorization token would need to carry for this request.                                                                                                                                                                                                                                                                       |
| traceId              | string                                                              | OpenTelemetry trace id of the trace where error occurs.                                                                                                                                                                                                                                                                                              |

### ErrorDetailsErrorCodeProperties

Additional properties related to the provided error code

| Name     | Type   | Description                                                                                                                                                       |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appLimit | string | Limit for number of installed apps in an environment. This value is present if the error code is \`MaxNumberOfInstalledAppsExceeded'.<br /><br />**Example:** `3` |

### ErrorEnvelope

Error response for all 4xx and 5xx errors.

| Name             | Type            | Description                                  |
| ---------------- | --------------- | -------------------------------------------- |
| error (required) | [Error](#error) | Contains information for 4xx and 5xx errors. |

### ModificationInfo

Modification information about the app

| Name                      | Type   | Description                                                                                     |
| ------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| createdAt (required)      | string | Timestamp when the resource was created in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')       |
| createdBy (required)      | string | UserId of the user that created the resource                                                    |
| lastModifiedAt (required) | string | Timestamp when the resource was last modified in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z') |
| lastModifiedBy (required) | string | UserId of the user that last modified the resource                                              |

### ResourceContext

Additional resource context information

| Name                  | Type                                     | Description                                                                                                                                                                                                                                                                    |
| --------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| operations (required) | Array\<"run" \| "update" \| "uninstall"> | Operations that are allowed on the app depending on the user's permissions. * &#x20;
  `run`: user is allowed to run the app.
  &#x20;
* &#x20;
  `update`: user is allowed to update the app.
  &#x20;
* &#x20;
  `uninstall`: user is allowed to uninstall the app.
  &#x20; |

### ResourceStatus

The status of the app plus additional details.

| Name                      | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| operationStateBeforeError | "OK" \| "PENDING_INSTALL" \| "PENDING_UPDATE" \| "PENDING_DELETE" | Details about the state when an error occurred. Only present if the app's `status` is `ERROR`. * &#x20;
  `PENDING_INSTALL`: The error occurred while installing the app.
  &#x20;
* &#x20;
  `PENDING_UPDATE`: The error occurred while updating the app.
  &#x20;
* &#x20;
  `PENDING_DELETE`: The error occurred while deleting the app.
  &#x20;
* &#x20;
  `OK`: At least one sub resource failed while the app was already running.
  &#x20;                     |
| pendingOperation          | "INSTALL" \| "UPDATE" \| "DELETE"                                    | The pending operation of the app. Only present if the app's `status` is `PENDING`. * &#x20;
  `INSTALL`: The app is currently being installed.
  &#x20;
* &#x20;
  `UPDATE`: The app is currently being updated.
  &#x20;
* &#x20;
  `DELETE`: The app is currently being deleted.
  &#x20;                                                                                                                                                                            |
| status (required)         | "OK" \| "PENDING" \| "PENDING_DELETION" \| "DEACTIVATED" \| "ERROR" | The status of the app. * &#x20;
  `OK`: The app is fully installed and running.
  &#x20;
* &#x20;
  `PENDING`: The app is currently being installed, updated or deleted.
  &#x20;
* &#x20;
  `PENDING_DELETION`: A new version of the app was successfully installed and this version is scheduled for deletion.
  &#x20;
* &#x20;
  `DEACTIVATED`: The app is deactivated and cannot be executed.
  &#x20;
* &#x20;
  `ERROR`: The app failed with an error.
  &#x20; |
| subResourceStatuses       | Array\<[SubResourceStatus](#subresourcestatus)>                      | The statuses of the app's sub resources.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| subResourceTypes          | Array\<"FUNCTIONS" \| "FILES" \| "SETTINGS_SCHEMAS" \| "DOCUMENTS"> | The sub resource types that the app contains.                                                                                                                                                                                                                                                                                                                                                                                                                          |

### SearchAppAction

| Name               | Type                               | Description                                                                                        |
| ------------------ | ---------------------------------- | -------------------------------------------------------------------------------------------------- |
| actions (required) | Array\<SearchAppActionActionsItem> | List of app actions. Actions are sorted by name in ascending order. Actions without name are last. |
| id (required)      | string                             | App id<br /><br />**Example:** `my.example.appid`                                                  |
| name (required)    | string                             | App name<br /><br />**Example:** `Example app`                                                     |

### SearchAppActionList

| Name                  | Type                                        | Description                                                            |
| --------------------- | ------------------------------------------- | ---------------------------------------------------------------------- |
| apps (required)       | Array\<[SearchAppAction](#searchappaction)> | List of apps with actions. Apps are sorted by name in ascending order. |
| totalCount (required) | number                                      | Total actions count.<br /><br />**Example:** `1`                       |

### SubResourceConstraintViolation

Contains information about a constraint violation caused by invalid input.

| Name               | Type   | Description                                                   |
| ------------------ | ------ | ------------------------------------------------------------- |
| message (required) | string | The error message                                             |
| path               | string | The path of the property that caused the constraint violation |

### SubResourceError

Additional error information that can be present if the sub resource `status` is `FAILED`

| Name                 | Type                                                                      | Description                                                                          |
| -------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| constraintViolations | Array\<[SubResourceConstraintViolation](#subresourceconstraintviolation)> | A list of constraint violations                                                      |
| errorCode            | string                                                                    | An error code that can be used determine the nature of an error and why it occurred. |
| errorRef             | string                                                                    | Optional generated unique value to reference this error.                             |
| message (required)   | string                                                                    | The error message.                                                                   |

### SubResourceStatus

The status of the sub resource.

| Name                       | Type                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| error                      | [SubResourceError](#subresourceerror)                                   | Additional error information that can be present if the sub resource `status` is `FAILED`                                                                                                                                                                                                                                                                                                                                                                                                  |
| status (required)          | "SCHEDULED" \| "DEPLOYING" \| "DEPLOYED" \| "FAILED" \| "NO_RESOURCES" | The deployment status of the app's sub resource: * &#x20;
  `SCHEDULED`: Only the uploaded app bundle is persisted.
  &#x20;
* &#x20;
  `DEPLOYING`: The app's sub resources are currently being deployed.
  &#x20;
* &#x20;
  `DEPLOYED`: The app's sub resources were successfully deployed.
  &#x20;
* &#x20;
  `FAILED`: The deployment of the app's sub resources failed.
  &#x20;
* &#x20;
  `NO_RESOURCES`: The app bundle does not contain any sub resources of this type
  &#x20; |
| subResourceType (required) | "FUNCTIONS" \| "FILES" \| "SETTINGS_SCHEMAS" \| "DOCUMENTS"            | The sub resource type. * &#x20;
  `FUNCTIONS`: app functions.
  &#x20;
* &#x20;
  `FILES`: static files of an app.
  &#x20;
* &#x20;
  `SETTINGS_SCHEMAS`: settings schemas of an app.
  &#x20;
* &#x20;
  `DOCUMENTS`: documents, e.g. templates, that are part of an app bundle.
  &#x20;                                                                                                                                                                                                |

### Warning

A warning.

| Name    | Type   | Description          |
| ------- | ------ | -------------------- |
| message | string | The warning message. |
