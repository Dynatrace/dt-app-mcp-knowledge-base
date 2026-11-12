### MonitoredStates

A list of process group instances and their monitoring states.

| Name             | Type                                                    | Description                                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| monitoringStates | Array\<[MonitoredEntityStates](#monitoredentitystates)> | A list of process group instances and their monitoring states.                                                                                                                                                         |
| nextPageKey      | null \| string                                          | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize         | null \| number                                          | The number of entries per page.                                                                                                                                                                                        |
| totalCount       | number                                                  | The total number of unique process group instances in the response.                                                                                                                                                    |
