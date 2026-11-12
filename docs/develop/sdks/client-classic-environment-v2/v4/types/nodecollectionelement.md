### NodeCollectionElement

The short representation of a synthetic object. Only contains the ID and the display name.

| Name                              | Type           | Description                                                                  |
| --------------------------------- | -------------- | ---------------------------------------------------------------------------- |
| activeGateVersion (required)      | string         | The version of the Active Gate.                                              |
| autoUpdateEnabled (required)      | boolean        | The Active Gate has the Auto update option enabled ('true') or not ('false') |
| browserMonitorsEnabled (required) | boolean        | Browser check capabilities enabled flag.                                     |
| entityId (required)               | string         | The ID of a node.                                                            |
| healthCheckStatus (required)      | string         | The health check status of the synthetic node.                               |
| hostname (required)               | string         | The hostname of a node.                                                      |
| ips (required)                    | Array\<string> | The IP of a node.                                                            |
| oneAgentRoutingEnabled (required) | boolean        | The Active Gate has the One Agent routing enabled ('true') or not ('false'). |
| operatingSystem (required)        | string         | The Active Gate's host operating system.                                     |
| playerVersion (required)          | string         | The version of the synthetic player.                                         |
| status (required)                 | string         | The status of the synthetic node.                                            |
| version (required)                | string         | The version of a node                                                        |
