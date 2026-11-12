### RequestInformation

Describes the complete request information of an attack.

| Name            | Type                                | Description                                     |
| --------------- | ----------------------------------- | ----------------------------------------------- |
| host            | string                              | The target host of the request.                 |
| path            | string                              | The request path.                               |
| protocolDetails | [ProtocolDetails](#protocoldetails) | Details that are specific to the used protocol. |
| url             | string                              | The requested URL.                              |
