## Fast development mode

Fast development mode is a workflow designed to allow advanced developers to gain immediate feedback on the current state of their extension and minimize the steps and time it takes to see updates in their connected Dynatrace environment.

### How does it work?

When enabled, every time the extension manifest saves, the extension version automatically increments, and the extension is packaged, signed, and uploaded to your connected environment. The workflow is **hands-free**, so if the maximum number of extension versions is reached, one will be removed automatically so the upload can succeed.

An accompanying status bar confirms the mode is active and displays the status of the last attempted build.

![fast mode](https://developer.dynatrace.com/assets/images/fast_mode-afa72351fe2bc8c89f4134c7e371015c.png)

With this workflow, pre-upload validation is skipped in favor of speed, and any issues are communicated immediately via an
output channel.

![errors in fast mode](https://developer.dynatrace.com/assets/images/fast_mode_error-2a1a4f33906123b13b4115871aeeb4a8.png)

When developing your static assets, such as the unified analysis screens, this mode is the quickest way
to cycle through a variety of changes before finding your ideal configuration.
