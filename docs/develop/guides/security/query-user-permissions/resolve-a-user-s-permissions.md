## Resolve a user's permissions

You can issue one or many permission requests with a call to `resolveEffectivePermissions` provided by the package's [effectivePermissionsClient](https://developer.dynatrace.com/contents/docs/develop/sdks/client-platform-management-service/index.md/#effectivepermissionsclient).

Optionally, you can provide a `context` object where you give the values for any conditions for the respective permission. The response object has a corresponding array of objects that have a `granted` field with the following possible values:

- `true`: The user generally has permission independent of any conditions.
- `condition`: The user has permission, only given certain conditions, and the provided `context` hasn't been enough to resolve them.
- `false`: The user doesn't have the permission.

> **Tip**
>
> Based on the result, an app could decide to show or hide a UI element like a button, which would trigger an SDK call, for example, hiding a "Create" button if it's known that the user doesn't have permission.

As an example, a user has the following permissions using a group membership where the following IAM policy is assigned:

```text
ALLOW storage:logs:read; ALLOW storage:metrics:read where storage:metric.key startsWith "builtin:synthetic";
```

```ts testable
import { effectivePermissionsClient } from '@dynatrace-sdk/client-platform-management-service';

const result = await effectivePermissionsClient.resolveEffectivePermissions({
  body: {
    permissions: [
      {
        permission: 'storage:logs:read',
        context: [
          {
            key: 'storage:k8s.cluster.name',
            value: 'mycluster',
          },
        ],
      },
      {
        permission: 'app-engine:edge-connects:write',
      },
      {
        permission: 'storage:metrics:read',
      },
      {
        permission: 'storage:metrics:read',
        context: [
          {
            key: 'storage:metric.key',
            value: 'builtin:synthetic.http.availability.location.total',
          },
        ],
      },
    ],
  },
});

// result[0].granted === "true"
// result[1].granted === "false"
// result[2].granted === "condition"
// result[3].granted === "true"
```

The example shows that the first result returned "true" because the policy even allows `storage:logs:read` without any conditions.
The second result is "false" because the user's policy doesn't allow `app-engine:edge-connects:write`. The third is "condition" because the user only has `storage:metrics:read` under conditions but provides no context. The fourth example provides explicitly that condition so that a definite "true" can be returned.

> **Tip**
>
> You can query app settings permissions using the [`client-app-settings-v2`](https://developer.dynatrace.com/develop/sdks/client-app-settings-v2.md) SDK or the [`useEffectivePermissionsV2`](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md/#get-effective-settings-permissions) React hook.
