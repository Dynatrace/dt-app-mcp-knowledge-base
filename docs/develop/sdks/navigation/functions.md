## Functions

### getAppLink

**getAppLink(appId,pageToken?): string**

Generates a link that launches the specified app on current environment, with an optional internal route specified by pageToken

*Note:* There is no guarantee that the specified app will be launched since different sets of apps could be installed on different platform instances.
Relying on explicitly hardcoded app could lead to broken UX.

*Note:* A page token isn't a URL or route within your app.
It's a specific identifier in your app manifest that serves as a public API for navigation purposes.
App developers need to explicitly define these tokens in their manifest.
Learn more about [registering page tokens for routes](https://developer.dynatrace.com/develop/page-tokens/#register-page-token-for-a-route).

#### Parameters

| Name             | Type   | Description                                                                                                      |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| appId (required) | string | ID of the app that will be launched.                                                                             |
| pageToken        | string | Id of the static path segment defining an internal route in app.  *Warning:* not the same thing as URL or route. |

#### Returns

| Return type | Description                                      |
| ----------- | ------------------------------------------------ |
| string      | URL to the specified app on current environment. |

### getDocumentLink

**getDocumentLink(documentId): string**

Generates a link that opens the specified document on current environment.

*Note:* Due to varying document availability across environments, there's no guarantee the link will always successfully open the document.

#### Parameters

| Name                  | Type   | Description                                                          |
| --------------------- | ------ | -------------------------------------------------------------------- |
| documentId (required) | string | The unique identifier (UUID or external ID) of the document to open. |

#### Returns

| Return type | Description                                        |
| ----------- | -------------------------------------------------- |
| string      | A URL for the document in the current environment. |

### getIntent

**getIntent(): [Intent](#intent) | null**

Retrieves the intent data passed to the app.

`getIntent` method should be used only if the current app route is the intent handling route (`/intent/:intentId`). Otherwise, it returns `null`.

*Note:* The intent is passed to the destination app via the intent handling route (`/intent/:intentId`).
If the app has routing already configured, a new route for handling intents must be declared. Otherwise, it won't be possible to retrieve the intent.
If the app has no routing at all, it's not required to configure it.
To register intents your app can handle, you must declare them in your app manifest.
Learn more about [declaring the intents](https://developer.dynatrace.com/develop/intents/receive-intents/#declare-the-intents).

#### Returns

| Return type       | Description                                                                          |
| ----------------- | ------------------------------------------------------------------------------------ |
| [Intent](#intent) | Intent accessor, including definition of desired action (intent id) and its payload. |

### getIntentLink

**getIntentLink(intentPayload): string**

Generates a link that launches the AppShell on current environment and lets it handle the specified intent.

*Note:* There is no guarantee that the specified app will be launched since different sets of apps could be installed on different platform instances.
Relying on explicitly hardcoded app could lead to broken UX.

#### Parameters

| Name                     | Type                            | Description                                |
| ------------------------ | ------------------------------- | ------------------------------------------ |
| intentPayload (required) | [IntentPayload](#intentpayload) | Set of properties to pass to the platform. |

#### Returns

| Return type | Description                                         |
| ----------- | --------------------------------------------------- |
| string      | URL to the specified intent on current environment. |

**getIntentLink(intentPayload,appId?,intentId?): string**

Generates a link that launches the specified app on current environment and lets it handle the specified intent of given id.

*Note:* There is no guarantee that the specified app will be launched since different sets of apps could be installed on different platform instances.
Relying on explicitly hardcoded app could lead to broken UX.

#### Parameters

| Name                     | Type                            | Description                                      |
| ------------------------ | ------------------------------- | ------------------------------------------------ |
| intentPayload (required) | [IntentPayload](#intentpayload) | Set of properties to pass to the specified app.  |
| appId                    | string                          |                                                  |
| intentId                 | string                          | ID of the action that will be passed to the app. |

#### Returns

| Description                                         |
| --------------------------------------------------- |
| URL to the specified intent on current environment. |

### openApp

**openApp(appId,pageToken?): void**

Navigates user to the specified app, or its internal route if the `pageToken` is specified.

*Note:* A page token isn't a URL or route within your app.
It's a specific identifier in your app manifest that serves as a public API for navigation purposes.
App developers need to explicitly define these tokens in their manifest.
Learn more about [registering page tokens for routes](https://developer.dynatrace.com/develop/page-tokens/#register-page-token-for-a-route).
*Note:* There is no guarantee that the specified app exists since different sets of apps could be installed on different platform instances.
Relying on explicitly hardcoded app could lead to broken UX.

#### Parameters

| Name             | Type   | Description                                                                                                      |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| appId (required) | string | ID of the app that will be launched.                                                                             |
| pageToken        | string | Id of the static path segment defining an internal route in app.  *Warning:* not the same thing as URL or route. |

### openDocument

**openDocument(documentId): void**

Navigates the user to the specified document on current environment.

*Note:* Due to varying document availability across environments, this function might not open the document if it doesn't exist in the environment.

#### Parameters

| Name                  | Type   | Description                                                                 |
| --------------------- | ------ | --------------------------------------------------------------------------- |
| documentId (required) | string | The unique identifier (UUID or external ID) of the document to navigate to. |

### sendIntent

**sendIntent(intentPayload): void**

Passes the specified `IntentPayload` to the Dynatrace platform, which then gets forwarded to the destination app selected by the user.

*Note:* The list of possible actions and destination apps includes only these actions/apps whose intent declarations are matched against the intent payload.
The matching checks whether the payload contains all the properties required in the intent declaration and whether the properties have the correct types.
All the undeclared properties are removed from the intent payload when passing it to the destination app.

#### Parameters

| Name                     | Type                            | Description                                                             |
| ------------------------ | ------------------------------- | ----------------------------------------------------------------------- |
| intentPayload (required) | [IntentPayload](#intentpayload) | an intent payload object to pass, it may include one or more properties |

**sendIntent(intentPayload,sendIntentOptions): void**

Passes the specified `IntentPayload` to the specified app and lets it handle the specified intent of given id.
If the specified app does not exist or the specified intent payload does not match,
Dynatrace platform handles the intent as if regular `sendIntent(intentPayload: IntentPayload)` is used.

*Note:* There is no guarantee that the specified app will be launched since different sets of apps could be installed on different platform instances.
And even if the app is installed, its version may not be capable of handling the specified intent payload.

#### Parameters

| Name                         | Type                  | Description                                                                                                                                                                                                                                                                                |
| ---------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| intentPayload (required)     | T                     | an intent payload object to pass, it may include one or more properties                                                                                                                                                                                                                    |
| sendIntentOptions (required) | SendIntentOptions\<T> | an options object with: * recommendedAppId - ID of the app that will be launched to handle the intent
* recommendedIntentId - ID of the action that will be passed to the app
* keyProperties - list of property names of the intent payload that must be matched with intent declarations |

### sendIntentWithResponse

**sendIntentWithResponse(intentPayload,sendIntentWithResponseOptions): Promise\<IntentResponseEnvelope\<T> | undefined>**

Unlike regular `sendIntent` method, it requests what properties will be returned by the specified app handling the specified intent of given id.

*Note:* The list of possible actions and destination apps includes only these actions/apps whose intent declarations are matched against the intent payload and response properties.

#### Parameters

| Name                                     | Type                              | Description                                                                                                                                                                                                                                                          |
| ---------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| intentPayload (required)                 | [IntentPayload](#intentpayload)   | an intent payload object to pass, it may be empty when sending an intent with response                                                                                                                                                                               |
| sendIntentWithResponseOptions (required) | SendIntentWithResponseOptions\<T> | an options object with: * responseProperties - expected intent response, requested as a list of property names
* recommendedAppId - ID of the app that will be launched to handle the intent
* recommendedIntentId - ID of the action that will be passed to the app |

### setPathChangeHandler

**setPathChangeHandler(handler): void**

Registers a custom handler for changing the app's URL path.
It is used only for the changes that are triggered externally, outside the app.

If a custom handler is not set, the application is reloaded
by replacing the current document location with a new path.

#### Parameters

| Name               | Type              | Description                                     |
| ------------------ | ----------------- | ----------------------------------------------- |
| handler (required) | PathChangeHandler | Custom handler for changing the app's URL path. |
