## Create a new app function

The App Toolkit helps you to create a new app function easily. It provides you with a command that creates a function file with an example function.

Execute this command in your project directory:

```bash
npx dt-app function create <function-name>
```

The App Toolkit creates a file with the function's name in the `api` directory within your root project directory.
Every created TypeScript file in the api directory is exposed as an app function via the relative URL `/api/filename`.

The created function file already contains the function signature together with a very basic example:

```ts title="api/hello-world.function.ts" untestable
export default async function (payload: unknown) {
  return 'Hello world';
}
```
