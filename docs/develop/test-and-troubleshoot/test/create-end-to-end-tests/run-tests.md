## Run tests

To run your tests, you'll need to do the following:

- Set the environment.
- Add `npm` scripts.
- Ignore Playwright output folders to avoid app reloads.
- Run the tests locally or in your CI.

Here's how:

### Set environment

Ensure that you configure environment variables before running the tests. The setup supports the `.env` file if you run tests locally. Create a `.env` file in the root directory and add the following content:

```text title=".env"
ENVIRONMENT_URL=<Your-Environment-Url>
APP_ID=<Your-App-Id>
PLATFORM_INTEGRATION_TEST_USER=<Your-Test-User-Email>
PLATFORM_INTEGRATION_TEST_PASSWORD=<Your-Test-User-Password>
```

> **Note**
>
> Replace the following placeholder:
>
> - `<Your-Environment-Url>` with the URL of your Dynatrace environment that hosts your app. Ensure it doesn't end with a `/`, which would cause failures while running the tests.
> - `<Your-App-Id>` with your app's ID.
> - `<Your-Test-User-Email>` with the email address of your test user.
> - `<Your-Test-User-Password>` with the password of your test user.

### Add `npm` scripts

To run the tests, add the following npm scripts in your `package.json` file:

```json title="package.json"
{
  "scripts": {
    "test:e2e": "playwright test --project=chromium",
    "test:e2e-ci": "playwright test"
  }
}
```

### Ignore Playwright output folders to avoid app reloads

Playwright produces output files when it executes tests. The app's hot reloading detects these files by default and triggers page reloads.
Configure the hot reloading mechanism to ignore Playwright output files to avoid such reloads.

```json title="app.config.json"
{
  ...
  "dev": {
    "fileWatcher": {
      "ignore": ["test-results/**", "playwright/**", "playwright-report/**"]
    }
  }
}
```

### Run tests locally

To run the tests locally, execute the following command in the terminal:

```bash
npm run test:e2e
```

### Run tests in CI

To run your tests in CI, follow these steps:

- **Install the app**: Install the new version of your app on the desired environment. The main thing to remember is that you don't override an existing app. You can achieve this by using a unique app ID in `app.config.json`.

- **Run the tests**: Since you have configured headless mode in the config, just run the following command in your CI: `npm run test:e2e-ci`. Ensure that you've configured the required environment variables.

- **Uninstall the app**: You should always uninstall the app, regardless of whether tests fail or pass.
