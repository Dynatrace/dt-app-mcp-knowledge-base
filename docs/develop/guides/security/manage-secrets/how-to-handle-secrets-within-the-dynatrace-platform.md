## How to handle secrets within the Dynatrace platform

Whenever Dynatrace Apps or functions need to access services outside the Dynatrace platform, secrets are likely required to authenticate these service interactions. Many services require API tokens, OAuth clients, or secrets within webhook URLs to authenticate their users.

Your app is never to contain these secrets, and there are several reasons for that:

- People with access to the app bundle or a function, for example, in Notebooks, can see the secret in clear text and misuse them.
- Your app bundles that have secrets can't be easily updated. You need to update the whole app to exchange a secret.

To help users keep secrets secure and easy to handle, Dynatrace offers the Credential Vault service and a corresponding [SDK](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2.md#credentialvaultclient), which stores secrets, credentials, certificates, etc.

With the help of the SDK, you can easily retrieve your credentials in your app. There are four types of credentials, each with a corresponding interface in the SDK:

| Secret type           | Interface                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Certificate           | [CredentialsDetailsCertificateResponseElement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#credentialsdetailscertificateresponseelement)           |
| Public certificate    | [CredentialsDetailsCertificateResponseElement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#credentialsdetailscertificateresponseelement)           |
| Token                 | [CredentialsDetailsTokenResponseElement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#credentialsdetailstokenresponseelement)                       |
| Username and password | [CredentialsDetailsUsernamePasswordResponseElement](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/types.md#credentialsdetailsusernamepasswordresponseelement) |

When retrieving credentials in your app, you need to use the corresponding interface according to your secret type, like this:

```ts testable
import {
  credentialVaultClient,
  CredentialsDetailsTokenResponseElement,
} from '@dynatrace-sdk/client-classic-environment-v2';

// highlight-next-line
const tokenCredentials: CredentialsDetailsTokenResponseElement =
  await credentialVaultClient.getCredentialsDetails({
    id: 'CREDENTIALS_VAULT-xxxxxxxxxxxxxxxx',
  });

if (tokenCredentials.token) {
  // use token
}
```

This operation requires the scope `environment-api:credentials:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).

> **Tip**
>
> Ensure to use the `AppEngine` scope for your credentials.
