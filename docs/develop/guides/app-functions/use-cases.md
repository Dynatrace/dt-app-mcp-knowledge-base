## Use cases

When does it make sense to use app functions? The most important use cases are:

- Accessing third-party APIs over the internet that you want to use within your app
- Heavy data processing that ideally shouldn't take place in the browser
- Data wrangling to make the data easily consumable within the app's web UI
- Requests that need credentials for authentication that you don't want to expose in the app's UI code
- Sharing domain-specific analysis beyond an app's own UI, so that agents, workflows, and API callers get the same answer as the UI from one definition

> **Note**
>
> Since app functions require some setup effort, only use them for these use cases. For example, you don't need an app function to execute a DQL query. Instead, you can query directly in your app's UI code. Most of the time, accessing external APIs or data is the use case that will apply to you.
