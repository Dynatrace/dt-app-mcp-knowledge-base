The state service provides a **key-value** storage for your app to store internal states.

It can store essential data needed for the app's functioning in its context. Data access is configurable: either to all users or confined to a specific user's context.
These states are only accessible from their respective apps and can't be accessed using a different app or ad-hoc functions.

If the data set is extensive (see [Limitations](#limitations)) or multiple users need to collaborate on the data, the [document service](https://developer.dynatrace.com/develop/platform-services/services/document-service.md) may be a better fit.
