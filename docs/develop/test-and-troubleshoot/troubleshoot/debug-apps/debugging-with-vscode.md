## Debugging with VSCode

Projects generated with the App Toolkit include launch configurations for debugging apps with Visual Studio Code. To get started, open the **Run and Debug** tab on the left bar, then select the configuration you want to use:

![Debug Configurations](https://developer.dynatrace.com/assets/images/debug-configurations-ce3334051d082ebdc53b12a4a91c0570.png)

Next, select the **Run** button to start debugging. To see the output of the App Toolkit, select **Debug Console** in the bottom pane.

### Debugging the UI

To debug UI code from within Visual Studio Code, use the **Launch Chrome for UI debugging** configuration. This configuration will start the development server with the App Toolkit and once it's ready, launch Google Chrome. Now you can set breakpoints within the UI source code and reload the page if required.

### Troubleshooting

If a breakpoint isn't recognized, try removing and adding it again. In cases where breakpoints aren't triggered during app startup, detach the app from the AppShell with the **Detach** button on the bottom left and reload the page.
