All Dynatrace platform service APIs use the [OAuth2.0 Client Credentials Flow](https://swagger.io/docs/specification/authentication/oauth2/) for authentication.

> **Note**
>
> For further details, visit [Access platform APIs from outside](https://developer.dynatrace.com/develop/guides/access-platform-apis-from-outside.md).

## API permissions

Dynatrace platform service APIs control user access with a [policy-based permission system](https://docs.dynatrace.com/docs/shortlink/iam-getting-started).
The Dynatrace IAM (Identity and access management) system allows you to define **policies** that grant **actions** of **users** on **resources**.
Each platform service API requires permission (or **scope**) to be granted to the user executing a request on the API.

All permissions follow this naming schema:

```text
<Service-Name or Service-Namespace>:<Resource>:<Action>
```

- `<Service-Name>`, `<Service-Namespace>` and `<Resource>` correspond to the entries described in the [general URL structure](https://developer.dynatrace.com/develop/platform-services/core-concepts/about-platform-services.md/#url-structure).
- `<Action>` defines the action associated with the permission (for example, execute, read, write, etc.).
