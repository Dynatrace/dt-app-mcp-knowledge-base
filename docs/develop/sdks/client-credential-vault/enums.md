## Enums

### ~~CredentialAccessDataType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Application` | `Unknown` | `User`

### ~~CredentialsResponseElementScope~~

> ⚠️ **Deprecated**
> Use literal values.

The scope of the credentials set.

#### Enum keys

`AppEngine` | `Extension` | `ExtensionAuthentication` | `Synthetic`

### ~~CredentialsResponseElementScopesItem~~

> ⚠️ **Deprecated**
> Use literal values.

The set of scopes of the credentials set.

#### Enum keys

`AppEngine` | `Extension` | `ExtensionAuthentication` | `Synthetic`

### ~~CredentialsResponseElementType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the credentials set.

#### Enum keys

`AwsMonitoringKeyBased` | `AwsMonitoringRoleBased` | `Certificate` | `PublicCertificate` | `Snmpv3` | `Token` | `Unknown` | `UsernamePassword`

### ~~CredentialsScope~~

> ⚠️ **Deprecated**
> Use literal values.

The scope of the credentials set.

#### Enum keys

`AppEngine` | `Extension` | `ExtensionAuthentication` | `Synthetic`

### ~~CredentialsScopesItem~~

> ⚠️ **Deprecated**
> Use literal values.

The set of scopes of the credentials set.

Limitations: `CredentialsScope.APP_ENGINE` is only available on the new Dynatrace SaaS platform - it's not available on managed or non-Grail SaaS environments.

#### Enum keys

`AppEngine` | `Extension` | `ExtensionAuthentication` | `Synthetic`

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

### ~~ErrorResponseDetailsType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `constraintViolation` -> ConstraintViolationDetails

#### Enum keys

`ConstraintViolation`

### ~~ExternalVaultConfigSourceAuthMethod~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `HASHICORP_VAULT_APPROLE` -> HashicorpApproleConfig
- `HASHICORP_VAULT_CERTIFICATE` -> HashicorpCertificateConfig
- `AZURE_KEY_VAULT_CLIENT_SECRET` -> AzureClientSecretConfig
- `CYBERARK_VAULT_USERNAME_PASSWORD` -> CyberArkUsernamePasswordConfig
- `CYBERARK_VAULT_ALLOWED_LOCATION` -> CyberArkAllowedLocationConfig

#### Enum keys

`AzureKeyVaultClientSecret` | `CyberarkVaultAllowedLocation` | `CyberarkVaultUsernamePassword` | `HashicorpVaultApprole` | `HashicorpVaultCertificate`

### ~~ExternalVaultConfigType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`AzureCertificateModel` | `AzureClientSecretModel` | `CyberarkVaultAllowedLocationModel` | `CyberarkVaultUsernamePasswordModel` | `HashicorpApproleModel` | `HashicorpCertificateModel`

### ~~ExternalVaultSourceAuthMethod~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `HASHICORP_VAULT_APPROLE` -> HashicorpApprole
- `HASHICORP_VAULT_CERTIFICATE` -> HashicorpCertificate
- `AZURE_KEY_VAULT_CLIENT_SECRET` -> AzureClientSecret
- `CYBERARK_VAULT_USERNAME_PASSWORD` -> CyberArkUsernamePassword
- `CYBERARK_VAULT_ALLOWED_LOCATION` -> CyberArkAllowedLocationDto

#### Enum keys

`AzureKeyVaultClientSecret` | `CyberarkVaultAllowedLocation` | `CyberarkVaultUsernamePassword` | `HashicorpVaultApprole` | `HashicorpVaultCertificate`

### ~~ListCredentialVaultEntriesQueryType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`AwsMonitoringKeyBased` | `AwsMonitoringRoleBased` | `Certificate` | `Snmpv3` | `Token` | `UsernamePassword`
