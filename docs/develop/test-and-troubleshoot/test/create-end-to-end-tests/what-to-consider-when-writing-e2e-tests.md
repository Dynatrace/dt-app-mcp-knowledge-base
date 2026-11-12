## What to consider when writing E2E tests

When writing E2E tests, you need to consider the following:

- Install the app on a target environment. It ensures that you're testing the app in a similar environment to the user (for example, having SSO in place, not running the app on a development server, or similar).
- Avoid hardcoded environment URLs and login information for a smooth login flow to an arbitrary environment. Instead, pass the necessary information as environment variables or read them from configuration files. It allows you to run your tests on different environments, even at various stages (such as development or hardening).
