The Registry is mainly responsible for

- installing / updating / storing apps
- uninstalling / removing apps
- getting apps

### Asynchronous behavior

Both the install and the uninstall process are performed asynchronously. The Registry persists
the app bundle and defines the desired state of the app (e.g. installed, uninstalled). The
installation / uninstallation process is then handled asynchronously by a separate service.

The current status of the app is provided by the status in the response body of the
respective GET request, e.g. `/apps/{id}`.

```bash
npm install @dynatrace-sdk/client-app-engine-registry
```
