### ~~CredentialsType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `CERTIFICATE` -> CertificateCredentials
- `PUBLIC_CERTIFICATE` -> PublicCertificateCredentials
- `USERNAME_PASSWORD` -> UserPasswordCredentials
- `TOKEN` -> TokenCredentials
- `SNMPV3` -> SNMPV3Credentials
- `AWS_MONITORING_KEY_BASED` -> AWSKeyBasedCredentialsDto
- `AWS_MONITORING_ROLE_BASED` -> AWSRoleBasedCredentials

#### Enum keys

`AwsMonitoringKeyBased` | `AwsMonitoringRoleBased` | `Certificate` | `PublicCertificate` | `Snmpv3` | `Token` | `UsernamePassword`
