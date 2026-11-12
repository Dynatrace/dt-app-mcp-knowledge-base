### Node

Configuration of a synthetic node.

A *synthetic node* is an ActiveGate that is able to execute synthetic monitors.

| Name                              | Type           | Description                                                                       |
| --------------------------------- | -------------- | --------------------------------------------------------------------------------- |
| activeGateVersion (required)      | string         | The version of the Active Gate.                                                   |
| autoUpdateEnabled (required)      | boolean        | The Active Gate has the Auto update option enabled ('true') or not ('false')      |
| browserMonitorsEnabled (required) | boolean        | The synthetic node is able to execute browser monitors (`true`) or not (`false`). |
| browserType (required)            | string         | The browser type.                                                                 |
| browserVersion (required)         | string         | The browser version.                                                              |
| capabilities (required)           | Array\<string> | The list of node's capabilities.                                                  |
| entityId (required)               | string         | The ID of the synthetic node.                                                     |
| healthCheckStatus (required)      | string         | The health check status of the synthetic node.                                    |
| hostname (required)               | string         | The hostname of the synthetic node.                                               |
| ips (required)                    | Array\<string> | The IP of the synthetic node.                                                     |
| oneAgentRoutingEnabled (required) | boolean        | The Active Gate has the One Agent routing enabled ('true') or not ('false').      |
| operatingSystem (required)        | string         | The Active Gate's host operating system.                                          |
| playerVersion (required)          | string         | The version of the synthetic player.                                              |
| status (required)                 | string         | The status of the synthetic node.                                                 |
| version (required)                | string         | The version of the synthetic node.                                                |
