## Test your UI

Testing your app's UI components helps you recognize errors early on. The Strato Design System offers features to help you write unit tests for your React app.

### Install dependencies

Here are the dependencies you need to install:

- `jest`: Jest is a JavaScript testing framework.
- `ts-node`: Needed to use TypeScript for configuration, such as `jest.config.ts`.
- `ts-jest`: A Jest transformer that allows you to test your TypeScript code. You'll need this as you'll write Dynatrace Apps in Typescript.
- `@types/jest`: Typescript types for Jest.
- `jest-environment-jsdom`: A Jest environment where the UI tests will run.
- `@testing-library/jest-dom`: Provides a set of custom matchers that you can use to extend Jest. Think of a group of methods that already have most of the things you need to test UI components.
- `@testing-library/react`: A required dependency for testing Strato components.
- `@testing-library/user-event`: A required dependency for testing Strato components.

To install the dependencies, run the folowing command:

```bash
npm i --save-dev jest@^29.0.0 ts-node ts-jest@^29.0.0 @types/jest@^29.0.0 jest-environment-jsdom@^29.0.0 @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

> **Note**
>
> If you're using **React 17** or lower, use the following command to install the required dependencies:
>
> ```bash
> npm i --save-dev jest@^29.0.0 ts-node ts-jest@^29.0.0 @types/jest@^29.0.0 jest-environment-jsdom@^29.0.0 @testing-library/jest-dom @testing-library/react@^12.1.5 @testing-library/user-event
> ```

After installing the dependencies, ensure that the versions for `jest` and `jest-environment-jsdom` are the same.

### Add types

To get the type information in your Jest tests, you need to add Jest types in the `tsconfig.json` in the `types` array as follows:

```json title="tsconfig.json"
{

  "compilerOptions": {
    ...
    "types": [
      ...,
      // highlight-next-line
      "@types/jest", "@testing-library/jest-dom"
    ],
  },
}

```

### Create a configuration file

Dynatrace Apps are written in TypeScript, which Jest can't understand by default. Moreover, Dynatrace Apps are built with the Strato Design System, which requires custom configurations to be testable. To run unit tests using Jest, you need to create a `jest.config.js` file in the root directory of your app with the following code:

```ts title="jest.config.js" skip-testing
const { stratoPreset } = require('@dynatrace/strato-components-testing/jest/preset');

/** @type {import('jest').Config} */
module.exports = {
  ...stratoPreset,
  preset: 'ts-jest',
  displayName: 'ui',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/ui'],
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', { isolatedModules: true }],
  },
  setupFilesAfterEnv: [
    // Strato jest mocks
    '@dynatrace/strato-components-testing/jest/setup',
  ],
  moduleNameMapper: {
    ...stratoPreset.moduleNameMapper,
    // your other moduleNameMappers
  },
};
```

Here's a description of the settings in the configuration file:

- displayName—the `displayName` that appears in UI when running the test.
- testEnvironment—the environment you use for testing. In this case, you need `jsdom` to have a browser-like environment for testing.
- roots—root of the project from where Jest can start looking for tests.
- setupFiles—modules you want to run before running each test file. They're executed before a test framework like `@testing-library` is loaded. In this case, you're using a setup file from the Strato Design System required to test code written using Strato components.
- transform—specifies how Jest should transform the files before running them. In this case, `.ts`, `.js`, `.tsx`, and `.jsx` are transformed using `ts-jest`.
- setupFilesAfterEnv—add `<Strato_Testing_Package_Name>/jest/setup` so the Jest mocks provided by Strato are used.
- stratoPreset—a set of default configurations required if you're using Strato components. It also uses `moduleNameMappers`, which maps dependencies correctly for Jest.

#### Additional setup files

Depending on the features you use, you may need additional setup files. Below are the SDKs with their setup file imports, which you may need to add to the `setupFiles` array in your `jest.config.js` file:

- `@dynatrace-sdk/navigation/testing`
- `@dynatrace-sdk/user-preferences/testing`
- `@dynatrace-sdk/app-environment/testing`

### Handling style imports

By default, Jest runs your code as JavaScript. When you import styles into your React component, Jest tries to interpret them as JavaScript and fail. To fix this issue, you can tell Jest to mock the styles in `jest.config.js`, as follows:

```ts title="jest.config.js" skip-testing
{
  ...
  transform: {
    '.(css|scss|sass|less)$': '<rootDir>/style-mock.ts'
  },
}
```

Add the following content in `style-mock.ts`:

```ts title="style-mock.ts" skip-testing
module.exports = {
  process() {
    return { code: 'module.exports = {};' };
  },
};
```

### Your first UI unit test

To write your first UI unit test, create a file `First.test.tsx` in the `ui` directory with the following content:

```tsx title="ui/First.test.tsx" skip-testing
// imports
import React from 'react';
import { render } from '@dynatrace/strato-components-testing/jest';
import { screen } from '@testing-library/react';

