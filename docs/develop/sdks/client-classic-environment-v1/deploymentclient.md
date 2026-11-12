## deploymentClient

```js
import { deploymentClient } from '@dynatrace-sdk/client-classic-environment-v1';
```

### downloadAgentInstallerWithVersion

**deploymentClient.downloadAgentInstallerWithVersion(config): Promise\<Binary>**

Downloads OneAgent installer of the specified version

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

For the `paas` or `paas-sh` installer types you can get a configuring installer, by passing additional parameters.

#### Parameters

| Name                            | Type                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.arch                     | "all" \| "arm" \| "ppc" \| "ppcle" \| "s390" \| "sparc" \| "x86"                                                                               | The architecture of your OS: * &#x20;
  `all`: Use this value for AIX and z/OS. Defaults to `x86` for other OS types.
  &#x20;
* &#x20;
  `x86`: x86 architecture.
  &#x20;
* &#x20;
  `ppc`: PowerPC architecture, only supported for AIX.
  &#x20;
* &#x20;
  `ppcle`: PowerPC Little Endian architecture, only supported for Linux.
  &#x20;
* &#x20;
  `sparc`: Sparc architecture, only supported for Solaris.
  &#x20;
* &#x20;
  `arm`: ARM architecture, only supported for Linux.
  &#x20;
* &#x20;
  `s390`: S/390 architecture, only supported for Linux.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                     |
| config.bitness                  | "all" \| "32" \| "64"                                                                                                                          | The bitness of your OS. Must be supported by the OS. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.flavor                   | "default" \| "multidistro" \| "musl"                                                                                                           | The flavor of your Linux distribution: * &#x20;
  `musl` for Linux distributions, which are using the musl C standard library, for example Alpine Linux.
  &#x20;
* &#x20;
  `multidistro` for Linux distributions, which are using musl C and glibc standard library.
  &#x20;
* &#x20;
  `default` for Linux distributions, which are using glibc standard library.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.ifNoneMatch              | string                                                                                                                                         | The ETag of the previous request. Do not download if it matches the ETag of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.include                  | Array\<"all" \| "java" \| "java-graal-native" \| "apache" \| "nginx" \| "nodejs" \| "dotnet" \| "php" \| "go" \| "sdk" \| "envoy" \| "python"> | The code modules to be included to the installer. You can specify several modules in the following format: `include=java&include=dotnet`. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.installerType (required) | "default" \| "default-unattended" \| "mainframe" \| "paas" \| "paas-sh"                                                                        | The type of the installer: * `default`
  : Self-extracting installer for manual installation. Downloads an&#x20;
  `.exe`
   file for Windows or an&#x20;
  `.sh`
   file for Unix.
* `default-unattended`
  : Self-extracting installer for unattended installation. Windows only. Downloads a&#x20;
  `.zip`
   archive, containing the&#x20;
  `.msi`
   installer and the batch file. This option is deprecated with OneAgent version 1.173
* `mainframe`
  : Downloads all code modules for z/OS combined in a single&#x20;
  `*.pax`
   archive.
* `paas`
  : Code modules installer. Downloads a&#x20;
  `*.zip`
   archive, containing the&#x20;
  `manifest.json`
   file with meta information or a&#x20;
  `.jar`
   file for z/OS.
* `paas-sh`
  : Code modules installer. Downloads a self-extracting shell script with the embedded&#x20;
  `tar.gz`
   archive. |
| config.networkZone              | string                                                                                                                                         | The network zone you want the result to be configured with.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.osType (required)        | "windows" \| "unix" \| "aix" \| "solaris" \| "zos"                                                                                             | The operating system of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.skipMetadata             | boolean                                                                                                                                        | Set `true` to omit the OneAgent connectivity information from the installer. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| config.version (required)       | string                                                                                                                                         | The required version of the OneAgent in `1.155.275.20181112-084458` format. You can retrieve the list of available versions with the [**GET available versions of OneAgent**](https://dt-url.net/fo23rb5) call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadAgentInstallerWithVersion({
    osType: "windows",
    installerType: "default",
    version: "...",
  });
