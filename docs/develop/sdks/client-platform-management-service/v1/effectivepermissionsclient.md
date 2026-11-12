## effectivePermissionsClient

```js
import { effectivePermissionsClient } from '@dynatrace-sdk/client-platform-management-service';
```

### resolveEffectivePermissions

**effectivePermissionsClient.resolveEffectivePermissions(config): Promise\<[EffectivePermissions](#effectivepermissions)>**

Get the effective permissions of the calling user in the environment

**One of the following scopes is required:**

- app-engine:apps:run
- app-engine:functions:run
- platform-management:effective-permissions:resolve

This endpoint resolves whether the caller (based on the provided OAuth token when calling this endpoint) has the requested permissions (see [IAM policy reference](https://dt-url.net/ut02qdv) for a list of permissions and their conditions). It resolves the permission via IAM and uses the optional context to evaluate conditional results. The provided context consists of key-value pairs where the `key` must correspond to the name of a supported condition of the requested permission and the `value` is the value that it this condition is evaluated against given a user's policies.

For each requested permission the response indicates whether the user has the requested permission (`"granted": "true"`), does not have it (`"granted": "false"`) or only has it conditionally (`"granted": "condition"`), meaning that the provided values for conditions in the context are not sufficient to decide whether the caller has the permission.

For environment API v2 scopes (i.e. scopes starting with environment-api:) roles on the environment and management zone level will also be considered.

\> ℹ️ **Settings permission** requests for scopes `settings:schemas:read`, `settings:objects:read`, and `settings:objects:write` will always result in a result with `"granted": "condition"`. You can use the dedicated effective permissions endpoint for settings instead.

\> ℹ️ Apps must list all permissions they check in the list of `scopes` in their app configuration.

You can learn more about querying user permissions on [Dynatrace Developer](https://dt-url.net/query-user-permissions).

#### Parameters

| Name                   | Type                                    |
| ---------------------- | --------------------------------------- |
| config.body (required) | [ResolutionRequest](#resolutionrequest) |

#### Throws

| Error Type           | Error Message    |
| -------------------- | ---------------- |
| DefaultErrorResponse | Unexpected error |

**Code example**

```ts
import { effectivePermissionsClient } from "@dynatrace-sdk/client-platform-management-service";

const data =
  await effectivePermissionsClient.resolveEffectivePermissions(
    {
      body: {
        permissions: [
          { permission: "state:app-states:write" },
        ],
      },
    },
  );
```