// component
import { Heading } from '@dynatrace/strato-components/typography';
const TestHeading = ({ textValue }) => {
  return <Heading level={1}>{textValue}</Heading>;
};

// test
describe('Heading component', () => {
  test('should render the Unit test on screen', () => {
    render(<TestHeading textValue="Unit test" />);
    expect(screen.getByText('Unit test')).toBeInTheDocument();
  });
});
```

Let's understand the above test.

First, you have import statements. Besides importing React, you have the `render` and `screen` methods from the Strato Design System, which allow you to render a component, and then, create a test to see what's on the screen. You also have an import from `@testing-library` that extends the `expect` method of `jest`, to allow you to use functions like `toBeInTheDocument`.
Then, you have a component named `Heading` that you're testing in the following test. In real applications, this wouldn't be part of the test code. However, for simplicity in this guide, it's added to the test file.

You have a test suite using the [describe](https://jestjs.io/docs/api#describename-fn) and [test](https://jestjs.io/docs/api#testname-fn-timeout) functions. These functions are part of Jest. In the test, you're using the `Heading` component from the Strato Design System using `Unit test` as the heading value and expecting whether the **Unit test** value is printed on the screen.

> **Note**
>
> To use functions like `toBeInTheDocument`, you need to import the `@testing-library/jest-dom` package in all your tests. However, you can import it for all tests by default with the `setupFilesAfterEnv`, as follows:
>
> ```ts title="jest.config.js" skip-testing
> {
>   ...
>   setupFilesAfterEnv: [`<rootDir>/ui/jest-setup.ts`]
> }
> ```
>
> And then import the `@testing-library/jest-dom` in `jest-setup.ts` file as following:
>
> ```ts title="jest-setup.ts" skip-testing
> import '@testing-library/jest-dom';
> ```
>
> You don't need to import this in any of your tests.

### Running UI tests

To run the tests, first, you need to create an npm script in `package.json` as follows:

```json
{
  "scripts": {
    "test:ui": "jest"
  }
}
```

Now you can run the following command to run the tests:

```bash
npm run test:ui
```

And you'll be greeted by the following messages:

```text
> jest

 PASS   ui  ui/First.test.tsx
  Heading component
    √ should render the Unit test on screen (23 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.311 s
Ran all test suites.
```

> **Tip**
>
> If you're using `styled-components`, you might get an error such as `ResizeObserver not found`. To fix it, mock `ResizeObserver` in `jest-setup.ts` as follows:
>
> ```ts skip-testing
> import '@testing-library/jest-dom';
>
> // highlight-start
> global.ResizeObserver = jest.fn().mockImplementation(() => ({
>   observe: jest.fn(),
>   unobserve: jest.fn(),
>   disconnect: jest.fn(),
> }));
> // highlight-end
> ```

#### Strato Design System `setup` and `clear` functions

The Strato Design System provides two helper functions, `setup` and `clear`, for writing tests. To initialize and clear a set of mocks, call these helper functions in a file which is also set in `setupFilesAfterEnv` within your Jest configuration file, as follows:

```ts title="jest.config.js" skip-testing
/** @type {import('jest').Config} */
module.exports = {
  ...,
  setupFilesAfterEnv: ['@dynatrace/strato-components-testing/jest/setup'],
  ...
};
```
