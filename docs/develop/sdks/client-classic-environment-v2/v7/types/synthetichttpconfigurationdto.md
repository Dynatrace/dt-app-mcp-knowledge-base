### SyntheticHttpConfigurationDto

The Http step's configuration.

| Name                                | Type                                                  | Description                                                             |
| ----------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| acceptAnyCertificate                | boolean                                               | If true accept any certificate flag. *default:* `true`                  |
| clientCertificateId                 | string                                                | Identifier of stored client's certificate.                              |
| doNotPersistSensitiveData           | boolean                                               | If true the step's data aren't stored and displayed. *default:* `false` |
| followRedirects                     | boolean                                               | If true follow redirects. *default:* `false`                            |
| headers                             | Array\<[MonitorRequestHeader](#monitorrequestheader)> | The headers.                                                            |
| sslCertificateExpirationDaysToAlert | number                                                | Number of days within SSL certificate expires.                          |
