## Local development

All the above-mentioned points have effects on your local development experience. The AppShell provides some convenient features to make your development experience as flawless as possible.

### Access Dynatrace data during development

When starting your [local development server](https://developer.dynatrace.com/quickstart/tutorial/create-new-dynatrace-app.md#3-start-the-development-server), the App Toolkit automatically proxies all the requests to the Dynatrace platform to the environment specified in your [app configuration file](https://developer.dynatrace.com/contents/docs/quickstart/app-toolkit/index.mdx/#app-options).
Therefore, you can use data from your Dynatrace environment during the development phase to ensure that your app works correctly in the real-world environment.

### Run your app outside of the iframe context

There are some cases during development where it can be beneficial to run your app outside of the `iframe` context.
When your app is running within your local dev server, you can detach it from the AppShell to achieve this.
Select **Detach** in the bottom-left corner of your screen.

> **Caution**
>
> Note that when your app is detached, it can't access any AppShell functionalities and might behave differently than running inside the AppShell.

### Using React Developer Tools

The [React Developer Tools](https://react.dev/learn/react-developer-tools) browser extension is a convenient way to debug your app, but it doesn't work correctly when the app runs inside the `iframe`.
To make use of it, you run your app detached from the AppShell while using the extension. Just make sure to test it properly in regular mode to avoid inconsistencies.
