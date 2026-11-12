### AttackSecurityProblemAssessmentDto

The assessment of a security problem related to an attack.

| Name                        | Type                                                     | Description                                                 |
| --------------------------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| dataAssets                  | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "REACHABLE"       | The reachability of data assets by the attacked target.     |
| exposure                    | "NOT_AVAILABLE" \| "NOT_DETECTED" \| "PUBLIC_NETWORK" | The level of exposure of the attacked target                |
| numberOfReachableDataAssets | number                                                   | The number of data assets reachable by the attacked target. |
