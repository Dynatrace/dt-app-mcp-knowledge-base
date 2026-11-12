## Define a settings schema

A settings schema is a JSON file that defines the structure of the values stored in the app settings. You can create any number of schemas in your project's `/settings/schemas` directory, with the only restriction that each schema definition file name must end in `.schema.json`.

> **Tip**
>
> If you want your IDE to provide autocompletion and detailed documentation, use the `$schema` keyword in your setting schema to reference the [JSON Schema](pathname:///docs-assets/schema_strict_apps.json). You can also import it manually if your IDE doesn't support that mechanism.

Here is an example of a schema that allows you to configure connections to a fictional messaging service:

**my-example.schema.json**

```json title="settings/schemas/my-example.schema.json"
{
  "$schema": "https://developer.dynatrace.com/docs-assets/schema_strict_apps.json",
  "dynatrace": "1",
  "schemaId": "my-example",
  "version": "1.0.0",
  "displayName": "Allows you to configure connections to a fictional messaging service",
  "description": "",
  "multiObject": true,
  "maxObjects": 10,
  "summaryPattern": "Messaging Service {url} via {tokenType}",
  "ordered": false,
  "maturity": "GENERAL_AVAILABILITY",
  "ownerBasedAccessControl": false,
  "enums": {
    "Type": {
      "displayName": "Type",
      "description": "",
      "documentation": "",
      "items": [
        {
          "value": "basic",
          "displayName": "Basic Authentication"
        },
        {
          "value": "pat",
          "displayName": "Personal Access Token"
        },
        {
          "value": "cloud-token",
          "displayName": "Access Token"
        }
      ],
      "type": "enum"
    }
  },
  "properties": {
    "url": {
      "displayName": "URL",
      "description": "The URL of the messaging service",
      "type": "text",
      "default": "",
      "nullable": false,
      "constraints": [
        {
          "type": "PATTERN",
          "customMessage": "The URL must be secure (https://) and must not contain a trailing slash",
          "pattern": "^https://.*[^/]$"
        }
      ]
    },
    "token": {
      "displayName": "Token",
      "description": "A secret token",
      "type": "secret",
      "default": "",
      "nullable": false
    },
    "tokenType": {
      "displayName": "Type",
      "description": "Type of authentication method that should be used",
      "default": "basic",
      "type": {
        "$ref": "#/enums/Type"
      },
      "nullable": false
    },
    "channels": {
      "displayName": "Channels",
      "description": "A list of channels on the messaging service",
      "type": "list",
      "items": {
        "type": "text"
      }
    },
    "isEnabled": {
      "displayName": "Enabled",
      "description": "Enable the integration of the messaging service",
      "type": "boolean",
      "default": false,
      "nullable": false
    }
  }
}
```

### Schema maturity

The `maturity` field indicates the stability and readiness of the schema for production use. The available maturity levels are: `IN_DEVELOPMENT`, `EARLY_ADOPTER` and `GENERAL_AVAILABILITY`.

Schemas with `IN_DEVELOPMENT` maturity are hidden from the settings menu and can't be accessed via either the [Settings Schemas](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2.md#settingsschemasclient) or [Settings Objects](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2.md#settingsobjectsclient) Environment API.
However, you can still access and manage the setting objects of such schemas as described in this document or directly via the [App Settings V2 API](https://developer.dynatrace.com/develop/sdks/client-app-settings-v2.md).

Schemas with `EARLY_ADOPTER` maturity are available in all environments, but are less mature that those with the `GENERAL_AVAILABILITY` maturity. Even though incompatible changes for these schemas are not expected, since they aren't fully stable yet, incompatible changes may be necessary in rare cases.

Schemas with `GENERAL_AVAILABILITY` maturity are considered the most stable. While the schemas will still evolve over time, you should only worry about backward-compatible features.

### Use secrets

When you use secrets in your app settings, a default security mechanism protects them from exfiltration.

For example, if you store an access token along with the URL for a service to authenticate, any URL change ideally requires you to resubmit the secret. Otherwise, your app could connect to the changed URL and leak the access token. You can prevent such a leak by resubmitting the secret after changing any properties related to it, such as URLs, IP addresses, port numbers, service names, and others.

To make this easy, app settings have a secret resubmission validation in place, which is achieved and configured with the help of a built-in container constraint.

Suppose the schema has secrets, and you haven't manually added a resubmission constraint. In this case, the schema will behave as if it had a constraint that requires you to resubmit the secret on any property change.

Therefore, by default, you'll have to resubmit the secret after any changes to its related properties. Add a constraint object to the list of constraints to change this default behavior. The constraint object has two mandatory fields, `"type": "SECRET_RESUBMISSION"`, `"checkAllProperties": false`, and an optional one, `"customMessage"`.

For every property related to the secret, add `"forceSecretResubmission": true`.
The `forceSecretResubmission` property on an input property is only available if a validator constraint of type SECRET_RESUBMISSION exists.
Otherwise, the schema registration will fail with a validation error, which means the automatism fallback always considers all properties and doesn't have to deal with the `forceSecretResubmission` properties.

Here is an example of a schema with a manually configured resubmission validation:

**my-example-secrets.schema.json**

```json title="settings/schemas/my-example-secrets.schema.json"
{
  "dynatrace": "1",
  "schemaId": "my-example-secrets",
  "version": "1.0.0",
  "displayName": "Allows you to configure connections to a fictional messaging service",
  "description": "",
  "multiObject": true,
  "maxObjects": 10,
  "maturity": "GENERAL_AVAILABILITY",
  "summaryPattern": "Messaging Service {url}",
  "ordered": false,
  "properties": {
    "isEnabled": {
      "displayName": "Enabled",
      "description": "Enable the integration of the messaging service",
      "type": "boolean",
      "default": false,
      "nullable": false
    },
    "description": {
      "displayName": "Description of the connection",
      "type": "text",
      "default": "",
      "nullable": false
    },
    "url": {
      "displayName": "URL",
      "description": "The URL of the messaging service",
      "type": "text",
      "default": "",
      "nullable": false,
      // highlight-start
      "forceSecretResubmission": true,
      // highlight-end
      "constraints": [
        {
          "type": "PATTERN",
          "customMessage": "The URL must be secure (https://) and must not contain a trailing slash",
          "pattern": "^https://.*[^/]$"
        }
      ]
    },
    "token": {
      "displayName": "Token",
      "description": "A secret token",
      "type": "secret",
      "default": "",
      "nullable": false
    }
  },
  // highlight-start
  "constraints": [
    {
      "type": "SECRET_RESUBMISSION",
      "customMessage": "For security reasons, please re-enter the token before saving the settings.",
      "checkAllProperties": false
    }
  ]
  // highlight-end
}
```

### Limitations

- Each schema can't exceed 100KiB.
- The settings folder can't exceed 1MiB.
