### Releases

A list of releases.

| Name                  | Type                        | Description                                                                                                                                                                |
| --------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nextPageKey           | string                      | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. |
| pageSize              | number                      | The number of entries per page.                                                                                                                                            |
| releases              | Array\<[Release](#release)> | A list of releases.                                                                                                                                                        |
| releasesWithProblems  | number                      | Number of releases with problems.                                                                                                                                          |
| totalCount (required) | number                      | The total number of entries in the result.                                                                                                                                 |
