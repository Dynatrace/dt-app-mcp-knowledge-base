## Test your UI

Testing your app's UI components helps you recognize errors early on. The [Strato Design System](https://developer.dynatrace.com/design.md) offers features to help you write unit tests for your React app with Vitest.

### Install dependencies

Here are the dependencies you need to install:

- `vitest`: Vitest is a Vite-native JavaScript testing framework. It handles TypeScript natively, so no separate transformer is needed.
- `jsdom`: A browser-like environment for running UI tests in Node.
- `@vitejs/plugin-react`: The Vite React plugin, required for JSX support in Vitest. Install major version 5. Version 6 has a peer dependency on Babel 8, which conflicts with the Babel 7 used by the App Toolkit.
- `@dynatrace/strato-components-testing`: The Strato testing package that provides the Vitest preset, setup file, custom `render` function, and testing helpers. Requires `@dynatrace/strato-components` 3.16.0 or later.
- `@testing-library/jest-dom`: Provides a set of custom matchers (for example, `toBeInTheDocument`) that extend Vitest's `expect`.
- `@testing-library/react`: A required dependency for testing Strato components.
- `@testing-library/user-event`: A required dependency for testing Strato components.

To install the dependencies, run the following command:

```bash
npm i --save-dev --save-exact vitest jsdom @vitejs/plugin-react@5 @dynatrace/strato-components-testing @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

> **Note**
>
> If `@dynatrace/strato-components` in your app is older than 3.16.0, update it first:
>
> ```bash
> npm i @dynatrace/strato-components@latest
> ```
>
> You don't need the `--force` or `--legacy-peer-deps` flags. If the install fails with an `ERESOLVE` error mentioning `@babel/core`, check that you installed `@vitejs/plugin-react@5`.

### Create a configuration file

Create a `vitest.config.mts` file in the root directory of your app. Since Dynatrace apps are CommonJS packages by default, use the `.mts` extension to avoid Vite warnings about ESM syntax in `.ts` configuration files. Dynatrace apps are built with the Strato Design System, which provides `stratoVitestPreset` to supply the necessary defaults. Merge it with your own configuration as follows:

```ts title="vitest.config.mts" skip-testing
import { defineConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { stratoVitestPreset } from '@dynatrace/strato-components-testing/vitest/preset';

export default mergeConfig(
  stratoVitestPreset,
  defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['@dynatrace/strato-components-testing/vitest/setup', './vitest.setup.ts'],
    },
  }),
);
```

Here's a description of the key settings:

- `globals: true`—exposes `describe`, `it`, `expect`, `vi`, and similar functions as globals so test files don't need to import them explicitly.
- `environment`—the test environment. Use `jsdom` to get a browser-like environment for testing React components.
- `setupFiles`—modules to run before each test file. The Strato setup file installs the browser API mocks required by Strato components. Your own `vitest.setup.ts` is the right place to add project-level setup.
- `stratoVitestPreset`—a set of default configurations required for Strato components, including module name mappers and transforms.

#### Additional setup files

Depending on the Dynatrace SDK you use, you may need to add more entries to `setupFiles`:

| Package                                   | What it mocks                                                                 | When you need it                                                   |
| ----------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `@dynatrace-sdk/app-environment/testing`  | `globalThis.dtRuntime.appEnvironment` — app ID, environment URL, user details | Any component that calls `getAppId()`, `getEnvironmentUrl()`, etc. |
| `@dynatrace-sdk/navigation/testing`       | The navigation SDK                                                            | Components or hooks that navigate between app pages                |
| `@dynatrace-sdk/user-preferences/testing` | User preferences, including language                                          | Components that read locale or user settings                       |
| `@dynatrace-sdk/error-handlers/testing`   | Error handler registration                                                    | Components that register or trigger error handlers                 |

Add the packages your app depends on to `setupFiles` in your `vitest.config.mts`:

```ts title="vitest.config.mts" skip-testing
test: {
  setupFiles: [
    '@dynatrace/strato-components-testing/vitest/setup',
    '@dynatrace-sdk/app-environment/testing',
    '@dynatrace-sdk/navigation/testing',
    '@dynatrace-sdk/user-preferences/testing',
    '@dynatrace-sdk/error-handlers/testing',
    './vitest.setup.ts',
  ],
},
```

> **Note**
>
> Vitest support in these packages requires the following minimum versions:
>
> | Package                           | Minimum version |
> | --------------------------------- | --------------- |
> | `@dynatrace-sdk/app-environment`  | 1.1.5           |
> | `@dynatrace-sdk/user-preferences` | 1.1.5           |
> | `@dynatrace-sdk/navigation`       | 2.3.1           |
> | `@dynatrace-sdk/error-handlers`   | 1.3.2           |
>
> Older versions only initialize when `typeof expect === "undefined"`, a condition Jest meets (it injects `expect` after `setupFiles` run) but Vitest does not. The versions above add a `process.env.VITEST` check so they initialize correctly in both runners.

Once listed in `setupFiles`, the mocks are active for the entire test file. If you need to customize a mock's return values for a specific test — for example, to simulate a different environment URL — call the mock function directly inside your test:

```ts skip-testing
import { mockAppEnvironment, clearAppEnvironmentMocks } from '@dynatrace-sdk/app-environment/testing';

