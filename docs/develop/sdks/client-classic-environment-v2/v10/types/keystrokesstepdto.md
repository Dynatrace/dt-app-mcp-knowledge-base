### KeyStrokesStepDto

Key strokes step of Browser Monitor.

| Name              | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityId          | null \| string                                                                                 | Entity Id.                                                                                                                                                                                                                                                                                                                                                 |
| input (required)  | [KeystrokesInputDto](#keystrokesinputdto)                                                      | Key strokes step input.                                                                                                                                                                                                                                                                                                                                    |
| name (required)   | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| simulateBlurEvent | null \| boolean                                                                                | Boolean value set to true if blur event should be simulated.                                                                                                                                                                                                                                                                                               |
| simulateReturnKey | null \| boolean                                                                                | Boolean value set to true if return key should be simulated.                                                                                                                                                                                                                                                                                               |
| target            | null \| [TargetDto](#targetdto)                                                                | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required)   | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |
| validationRules   | null \| Array\<[ValidationRuleDto](#validationruledto)>                                        | List of validation rules for the step to perform.                                                                                                                                                                                                                                                                                                          |
| waitCondition     | null \| [BaseWaitConditionDto](#basewaitconditiondto)                                          | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |
