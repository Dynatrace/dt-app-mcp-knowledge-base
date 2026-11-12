## Behavior

The add-on aims to allow users to customize their extension development experience as much as possible. The following settings allow turning various features on or off on demand.

### Features

| Setting                                       | Default value | Description                                                                                                                                                                |
| --------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dynatraceExtensions.metricSelectorsCodeLens` | true          | [Metric selector code lens](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/development_assistance.md#metric-selectors)                     |
| `dynatraceExtensions.entitySelectorsCodeLens` | true          | [Entity selector code lens](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/development_assistance.md#entity-selectors)                     |
| `dynatraceExtensions.fastDevelopmentMode`     | false         | [Fast development mode](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/development_assistance.md#fast-development-mode)                    |
| `dynatraceExtensions.wmiCodeLens`             | true          | [WMI queries code lens](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/development_assistance.md#windows-management-interface-wmi-queries) |
| `dynatraceExtensions.screenCodeLens`          | true          | [Unified analysis screen code lens](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/development_assistance.md#unified-analysis-screens)     |

### Logging

| Setting                                   | Default value | Description                                            |
| ----------------------------------------- | ------------- | ------------------------------------------------------ |
| `dynatraceExtensions.logging.level`       | `INFO`        | The minimum level of log messages                      |
| `dynatraceExtensions.logging.maxFiles`    | 10            | The maximum number of log files (by age) kept on disk. |
| `dynatraceExtensions.logging.maxFileSize` | 10            | The maximum size of a single log file (in MB).         |

### Tenant Connectivity Settings

The add-on always performs web requests to your Dynatrace environment over HTTPS. In specific scenarios—for example, in Dynatrace Managed—your environment may be accessible through a dedicated endpoint that uses either a custom-signed or a self-signed SSL certificate. While valid for encryption, most frameworks and browsers don't recognize these certificates as trusted, which causes requests to fail.

The `dynatraceExtensions.tenantConnectivitySettings` setting is only available from your `settings.json` file and represents an array of environment endpoints that require special settings for HTTPS connectivity. Each entry in the array is an object with the following details:

| Attribute                | Default value | Description                                                                                                                                                    |
| ------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tenantUrl`              | ""            | The base URL to your Dynatrace environment. The add-on will use the URL to decide when to apply special connectivity settings on web requests.                 |
| `certificatePath`        | ""            | The path on disk to a Root/CA file in `.pem` or `.crt` format. The add-on will load this file and add it to the list of trusted CAs for the given `tenantUrl`. |
| `disableSSLVerification` | `false`       | When enabled, the add-on ignores SSL certificates for the given `tenantUrl`. Enable this only when using self-signed certificates on your Dynatrace endpoint.  |

Example:

- Adding a custom certificate to the trusted CAs:

  ```json title="settings.json"
  "dynatraceExtensions.tenantConnectivitySettings": [
      {
          "tenantUrl": "https://10.0.0.1:5555/e/my-tenant",
          "certificatePath": "C:\\Temp\\my_custom.crt"
      }
  ]
  ```

- Using a self-signed certificate on an endpoint:

  ```json title="settings.json"
  "dynatraceExtensions.tenantConnectivitySettings": [
      {
          "tenantUrl": "https://my.custom.endpoint/e/my-other-tenant",
          "disableSSLVerification": true
      }
  ]
  ```
