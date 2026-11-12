### RemoteConfigurationManagementOperationOneAgentRequest

Remote configuration management operation creation request.

| Name                  | Type                                                                                      | Description                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entities (required)   | Array\<string>                                                                            | A list of entities IDs for which remote configuration management is to be executed.<br /><br />**Example:** `["HOST-D454A967666E7970","HOST-811760CFF2A5E872"]` |
| operations (required) | Array\<[RemoteConfigurationManagementOperation](#remoteconfigurationmanagementoperation)> | A list of remote configuration management operations to be executed.                                                                                            |
