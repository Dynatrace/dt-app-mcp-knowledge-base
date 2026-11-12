### RelatedEntitiesList

A list of related entities of the security problem.

A related entity is a monitored entity that is directly or indirectly related to an *affected entity* (for example, it could be a host where an affected process runs).

Each related entity contains a list of corresponding affected entities (for example, an affected process running on this host).

| Name                | Type                                      | Description                             |
| ------------------- | ----------------------------------------- | --------------------------------------- |
| applications        | Array\<[RelatedEntity](#relatedentity)>   | A list of related applications.         |
| databases           | Array\<string>                            | A list of related databases.            |
| hosts               | Array\<[RelatedEntity](#relatedentity)>   | A list of related hosts.                |
| kubernetesClusters  | Array\<[RelatedEntity](#relatedentity)>   | A list of related Kubernetes clusters.  |
| kubernetesWorkloads | Array\<[RelatedEntity](#relatedentity)>   | A list of related Kubernetes workloads. |
| services            | Array\<[RelatedService](#relatedservice)> | A list of related services.             |
