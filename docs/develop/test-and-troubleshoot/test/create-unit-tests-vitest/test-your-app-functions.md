## Test your app functions

> Vitest support for app functions is limited. App functions run in the Dynatrace JavaScript runtime, which doesn't provide all Node.js APIs. Don't run function tests in Vitest's `node` environment, because they can pass even though your function uses Node.js APIs that aren't available at runtime. The App Toolkit doesn't generate Vitest configuration or test files for functions. To test app functions with the generated setup, use [Jest](https://developer.dynatrace.com/develop/test-and-troubleshoot/test/create-unit-tests-jest.md#test-your-app-functions).

If you still want to unit test pure logic that you've extracted from your functions, keep that logic free of Node.js-specific imports and APIs, and test it in a separate Vitest project. The following sections show the mocking patterns that work in any Vitest test.

### Mock your fetch functions

If your app functions use `fetch` to call third-party data sources, override it in your tests using `vi.fn()`:

```ts skip-testing
const fetchMock = vi.fn();
globalThis.fetch = fetchMock;
```

Use `mockImplementationOnce` to control what a single call returns:

```ts skip-testing
fetchMock.mockImplementationOnce(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ id: 3, firstname: 'John', lastname: 'Doe' }),
  }),
);
```

### Mock modules

Use `vi.mock()` where you would previously use `jest.mock()`, and `vi.fn()` / `vi.spyOn()` in place of their `jest.*` equivalents:

```ts skip-testing
// Mock an entire module
vi.mock('./myModule', () => ({
  myFunction: vi.fn().mockReturnValue('mocked'),
}));

// Partial mock — keep real exports, override one
vi.mock('./myModule', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./myModule')>();
  return { ...actual, myFunction: vi.fn() };
});

// Spy on a specific method
vi.spyOn(console, 'error').mockImplementation(() => {});
```

`vi.mock()` calls are automatically hoisted to the top of the file by Vitest, as they are by Jest.

> **Tip**
>
> If you have separate configurations for UI tests and non-UI logic, you can use Vitest's [projects](https://vitest.dev/config/#projects) option to define multiple test projects within a single `vitest.config.mts`.
