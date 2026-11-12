### AttackEntrypoint

Describes the entrypoint used by an attacker to start a specific attack.

| Name               | Type                                                                | Description                                                     |
| ------------------ | ------------------------------------------------------------------- | --------------------------------------------------------------- |
| codeLocation       | [CodeLocation](#codelocation)                                       | Information about a code location.                              |
| entrypointFunction | [FunctionDefinition](#functiondefinition)                           | Information about a function definition.                        |
| payload            | Array\<[AttackEntrypointPayloadItem](#attackentrypointpayloaditem)> | All relevant payload data that has been sent during the attack. |