```

### downloadAgentOrchestrationSignatureWithVersion

**deploymentClient.downloadAgentOrchestrationSignatureWithVersion(config): Promise\<Binary>**

Downloads the requested version matching OneAgent deployment orchestration tarball's signature

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Downloading the requested version matching deployment orchestration tarball's signature matching the requested Orchestration Type (ansible, puppet).

#### Parameters

| Name                                | Type                  | Description                                                                                               |
| ----------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------- |
| config.orchestrationType (required) | "ansible" \| "puppet" | The Orchestration Type of the orchestration deployment script.                                            |
| config.version (required)           | string                | The requested version of the OneAgent deployment orchestration tarball in `0.1.0.20200925-120822` format. |

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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadAgentOrchestrationSignatureWithVersion(
    { orchestrationType: "ansible", version: "..." },
  );
```

### downloadAgentOrchestrationWithVersion

**deploymentClient.downloadAgentOrchestrationWithVersion(config): Promise\<Binary>**

Downloads the requested version matching OneAgent deployment orchestration tarball

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Downloading the requested version matching deployment orchestration tarball matching the requested Orchestration Type (ansible, puppet).

#### Parameters

| Name                                | Type                  | Description                                                                                               |
| ----------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------- |
| config.orchestrationType (required) | "ansible" \| "puppet" | The Orchestration Type of the orchestration deployment script.                                            |
| config.version (required)           | string                | The requested version of the OneAgent orchestration deployment tarball in `0.1.0.20200925-120822` format. |

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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadAgentOrchestrationWithVersion(
    { orchestrationType: "ansible", version: "..." },
  );
```

### downloadBoshReleaseWithVersion

**deploymentClient.downloadBoshReleaseWithVersion(config): Promise\<Binary>**

Downloads BOSH release tarballs of the specified version, OneAgent included

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

For SaaS, the call is executed on an Environment ActiveGate. Be sure to use the base of an ActiveGate, **not** the environment.

#### Parameters

| Name                      | Type                | Description                                                                                                                                                                                                              |
| ------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.networkZone        | string              | The network zone you want the result to be configured with.                                                                                                                                                              |
| config.osType (required)  | "windows" \| "unix" | The operating system of the installer.                                                                                                                                                                                   |
| config.skipMetadata       | boolean             | Set `true` to omit the OneAgent connectivity information from the installer. If not set, `false` is used.                                                                                                                |
| config.version (required) | string              | The required version of the OneAgent in the `1.155.275.20181112-084458` format. You can retrieve the list of available versions with the [**GET available versions of BOSH tarballs**](https://dt-url.net/j703kdn) call. |

#### Returns

| Return type | Status code | Description                                                  |
| ----------- | ----------- | ------------------------------------------------------------ |
| void        | 200         | Success. The payload contains the BOSH release tarball file. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadBoshReleaseWithVersion({
    osType: "windows",
    version: "...",
  });
```

### downloadGatewayInstallerWithVersion

**deploymentClient.downloadGatewayInstallerWithVersion(config): Promise\<Binary>**

Downloads the ActiveGate installer of the specified version

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

#### Parameters

| Name                      | Type                                  | Description                                                                                                                                                                                                                       |
| ------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.arch               | "all" \| "s390" \| "amd64" \| "arm64" | The architecture of your OS: * `all`
  : Defaults to&#x20;
  `amd64`
  .
* `amd64`
  : amd64 architecture.
* `s390`
  : S/390 architecture, only supported for Linux.
* `arm64`
  : arm64 architecture, only supported for Linux. |
