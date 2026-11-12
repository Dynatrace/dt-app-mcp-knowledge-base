## Build an app with the App Toolkit

The extension wraps essential functionality from the [App Toolkit](https://developer.dynatrace.com/quickstart/app-toolkit.md), such as configuring or starting the server, building and deploying apps, or generating app functions.

### Configure your app

You can [define all necessary options](https://developer.dynatrace.com/quickstart/app-toolkit.md#app-options) from the app manifest using the provided **Configure app** functionality. It includes metadata such as app ID or name and scopes or content security policies.

![Configure your custom app](https://dt-cdn.net/images/configapp-d15483748d.gif)

### Test your new app without (re)deployment

Using the built-in Dynatrace development server, you can quickly review changes to your app by reloading the browser instead of deploying a new version. You can start the development servers on **localhost** from the command panel in the sidebar. [Browse the documentation to investigate more options](https://developer.dynatrace.com/quickstart/app-toolkit.md#server-options) for the server.

### Build and deploy apps

Selecting **Build app** runs the **npx dt-app build** script to create the app bundle and run validation checks. [Have a look at the documentation to explore more build options](https://developer.dynatrace.com/quickstart/app-toolkit.md#build-options). Clicking on **Deploy app** will perform a build and deploy the app to your connected development environment.

### Stay up to date with your dependencies

When selecting **Update dependencies**, the extensions will run the **npx dt-app update** command to check if there are any new Dynatrace packages available on [npm](https://www.npmjs.com/~dynatrace-nodejs) and will install them.

![Update Dynatrace dependencies from the Visual Studio Code extension](https://dt-cdn.net/images/update-dependencies-356-0361b8f1dc.png)

### Generate app functions

[App functions](https://developer.dynatrace.com/develop/guides/app-functions.md) represent the backend, including all the business logic, of a Dynatrace app. You use them for requirements such as accessing third-party APIs, heavy data processing and manipulation, or capsule functionality requiring elevated access rights.

You can create a new app function by clicking on the **Generate app function** and entering a name.
It will execute a script, which creates a file in your app's API directory and exposes the new function in the respective **app function** section.

After the wizard finishes, it creates a file in your app's **API** directory and exposes the new function in the respective **App functions** section. From there, you can test it using mocked parameters.

![TerminalOutputAppFunctionGenerated](https://dt-cdn.net/images/generatefunction-v2-77c766bdba.gif)
