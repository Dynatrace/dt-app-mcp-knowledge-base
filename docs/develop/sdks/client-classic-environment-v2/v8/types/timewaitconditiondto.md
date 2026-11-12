### TimeWaitConditionDto

Time wait condition for Browser Monitor step.

| Name                    | Type                                                                     | Description                                                                                                                                                                                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| milliseconds (required) | number                                                                   | Wait time in milliseconds.<br /><br />**Minimum:** `0`                                                                                                                                                                                                                                                       |
| type (required)         | "NETWORK" \| "NEXT_EVENT" \| "PAGE_COMPLETE" \| "TIME" \| "VALIDATION" | Defines the actual set of fields depending on the value. See one of the following objects: * `TIME`
   -> TimeWaitConditionDto
* `VALIDATION`
   -> ValidationWaitConditionDto
* `PAGE_COMPLETE`
   -> BaseWaitConditionDto
* `NETWORK`
   -> BaseWaitConditionDto
* `NEXT_EVENT`
   -> BaseWaitConditionDto |
