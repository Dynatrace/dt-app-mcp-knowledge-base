### SelectOptionStepDto

Select option step of Browser Monitor.

| Name                  | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityId              | null \| string                                                                                 | Entity Id.                                                                                                                                                                                                                                                                                                                                                 |
| name (required)       | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| selections (required) | Array\<[SelectionDto](#selectiondto)>                                                          | Field containing the credential.                                                                                                                                                                                                                                                                                                                           |
| target                | null \| [TargetDto](#targetdto)                                                                | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required)       | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
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
| validationRules       | null \| Array\<[ValidationRuleDto](#validationruledto)>                                        | List of validation rules for the step to perform.                                                                                                                                                                                                                                                                                                          |
| waitCondition         | null \| [BaseWaitConditionDto](#basewaitconditiondto)                                          | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |
