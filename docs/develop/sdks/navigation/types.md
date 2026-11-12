## Types

### Intent

Intent accessor API for retrieving received intent.

Use it to retrieve the intent payload passed from the source app and the intent id selected by the user.

#### Methods

##### getId

**getId(): string**

Retrieves the intent id selected by the user.

It is passed via the intent handling route (`/intent/:intentId`).

#### Returns

| Return type | Description |
| ----------- | ----------- |
| string      | intent id   |

##### getPayload

**getPayload(): [IntentPayload](#intentpayload)**

Retrieves the intent payload object that was passed from the source app.

It contains only these properties that are declared in the app manifest.

#### Returns

| Return type                     | Description    |
| ------------------------------- | -------------- |
| [IntentPayload](#intentpayload) | Intent payload |

##### getProperty

**getProperty(propertyName): [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)**

Retrieves value of a given property name from the intent payload.

#### Parameters

| Name                    | Type   |
| ----------------------- | ------ |
| propertyName (required) | string |

### IntentPayload

Set of properties that could be passed between apps.

*Note:* The intent payload contains one or more properties. The properties may be a resource-like (i.e., `dt.entity`, `dt.query`) and may define an additional context (i.e., chosen timeframe, associated problem)
Intents mechanism is the essential part of the platform navigation. It allows to pass the user flow from one app to another and provides the way to plug different apps into these flows, making the platform open and extendable.
Use [sendIntent](#sendintent) to pass the intent payload to the platform.
Use [getIntent](#getintent) to handle intents in your app.

### IntentResponseErrorEnvelope

#### Properties

| Name             | Type        |
| ---------------- | ----------- |
| error (required) | IntentError |
| ok (required)    | false       |

### IntentResponseOkEnvelope

#### Properties

| Name            | Type |
| --------------- | ---- |
| data (required) |      |
| ok (required)   | true |