afterEach(() => {
  clearAppEnvironmentMocks();
});

it('shows the correct environment URL', () => {
  mockAppEnvironment({ getEnvironmentUrl: () => 'https://my-env.example.com' });
  // ... rest of test
});
```

### Create a setup file

Create `vitest.setup.ts` in the root of your project to initialize testing utilities that must run before every test file:

```ts title="vitest.setup.ts" skip-testing
import '@testing-library/jest-dom/vitest';
import { registerCssExternalizationHook } from '@dynatrace/strato-components-testing/vitest';

await registerCssExternalizationHook();

// Required for React 18 act() to work correctly in Vitest.
(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;
```

Importing `@testing-library/jest-dom/vitest` registers the custom matchers (like `toBeInTheDocument`) with Vitest's `expect`, so you don't need to import them in every test file.

`registerCssExternalizationHook` is required for UI tests. Strato components import `.css` files, which Node.js can't load. Without the hook, your tests fail with the following error:

```text
TypeError: Unknown file extension ".css"
```

> **Note**
>
> If you're using `@testing-library/dom` `waitFor` with `vi.useFakeTimers()`, add the line below to `vitest.setup.ts`. Without it, `waitFor` cannot detect Vitest fake timers and will hang until the test timeout.
>
> ```ts title="vitest.setup.ts" skip-testing
> // Make @testing-library/dom's waitFor detect Vitest fake timers.
> (globalThis as Record<string, unknown>).jest = vi;
> ```

### Configure TypeScript and ESLint

Add a `ui/vitest.d.ts` file for TypeScript and ESLint to resolve the Vitest globals and the `jest-dom` matchers in your test files:

```ts title="ui/vitest.d.ts" skip-testing
/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
```

The root-level `vitest.config.mts` and `vitest.setup.ts` files aren't part of the app's `tsconfig.json`, so the type-aware ESLint rules can't parse them and the `npm run lint` command fails. Add them to the ignore list in `eslint.config.mjs`, next to the existing Jest entry:

```ts title="eslint.config.mjs" skip-testing
globalIgnores([
  // ...
  "**/jest.*config.js",
  "**/vitest.*config.*ts",
  "**/vitest.setup.ts",
]),
```

### Your first UI unit test

Create a file `First.test.tsx` in your `ui` directory:

```tsx title="ui/First.test.tsx" skip-testing
import React from 'react';
import { render } from '@dynatrace/strato-components-testing/vitest';
import { screen } from '@testing-library/react';
import { Heading } from '@dynatrace/strato-components/typography';

const TestHeading = ({ textValue }: { textValue: string }) => <Heading level={1}>{textValue}</Heading>;

describe('Heading component', () => {
  it('should render the Unit test on screen', () => {
    render(<TestHeading textValue="Unit test" />);
    expect(screen.getByText('Unit test')).toBeInTheDocument();
  });
});
```

Because `globals: true` is set in the config, `describe`, `it`, and `expect` are available without any imports. The `render` function comes from `@dynatrace/strato-components-testing/vitest`, which wraps `@testing-library/react` with Strato-specific providers.

### Run UI tests

Add an npm script to `package.json`:

```json
{
  "scripts": {
    "test:unit": "vitest run"
  }
}
```

Run the tests with:

```bash
npm run test:unit
```

You'll see output similar to the following:

```text
 RUN  v5.x.x /path/to/your/app

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  12:00:00
   Duration  1.23s
```

To run only a subset of tests, pass a file pattern directly to `vitest run`:

```bash
npx vitest run MyComponent
```

> **Tip**
>
> To run tests in watch mode during development, use `vitest` without the `run` subcommand:
>
> ```bash
> npx vitest
> ```
>
> Vitest will re-run affected tests automatically when files change.

#### Strato Design System setup functions

`@dynatrace/strato-components-testing/vitest/setup` (listed in `setupFiles`) installs the browser API mocks that Strato components require. You do not need to call any additional setup or teardown functions manually—the preset handles this automatically.
