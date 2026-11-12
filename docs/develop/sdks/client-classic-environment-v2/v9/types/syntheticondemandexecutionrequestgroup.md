### SyntheticOnDemandExecutionRequestGroup

Contains parameters for the on-demand execution of monitors identified by tags, applications, or services.

| Name         | Type           | Description                                                                                     |
| ------------ | -------------- | ----------------------------------------------------------------------------------------------- |
| applications | Array\<string> | List of application identifiers. Only monitors with all applications assigned will be executed. |
| locations    | Array\<string> | The locations from where monitors are to be executed.                                           |
| services     | Array\<string> | List of service identifiers. Only monitors with all services assigned will be executed.         |
| tags         | Array\<string> | List of tags. Only monitors with all tags assigned will be executed.                            |
