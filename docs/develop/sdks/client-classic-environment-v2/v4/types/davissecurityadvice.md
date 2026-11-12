### DavisSecurityAdvice

Security advice from the Davis security advisor.

| Name                | Type                                                                          | Description                                                                                             |
| ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| adviceType          | "UPGRADE"                                                                     | The type of the advice.                                                                                 |
| critical            | Array\<string>                                                                | IDs of `critical` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. |
| high                | Array\<string>                                                                | IDs of `high` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component.     |
| low                 | Array\<string>                                                                | IDs of `low` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component.      |
| medium              | Array\<string>                                                                | IDs of `medium` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component.   |
| name                | string                                                                        | The name of the advice.                                                                                 |
| none                | Array\<string>                                                                | IDs of `none` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component.     |
| technology          | "KUBERNETES" \| "DOTNET" \| "GO" \| "JAVA" \| "NODE_JS" \| "PHP" \| "PYTHON" | The technology of the vulnerable component.                                                             |
| vulnerableComponent | string                                                                        | The vulnerable component to which advice applies.                                                       |
