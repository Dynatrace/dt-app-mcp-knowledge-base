## serviceLevelObjectivesEvaluationClient

```js
import { serviceLevelObjectivesEvaluationClient } from '@dynatrace-sdk/client-service-level-objectives';
```

### cancelSloEvaluation

**serviceLevelObjectivesEvaluationClient.cancelSloEvaluation(config): Promise\<void | [SloEvaluationCancelResponse](#sloevaluationcancelresponse)>**

Cancels the SLO evaluation and returns the result if the evaluation was already finished, otherwise discards it.

**Required scope:** slo:slos:read

For information about the required Grail permissions, see the [Bucket and table permissions in Grail documentation](https://dt-url.net/hs23z40).

#### Parameters

| Name                              | Type   |
| --------------------------------- | ------ |
| config.evaluationToken (required) | string |

#### Returns

| Return type                                                 | Status code | Description                                                |
| ----------------------------------------------------------- | ----------- | ---------------------------------------------------------- |
| [SloEvaluationCancelResponse](#sloevaluationcancelresponse) | 200         | SLO evaluation result                                      |
| void                                                        | 202         | The SLO evaluation was still running and is now cancelled. |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| Gone                | The SLO Evaluation for the given evaluationToken isn't available anymore.                                                                                                |
| TooManyRequests     | The client has sent too many requests in a given amount of time and has been rate-limited.                                                                               |
| InternalServerError | Internal server error.                                                                                                                                                   |

**Code example**

```ts
import { serviceLevelObjectivesEvaluationClient } from "@dynatrace-sdk/client-service-level-objectives";

const data =
  await serviceLevelObjectivesEvaluationClient.cancelSloEvaluation(
    { evaluationToken: "FQ5aVZERXZNMjR1SzVnPT0ifQ==" },
  );
```

### pollSloEvaluation

**serviceLevelObjectivesEvaluationClient.pollSloEvaluation(config): Promise\<[SloEvaluationResponse](#sloevaluationresponse)>**

Polls an SLO evaluation

**Required scope:** slo:slos:read

For information about the required Grail permissions, see the [Bucket and table permissions in Grail documentation](https://dt-url.net/hs23z40).

#### Parameters

| Name                              | Type   | Description                                                                                                                                                                                                                                 |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.evaluationToken (required) | string |                                                                                                                                                                                                                                             |
| config.requestTimeoutMilliseconds | number | How long to wait for the evaluation result before returning in milliseconds. If the evaluation finishes within this time, the result is returned directly (`200`). If not, the response contains the `evaluationToken` for further polling. |

#### Returns

| Return type                                     | Status code | Description           |
| ----------------------------------------------- | ----------- | --------------------- |
| [SloEvaluationResponse](#sloevaluationresponse) | 200         | SLO evaluation result |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| Gone                | The SLO Evaluation for the given evaluationToken isn't available anymore.                                                                                                |
| TooManyRequests     | The client has sent too many requests in a given amount of time and has been rate-limited.                                                                               |
| InternalServerError | Internal server error.                                                                                                                                                   |

**Code example**

```ts
import { serviceLevelObjectivesEvaluationClient } from "@dynatrace-sdk/client-service-level-objectives";

const data =
  await serviceLevelObjectivesEvaluationClient.pollSloEvaluation(
    { evaluationToken: "FQ5aVZERXZNMjR1SzVnPT0ifQ==" },
  );
```

### startSloEvaluation

**serviceLevelObjectivesEvaluationClient.startSloEvaluation(config): Promise\<[SloEvaluationResponse](#sloevaluationresponse)>**

Starts an SLO evaluation

**Required scope:** slo:slos:read

For information about the required Grail permissions, see the [Bucket and table permissions in Grail documentation](https://dt-url.net/hs23z40).

#### Parameters

| Name                   | Type                                          |
| ---------------------- | --------------------------------------------- |
| config.body (required) | [SloEvaluationRequest](#sloevaluationrequest) |

#### Returns

| Return type                                     | Status code | Description            |
| ----------------------------------------------- | ----------- | ---------------------- |
| [SloEvaluationResponse](#sloevaluationresponse) | 200         | SLO evaluation result  |
| [SloEvaluationResponse](#sloevaluationresponse) | 202         | SLO evaluation started |

#### Throws

| Error Type          | Error Message                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest          | Malformed request or invalid parameters.                                                                                                                                 |
| Unauthorized        | API token or tenant missing or corrupt.                                                                                                                                  |
| Forbidden           | Access forbidden. This usually happens because the user lacks the permission to access the specific endpoint, or because the target entity isn't accessible to the user. |
| TooManyRequests     | The client has sent too many requests in a given amount of time and has been rate-limited.                                                                               |
| InternalServerError | Internal server error.                                                                                                                                                   |

**Code example**

```ts
import { serviceLevelObjectivesEvaluationClient } from "@dynatrace-sdk/client-service-level-objectives";

const data =
  await serviceLevelObjectivesEvaluationClient.startSloEvaluation(
    {
      body: {
        id: "A5LTU5YTVjNTcxODI5OL7vVN4V2t6t",
        customTimeframe: { timeframeFrom: "now-7d" },
      },
    },
  );
```
