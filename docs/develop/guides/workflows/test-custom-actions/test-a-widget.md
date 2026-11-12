## Test a widget

You don't need to test any [Strato Design System](https://developer.dynatrace.com/contents/docs/design/index.md/) components. You can rely on them; developers have tested them adequately.

### Write UI integration tests

Visit the [Dynatrace Apps testing guide](https://developer.dynatrace.com/develop/test-and-troubleshoot/test/create-unit-tests-jest.md#test-your-ui) to learn how to write unit tests for your UI.
Focus on testing the functionality of a single component in isolation by simulating how your end users will use it.

### Write E2E tests

Test your widget only by performing actions you could expect real users to make. The test framework allows initializing a widget with or without the initial value, such as an existing or new task configuration. More details are in the [example](#example) below.

You don't need to worry about embedding your widget into the Workflows or how it persists the widget value. Workflows take care of this for you.

The tests you write must add value to your widget, verify the widget's state, and show that:

- Your components interact as expected; for example, there are interdependencies between widget UI components.
- Your widget compiles and renders all fields. Ensure that there are no breaking changes in dependencies.
- The widget produces the output you would expect.

It's important not to test the app function or its business logic. Therefore, don't use `Run Action` from the dev-helper view. You can test app functions using specific app function tests. In these E2E tests, we focus on widgets only.

#### Examples

These examples test the `Greeter` widget [created in the custom Workflows action](https://developer.dynatrace.com/develop/guides/workflows/create-custom-action.md#widget-interface) section.

Let's begin by setting up [E2E tests for Dynatrace Apps](https://developer.dynatrace.com/develop/test-and-troubleshoot/test/create-end-to-end-tests.md). In addition to the required [environment variables](https://developer.dynatrace.com/develop/test-and-troubleshoot/test/create-end-to-end-tests.md#set-environment), add `WIDGET_URL`, which refers to the URL address where your custom action runs. It could either be the action's local URL displayed by the App Toolkit or the URL of the deployed widget.

> **Note**
>
> You can retrieve the base URL of a deployed action using the visual documentation by navigating to: `https://<Your-Environment-Url>/platform/swagger-ui/index.html?urls.primaryName=AppEngine%20-%20Registry#/AppEngine%20-%20Registry%20-%20Apps/getApp`
>
> Provide your application ID on this page, add `isolatedUri` to the `add-fields` parameter, and execute the request. In the response, look for the `isolatedUri` object. Under this object, you'll find the `widgetUrl`. Finally, append your action widget's specific path, for example, `/actions/greeter`, to the `widgetUrl` while making sure you preserve any query parameters that may be present in the `widgetUrl` e.g. `https://<widgetUrl>/actions/greeter?<Your-Query-Params>`.
>
> Ensure you replace the `<Your-Environment-Url>` placeholder with the actual URL address of your environment.

Once you've configured the tests, you can change the `setup` method in the `setup.ts` file. This change will allow the `setup` method to accept a URL parameter. When you provide a URL address, the test will navigate to this location just before it starts. Providing a URL eliminates the need to switch between iframes during the test.

```ts title="e2e/setup.ts" {3,7-9} skip-testing
export async function setup(
  controller: TestController,
  navigateTo?: string
): Promise<void> {
  await controller.maximizeWindow();
  await controller.useRole(role);
  if (navigateTo) {
    await controller.navigateTo(navigateTo);
 }

 ...
  const iframeSelector = Selector("iframe", { timeout: 60_000 });
  await controller.switchToIframe(iframeSelector);
}
```

Additionally, add the following content:

```ts title="e2e/setup.ts" testable
export const DEV_HELPER_URL = `${process.env.ENVIRONMENT_URL}/ui/apps/dynatrace.automations/dev-helper?src=${process.env.WIDGET_URL}`;
export const WIDGET_STATE_STORAGE_KEY = 'dev-helper-widget-state';
```

- The `DEV_HELPER_URL` represents the URL address to the dev-helper, which includes a query parameter `src` pointing to the widget URL. Refer to the [debugging custom action](https://developer.dynatrace.com/develop/guides/workflows/create-custom-action.md#debug-the-action) documentation for more detailed information on accessing dev-helper.
- The `WIDGET_STATE_STORAGE_KEY` is the key used in the `localStorage` of the dev-helper to store the widget state.

> **Note**
>
> Be aware that your custom action may not be installed in an environment where the E2E tests run. This circumstance could lead to an error page indicating that the provided app doesn't exist. However, the test setup will redirect you to the dev-helper within a few seconds.

##### Test an empty widget

Let's create the initial test that guarantees the persistence of provided values in the widget state.

```ts title="e2e/tests/greeter-empty.spec.ts" {9-10,17,23,25} skip-testing
import { ClientFunction, Selector } from 'testcafe';
import { DEV_HELPER_URL, WIDGET_STATE_STORAGE_KEY, setup } from '../setup';

// Client function to run custom-code on the client side.
// https://testcafe.io/documentation/402832/guides/basic-guides/client-functions
const getLocalStorageItem = ClientFunction((key: string) => window.localStorage.getItem(key));

fixture('Empty widget').beforeEach(async (t) => {
  await setup(t, DEV_HELPER_URL);
  await t.switchToIframe(Selector('iframe#widget', { timeout: 10_000 }));
});

test('Fill empty widget form', async (t) => {
  const nameInput = Selector('[data-testid="base-code-editor-content"]');

  // Fill widgets inputs
  await t.typeText(nameInput, 'John Sr.');

  // Assert inputs values
  await t.expect(nameInput.innerText).eql('John Sr.');

  // Switch to dev-helper app iframe
  await t.switchToMainWindow().switchToIframe(Selector('iframe'));
  // Assert widget state
  await t.expect(getLocalStorageItem(WIDGET_STATE_STORAGE_KEY)).eql(JSON.stringify({ name: 'John Sr.' }));
});
```

Let's review the most crucial parts of the test:

- We set up the test and navigate to the dev-helper. Then, we switch to the context of the widget iframe.
  > **Note**
  >
  > To make it convenient, you can always find the iframe of any widget within the dev-helper by the ID `widget`.
- We provide value to the widget input.
- We switch to the dev-helper iframe, retrieve the widget state, and verify that it matches the expected value, which acts as a contract. The AutomationEngine will use it during the execution of the action upon saving a workflow.

##### Test a widget with an initial value

The following test shows how to pass the initial value via the URL query parameters.

```ts title="e2e/tests/greeter-with-initial-value.spec.ts" {9-12,19,22} skip-testing
import { ClientFunction, Selector } from 'testcafe';
import { DEV_HELPER_URL, WIDGET_STATE_STORAGE_KEY, setup } from '../setup';

// Client function to run custom-code on the client side.
// https://testcafe.io/documentation/402832/guides/basic-guides/client-functions
const getLocalStorageItem = ClientFunction((key: string) => window.localStorage.getItem(key));

fixture('Widget with initial value').beforeEach(async (t) => {
  const initialValue = { name: 'Mark' };
  const uriEncodedInitialValue = encodeURIComponent(JSON.stringify(initialValue));
  await setup(t, `${DEV_HELPER_URL}&initialValue=${uriEncodedInitialValue}`);
  await t.switchToIframe(Selector('iframe#widget', { timeout: 10_000 }));
});

test('Validate initial values and make changes', async (t) => {
  const nameInput = Selector('[data-testid="base-code-editor-content"]');

  // Verify that the widget holds the correct value
  await t.expect(nameInput.innerText).eql('Mark');

  // Make changes
  await t.typeText(nameInput, 'Ann Marie', { replace: true });

  // Switch to dev-helper app iframe
  await t.switchToMainWindow().switchToIframe(Selector('iframe'));
  // Assert widget state
  await t.expect(getLocalStorageItem(WIDGET_STATE_STORAGE_KEY)).eql(JSON.stringify({ name: 'Ann Marie' }));
});
```

Let's understand what's happening in the test:

- We set up the test and navigated to the dev-helper. This time, we include an extra query parameter called initialValue. It should hold the URI-encoded value of the initial value for your widget. The dev-helper passes this value to the widget during its initial rendering. Finally, switch to the context of the widget iframe.
- We ensure the widget holds the correct initial value.
- After making changes, the remaining part of the test ensures that the widget state aligns with our expectations.

#### Add optional test improvements

Avoid repetitions for more extensive test scenarios while looking for page elements or simulating user actions. To do so, we'll create [Page Models](https://testcafe.io/documentation/402826/guides/best-practices/page-model). For further details, refer to the testcafe documentation.

Create a file, `e2e/page-models/dev-helper.ts`, with the following content.

```ts title="e2e/page-models/dev-helper.ts" skip-testing
import { Selector, t } from 'testcafe';

class DevHelper {
  widgetIframe: Selector;

  constructor() {
    this.widgetIframe = Selector('iframe#widget', { timeout: 10_000 });
  }

  async switchToDevHelper() {
    await t.switchToMainWindow().switchToIframe(Selector('iframe'));
  }

  async switchToWidgetIframe() {
    await t.switchToIframe(this.widgetIframe);
  }
}

export default new DevHelper();
```

- The `widgetIframe` selector targets the widget iframe.
- The `switchToDevHelper` action provides a convenient method to switch to the dev-helper iframe. Such action is practical, for example, when you need to access and read the widget state from the `localStorage`.
- The `switchToWidgetIframe` action offers a convenient way to switch to the widget iframe and interact with it.

As a next step, create a `Greeter` page model in `e2e/page-models/greeter.ts`.

```ts title="e2e/page-models/greeter.ts" skip-testing
import { Selector, t } from 'testcafe';

class Greeter {
  nameInput: Selector;

  constructor() {
    this.nameInput = Selector('[data-testid="base-code-editor-content"]');
  }

  async typeName(name: string) {
    await t
      .expect(this.nameInput.exists)
      .ok('name input is not visible')
      .typeText(this.nameInput, name, { replace: true });
  }
}

export default new Greeter();
```

To ease the step of getting widget state, you can create the following file `e2e/utils.ts` and add content:

```ts title="e2e/utils.ts" skip-testing
import { ClientFunction } from 'testcafe';
import DevHelper from './page-models/dev-helper';
import { WIDGET_STATE_STORAGE_KEY } from './setup';

export const getLocalStorageItem = ClientFunction((key: string) => window.localStorage.getItem(key));

export const getWidgetState = async (): Promise<Record<string, unknown>> => {
  await DevHelper.switchToDevHelper();
  const widgetStateRaw: string | null = await getLocalStorageItem(WIDGET_STATE_STORAGE_KEY);
  if (!widgetStateRaw) return {};
  try {
    return JSON.parse(widgetStateRaw);
  } catch (e) {
    console.warn('Failed to read widget state due to', e);
    return {};
  }
};

export const encodeInitialValue = (value: Record<string, unknown>): string => encodeURIComponent(JSON.stringify(value));
```

The `getWidgetState` gets the widget state as an object from the `localStorage`, and the \`encodeInitialValue "utility function helps to translate the object value to URI encoded string.

Below, you can find updated tests that use Page Models objects and actions.

#### Test an empty widget

```ts title="e2e/tests/greeter-empty.spec.ts" {7-8,13,19} skip-testing
import DevHelper from '../page-models/dev-helper';
import Greeter from '../page-models/greeter';
import { setup, DEV_HELPER_URL } from '../setup';
import { getWidgetState } from '../utils';

fixture('Empty widget').beforeEach(async (t) => {
  await setup(t, DEV_HELPER_URL);
  await DevHelper.switchToWidgetIframe();
});

test('Fill empty widget form', async (t) => {
  // fill widget input
  await Greeter.typeName('John Sr.');

  // assert inputs values
  await t.expect(Greeter.nameInput.innerText).eql('John Sr.');

  // assert widget state
  await t.expect(await getWidgetState()).eql({ name: 'John Sr.' });
});
```

#### Test a widget with an initial value

```ts title="e2e/tests/greeter-with-initial-value.spec.ts" {7-9,17,20} skip-testing
import DevHelper from '../page-models/dev-helper';
import Greeter from '../page-models/greeter';
import { DEV_HELPER_URL, setup } from '../setup';
import { encodeInitialValue, getWidgetState } from '../utils';

fixture('Widget with initial value').beforeEach(async (t) => {
  const initialValue = { name: 'Mark' };
  await setup(t, `${DEV_HELPER_URL}&initialValue=${encodeInitialValue(initialValue)}`);
  await DevHelper.switchToWidgetIframe();
});

test('Validate initial values and make changes', async (t) => {
  // verify that the widget value has been populated correctly
  await t.expect(Greeter.nameInput.innerText).eql('Mark');

  // make changes
  await Greeter.typeName('Ann Marie');

  // assert widget state
  await t.expect(await getWidgetState()).eql({ name: 'Ann Marie' });
});
```

> **Note**
>
> When using TestCafe with a headless browser like Chrome Headless to test your custom actions, you may get the following error:
>
> ```text
> JS ERROR | Cannot read properties of null (reading 'hammerhead|shadow-ui-element')
> ```
>
> Disable TestCafe's native automation mode to solve this issue by following the instructions on TestCafe's [website](https://testcafe.io/documentation/404237/guides/intermediate-guides/native-automation-mode#q-how-do-i-disable-native-automation)
