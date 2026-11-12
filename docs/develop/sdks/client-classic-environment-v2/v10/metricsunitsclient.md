## metricsUnitsClient

```js
import { metricsUnitsClient } from '@dynatrace-sdk/client-classic-environment-v2';
```

### allUnits

**metricsUnitsClient.allUnits(config): Promise\<[UnitList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#unitlist)>**

Lists all available units

**Required scope:** environment-api:metrics:read
**Required permission:** environment:roles:viewer

You can narrow down the output by providing filter criteria in the **unitSelector** field.

#### Parameters

| Name                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.fields       | string | Defines the list of properties to be included in the response. The ID of the unit is **always** included. The following additional properties are available: * `displayName`
  : The display name of the unit.
* `symbol`
  : The symbol of the unit.
* `description`
  : A short description of the unit. By default, the ID, the display name, and the symbol are included. To add properties, list them with leading plus `+`. To exclude default properties, list them with leading minus `-`. To specify several properties, join them with a comma (for example `fields=+description,-symbol`). If you specify just one property, the response contains the unitId and the specified property. To return unit IDs only, specify `unitId` here. |
| config.unitSelector | string | Selects units to be included to the response. Available criteria: * Compatibility:&#x20;
  `compatibleTo("unit","display-format")`
  . Returns units that can be converted to the specified unit. The optional display format (
  `binary`
   or&#x20;
  `decimal`
  ) argument is supported by bit- and byte-based units and returns only units for the specified format.                                                                                                                                                                                                                                                                                                                                                                           |

#### Returns

| Return type                                                                                                  | Status code | Description |
| ------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [UnitList](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#unitlist) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { metricsUnitsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsUnitsClient.allUnits();
```

### convert

**metricsUnitsClient.convert(config): Promise\<[UnitConversionResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#unitconversionresult)>**

Converts a value from a source unit into a target unit

**Required scope:** environment-api:metrics:read
**Required permission:** environment:roles:viewer

If no target unit is set, the request finds an appropriate target unit automatically, taking into account the preferred number format (if specified).

#### Parameters

| Name                     | Type   | Description                                                                                                                                               |
| ------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.numberFormat      | string | The preferred number format of the target value. You can specify the following formats: * `binary`
* `decimal` \`Only used if the target unit if not set. |
| config.targetUnit        | string | The ID of the target unit. If not set, the request finds an appropriate target unit automatically, based on the specified number format.                  |
| config.unitId (required) | string | The ID of the source unit.                                                                                                                                |
| config.value (required)  | number | The value to be converted.                                                                                                                                |

#### Returns

| Return type                                                                                                                          | Status code | Description |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ----------- |
| [UnitConversionResult](https://developer.dynatrace.com/develop/sdks/client-classic-environment-v2/v10/types.md#unitconversionresult) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { metricsUnitsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsUnitsClient.convert({
  unitId: "...",
  value: 10,
});
```

### unit

**metricsUnitsClient.unit(config): Promise\<[Unit](#unit)>**

Gets the properties of the specified unit

**Required scope:** environment-api:metrics:read
**Required permission:** environment:roles:viewer

#### Parameters

| Name                     | Type   |
| ------------------------ | ------ |
| config.unitId (required) | string |

#### Returns

| Return type   | Status code | Description |
| ------------- | ----------- | ----------- |
| [Unit](#unit) | 200         | Success     |

#### Throws

| Error Type         | Error Message                            |
| ------------------ | ---------------------------------------- |
| ErrorEnvelopeError | Client side error. \| Server side error. |

**Code example**

```ts
import { metricsUnitsClient } from "@dynatrace-sdk/client-classic-environment-v2";

const data = await metricsUnitsClient.unit({
  unitId: "...",
});
```
