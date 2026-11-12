## versionClient

```js
import { versionClient } from '@dynatrace-sdk/client-automation';
```

### getVersion

**versionClient.getVersion(config): Promise\<[VersionResponse](#versionresponse)>**

**Required scope:** automation:workflows:read

#### Returns

| Return type                         | Status code | Description |
| ----------------------------------- | ----------- | ----------- |
| [VersionResponse](#versionresponse) | 200         |             |

#### Throws

| Error Type         | Error Message |
| ------------------ | ------------- |
| ErrorEnvelopeError |               |

**Code example**

```ts
import { versionClient } from "@dynatrace-sdk/client-automation";

const data = await versionClient.getVersion();
```
