## webhookHandlersClient

```js
import { webhookHandlersClient } from '@dynatrace-sdk/client-automation';
```

### deleteWebhookHandler

**webhookHandlersClient.deleteWebhookHandler(config): Promise\<void>**

**Required scope:** automation:webhookhandlers:write

#### Parameters

| Name                           | Type   | Description                                              |
| ------------------------------ | ------ | -------------------------------------------------------- |
| config.connectionId (required) | string | The ID of the connection this webhook handler belongs to |

#### Returns

| Return type | Status code | Description      |
| ----------- | ----------- | ---------------- |
| void        | 204         | No response body |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { webhookHandlersClient } from "@dynatrace-sdk/client-automation";

const data =
  await webhookHandlersClient.deleteWebhookHandler({
    connectionId: "...",
  });
```

### getWebhookHandler

**webhookHandlersClient.getWebhookHandler(config): Promise\<[WebhookHandler](#webhookhandler)>**

**Required scope:** automation:webhookhandlers:read

#### Parameters

| Name                           | Type   | Description                                              |
| ------------------------------ | ------ | -------------------------------------------------------- |
| config.connectionId (required) | string | The ID of the connection this webhook handler belongs to |

#### Returns

| Return type                       | Status code | Description |
| --------------------------------- | ----------- | ----------- |
| [WebhookHandler](#webhookhandler) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { webhookHandlersClient } from "@dynatrace-sdk/client-automation";

const data = await webhookHandlersClient.getWebhookHandler({
  connectionId: "...",
});
```

### getWebhookHandlers

**webhookHandlersClient.getWebhookHandlers(config): Promise\<Array\<[WebhookHandlerList](#webhookhandlerlist)>>**

**Required scope:** automation:webhookhandlers:read

#### Returns

| Return type                               | Status code | Description |
| ----------------------------------------- | ----------- | ----------- |
| [WebhookHandlerList](#webhookhandlerlist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { webhookHandlersClient } from "@dynatrace-sdk/client-automation";

const data =
  await webhookHandlersClient.getWebhookHandlers();
```

### writeWebhookHandler

**webhookHandlersClient.writeWebhookHandler(config): Promise\<[WebhookHandler](#webhookhandler)>**

**Required scope:** automation:webhookhandlers:write

#### Parameters

| Name                           | Type                              | Description                                              |
| ------------------------------ | --------------------------------- | -------------------------------------------------------- |
| config.body (required)         | [WebhookHandler](#webhookhandler) |                                                          |
| config.connectionId (required) | string                            | The ID of the connection this webhook handler belongs to |

#### Returns

| Return type                       | Status code | Description |
| --------------------------------- | ----------- | ----------- |
| [WebhookHandler](#webhookhandler) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { webhookHandlersClient } from "@dynatrace-sdk/client-automation";

const data =
  await webhookHandlersClient.writeWebhookHandler({
    connectionId: "...",
    body: {
      connectionId: "...",
      webhookUrl: "...",
      active: false,
      validationMethod: "slack",
      eventSignatureHeader: "...",
    },
  });
```
