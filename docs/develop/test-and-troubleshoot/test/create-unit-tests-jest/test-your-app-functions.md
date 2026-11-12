## Test your app functions

When you run the `generate function` command, the App Toolkit automatically creates a test file. This happens for every function you generate. You also get the `jest.config.js` file created in your app's `api` directory.

Your unit tests have access to all available APIs in the [Dynatrace JavaScript Runtime](contents/docs/develop/reference/javascript-runtime.md).

### Mock your fetch functions

If you're using `fetch` to call third party data sources from within your app functions, you need to overwrite its implementation in your unit tests.
The generated test file already contains the following code snippet, which overwrites the global `fetch` function with the mocked `fetchMock` function:

```ts skip-testing
const fetchMock = jest.fn();
globalThis.fetch = fetchMock;
```

By using the `mockImplementation` or `mockImplementationOnce` function, you can mock the behavior of your actual fetch call.

```ts skip-testing
fetchMock.mockImplementationOnce(() => {
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ id: 3, firstname: 'John', lastname: 'Doe' }),
  });
});
```

> **Tip**
>
> If you have UI and app functions tests, you can use the `projects` property to combine UI and app functions configurations. See the [projects property in Jest's documentation](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig).
