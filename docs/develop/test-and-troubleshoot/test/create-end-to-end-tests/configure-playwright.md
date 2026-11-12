## Configure Playwright

Ensure that you configure Playwright correctly so it can execute your end-to-end tests. Open the `playwright.config.ts` file in the root folder of your project and change the following content:

1. `STORAGE_STATE_PATH`: On the top of the file, add a new variable called `STORAGE_STATE_PATH`, which contains a path to a JSON file.

   ```ts title="playwright.config.ts" skip-testing
   // add those lines
   import * as path from "path";
   export const STORAGE_STATE_PATH = path.join(__dirname, 'playwright/.auth/credentials.json');
   // existing config
   export default defineConfig({...
   ```

2. `projects`: Playwright projects are logical groups of tests with the same configuration. For example, you can add a project for each browser. For the standard use case, specify a project for `chromium` and `firefox`.

   ```ts title="playwright.config.ts" skip-testing
     /* Configure projects for major browsers */
     projects: [
       { name: 'setup', testMatch: /auth-setup\.ts/ },
       {
         name: 'chromium',
         use: {
           ...devices['Desktop Chrome'],
           storageState: STORAGE_STATE_PATH,
         },
         dependencies: ['setup'],
       },

       {
         name: 'firefox',
         use: {
           ...devices['Desktop Firefox'],
           storageState: STORAGE_STATE_PATH,
         },
         dependencies: ['setup'],
       },
     ],
   ```

3. `use`: The Playwright use property defines global options for all tests. Here is the basic configuration that you can use.

   ```ts title="playwright.config.ts" skip-testing
   use: {
       video: {
         mode: process.env.CI ? 'on': 'on-first-retry',
         size: { width: 800, height: 450 },
       },
       trace: {
         mode: process.env.CI ? 'retain-on-failure': 'on',
       },
       screenshot: {
         mode: process.env.CI ? 'on': 'only-on-failure',
         fullPage: false,
       },
       headless: !!process.env.CI,
       viewport: { width: 1920, height: 1080 },
       permissions: ["local-network-access"],
     },
   ```

4. `reporter`: Playwright comes with a few built-in reporters for different needs, such as an HTML reporter

   ```ts title="playwright.config.ts" skip-testing
   reporter: process.env.CI
   ? [
       ['line'],
       ['junit', { outputFile: 'results.xml'}],
       ['html', { open: 'never'}],
     ]
   : [['list'], ['html']],
   ```

Let's understand the configuration.

- `video`: This property specifies if Playwright records a video while it executes the tests. This video is available in the HTML report. The properties defined will result in the following behavior:
  - CI: Playwright always records a video.
  - Local: Playwright records a video on the first test retry.
- `trace`: This property specifies if and when Playwright records a trace when it executes the tests. The recorded trace is accessible in the HTML report. The properties defined will result in the following behavior:
  - CI: The trace only persists if the test fails. Otherwise, Playwright will discard it.
  - Local: The trace is always available.
- `screenshot`: This property specifies if and when Playwright takes a screenshot at the end of the test or after a test fails. The screenshot is accessible in the HTML report. The properties defined will result in the following behavior:
  - CI: The screenshot is always available.
  - Local: The screenshot is only available when a test fails.
- `headless`: This property specifies if the browser should run in headless or headed mode. The properties defined will result in the following behavior:
  - CI: Playwright starts the browser in headless mode.
  - Local: Playwright starts the browser in headed mode.
- `reporter`: This property specifies which reporters Playwright should use. The properties defined will result in the following behavior:
  - CI: Playwright will use the following reporters on the CI: [line](https://playwright.dev/docs/test-reporters#line-reporter), [junit](https://playwright.dev/docs/test-reporters#junit-reporter), [html](https://playwright.dev/docs/test-reporters#html-reporter)
  - Local: Playwright will use the following reporters locally: [list](https://playwright.dev/docs/test-reporters#list-reporter), [html](https://playwright.dev/docs/test-reporters#html-reporter)
