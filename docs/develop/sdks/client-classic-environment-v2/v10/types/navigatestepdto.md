### NavigateStepDto

Step of Browser Monitor that navigates to a website.

| Name            | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authentication  | null \| [AuthenticationDto](#authenticationdto)                                                | Authentication dto for Browser Monitor step.                                                                                                                                                                                                                                                                                                               |
| entityId        | null \| string                                                                                 | Entity Id.                                                                                                                                                                                                                                                                                                                                                 |
| name (required) | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| target          | null \| [TargetDto](#targetdto)                                                                | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required) | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
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
| url (required)  | string                                                                                         | Field containing the url that the monitor should navigate to.                                                                                                                                                                                                                                                                                              |
| validationRules | null \| Array\<[ValidationRuleDto](#validationruledto)>                                        | List of validation rules for the step to perform.                                                                                                                                                                                                                                                                                                          |
| waitCondition   | null \| [BaseWaitConditionDto](#basewaitconditiondto)                                          | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |
