## Concepts

You need to know the following concepts to work with the PMS.

### License

Every environment has some information related to the license. This license API includes the following:

- `trial`: A boolean value that tells whether an environment is a trial environment.
- `platformSubscription`: A boolean that tells whether an environment has an enabled Dynatrace Platform Subscription (DPS) license.

### License settings

Every environment has license-related settings represented by a list of key and value pairs available at `/environment/license/settings`.

### Environment

Technical information about the environment is provided, such as:

- `environmentId`: the actual environment ID corresponding to the canonical URL of `<environmentId>.apps.dynatrace.com`
- `createTime`: timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) of when the environment was created.

### Environment settings

Every environment has some settings that include the following:

- `chatEnabled`: A boolean that tells if the chat feature is active for the environment.
- `countryCode`: An ISO3166-1 alpha-2 two letter country code. For further details, visit [Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

### Environment effective permissions

Environment effective permissions provide information on whether the calling user has specific IAM permissions (or scopes) for the environment as listed in the [IAM service reference page](https://docs.dynatrace.com/docs/shortlink/iam-policystatements).

As explained in [Authentication](https://developer.dynatrace.com/develop/platform-services/core-concepts/authentication.md), access to Dynatrace API endpoints is only allowed if the calling user is granted the corresponding scope using some policy and group assignment.
You can use the `effective-permissions` endpoint or the corresponding SDK method to check a user's permissions before calling the endpoint guarded by that scope. For more information, visit the [Query user permissions](https://developer.dynatrace.com/develop/guides/security/query-user-permissions.md) guide and learn how to use the SDK.

> **Tip**
>
> You can query app settings permissions using the [`client-app-settings-v2`](https://developer.dynatrace.com/develop/sdks/client-app-settings-v2.md) SDK or the [`useEffectivePermissionsV2`](https://developer.dynatrace.com/develop/guides/data/store-app-settings.md/#get-effective-settings-permissions) React hook.
