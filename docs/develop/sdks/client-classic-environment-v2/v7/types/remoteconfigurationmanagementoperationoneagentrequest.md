### RemoteConfigurationManagementOperationOneAgentRequest

Remote configuration management operation creation request.

| Name                  | Type                                                                                      | Description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| entities (required)   | Array\<string>                                                                            | A list of entities IDs for which remote configuration management is to be executed. |
| operations (required) | Array\<[RemoteConfigurationManagementOperation](#remoteconfigurationmanagementoperation)> | A list of remote configuration management operations to be executed.                |
