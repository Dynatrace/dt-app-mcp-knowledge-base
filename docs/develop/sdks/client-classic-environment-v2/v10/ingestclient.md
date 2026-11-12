## ingestClient

```js
import { ingestClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### ingest

**ingestClient.ingest(config): Promise\<[ValidationResponse](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#validationresponse)>**

Pushes metric data points to Dynatrace

**One of the following scopes is required:**

- storage:metrics:write
- openpipeline:metrics:ingest

#### Parameters

| Name                   | Type   |
| ---------------------- | ------ |
| config.body (required) | string |

#### Returns

| Return type | Status code | Description                                                          |
| ----------- | ----------- | -------------------------------------------------------------------- |
| void        | 202         | The provided business events are all accepted and will be processed. |

#### Throws

| Error Type              | Error Message                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| ValidationResponseError | Some data points are invalid. Valid data points are accepted and will be processed in the background. |
| ErrorEnvelopeError      | Client side error. \| Server side error.                                                              |

**Code example**

```ts
import { ingestClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await ingestClient.ingest({
  body: "server.cpu.temperature,cpu.id=0 42",
});
```

### storeLog

**ingestClient.storeLog(config): Promise\<void | [SuccessEnvelope](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#successenvelope)>**

Pushes log records to Dynatrace

**One of the following scopes is required:**

- openpipeline:logs:ingest
- storage:logs:write

Ingested logs are stored in Dynatrace.

If you are using this API endpoint on an Environment ActiveGate, the Log Analytics Collector module must be enabled.
This endpoint is not available on Containerized ActiveGate (including Kubernetes deployments).

This endpoint accepts arbitrary query parameters, which are processed as log attribute key-value pairs and added to each ingested log record following the standard rules for log attributes.

**Error handling:**

It is recommended to use an exponential backoff strategy when retrying requests.

#### Parameters

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required)   | LogMessageJson \| LogMessagePlain                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                       |
| config.type (required)   | "application/json; charset=utf-8" \| "application/json" \| "application/jsonl" \| "application/jsonl; charset=utf-8" \| "application/jsonlines" \| "application/jsonlines+json" \| "application/jsonlines+json; charset=utf-8" \| "application/jsonlines; charset=utf-8" \| "application/x-jsonlines" \| "application/x-jsonlines; charset=utf-8" \| "application/x-ndjson" \| "application/x-ndjson; charset=utf-8" \| "text/plain; charset=utf-8" |                                                                                                                                                                                                                                                                                                                                                                                       |
| config.contentType       | string                                                                                                                                                                                                                                                                                                                                                                                                                                              | (Optional) Allows to provide content type with query parameter. Has priority over value provided in Content-Type header.                                                                                                                                                                                                                                                              |
| config.structure         | "raw" \| "flattened"                                                                                                                                                                                                                                                                                                                                                                                                                                | (Optional) Data model used for structuring the input into log records. Allowed values: `raw`, `flattened`. For more details, refer to the [documentation](https://dt-url.net/lyi2yte).                                                                                                                                                                                                |
| config.xDynatraceAttr    | string                                                                                                                                                                                                                                                                                                                                                                                                                                              | (Optional) Contains ampersand‑separated key–value pairs representing additional log attributes to be added to each ingested log record. If the same key appears multiple times, all values are captured as a multi‑value attribute. Query parameters take precedence over values provided in this header. For more details, refer to the [documentation](https://dt-url.net/2f4394a). |
| config.xDynatraceOptions | string                                                                                                                                                                                                                                                                                                                                                                                                                                              | (Optional) Contains ampersand-separated Dynatrace-specific parameters. Supported options: (SaaS only) `structure` (values: `raw`, `flattened`) defines how input data is structured into log records. Query parameters take precedence over header values. For more details, refer to the [documentation](https://dt-url.net/lyi2yte).                                                |

#### Returns

| Return type                                                                                                                | Status code | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| [SuccessEnvelope](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#successenvelope) | 200         | Only a part of input events were ingested due to event invalidity. For details, check the response body. |
| void                                                                                                                       | 204         | Success. Response doesn't have a body.                                                                   |

#### Throws

| Error Type         | Error Message                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorEnvelopeError | Failed. The input is invalid. \| Failed. This is due either to the status of your licensing agreement or because you've exhausted your [DPS license](https://www.dynatrace.com/support/help/shortlink/dynatrace-platform-subscription). \| Failed. The requested resource doesn't exist. This may happen when no ActiveGate is available with the Log Analytics Collector module enabled. \| Failed. Request payload size is too big. This may happen when the payload byte size exceeds the limit or when the ingested payload is a JSON array with the size exceeding the limit. \| Failed. Too Many Requests. This may happen when ActiveGate is unable to process more requests at the moment or when log ingest is disabled. Retryable with exponential backoff strategy. \| Failed. The server either does not recognize the request method, or it lacks the ability to fulfil the request. In Log Monitoring Classic, this may happen when indexed log storage is not enabled. \| Failed. The server is currently unable to handle the request. This may happen when ActiveGate is overloaded. Retryable with exponential backoff strategy. \| Client side error. \| Server side error. |

**Code example**

```ts
import { ingestClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await ingestClient.storeLog({
  type: "application/json",
  body: [
    {
      content:
        "Exception: Custom error log sent via Generic Log Ingest",
      "log.source": "/var/log/syslog",
      timestamp: "2025-12-17T22:12:31.0000",
      severity: "error",
      "custom.attribute": "attribute value",
      complex: {
        "key-1": "attribute value-1",
        "key-2": 234.2,
      },
      "array.attr": [
        "value-1",
        1,
        null,
        true,
        [1, 2, 3],
        { key: "value" },
      ],
    },
    {
      message: "User1 logged in successfully",
      "log.source": "/var/log/syslog",
      "@timestamp": "1765281600",
    },
    {
      payload:
        "Exception: Custom error log sent via Generic Log Ingest",
      "log.source": "/var/log/syslog",
    },
    { log: "My log message without additional attributes" },
  ],
});
```
