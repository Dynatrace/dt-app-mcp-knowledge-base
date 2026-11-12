### Create app function

Run the following command in your project directory to create an app function:

```bash
npx dt-app function create third-party-api
```

It will create a `api/third-party-api.function.ts` file. Replace the default content of the file with the following:

```ts title="api/third-party-api.function.ts"
export default async () => {
  return (await fetch('https://dummyjson.com/users/1').then((response) => response.json())) as object;
};
```

This app function makes a call to an external API `https://dummyjson.com/users/1` and returns the `json` response.

Ensure the external host is declared in the allowlist (see this [guide](https://developer.dynatrace.com/develop/guides/app-functions/allow-outbound-connections.md) for more details).
