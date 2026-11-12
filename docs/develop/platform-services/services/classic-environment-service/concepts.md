## Concepts

You need to know the following concepts to work with the classic environment service.

### Authentication and access control

The classic endpoints are authorized via OAuth and enforce the user's permissions in the backend. The environment role-based permissions are mapped onto the existing endpoints to make the environment endpoints consumable in a user context for app development. When using these APIs in apps and workflows, the whole OAuth layer is abstracted by the runtime and SDK so that you can focus on the problem and don't have to care about authentication and authorization.

### Access classic endpoints with role-based permissions

As described above, OAuth enforces the user's role-based permissions to access classic API endpoints. For app developers, every endpoint has dedicated requirements regarding the permissions that the user needs in order to access it via the app. You can find the details of every method in the [Classic Environment V2](https://developer.dynatrace.com/contents/docs/develop/sdks/client-classic-environment-v2/index.md/) reference.

The following example lists the required information to get an auto-update configuration for an ActiveGate:

- **Method**: `activeGatesAutoUpdateConfigurationClient.getAutoUpdateConfigById()`
- **Description**: Gets the configuration of auto-update for the specified ActiveGate
- **OAuth scope for manifest**: `environment-api:activegates:read`
- **Required user permission**: `environment:roles:manage-settings`
- **Management zone permission**: No

For this method, the user must be able to manage the environment's settings.

### Audit REST API calls

With AppEngine and Grail, we can monitor the full API spectrum and provide detailed API access logs as part of our audit logs on Grail. Since AppEngine exposes the classic environment service, you can also use the API logs for this service.
