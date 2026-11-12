## schedulingRulesClient

```js
import { schedulingRulesClient } from '@dynatrace-sdk/client-automation';
```

### createRule

**schedulingRulesClient.createRule(config): Promise\<[Rule](#rule)>**

**Required scope:** automation:rules:write

#### Parameters

| Name                   | Type                      |
| ---------------------- | ------------------------- |
| config.body (required) | [RuleCreate](#rulecreate) |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Rule](#rule) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulingRulesClient.createRule({
  body: { title: "...", ruleType: "rrule" },
});
```

### deleteRule

**schedulingRulesClient.deleteRule(config): Promise\<void>**

**Required scope:** automation:rules:write

#### Parameters

| Name                 | Type   | Description                          |
| -------------------- | ------ | ------------------------------------ |
| config.id (required) | string | A UUID string identifying this rule. |

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
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulingRulesClient.deleteRule({
  id: "...",
});
```

### duplicateRule

**schedulingRulesClient.duplicateRule(config): Promise\<[Rule](#rule)>**

**Required scope:** automation:rules:write

#### Parameters

| Name                   | Type                                      | Description                          |
| ---------------------- | ----------------------------------------- | ------------------------------------ |
| config.body (required) | [DuplicationRequest](#duplicationrequest) |                                      |
| config.id (required)   | string                                    | A UUID string identifying this rule. |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Rule](#rule) | 201         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulingRulesClient.duplicateRule({
  id: "...",
  body: {},
});
```

### getRule

**schedulingRulesClient.getRule(config): Promise\<[Rule](#rule)>**

**Required scope:** automation:rules:read

#### Parameters

| Name                 | Type   | Description                          |
| -------------------- | ------ | ------------------------------------ |
| config.id (required) | string | A UUID string identifying this rule. |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Rule](#rule) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulingRulesClient.getRule({
  id: "...",
});
```

### getRuleHistoryRecord

**schedulingRulesClient.getRuleHistoryRecord(config): Promise\<[Rule](#rule)>**

**Required scope:** automation:rules:read

#### Parameters

| Name                      | Type   | Description                          |
| ------------------------- | ------ | ------------------------------------ |
| config.id (required)      | string | A UUID string identifying this rule. |
| config.version (required) | string | Pattern: `^[\d]+$`                   |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Rule](#rule) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data =
  await schedulingRulesClient.getRuleHistoryRecord({
    id: "...",
    version: "...",
  });
```

### getRuleHistoryRecords

**schedulingRulesClient.getRuleHistoryRecords(config): Promise\<[PaginatedChangeHistory](#paginatedchangehistory)>**

**Required scope:** automation:rules:read

#### Parameters

| Name                 | Type    | Description                                               |
| -------------------- | ------- | --------------------------------------------------------- |
| config.all           | boolean | When false, the latest historical record is not returned. |
| config.id (required) | string  | A UUID string identifying this rule.                      |

#### Returns

| Return type                                       | Status code | Description |
| ------------------------------------------------- | ----------- | ----------- |
| [PaginatedChangeHistory](#paginatedchangehistory) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data =
  await schedulingRulesClient.getRuleHistoryRecords({
    id: "...",
  });
```

### getRules

**schedulingRulesClient.getRules(config): Promise\<[PaginatedRuleList](#paginatedrulelist)>**

**Required scope:** automation:rules:read

#### Parameters

| Name            | Type   | Description                                         |
| --------------- | ------ | --------------------------------------------------- |
| config.limit    | number | Number of results to return per page.               |
| config.offset   | number | The initial index from which to return the results. |
| config.ordering | string | Which field to use when ordering the results.       |
| config.search   | string | A search term.                                      |

#### Returns

| Return type                             | Status code | Description |
| --------------------------------------- | ----------- | ----------- |
| [PaginatedRuleList](#paginatedrulelist) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulingRulesClient.getRules();
```

### patchRule

**schedulingRulesClient.patchRule(config): Promise\<[Rule](#rule)>**

**Required scope:** automation:rules:write

#### Parameters

| Name                   | Type                      | Description                          |
| ---------------------- | ------------------------- | ------------------------------------ |
| config.body (required) | [RuleUpdate](#ruleupdate) |                                      |
| config.id (required)   | string                    | A UUID string identifying this rule. |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Rule](#rule) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulingRulesClient.patchRule({
  id: "...",
  body: {},
});
```

### ~~previewRule~~

> ⚠️ **Deprecated**

**schedulingRulesClient.previewRule(config): Promise\<[RulePreviewResponse](#rulepreviewresponse)>**

**Required scope:** automation:workflows:read

#### Parameters

| Name                   | Type              |
| ---------------------- | ----------------- |
| config.body (required) | RulePreviewCreate |

#### Returns

| Return type                                 | Status code | Description |
| ------------------------------------------- | ----------- | ----------- |
| [RulePreviewResponse](#rulepreviewresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulingRulesClient.previewRule({
  body: {
    ruleType: "rrule",
    rrule: { freq: "YEARLY", datestart: "..." },
  },
});
```

### restoreRuleHistoryRecord

**schedulingRulesClient.restoreRuleHistoryRecord(config): Promise\<[Rule](#rule)>**

**Required scope:** automation:rules:write

#### Parameters

| Name                      | Type   | Description                          |
| ------------------------- | ------ | ------------------------------------ |
| config.id (required)      | string | A UUID string identifying this rule. |
| config.version (required) | string | Pattern: `^[\d]+$`                   |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Rule](#rule) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data =
  await schedulingRulesClient.restoreRuleHistoryRecord({
    id: "...",
    version: "...",
  });
```

### updateRule

**schedulingRulesClient.updateRule(config): Promise\<[Rule](#rule)>**

**Required scope:** automation:rules:write

#### Parameters

| Name                   | Type                      | Description                          |
| ---------------------- | ------------------------- | ------------------------------------ |
| config.body (required) | [RuleUpdate](#ruleupdate) |                                      |
| config.id (required)   | string                    | A UUID string identifying this rule. |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Rule](#rule) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { schedulingRulesClient } from "@dynatrace-sdk/client-automation";

const data = await schedulingRulesClient.updateRule({
  id: "...",
  body: {},
});
```
