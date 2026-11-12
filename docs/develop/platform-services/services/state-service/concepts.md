## Concepts

You need to know the following concepts to work with the state service.

### User app states

You can use user app states to store information that is relevant only to a specific user and app context. For example, the configurable state of components that are used in your app. User app states persist across that user's sessions and devices.

### App states

> **Caution**
>
> Be aware that all app users can read app states. If your use case allows for a user-scoped state, best practice is to use the the user app state.

App states are accessible to all users; therefore, you can share specific states essential to the app's context. For example, you can create a workflow that fetches third-party data into your [app function](https://developer.dynatrace.com/develop/guides/app-functions.md). Your app stores this information in its app state. All users of your app can then access this data.

There are also use cases for writing an app state in browser code. For example, the app can allow the user to share some meta information (that is only relevant in the context of this app) with other users.

### Limitations

Generic key-value-based state storage, where the key and value are simple strings, allows you to manage the state design according to your app's specific needs.

For example, instead of using multiple small chunks of state, you can use one more significantly larger state as an alternative. The limits the app must abide by for either case are listed below.

- **User app states**: The sum of all user app state values for a single user must not exceed 1 MB per app. User app state keys must not exceed 200 characters.
- **App states**: A single app state value must not exceed 10 MB. The sum of all app state values for a single app must not exceed 50 MB. An app state key must not exceed 200 characters.

Any operation violating these limits will result in an error. You can delete states to avoid imminent quota violations.

### Reset states

Administrators (users with the policy "AppEngine - Admin") can **clear all app states and user app states** of an app in the  by selecting the **Reset state** context menu entry. In addition, any user can also trigger the clearance of their user app states.
