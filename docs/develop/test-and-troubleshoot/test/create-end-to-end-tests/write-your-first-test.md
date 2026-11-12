## Write your first test

To write a clean first test, you'll need three layers of files, page objects, assertions and the test file itself.

1. `e2e/src/page-objects/app-landing-page/app-header.po.ts`: First, let's create a page-object containing selectors and methods to interact with your app. In this case, this page object targets the app header. Now, create a new file named `e2e/src/page-objects/app-landing-page/app-header.po.ts` and paste the following content into it.

   ```ts title="e2e/src/page-objects/app-landing-page/app-header.po.ts" skip-testing
   import { FrameLocator, Locator, Page } from '@playwright/test';

   export class AppHeader {
     private readonly APP_IFRAME: FrameLocator;
     public readonly HEADER: Locator;

     constructor(private page: Page) {
       this.APP_IFRAME = page.frameLocator('[data-testid="app-iframe"]');
       this.HEADER = this.APP_IFRAME.getByRole('navigation');
     }

     async clickAppIcon() {
       await this.HEADER.click();
     }
   }
   ```

2. `e2e/src/page-objects/app-landing-page/app-header.assertion.ts`: This assertion file only contains methods for asserting the page state of your app. In this case, the assertion targets the app header. Next, create a new file named `e2e/src/page-objects/app-landing-page/app-header.assertion.ts` and paste the following content into it.

   > **Note**
   >
   > Moving assertions into a separate file is only helpful in two cases:
   >
   > - You're using them in several tests or intend to do so.
   > - They're complex and long. In this case, extract them in an assertion file and give them a descriptive name.

   ```ts title="e2e/src/page-objects/app-landing-page/app-header.assertion.ts" skip-testing
   import { Page, expect } from '@playwright/test';
   import { AppHeader } from './app-header.po';

   export class VerifyAppHeader {
     public readonly AppHeader: AppHeader;

     constructor(private page: Page) {
       this.AppHeader = new AppHeader(page);
     }

     async verifyAppIsOpen() {
       await expect(this.AppHeader.HEADER).toBeVisible();
     }
   }
   ```

3. `e2e/tests/landing-page/first-test.spec.ts`: Now that you've configured everything, let's write the first test. Create a test file `first-test.spec.ts` in your project's `e2e/tests/landing-page/` directory and add the following content.

   ```ts title="e2e/tests/landing-page/first-test.spec.ts" skip-testing
   import { test } from '@playwright/test';
   import { VerifyAppHeader } from '../../src/page-objects/app-landing-page/app-header.assertion';
   import { pageUrl } from '../../src/utils/setup';

   test.beforeEach(async ({ page }) => {
     await page.goto(pageUrl);
   });

   test('Should open the app successfully', async ({ page }) => {
     await new VerifyAppHeader(page).verifyAppIsOpen();
   });
   ```

Let's understand the files.

- `Page objects`: A page object represents your UI in test code. This file includes selectors and methods to interact with your page while testing.

  - `Selectors` are usually defined on top of a page object and initialized in the constructor. Playwright recommends using their [built-in locators](https://playwright.dev/docs/locators) instead of Xpath or CSS selectors. Additionally, selector names should follow the SCREAMING_SNAKE_CASE format.
  - `Interaction methods` execute a logically related group of actions on a specific page. The method's name should always target the functionality or the outcome, such as openApp or executeQuery.

- `Assertion`: An assertion file should generally relate to a page object. For the page object `app-header.po.ts`, the connected assertion file would be `app-header.assertion.ts`. Additionally, the class name should be the same as the one of the page object but prefixed with `Verify`.

- `Test file`: The `test` function defines an individual test case and in this case. We've named the test **Should open the app successfully**. Within the test, we use Playwright methods on `page` (the Page) to interact with the page and perform assertions. The test does two things:

  - `await page.goto(pageUrl)`: The beforeEach method calls this function, which means it runs before every test in that file. The `page.goto` method redirects the test to a new URL, which is in this case the pageUrl coming from the `e2e/src/utils/setup.ts` file.
  - `await new VerifyAppHeader(page).verifyAppIsOpen()`: This method calls the `verifyAppIsOpen` method from the'e2e/src/page-objects/app-landing-page/app-header.assertion.ts\` file we created earlier which asserts that the header div is visible.
