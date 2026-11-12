## Set up single sign-on

Before running the end-to-end tests, you need to log in using your Dynatrace user credentials. Add the following content in the `e2e/tests/auth/auth-setup.ts` file.

1. `e2e/src/utils/setup.ts`: Create a new file called setup.ts within the e2e/src/utils directory. This file will contain the utilities necessary for the login process. Then, paste the following content into it:

   ```ts title="e2e/src/utils/setup.ts" testable
   import { config } from 'dotenv';

   // reads env vars from .env file
   config();

   interface Credentials {
     user: string;
     password: string;
   }

   // returns user name and password from env vars
   export function getLoginCredentials(): Credentials {
     if (!!process.env.PLATFORM_INTEGRATION_TEST_USER && !!process.env.PLATFORM_INTEGRATION_TEST_PASSWORD) {
       return {
         user: process.env.PLATFORM_INTEGRATION_TEST_USER,
         password: process.env.PLATFORM_INTEGRATION_TEST_PASSWORD,
       };
     }
     throw Error(
       `Please create an .env file and set the variable PLATFORM_INTEGRATION_TEST_USER and PLATFORM_INTEGRATION_TEST_PASSWORD`,
     );
   }

   // returns url on which you want to execute the test
   export const baseUrl = process.env.ENVIRONMENT_URL;

   // returns the app id
   export const appId = process.env.APP_ID_POSTFIX
     ? `my.dynatrace.notebooks.${process.env.APP_ID_POSTFIX.toLowerCase()}`
     : 'local-dev-server';

   // extends app url with intent or local-dev-server if needed
   export const generateSearch = (intent = '') => {
     const encodedIntent = intent ? `#${encodeURIComponent(intent)}` : '';
     const extraSearch = process.env.APP_ID_POSTFIX
       ? encodedIntent
       : `?locationAppIds=${encodeURIComponent('http://localhost:3000/ui,local-dev-server')}${encodedIntent}`;

     return extraSearch;
   };

   // returns the app path
   export const appPathInShell = `/ui/apps/${appId}/${generateSearch()}`;

   export const pageUrl = `${baseUrl}${appPathInShell}`;
   ```

2. `e2e/tests/auth/auth-setup.ts`: Create a new file `e2e/tests/auth/auth-setup.ts`, which will contain one test that gets the login credentials from `e2e/src/utils/setup.ts` and log you in. To achieve this, paste the following content into that file:

   ```ts title="e2e/tests/auth/auth-setup.ts" skip-testing
   import { test as setup, expect } from '@playwright/test';
   import { STORAGE_STATE_PATH } from '../../../playwright.config';
   import { getLoginCredentials, pageUrl } from '../../src/utils/setup';

   setup('do login', async ({ page }) => {
     // go to app url
     await page.goto(pageUrl);
     // get user credentials
     const { user, password } = getLoginCredentials();

     /// login
     await page.getByLabel('Email').fill(user);
     await page.getByRole('button', { name: 'Next' }).click();
     await page.getByRole('textbox', { name: 'Password' }).fill(password);
     await page.getByRole('button', { name: 'Sign in' }).click();

     // wait until platform is loaded
     await expect(page.getByTestId('app-iframe')).toBeAttached({ timeout: 10_000 });

     // Persist the logged in state
     await page.context().storageState({ path: STORAGE_STATE_PATH });
   });
   ```

Let's understand the code.

- `e2e/src/utils/setup.ts`:

  - The `config` import is from the `dotenv` package, which loads environment variables from a `.env` file.

  - The `Credentials` interface defines the structure of login credentials, with `user` and `password` properties.

  - The `getLoginCredentials()` function retrieves the login credentials from environment variables (`PLATFORM_INTEGRATION_TEST_USER` and `PLATFORM_INTEGRATION_TEST_PASSWORD`). If you don't set the variables, the function will throw an error, requesting you to set the necessary environment variables.

  - The code snippet stores the environment variables `ENVIRONMENT_URL` and `APP_ID` in `baseUrl` and `appId`, respectively, and constructs `pageUrl` by combining `environmentUrl` and `appId` using template literals.

- `e2e/tests/auth/auth-setup.ts`:

  - The `test as setup` import from `@playwright/test` means that this test is only used for setup purposes and won't test an actual feature. The `STORAGE_STATE` is a path specified in the `playwright.config.ts` file that defines where Playwright should store the authentication state. The authentication setup uses the `getLoginCredentials, pageUrl` import from `../app/setup` to access the login credentials and URL that points directly to the app.

  - The `await page.context().storageState({ path: STORAGE_STATE });` defines where Playwright should store the login state. Playwright will use this login state for all other tests to avoid having to authenticate for each test.
