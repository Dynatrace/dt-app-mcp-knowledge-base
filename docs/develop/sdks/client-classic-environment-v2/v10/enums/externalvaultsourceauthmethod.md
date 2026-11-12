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
