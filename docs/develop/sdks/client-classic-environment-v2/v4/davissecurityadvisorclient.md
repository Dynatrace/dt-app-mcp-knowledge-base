## davisSecurityAdvisorClient

```js
import { davisSecurityAdvisorClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### getAdviceForSecurityProblems

**davisSecurityAdvisorClient.getAdviceForSecurityProblems(config): Promise\<[DavisSecurityAdviceList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#davissecurityadvicelist)>**

Provides advice for security problems.

**Required scope:** environment-api:security-problems:read
**One of the following permissions is required:**

- environment:roles:manage-security-problems
- environment:roles:view-security-problems

You can narrow down the output by providing the management zone and pagination. If you specify a management zone, only problems originating from that zone are included to the request.

#### Parameters

| Name                        | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.managementZoneFilter | string | To specify management zones, use one of the options listed below. For each option you can specify multiple comma-separated values. If several values are specified, the **OR** logic applies. All values are case-sensitive and must be quoted. * Management zone ID: ids("mzId-1", "mzId-2").
* Management zone names: names("mz-1", "mz-2"). You can specify several comma-separated criteria (for example, `names("myMz"),ids("9130632296508575249")`). |
| config.nextPageKey          | string | The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response. The first page is always returned if you don't specify the **nextPageKey** query parameter. When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.                                                                                                                                          |
| config.pageSize             | number | The amount of security advices in a single response payload. The maximal allowed page size is 500. If not set, 5 is used.                                                                                                                                                                                                                                                                                                                                  |

#### Returns

| Return type                                                                                                                               | Status code | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| [DavisSecurityAdviceList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v4/types.md#davissecurityadvicelist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { davisSecurityAdvisorClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data =
  await davisSecurityAdvisorClient.getAdviceForSecurityProblems();
```
