## Concepts

You need to know the following concepts to work with the AppEngine.

### App bundles

AppEngine installs apps by uploading the **app bundle**—a ZIP file containing the built app code, app metadata, static resources, settings, and functions. The App Toolkit (`dt-app`) is the preferred tool for creating app bundles.

### Registry

The registry is mainly responsible for installing, retrieving, updating, and uninstalling apps.

It performs a basic confidence check before installation and returns an error if it finds any constraint violations, such as the app bundle being too large. If the confidence check ends successfully, the asynchronous app installation process starts. You can check the app installation process by calling the `/apps/<Id>` endpoint. Installing an app is a relatively quick process that should finish within a few minutes.

Uninstalling an app is also an asynchronous process. AppEngine might take a few minutes to remove the app.

### Function executor

The function executor is an API that allows you to execute code (that you haven't bundled with apps) inside Dynatrace AppEngine.

### Dynatrace JavaScript runtime

In addition to code executed in the browser, you can provide backend code using Dynatrace app functions powered by the Dynatrace JavaScript runtime. The runtime executes app functions and code sent to the function executor (for example, within Notebooks and Workflows). Follow the [App building tutorial](https://developer.dynatrace.com/quickstart/tutorial.md) or read more in the [app functions reference](https://developer.dynatrace.com/develop/guides/app-functions.md) to start with app functions. Read more about all available APIs in the Dynatrace JavaScript runtime in the [JavaScript runtime reference](contents/docs/develop/reference/javascript-runtime.md).

Code inside the runtime runs sandboxed, and communication with resources outside the Dynatrace platform is restricted. Code inside the Dynatrace JavaScript runtime may use the fetch function to execute HTTP requests to external and platform service APIs. If the `resource` parameter of the fetch function is a relative path, the request can interact with Dynatrace platform services. In that case, the Dynatrace platform handles the authentication and routing to the right environment for you.

### Outbound connections from functions

By default, you can't access external hosts from the Dynatrace runtime. To learn more about managing the list of allowed hosts, read [Allow outbound connections](https://developer.dynatrace.com/develop/guides/app-functions.md).

### EdgeConnect

To forward HTTP requests from the Dynatrace JavaScript runtime to your private network, you need to:

- Run an EdgeConnect container in your private network.
- Use the  to configure the host patterns of all HTTP requests that should be routed to that EdgeConnect container.

To learn more about EdgeConnect, read the [deployment instructions](https://dt-url.net/edge-connect).
