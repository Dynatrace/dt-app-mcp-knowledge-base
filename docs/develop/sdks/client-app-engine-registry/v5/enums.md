## Enums

### ~~ConstraintViolationErrorCode~~

> ⚠️ **Deprecated**
> Use literal values.

An optional error code that contains more detailed error information.

Possible error codes:

- `DependencyVersionIncompatible`: The app's manifest contains a dependency with an incompatible version.
- `DependencyUnknown`: The app's manifest contains a dependency that is unknown.

#### Enum keys

`DependencyUnknown` | `DependencyVersionIncompatible`

### ~~DeactivationReason~~

> ⚠️ **Deprecated**
> Use literal values.

Possible reasons why app has deactivated status

#### Enum keys

`AppCertificateRevoked` | `CapabilityAppEngineFunctionsSmallDisabled`

### ~~DeploymentStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The deployment status of the app's sub resource:

- `SCHEDULED`: Only the uploaded app bundle is persisted.

- `DEPLOYING`: The app's sub resources are currently being deployed.

- `DEPLOYED`: The app's sub resources were successfully deployed.

- `FAILED`: The deployment of the app's sub resources failed.

- `NO_RESOURCES`: The app bundle doesn't contain any sub resources of this type

#### Enum keys

`Deployed` | `Deploying` | `Failed` | `NoResources` | `Scheduled`

### ~~ErrorDetailsErrorCode~~

> ⚠️ **Deprecated**
> Use literal values.

An optional error code that contains more detailed error information than the HTTP response code alone.

Possible error codes:

- `MaxNumberOfInstalledAppsExceeded`: The app bundle couldn't be uploaded because the max number of apps was exceeded. Learn more: [https://dt-url.net/upgrade-license](https://dt-url.net/upgrade-license)

#### Enum keys

`MaxNumberOfInstalledAppsExceeded`

### ~~OperationStateBeforeError~~

> ⚠️ **Deprecated**
> Use literal values.

Details about the state when an error occurred. Only present if the app's `status` is `ERROR`.

- `PENDING_INSTALL`: The error occurred while installing the app.

- `PENDING_UPDATE`: The error occurred while updating the app.

- `PENDING_DELETE`: The error occurred while deleting the app.

- `OK`: At least one sub resource failed while the app was already running.

#### Enum keys

`Ok` | `PendingDelete` | `PendingInstall` | `PendingUpdate`

### ~~PendingOperation~~

> ⚠️ **Deprecated**
> Use literal values.

The pending operation of the app. Only present if the app's `status` is `PENDING`.

- `INSTALL`: The app is currently being installed.

- `UPDATE`: The app is currently being updated.

- `DELETE`: The app is currently being deleted.

#### Enum keys

`Delete` | `Install` | `Update`

### ~~ResourceContextOperationsItem~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Run` | `Uninstall` | `Update`

### ~~Status~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the app.

- `OK`: The app is fully installed and running.

- `PENDING`: The app is currently being installed, updated or deleted.

- `PENDING_DELETION`: A new version of the app was successfully installed and this version is scheduled for
  deletion.

- `DEACTIVATED`: The app is deactivated and cannot be executed.

- `ERROR`: The app failed with an error.

#### Enum keys

`Deactivated` | `Error` | `Ok` | `Pending` | `PendingDeletion`

### ~~SubResourceType~~

> ⚠️ **Deprecated**
> Use literal values.

The sub resource type.

- `FUNCTIONS`: app functions.

- `FILES`: static files of an app.

- `SETTINGS_SCHEMAS`: settings schemas of an app.

- `DOCUMENTS`: documents, e.g. templates, that are part of an app bundle.

#### Enum keys

`Documents` | `Files` | `Functions` | `SettingsSchemas`
