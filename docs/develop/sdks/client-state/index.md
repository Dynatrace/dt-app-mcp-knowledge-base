Provides key-value storage for apps so that app developers can persist and get small chunks of
state in the context of their app.

States can either be stored in the context of an app (= app states) or in the context of an app and user (= user app states).

- States stored per app can be read by every user of the app.
- States stored per app and user can only be read and updated by the user who originally set that state.
  Please visit the [Dynatrace Developer](https://dt-url.net/platform-services-state-service) to learn more about app states and user app states.

```bash
npm install @dynatrace-sdk/client-state
```
