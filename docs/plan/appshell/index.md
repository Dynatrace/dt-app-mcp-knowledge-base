The AppShell is a major component of the Dynatrace platform. It provides a communication layer between the platform and your Dynatrace App.
When an app is running on the platform, it gets wrapped within an `iframe` by the AppShell. That allows every app to run in its own context and rely on the AppShell to handle all the communication with the platform.

In particular it

- Handles cross-app communication (via [intents](https://developer.dynatrace.com/develop/guides/navigation/intents.md) and [page tokens](https://developer.dynatrace.com/develop/guides/navigation/page-tokens.md))
- Renders common parts of the Platform UI, including Dock, "Open with" dialog, and error views
- Synchronizes your app routing with the platform and browser
- Catches unhandled errors from your app and maintains the Platform stability
- Passes configuration info and user settings to your app
- Handles Platform security protocol

Since running apps within the `iframe` context comes with some limitations during app development, it's important to follow the suggestions below:

- Use the App Toolkit to build and deploy your app
- Query Dynatrace data in your app using the functionality provided by the Dynatrace SDKs
- Use intents and page tokens to navigate between apps and avoid direct navigations to routes outside of your app boundaries
