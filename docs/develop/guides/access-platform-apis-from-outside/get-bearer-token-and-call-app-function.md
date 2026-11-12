## Get Bearer token and call app function

As described above, you need to pass a Bearer token to authenticate API calls. You need to retrieve the Bearer token from the `token` endpoint of the SSO API.

### Example

The following example shows how you can call the `calculate` function from your `my.custom.app` app via curl from outside the platform.
First, you have to get a Bearer token from the SSO. You have to specify your client id, the corresponding client secret, and the scope for which you want to get a Bearer token.

```bash
curl --request POST 'https://sso.dynatrace.com/sso/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id={your-client-id}' \
--data-urlencode 'client_secret={your-client-secret}' \
--data-urlencode 'scope=app-engine:apps:run storage:buckets:read storage:logs:read'
```

> **Note**
>
> In this example `app-engine:apps:run` and `storage:logs:read` are passed as scopes. `app-engine:apps:run` is always needed to access any function of your custom app.

This request returns the following response object, including the Bearer token you must pass to the actual API call.

```json
{
  "scope": "app-engine:apps:run storage:buckets:read storage:logs:read",
  "token_type": "Bearer",
  "expires_in": 300,
  "access_token": "{your-bearer-token}",
  "resource": "urn:dtaccount:{dynatrace-account-urn}"
}
```

After getting a Bearer token, you can now call the API endpoint by passing this exact Bearer token via an authorization header:

```bash
curl --request GET '$ENVIRONMENT_URL/platform/app-engine/app-functions/v1/apps/my.custom.app/api/calculate' \
--header 'Authorization: Bearer {your-bearer-token}'
```
