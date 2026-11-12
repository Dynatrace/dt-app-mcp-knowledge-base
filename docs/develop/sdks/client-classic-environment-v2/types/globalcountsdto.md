### GlobalCountsDto

Globally calculated statistics about the security problem. No management zone information is taken into account.

| Name                          | Type   | Description                                       |
| ----------------------------- | ------ | ------------------------------------------------- |
| affectedNodes                 | number | Number of affected nodes                          |
| affectedProcessGroupInstances | number | Number of affected process group instances        |
| affectedProcessGroups         | number | Number of affected process groups                 |
| exposedProcessGroups          | number | Number of exposed process groups                  |
| reachableDataAssets           | number | Number of reachable data assets exposed           |
| relatedApplications           | number | Number of related applications                    |
| relatedAttacks                | number | Number of attacks on the exposed security problem |
| relatedHosts                  | number | Number of related hosts                           |
| relatedKubernetesClusters     | number | Number of related kubernetes cluster              |
| relatedKubernetesWorkloads    | number | Number of related kubernetes workloads            |
| relatedServices               | number | Number of related services                        |
| vulnerableComponents          | number | Number of vulnerable components                   |
