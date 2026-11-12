### SyntheticHttpConfigurationDto

The Http step's configuration.

| Name                                | Type                                                  | Description                                                                          |
| ----------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| acceptAnyCertificate                | boolean                                               | If true accept any certificate flag.<br /><br />**Default:** `true`                  |
| clientCertificateId                 | string                                                | Identifier of stored client's certificate.                                           |
| doNotPersistSensitiveData           | boolean                                               | If true the step's data aren't stored and displayed.<br /><br />**Default:** `false` |
| followRedirects                     | boolean                                               | If true follow redirects.<br /><br />**Default:** `false`                            |
| headers                             | Array\<[MonitorRequestHeader](#monitorrequestheader)> | The headers.                                                                         |
| sslCertificateExpirationDaysToAlert | number                                                | Number of days within SSL certificate expires.                                       |
