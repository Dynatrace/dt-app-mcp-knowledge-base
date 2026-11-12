### InteractionStepDto

Interaction step of Browser Monitor.

| Name              | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button (required) | "MOUSE_LEFT" \| "MOUSE_MIDDLE" \| "MOUSE_RIGHT"                                             | Integer containing the button index.                                                                                                                                                                                                                                                                                                                       |
| entityId          | null \| string                                                                                 | Entity Id.                                                                                                                                                                                                                                                                                                                                                 |
| name (required)   | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
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
