### Problems

A list of problems.

| Name                  | Type                        | Description                                                                                                                                                                                                            |
| --------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nextPageKey           | null \| string              | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | null \| number              | The number of entries per page.                                                                                                                                                                                        |
| problems (required)   | Array\<[Problem](#problem)> | The result entries.                                                                                                                                                                                                    |
| totalCount (required) | number                      | The total number of entries in the result.                                                                                                                                                                             |
| warnings              | Array\<string>              | A list of warnings                                                                                                                                                                                                     |
