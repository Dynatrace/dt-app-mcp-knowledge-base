## Concepts

You need to know the following concepts to work with the Settings service.

### Schemas

Schemas define the structure and constraints of the data stored in a settings object. Each schema has a unique identifier (schema ID) and a version.

The Settings SDK can access all schema types: App Settings schemas (defined by app developers and registered by the App Settings Service on app installation) and built-in schemas (defined by Dynatrace). Neither the Settings SDK nor the App Settings SDK installs or manages schemas — schemas are registered by the platform, not by the SDKs. You can discover available schemas using the Settings SDK.

Schema IDs follow different conventions depending on the settings type:

- Built-in Dynatrace settings use the `builtin:` prefix, for example `"builtin:maintenance-windows"`.
- App Settings schemas use the format `"app:<app-identifier>:<schema-identifier>"`, for example `"app:my.app:my-example"`.

### Scope

Every settings object belongs to a scope that identifies its target. The scope is one of the following:

- `environment` — for settings that apply to the whole Dynatrace environment
- A Smartscape node ID — for settings that apply to a specific monitored entity (for example, a host, service, or Kubernetes cluster)

The scope must be provided when creating or querying settings objects.

### Effective values

The SDK allows you to get the effective values for a schema at a given scope. The operation evaluates the full hierarchy of persisted objects and always returns a result, even if no object has been explicitly stored. If no object is persisted at the requested scope, the value is inherited from the parent scope (up to the environment level). If nothing is persisted anywhere along the hierarchy, the default value defined in the schema is returned.

### Secrets handling

Settings allow you to define secret properties to store sensitive information like access tokens. Secret values are always masked in responses from the Settings SDK.

Some schemas require resubmission of secrets when related properties (such as URLs) are changed, to prevent inadvertent leakage. This behavior is configured at the schema level and is not controlled by the SDK caller.

### Interactive editing support

The Settings SDK provides helper operations to support building interactive settings editors: generating default values for a schema, producing a human-readable summary for a given value, and validating individual properties or full objects against custom validators defined in the schema. These operations do not persist any data.

### Revision history

The Settings service records a change history for settings objects. You can retrieve revision history to audit how configuration changed over time, and filter or sort by modification time and user.

### Owner-based access control

For schemas that have the `ownerBasedAccessControl` property enabled, the user who first creates a settings object becomes its owner. By default, only the owner can read or write that object. Ownership can be transferred, and additional users or groups can be granted access.

For objects in such schemas, the Settings SDK provides operations to:

- Transfer ownership
- Grant, update, or remove per-accessor permissions (for specific users and groups, or for all users)
- Bypass access checks with administrator access (`adminAccess`), subject to the `settings:objects:admin` scope
