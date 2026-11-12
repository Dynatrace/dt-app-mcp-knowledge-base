## Credentials

**Dynatrace Extensions** can either generate all the credentials required for Extension 2.0 development or allow you to bring your own credential files.

### When using your credentials

You need to provide your files by using these settings:

| Setting                                           | Description                                                                                                          |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `dynatraceExtensions.developerCertkeyLocation`    | This is the path to your [developer credential](https://docs.dynatrace.com/docs/shortlink/sign-extension#cert) file. |
| `dynatraceExtensions.rootOrCaCertificateLocation` | is the path to your root (CA) certificate.                                                                           |

Example usage:

```json title="./vscode/settings.json"
{
  "dynatraceExtensions.developerCertkeyLocation": "C:\\Temp\\certificates\\dev.pem",
  "dynatraceExtensions.rootOrCaCertificateLocation": "C:\\Temp\\certificates\\ca.pem"
}
```

### When generating credentials

You can customize the details that are embedded into the generated certificates by using these settings:

| Setting                                           | Default value       | Description                                         |
| ------------------------------------------------- | ------------------- | --------------------------------------------------- |
| `dynatraceExtensions.certificateCommonName`       | Extension Developer | The certificate's common name (CN) attribute.       |
| `dynatraceExtensions.certificateOrganization`     |                     | The certificate's organization (O) attribute.       |
| `dynatraceExtensions.certificateOrganizationUnit` |                     | The certificate's organization unit (OU) attribute. |
| `dynatraceExtensions.certificateStateOrProvince`  |                     | The certificate's state or province (ST) attribute. |
| `dynatraceExtensions.certificateCountryCode`      |                     | The certificate's country code (C) attribute.       |
