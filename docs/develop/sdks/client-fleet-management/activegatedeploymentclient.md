## activeGateDeploymentClient

```js
import { activeGateDeploymentClient } from '@dynatrace-sdk/client-fleet-management';
```

### downloadActiveGateInstallerByVersion

**activeGateDeploymentClient.downloadActiveGateInstallerByVersion(config): Promise\<Binary>**

Downloads specific ActiveGate installer version

**Required scope:** fleet-management:activegates:download

Downloads a specific version of ActiveGate installer for the specified OS type and architecture. The installer is provided in the raw installer format. For more information, see [ActiveGate raw installer](https://dt-url.net/uz038o9).

#### Parameters

| Name                      | Type                                  | Description                                                                                                                                                                                                                       |
| ------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.arch (required)    | "all" \| "amd64" \| "arm64" \| "s390" | The architecture of your OS: * `all`
  : Defaults to&#x20;
  `amd64`
  .
* `amd64`
  : amd64 architecture.
* `s390`
  : S/390 architecture, only supported for Linux.
* `arm64`
  : arm64 architecture, only supported for Linux. |
| config.ifNoneMatch        | string                                | The ETag of the previous request. Don't download if it matches the ETag of the installer.                                                                                                                                         |
| config.osType (required)  | "windows" \| "unix"                   | The operating system of the installer.                                                                                                                                                                                            |
| config.version (required) | string                                | The requested version of the ActiveGate raw installer.                                                                                                                                                                            |

#### Returns

| Return type | Status code | Description                                       |
| ----------- | ----------- | ------------------------------------------------- |
| void        | 200         | Success. The payload contains the installer file. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateDeploymentClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateDeploymentClient.downloadActiveGateInstallerByVersion(
    { osType: "windows", version: "...", arch: "all" },
  );
```

### downloadLatestActiveGateInstaller

**activeGateDeploymentClient.downloadLatestActiveGateInstaller(config): Promise\<Binary>**

Downloads target version ActiveGate installer

**Required scope:** fleet-management:activegates:download

Downloads the ActiveGate installer for the specified OS type and architecture. The downloaded version is the configured ActiveGate target version. If no target version is configured, the latest available version is downloaded. The installer is provided in the raw installer format. For more information, see [ActiveGate raw installer](https://dt-url.net/uz038o9).

#### Parameters

| Name                     | Type                                  | Description                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.arch (required)   | "all" \| "amd64" \| "arm64" \| "s390" | The architecture of your OS: * `all`
  : Defaults to&#x20;
  `amd64`
  .
* `amd64`
  : amd64 architecture.
* `s390`
  : S/390 architecture, only supported for Linux.
* `arm64`
  : arm64 architecture, only supported for Linux. |
| config.ifNoneMatch       | string                                | The ETag of the previous request. Don't download if it matches the ETag of the installer.                                                                                                                                         |
| config.osType (required) | "windows" \| "unix"                   | The operating system of the installer.                                                                                                                                                                                            |

#### Returns

| Return type | Status code | Description                                       |
| ----------- | ----------- | ------------------------------------------------- |
| void        | 200         | Success. The payload contains the installer file. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateDeploymentClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateDeploymentClient.downloadLatestActiveGateInstaller(
    { osType: "windows", arch: "all" },
  );
```

### getActiveGateInstallerTargetVersion

**activeGateDeploymentClient.getActiveGateInstallerTargetVersion(config): Promise\<[ActiveGateInstallerVersion](#activegateinstallerversion)>**

Gets the target version of an ActiveGate installer

**Required scope:** fleet-management:activegates:download

Returns the configured ActiveGate target version for the tenant. If no target version is configured, the latest available version is returned.

#### Returns

| Return type                                               | Status code | Description |
| --------------------------------------------------------- | ----------- | ----------- |
| [ActiveGateInstallerVersion](#activegateinstallerversion) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateDeploymentClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateDeploymentClient.getActiveGateInstallerTargetVersion();
```

### getActiveGateInstallerVersions

**activeGateDeploymentClient.getActiveGateInstallerVersions(config): Promise\<[ActiveGateInstallerVersions](#activegateinstallerversions)>**

Gets the list of available versions of an ActiveGate installer

**Required scope:** fleet-management:activegates:download

#### Parameters

| Name            | Type   | Description                                                                                                                                                                                                                                                                                                 |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.pageKey  | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **page-key** query parameter. When the **page-key** is set to obtain subsequent pages, you must omit all other query parameters. |
| config.pageSize | number | The amount of ActiveGate Installer versions in a single response payload. The maximal allowed page size is 1000 and the minimum size is 10. If not set, 10 is used. <br /><br />**Default:** `10`<br />**Minimum:** `10`                                                                                    |

#### Returns

| Return type                                                 | Status code | Description |
| ----------------------------------------------------------- | ----------- | ----------- |
| [ActiveGateInstallerVersions](#activegateinstallerversions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateDeploymentClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateDeploymentClient.getActiveGateInstallerVersions();
```

### getConnectionInfo

**activeGateDeploymentClient.getConnectionInfo(config): Promise\<[ConnectionInfo](#connectioninfo)>**

Provides connection information for ActiveGate

**Required scope:** fleet-management:activegate.connection-info:read

#### Returns

| Return type                       | Status code | Description |
| --------------------------------- | ----------- | ----------- |
| [ConnectionInfo](#connectioninfo) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { activeGateDeploymentClient } from "@dynatrace-sdk/client-fleet-management";

const data =
  await activeGateDeploymentClient.getConnectionInfo();
```