| config.ifNoneMatch        | string                                | The ETag of the previous request. Do not download if it matches the ETag of the installer.                                                                                                                                        |
| config.networkZone        | string                                | The network zone you want the result to be configured with. Provided network zone must exist, otherwise the request will fail. Requires at least ActiveGate version 1.247.                                                        |
| config.osType (required)  | "windows" \| "unix"                   | The operating system of the installer.                                                                                                                                                                                            |
| config.version (required) | string                                | The required version of the ActiveGate installer, in `1.155.275.20181112-084458` format. You can retrieve the list of available versions with the [**GET available versions of ActiveGate**](https://dt-url.net/kh43rha) call.    |

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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadGatewayInstallerWithVersion(
    { osType: "windows", version: "..." },
  );
```

### downloadLatestAgentInstaller

**deploymentClient.downloadLatestAgentInstaller(config): Promise\<Binary>**

Downloads the latest OneAgent installer

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

For the `paas` or `paas-sh` installer types you can get a configuring installer, by passing additional parameters.

#### Parameters

| Name                            | Type                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.arch                     | "all" \| "arm" \| "ppc" \| "ppcle" \| "s390" \| "sparc" \| "x86"                                                                               | The architecture of your OS: * &#x20;
  `all`: Use this value for AIX and z/OS. Defaults to `x86` for other OS types.
  &#x20;
* &#x20;
  `x86`: x86 architecture.
  &#x20;
* &#x20;
  `ppc`: PowerPC architecture, only supported for AIX.
  &#x20;
* &#x20;
  `ppcle`: PowerPC Little Endian architecture, only supported for Linux.
  &#x20;
* &#x20;
  `sparc`: Sparc architecture, only supported for Solaris.
  &#x20;
* &#x20;
  `arm`: ARM architecture, only supported for Linux.
  &#x20;
* &#x20;
  `s390`: S/390 architecture, only supported for Linux.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                     |
| config.bitness                  | "all" \| "32" \| "64"                                                                                                                          | The bitness of your OS. Must be supported by the OS. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.flavor                   | "default" \| "multidistro" \| "musl"                                                                                                           | The flavor of your Linux distribution: * &#x20;
  `musl` for Linux distributions, which are using the musl C standard library, for example Alpine Linux.
  &#x20;
* &#x20;
  `multidistro` for Linux distributions, which are using musl C and glibc standard library.
  &#x20;
* &#x20;
  `default` for Linux distributions, which are using glibc standard library.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.ifNoneMatch              | string                                                                                                                                         | The ETag of the previous request. Do not download if it matches the ETag of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.include                  | Array\<"all" \| "java" \| "java-graal-native" \| "apache" \| "nginx" \| "nodejs" \| "dotnet" \| "php" \| "go" \| "sdk" \| "envoy" \| "python"> | The code modules to be included to the installer. You can specify several modules in the following format: `include=java&include=dotnet`. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.installerType (required) | "default" \| "default-unattended" \| "mainframe" \| "paas" \| "paas-sh"                                                                        | The type of the installer: * `default`
  : Self-extracting installer for manual installation. Downloads an&#x20;
  `.exe`
   file for Windows or an&#x20;
  `.sh`
   file for Unix.
* `default-unattended`
  : Self-extracting installer for unattended installation. Windows only. Downloads a&#x20;
  `.zip`
   archive, containing the&#x20;
  `.msi`
   installer and the batch file. This option is deprecated with OneAgent version 1.173
* `mainframe`
  : Downloads all code modules for z/OS combined in a single&#x20;
  `*.pax`
   archive.
* `paas`
  : Code modules installer. Downloads a&#x20;
  `*.zip`
   archive, containing the&#x20;
  `manifest.json`
   file with meta information or a&#x20;
  `.jar`
   file for z/OS.
* `paas-sh`
  : Code modules installer. Downloads a self-extracting shell script with the embedded&#x20;
  `tar.gz`
   archive. |
| config.networkZone              | string                                                                                                                                         | The network zone you want the result to be configured with.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.osType (required)        | "windows" \| "unix" \| "aix" \| "solaris" \| "zos"                                                                                             | The operating system of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| config.skipMetadata             | boolean                                                                                                                                        | Set `true` to omit the OneAgent connectivity information from the installer. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadLatestAgentInstaller({
    osType: "windows",
    installerType: "default",
  });
```

### downloadLatestAgentOrchestration

**deploymentClient.downloadLatestAgentOrchestration(config): Promise\<Binary>**

Downloads the latest OneAgent deployment orchestration tarball

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Downloading the latest available deployment orchestration script tarball matching the requested Orchestration Type (ansible, puppet).

#### Parameters

| Name                                | Type                  | Description                                                    |
| ----------------------------------- | --------------------- | -------------------------------------------------------------- |
| config.orchestrationType (required) | "ansible" \| "puppet" | The Orchestration Type of the orchestration deployment script. |

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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadLatestAgentOrchestration({
    orchestrationType: "ansible",
  });
```

### downloadLatestAgentOrchestrationSignature

**deploymentClient.downloadLatestAgentOrchestrationSignature(config): Promise\<Binary>**

Downloads the latest OneAgent deployment orchestration tarball's signature

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Downloading the latest available deployment orchestration tarball's sigature matching the requested Orchestration Type (ansible, puppet).

#### Parameters

| Name                                | Type                  | Description                                                    |
| ----------------------------------- | --------------------- | -------------------------------------------------------------- |
| config.orchestrationType (required) | "ansible" \| "puppet" | The Orchestration Type of the orchestration deployment script. |

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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadLatestAgentOrchestrationSignature(
    { orchestrationType: "ansible" },
  );
```

### downloadLatestGatewayInstaller

**deploymentClient.downloadLatestGatewayInstaller(config): Promise\<Binary>**

Downloads the configured standard ActiveGate installer of the latest version for the specified OS

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

#### Parameters

| Name                     | Type                                  | Description                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.arch              | "all" \| "s390" \| "amd64" \| "arm64" | The architecture of your OS: * `all`
  : Defaults to&#x20;
  `amd64`
  .
* `amd64`
  : amd64 architecture.
* `s390`
  : S/390 architecture, only supported for Linux.
* `arm64`
  : arm64 architecture, only supported for Linux. |
| config.ifNoneMatch       | string                                | The ETag of the previous request. Do not download if it matches the ETag of the installer.                                                                                                                                        |
| config.networkZone       | string                                | The network zone you want the result to be configured with. Provided network zone must exist, otherwise the request will fail. Requires at least ActiveGate version 1.247.                                                        |
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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.downloadLatestGatewayInstaller({
    osType: "windows",
  });
```

### getActiveGateInstallerAvailableVersions

**deploymentClient.getActiveGateInstallerAvailableVersions(config): Promise\<[ActiveGateInstallerVersions](#activegateinstallerversions)>**

Lists all available versions of ActiveGate installer

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

#### Parameters

| Name                     | Type                                  | Description                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.arch              | "all" \| "s390" \| "amd64" \| "arm64" | The architecture of your OS: * `all`
  : Defaults to&#x20;
  `amd64`
  .
* `amd64`
  : amd64 architecture.
* `s390`
  : S/390 architecture, only supported for Linux.
* `arm64`
  : arm64 architecture, only supported for Linux. |
| config.osType (required) | "windows" \| "unix"                   | The operating system of the installer.                                                                                                                                                                                            |

#### Returns

| Return type                                                 | Status code | Description                                           |
| ----------------------------------------------------------- | ----------- | ----------------------------------------------------- |
| [ActiveGateInstallerVersions](#activegateinstallerversions) | 200         | Success. The payload contains the available versions. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getActiveGateInstallerAvailableVersions(
    { osType: "windows" },
  );
```

### getActiveGateInstallerConnectionInfo

**deploymentClient.getActiveGateInstallerConnectionInfo(config): Promise\<[ActiveGateConnectionInfo](#activegateconnectioninfo)>**

Gets the connectivity information for Environment ActiveGate

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

#### Parameters

| Name                       | Type    | Description                                                                                               |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| config.defaultZoneFallback | boolean | Set `true` to perform a fallback to the default network zone if the provided network zone does not exist. |
| config.networkZone         | string  | The network zone you want the result to be configured with.                                               |

#### Returns

| Return type                                           | Status code | Description |
| ----------------------------------------------------- | ----------- | ----------- |
| [ActiveGateConnectionInfo](#activegateconnectioninfo) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getActiveGateInstallerConnectionInfo();
```

### getAgentInstallerAvailableVersions

**deploymentClient.getAgentInstallerAvailableVersions(config): Promise\<[AgentInstallerVersions](#agentinstallerversions)>**

Lists all available versions of OneAgent installer

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

#### Parameters

| Name                            | Type                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.arch                     | "all" \| "arm" \| "ppc" \| "ppcle" \| "s390" \| "sparc" \| "x86"        | The architecture of your OS: * &#x20;
  `all`: Use this value for AIX and z/OS. Defaults to `x86` for other OS types.
  &#x20;
* &#x20;
  `x86`: x86 architecture.
  &#x20;
* &#x20;
  `ppc`: PowerPC architecture, only supported for AIX.
  &#x20;
* &#x20;
  `ppcle`: PowerPC Little Endian architecture, only supported for Linux.
  &#x20;
* &#x20;
  `sparc`: Sparc architecture, only supported for Solaris.
  &#x20;
* &#x20;
  `arm`: ARM architecture, only supported for Linux.
  &#x20;
* &#x20;
  `s390`: S/390 architecture, only supported for Linux.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                     |
| config.flavor                   | "default" \| "multidistro" \| "musl"                                    | The flavor of your Linux distribution: * &#x20;
  `musl` for Linux distributions, which are using the musl C standard library, for example Alpine Linux.
  &#x20;
* &#x20;
  `multidistro` for Linux distributions, which are using musl C and glibc standard library.
  &#x20;
* &#x20;
  `default` for Linux distributions, which are using glibc standard library.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.installerType (required) | "default" \| "default-unattended" \| "mainframe" \| "paas" \| "paas-sh" | The type of the installer: * `default`
  : Self-extracting installer for manual installation. Downloads an&#x20;
  `.exe`
   file for Windows or an&#x20;
  `.sh`
   file for Unix.
* `default-unattended`
  : Self-extracting installer for unattended installation. Windows only. Downloads a&#x20;
  `.zip`
   archive, containing the&#x20;
  `.msi`
   installer and the batch file. This option is deprecated with OneAgent version 1.173
* `mainframe`
  : Downloads all code modules for z/OS combined in a single&#x20;
  `*.pax`
   archive.
* `paas`
  : Code modules installer. Downloads a&#x20;
  `*.zip`
   archive, containing the&#x20;
  `manifest.json`
   file with meta information or a&#x20;
  `.jar`
   file for z/OS.
* `paas-sh`
  : Code modules installer. Downloads a self-extracting shell script with the embedded&#x20;
  `tar.gz`
   archive. |
| config.osType (required)        | "windows" \| "unix" \| "aix" \| "solaris" \| "zos"                      | The operating system of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Returns

| Return type                                       | Status code | Description                                           |
| ------------------------------------------------- | ----------- | ----------------------------------------------------- |
| [AgentInstallerVersions](#agentinstallerversions) | 200         | Success. The payload contains the available versions. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getAgentInstallerAvailableVersions(
    { osType: "windows", installerType: "default" },
  );
```

### getAgentInstallerConnectionInfo

**deploymentClient.getAgentInstallerConnectionInfo(config): Promise\<[ConnectionInfo](#connectioninfo)>**

Gets the connectivity information for OneAgent

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

#### Parameters

| Name                       | Type    | Description                                                                                                                                                                                  |
| -------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.defaultZoneFallback | boolean | Set `true` to perform a fallback to the default network zone if the provided network zone does not exist.                                                                                    |
| config.networkZone         | string  | The network zone you want the result to be configured with.                                                                                                                                  |
| config.version             | string  | The version of the OneAgent for which you're requesting connectivity information, in the `1.221` format. Set this parameter to get the best format of endpoint list for optimal performance. |

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
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getAgentInstallerConnectionInfo();
```

### getAgentInstallerConnectionInfoEndpoints

**deploymentClient.getAgentInstallerConnectionInfoEndpoints(config): Promise\<void>**

Gets the list of the ActiveGate-Endpoints to be used for Agents ordered by networkzone-priorities.

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Highest priority first, separated by a semicolon.If no network zone provided the default zone is used. Responds with 404 if network zone is not known.

#### Parameters

| Name                       | Type    | Description                                                                                               |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| config.defaultZoneFallback | boolean | Set `true` to perform a fallback to the default network zone if the provided network zone does not exist. |
| config.networkZone         | string  |                                                                                                           |

#### Returns

| Return type | Status code | Description |
| ----------- | ----------- | ----------- |
| void        | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getAgentInstallerConnectionInfoEndpoints();
```

### getAgentInstallerMetaInfo

**deploymentClient.getAgentInstallerMetaInfo(config): Promise\<[AgentInstallerMetaInfoDto](#agentinstallermetainfodto)>**

Gets the latest available version of a OneAgent installer

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

If a [target version](https://dt-url.net/ml03yye) is configured, then this is the downloaded version.

Non-required parameters are only applicable to the `paas` and `paas-sh` installer types.

#### Parameters

| Name                            | Type                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.arch                     | "all" \| "arm" \| "ppc" \| "ppcle" \| "s390" \| "sparc" \| "x86"        | The architecture of your OS: * &#x20;
  `all`: Use this value for AIX and z/OS. Defaults to `x86` for other OS types.
  &#x20;
* &#x20;
  `x86`: x86 architecture.
  &#x20;
* &#x20;
  `ppc`: PowerPC architecture, only supported for AIX.
  &#x20;
* &#x20;
  `ppcle`: PowerPC Little Endian architecture, only supported for Linux.
  &#x20;
* &#x20;
  `sparc`: Sparc architecture, only supported for Solaris.
  &#x20;
* &#x20;
  `arm`: ARM architecture, only supported for Linux.
  &#x20;
* &#x20;
  `s390`: S/390 architecture, only supported for Linux.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                     |
| config.bitness                  | "all" \| "32" \| "64"                                                   | The bitness of your OS. Must be supported by the OS. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| config.flavor                   | "default" \| "multidistro" \| "musl"                                    | The flavor of your Linux distribution: * &#x20;
  `musl` for Linux distributions, which are using the musl C standard library, for example Alpine Linux.
  &#x20;
* &#x20;
  `multidistro` for Linux distributions, which are using musl C and glibc standard library.
  &#x20;
* &#x20;
  `default` for Linux distributions, which are using glibc standard library.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| config.installerType (required) | "default" \| "default-unattended" \| "mainframe" \| "paas" \| "paas-sh" | The type of the installer: * `default`
  : Self-extracting installer for manual installation. Downloads an&#x20;
  `.exe`
   file for Windows or an&#x20;
  `.sh`
   file for Unix.
* `default-unattended`
  : Self-extracting installer for unattended installation. Windows only. Downloads a&#x20;
  `.zip`
   archive, containing the&#x20;
  `.msi`
   installer and the batch file. This option is deprecated with OneAgent version 1.173
* `mainframe`
  : Downloads all code modules for z/OS combined in a single&#x20;
  `*.pax`
   archive.
* `paas`
  : Code modules installer. Downloads a&#x20;
  `*.zip`
   archive, containing the&#x20;
  `manifest.json`
   file with meta information or a&#x20;
  `.jar`
   file for z/OS.
* `paas-sh`
  : Code modules installer. Downloads a self-extracting shell script with the embedded&#x20;
  `tar.gz`
   archive. |
| config.osType (required)        | "windows" \| "unix" \| "aix" \| "solaris" \| "zos"                      | The operating system of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Returns

| Return type                                             | Status code | Description |
| ------------------------------------------------------- | ----------- | ----------- |
| [AgentInstallerMetaInfoDto](#agentinstallermetainfodto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getAgentInstallerMetaInfo({
    osType: "windows",
    installerType: "default",
  });
```

### getAgentInstallerWithVersionChecksum

**deploymentClient.getAgentInstallerWithVersionChecksum(config): Promise\<[OneAgentInstallerChecksum](#oneagentinstallerchecksum)>**

Gets the checksum of a non-customized OneAgent installer

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

The checksum is the sha256 hash of the installer file.

Compare this checksum only with a non-customized OneAgent installer.

To get a non-customized installer, set the **skipMetadata** query parameter of the download endpoint to `true`.

#### Parameters

| Name                            | Type                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.arch                     | "all" \| "arm" \| "ppc" \| "ppcle" \| "s390" \| "sparc" \| "x86"                                                                               | The architecture of your OS: * &#x20;
  `all`: Use this value for AIX and z/OS. Defaults to `x86` for other OS types.
  &#x20;
* &#x20;
  `x86`: x86 architecture.
  &#x20;
* &#x20;
  `ppc`: PowerPC architecture, only supported for AIX.
  &#x20;
* &#x20;
  `ppcle`: PowerPC Little Endian architecture, only supported for Linux.
  &#x20;
* &#x20;
  `sparc`: Sparc architecture, only supported for Solaris.
  &#x20;
* &#x20;
  `arm`: ARM architecture, only supported for Linux.
  &#x20;
* &#x20;
  `s390`: S/390 architecture, only supported for Linux.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types. |
| config.bitness                  | "all" \| "32" \| "64"                                                                                                                          | The bitness of your OS. Must be supported by the OS. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| config.flavor                   | "default" \| "multidistro" \| "musl"                                                                                                           | The flavor of your Linux distribution: * &#x20;
  `musl` for Linux distributions, which are using the musl C standard library, for example Alpine Linux.
  &#x20;
* &#x20;
  `multidistro` for Linux distributions, which are using musl C and glibc standard library.
  &#x20;
* &#x20;
  `default` for Linux distributions, which are using glibc standard library.
  &#x20; Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                |
| config.ifNoneMatch              | string                                                                                                                                         | The ETag of the previous request. Do not download if it matches the ETag of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| config.include                  | Array\<"all" \| "java" \| "java-graal-native" \| "apache" \| "nginx" \| "nodejs" \| "dotnet" \| "php" \| "go" \| "sdk" \| "envoy" \| "python"> | The code modules to be included to the installer. You can specify several modules in the following format: `include=java&include=dotnet`. Only applicable to the `paas` and `paas-sh` installer types.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.installerType (required) | "paas"                                                                                                                                         | The type of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| config.networkZone              | string                                                                                                                                         | The network zone you want the result to be configured with.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| config.osType (required)        | "windows" \| "unix" \| "aix" \| "solaris" \| "zos"                                                                                             | The operating system of the installer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| config.version (required)       | string                                                                                                                                         | The required version of the OneAgent in `1.155.275.20181112-084458` format. You can retrieve the list of available versions with the [**GET available versions of OneAgent**](https://dt-url.net/fo23rb5) call.                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Returns

| Return type                                             | Status code | Description                                       |
| ------------------------------------------------------- | ----------- | ------------------------------------------------- |
| [OneAgentInstallerChecksum](#oneagentinstallerchecksum) | 200         | Success. The payload contains the installer file. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getAgentInstallerWithVersionChecksum(
    {
      osType: "windows",
      installerType: "paas",
      version: "...",
    },
  );
```

### getAgentProcessModuleConfig

**deploymentClient.getAgentProcessModuleConfig(config): Promise\<[AgentProcessModuleConfigResponse](#agentprocessmoduleconfigresponse)>**

Gets the latest process module config

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Returns the latest process module config. Passing a previously gotten revision will first do a revision check, and return a 304 response if no changes were detected.

#### Parameters

| Name             | Type   | Description                                                                                                                                    |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| config.hostgroup | string | The name of the host group the process is part of.                                                                                             |
| config.revision  | number | The previously received revision to compare against.                                                                                           |
| config.sections  | string | A list of comma-separated section identifiers to retrieve values for. Supported sections are 'general' and 'agentType'. Defaults to 'general'. |

#### Returns

| Return type                                                           | Status code | Description |
| --------------------------------------------------------------------- | ----------- | ----------- |
| [AgentProcessModuleConfigResponse](#agentprocessmoduleconfigresponse) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getAgentProcessModuleConfig();
```

### getBoshReleaseAvailableVersions

**deploymentClient.getBoshReleaseAvailableVersions(config): Promise\<[BoshReleaseAvailableVersions](#boshreleaseavailableversions)>**

Gets the list of available OneAgent versions for BOSH release tarballs

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

#### Parameters

| Name                     | Type                | Description                            |
| ------------------------ | ------------------- | -------------------------------------- |
| config.osType (required) | "windows" \| "unix" | The operating system of the installer. |

#### Returns

| Return type                                                   | Status code | Description |
| ------------------------------------------------------------- | ----------- | ----------- |
| [BoshReleaseAvailableVersions](#boshreleaseavailableversions) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getBoshReleaseAvailableVersions({
    osType: "windows",
  });
```

### getBoshReleaseChecksum

**deploymentClient.getBoshReleaseChecksum(config): Promise\<[BoshReleaseChecksum](#boshreleasechecksum)>**

Gets the checksum of the specified BOSH release tarball

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

The checksum is the sha256 hash of the installer file.

Result is not stable if **skipMetadata** is set to `false`.

For SaaS only works on environment ActiveGates version 1.176 or higher

#### Parameters

| Name                      | Type                | Description                                                                                                                                                                                                              |
| ------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config.networkZone        | string              | The network zone you want the result to be configured with.                                                                                                                                                              |
| config.osType (required)  | "windows" \| "unix" | The operating system of the installer.                                                                                                                                                                                   |
| config.skipMetadata       | boolean             | Set `true` to omit the OneAgent connectivity information from the installer. If not set, `false` is used.                                                                                                                |
| config.version (required) | string              | The required version of the OneAgent in the `1.155.275.20181112-084458` format. You can retrieve the list of available versions with the [**GET available versions of BOSH tarballs**](https://dt-url.net/j703kdn) call. |

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [BoshReleaseChecksum](#boshreleasechecksum) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data = await deploymentClient.getBoshReleaseChecksum({
  osType: "windows",
  version: "...",
});
```

### getGatewayInstallerMetaInfo

**deploymentClient.getGatewayInstallerMetaInfo(config): Promise\<[GatewayInstallerMetaInfoDto](#gatewayinstallermetainfodto)>**

Gets the latest available version of an ActiveGate installer

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

#### Parameters

| Name                     | Type                                  | Description                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.arch              | "all" \| "s390" \| "amd64" \| "arm64" | The architecture of your OS: * `all`
  : Defaults to&#x20;
  `amd64`
  .
* `amd64`
  : amd64 architecture.
* `s390`
  : S/390 architecture, only supported for Linux.
* `arm64`
  : arm64 architecture, only supported for Linux. |
| config.osType (required) | "windows" \| "unix"                   | The operating system of the installer.                                                                                                                                                                                            |

#### Returns

| Return type                                                 | Status code | Description |
| ----------------------------------------------------------- | ----------- | ----------- |
| [GatewayInstallerMetaInfoDto](#gatewayinstallermetainfodto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getGatewayInstallerMetaInfo({
    osType: "windows",
  });
```

### getLambdaLayerBuildUnits

**deploymentClient.getLambdaLayerBuildUnits(config): Promise\<[LatestLambdaLayersMetainfo](#latestlambdalayersmetainfo)>**

Get the ARNs of the latest OneAgent for AWS Lambda layers | maturity=EARLY_ADOPTER

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Get the ARNs of the latest OneAgent for AWS Lambda layers for the Java and Node.js AWS Lambda runtimes. Passing architecture, technology type or region as parameter will return only the relevant layers.

#### Parameters

| Name                 | Type                               | Description                                                                                                                                          |
| -------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.arch          | "arm" \| "x86"                     | The architecture of your OS: * If omitted, shows available layers for all architectures.
* `x86`
  : x86 architecture.
* `arm`
  : ARM architecture. |
| config.region        | string                             | The region of the layer. It must match the region of the AWS Lambda function                                                                         |
| config.techtype      | "java" \| "nodejs"                 | Technology type of the lambda runtime.                                                                                                               |
| config.withCollector | "included" \| "excluded" \| "only" | Specify if you want the log collector contained or log collector only. ONLY cannot be combined with techtype                                         |

#### Returns

| Return type                                               | Status code | Description                                                            |
| --------------------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| [LatestLambdaLayersMetainfo](#latestlambdalayersmetainfo) | 200         | Success. The payload contains the ARNs of the latest available layers. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getLambdaLayerBuildUnits();
```

### getLatestActiveGateImage

**deploymentClient.getLatestActiveGateImage(config): Promise\<[ImageDto](#imagedto)>**

Gets the latest available ActiveGate image

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Returns the latest available ActiveGate image

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [ImageDto](#imagedto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getLatestActiveGateImage();
```

### getLatestAgentImage

**deploymentClient.getLatestAgentImage(config): Promise\<[ImageDto](#imagedto)>**

Gets the latest available Agent image

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Returns the latest available Agent image while considering target and minimal agent version

#### Parameters

| Name                             | Type                        | Description |
| -------------------------------- | --------------------------- | ----------- |
| config.agentImageType (required) | "oneAgent" \| "codeModules" | Agent Type  |

#### Returns

| Return type           | Status code | Description |
| --------------------- | ----------- | ----------- |
| [ImageDto](#imagedto) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data = await deploymentClient.getLatestAgentImage({
  agentImageType: "oneAgent",
});
```

### getLatestLambdaBuildUnits

**deploymentClient.getLatestLambdaBuildUnits(config): Promise\<[LatestLambdaLayerNames](#latestlambdalayernames)>**

Get the latest version names of the OneAgent for AWS Lambda

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Get the latest version names of the OneAgent for the Java, Node.js, and Python AWS Lambda runtimes, also including names for layers that are combined with the log collector, as well as for the standalone log collector layer.

#### Returns

| Return type                                       | Status code | Description                                           |
| ------------------------------------------------- | ----------- | ----------------------------------------------------- |
| [LatestLambdaLayerNames](#latestlambdalayernames) | 200         | Success. The payload contains the available versions. |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getLatestLambdaBuildUnits();
```

### getPublicCommunicationAddresses

**deploymentClient.getPublicCommunicationAddresses(config): Promise\<[Addresses](#addresses)>**

Gets public endpoints

**Required scope:** environment-api:deployment:download
**Required permission:** environment:roles:agent-install

Returns the IP addresses of public endpoints. Outgoing connections to these IPs should be allowed.

#### Returns

| Return type             | Status code | Description |
| ----------------------- | ----------- | ----------- |
| [Addresses](#addresses) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { deploymentClient } from "@dynatrace-sdk/client-classic-environment-v1";

const data =
  await deploymentClient.getPublicCommunicationAddresses();
```
