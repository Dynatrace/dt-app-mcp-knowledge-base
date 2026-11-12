## Debugging in Browser

Most browsers offer developer tools that help you to debug your web applications. Although, browsers might have different UIs for developer tools, they provide similar functionalities.

To open the developers tools, use Ctrl + Shift + I (on Windows) or Ctrl + Option + I (on Mac). This is how it looks in Chrome:

![Chrome developer tools](https://developer.dynatrace.com/assets/images/chrome-dev-tools-e95a111d617101531121d3cec0025943.png)

### Debugging UI

The developer tools provide an `Elements` (Chrome) or an `Inspector`(Firefox) tab to debug visual issues. You can do the following with the `Elements` tab:

- View and change the DOM elements
- View and change the CSS
- Inspect the CSS Grid
- Debug CSS Flexbox layouts

To know more about it, take a look at [Elements docs](https://developer.chrome.com/docs/devtools/dom/).

### Debugging JavaScript

There are various options to debug your JavaScript application.

- The `console.log`: The ubiquitous `console.log` comes very handy in debugging JavaScript. You can see all the logs in the `Console` tab of the developer tools. It might sound primitive, but it gets work done.
- The `debugger` statement: You can also write a `debugger` statement within your code, just like `console.log`. The debugger statement pauses the execution of the code like a breakpoint. To know more, take a look at [debugger statement docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger).
- Debugger: Chrome and Firefox provide a debugger under the `Sources` or `Debugger` tab. The debugger allows you to set breakpoints, start and pause the code execution, check the call stack, and a lot more. To know more, read the [debugger documentation](https://developer.chrome.com/docs/devtools/javascript/).

### Debugging Network requests

Sometimes you might want to see what kind of response you get from a server. The developer tools have a `Network` tab to do it. It allows you to do the following:

- Inspect network activity
- Block requests
- Simulate network connection
- Check the request's timing
- Record network requests

To know more, read the [Network documentation](https://developer.chrome.com/docs/devtools/network/).

> **Tip**
>
> To learn more about Developer tools, read the [Chrome documentation](https://developer.chrome.com/docs/devtools/) or [Firefox documentation](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Debugging with React Developer Tools

React Developer Tools is a browser extension that allows you to inspect the React component hierarchies using your browser's developer tools. It's available for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/), and [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).

After adding the extension, you get two extra tabs in the browser's developer tools: The `Components` and the `Profiler` tabs.

> **Note**
>
> The AppShell renders apps in an `iframe`. The React developer tools won't work correctly for an iframe. Therefore, you need to detach the apps from the AppShell. Read the [AppShell documentation](https://developer.dynatrace.com/plan/appshell.md#run-your-app-outside-of-the-iframe-context) to know more.

#### Debugging the Component tree

The `Components` tab shows you the React component hierarchy. It lets you see and manipulate component state and props. This is how it looks in Chrome:

![React Dev Tools in Chrome](https://developer.dynatrace.com/assets/images/react-dev-tools-564155a85a4ef62b8f908d4e6ae35adb.png)

#### Debugging the performance

The `Profiler` tabs allow you to profile your react application. It's something very similar to the developer tools's `Performance` tab but specific to React. Follow these steps to use the profile:

1. Start recording the session by clicking the red circle
2. Do the operation in your React application.(For example: click a button, input some text)
3. Press the circle again to finish the session. You'd see the component-specific timings as a result.

To know more about React Developer tools, read this tutorial on [How To Debug React Components Using React Developer Tools](https://www.digitalocean.com/community/tutorials/how-to-debug-react-components-using-react-developer-tools#step-3-tracking-component-rendering-across-interactions).
