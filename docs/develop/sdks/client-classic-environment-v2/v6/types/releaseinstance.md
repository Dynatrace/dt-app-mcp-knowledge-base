### ReleaseInstance

Contains data related to a single instance of a release.
An instance is a Process Group Instance and has an optional build version.

| Name                    | Type           | Description                          |
| ----------------------- | -------------- | ------------------------------------ |
| buildVersion            | string         | The build version                    |
| entityId                | string         | The entity id of the instance.       |
| problems                | Array\<string> | List of event Ids of open problems   |
| securityVulnerabilities | Array\<string> | List of Security vulnerabilities Ids |
