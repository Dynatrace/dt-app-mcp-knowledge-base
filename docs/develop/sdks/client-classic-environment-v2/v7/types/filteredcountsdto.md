### FilteredCountsDto

Statistics about the security problem, filtered by the management zone and timeframe start ('from') query parameters.

| Name                          | Type   | Description                            |
| ----------------------------- | ------ | -------------------------------------- |
| affectedNodes                 | number | Number of affected nodes               |
| affectedProcessGroupInstances | number | Number of affected processes           |
| affectedProcessGroups         | number | Number of affected process groups      |
| exposedProcessGroups          | number | Number of exposed process groups       |
| reachableDataAssets           | number | Number of reachable data assets        |
| relatedApplications           | number | Number of related applications         |
| relatedAttacks                | number | Number of related attacks              |
| relatedDatabases              | number | Number of related databases            |
| relatedHosts                  | number | Number of related hosts                |
| relatedKubernetesClusters     | number | Number of related Kubernetes clusters  |
| relatedKubernetesWorkloads    | number | Number of related Kubernetes workloads |
| relatedServices               | number | Number of related services             |
| vulnerableComponents          | number | Number of vulnerable components        |
