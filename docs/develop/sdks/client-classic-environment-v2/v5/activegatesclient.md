## activeGatesClient

```js
import { activeGatesClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getAllActiveGates

**activeGatesClient.getAllActiveGates(config): Promise\<[ActiveGateList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegatelist)>**

Lists all available ActiveGates

**Required scope:** environment-api:activegates:read
**Required permission:** environment:roles:manage-settings

The response includes all ActiveGates that are currently connected to the environment or have been connected during last 2 hours.

#### Parameters

| Name                       | Type                                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.autoUpdate          | "ENABLED" \| "DISABLED"                                                                                                                                                                                                                                                                                   | Filters the resulting set of ActiveGates by the actual state of auto-update.                                                                                     |
| config.containerized       | boolean                                                                                                                                                                                                                                                                                                   | Filters the resulting set of ActiveGates to those which are running in container (`true`) or not (`false`).                                                      |
| config.disabledModule      | Array\<"SYNTHETIC" \| "AWS" \| "AZURE" \| "BEACON_FORWARDER" \| "CLOUD_FOUNDRY" \| "DB_INSIGHT" \| "DEBUGGING" \| "EXTENSIONS_V1" \| "EXTENSIONS_V2" \| "KUBERNETES" \| "LOGS" \| "MEMORY_DUMPS" \| "METRIC_API" \| "ONE_AGENT_ROUTING" \| "OTLP_INGEST" \| "REST_API" \| "VMWARE" \| "Z_OS"> | Filters the resulting set of ActiveGates by the disabled modules.                                                                                                |
| config.enabledModule       | Array\<"SYNTHETIC" \| "AWS" \| "AZURE" \| "BEACON_FORWARDER" \| "CLOUD_FOUNDRY" \| "DB_INSIGHT" \| "DEBUGGING" \| "EXTENSIONS_V1" \| "EXTENSIONS_V2" \| "KUBERNETES" \| "LOGS" \| "MEMORY_DUMPS" \| "METRIC_API" \| "ONE_AGENT_ROUTING" \| "OTLP_INGEST" \| "REST_API" \| "VMWARE" \| "Z_OS"> | Filters the resulting set of ActiveGates by the enabled modules.                                                                                                 |
| config.fipsMode            | boolean                                                                                                                                                                                                                                                                                                   | Filters the resulting set of ActiveGates to those which are running in FIPS mode (`true`) or not (`false`).                                                      |
| config.group               | string                                                                                                                                                                                                                                                                                                    | Filters the resulting set of ActiveGates by the group. You can specify a partial name. In that case, the `CONTAINS` operator is used.                            |
| config.hostname            | string                                                                                                                                                                                                                                                                                                    | Filters the resulting set of ActiveGates by the name of the host it's running on. You can specify a partial name. In that case, the `CONTAINS` operator is used. |
| config.loadBalancerAddress | string                                                                                                                                                                                                                                                                                                    | Filters the resulting set of ActiveGates by the Load Balancer address. You can specify a partial address. In that case, the `CONTAINS` operator is used.         |
| config.networkAddress      | string                                                                                                                                                                                                                                                                                                    | Filters the resulting set of ActiveGates by the network address. You can specify a partial address. In that case, the `CONTAINS` operator is used.               |
| config.networkZone         | string                                                                                                                                                                                                                                                                                                    | Filters the resulting set of ActiveGates by the network zone. You can specify a partial name. In that case, the `CONTAINS` operator is used.                     |
| config.online              | boolean                                                                                                                                                                                                                                                                                                   | Filters the resulting set of ActiveGates by the communication status.                                                                                            |
| config.osArchitecture      | "S390" \| "X86" \| "ARM" \| "PPCLE"                                                                                                                                                                                                                                                                       | Filters the resulting set of ActiveGates by the OS architecture of the host it's running on.                                                                     |
| config.osType              | "LINUX" \| "WINDOWS"                                                                                                                                                                                                                                                                                      | Filters the resulting set of ActiveGates by the OS type of the host it's running on.                                                                             |
| config.tokenExpirationSet  | boolean                                                                                                                                                                                                                                                                                                   | Filters the resulting set of ActiveGates to those with set expiration date for authorization token.                                                              |
| config.tokenState          | "UNKNOWN" \| "ABSENT" \| "EXPIRING" \| "INVALID" \| "UNSUPPORTED" \| "VALID"                                                                                                                                                                                                                              | Filters the resulting set of ActiveGates to those with authorization token in specified state.                                                                   |
| config.type                | "ENVIRONMENT" \| "ENVIRONMENT_MULTI"                                                                                                                                                                                                                                                                     | Filters the resulting set of ActiveGates by the ActiveGate type.                                                                                                 |
| config.updateStatus        | "UNKNOWN" \| "INCOMPATIBLE" \| "OUTDATED" \| "SCHEDULED" \| "SUPPRESSED" \| "UP2DATE" \| "UPDATE_IN_PROGRESS" \| "UPDATE_PENDING" \| "UPDATE_PROBLEM"                                                                                                                                                 | Filters the resulting set of ActiveGates by the auto-update status.                                                                                              |
| config.version             | string                                                                                                                                                                                                                                                                                                    | Filters the resulting set of ActiveGates by the specified version. Specify the version in `<major>.<minor>.<revision>` format (for example, `1.195.0`) here.     |
| config.versionCompareType  | "EQUAL" \| "GREATER" \| "GREATER_EQUAL" \| "LOWER" \| "LOWER_EQUAL"                                                                                                                                                                                                                                     | Filters the resulting set of ActiveGates by the specified version. Specify the comparison operator here.                                                         |

#### Returns

| Return type                                                                                                             | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ActiveGateList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegatelist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await activeGatesClient.getAllActiveGates();
```

### getOneActiveGateById

**activeGatesClient.getOneActiveGateById(config): Promise\<[ActiveGate](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegate)>**

Gets the details of the specified ActiveGate

**Required scope:** environment-api:activegates:read
**Required permission:** environment:roles:manage-settings

#### Parameters

| Name                   | Type   | Description                        |
| ---------------------- | ------ | ---------------------------------- |
| config.agId (required) | string | The ID of the required ActiveGate. |

#### Returns

| Return type                                                                                                     | Status code | Description |
| --------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [ActiveGate](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v5/types.md#activegate) | 200         | Success     |

#### Throws

| Error Type         | Error Message                                                                         |
| ------------------ | ------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Not found. See response body for details. \| Client side error. \| Server side error. |

**Code example**

```ts
import { activeGatesClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await activeGatesClient.getOneActiveGateById({
  agId: "...",
});
```
