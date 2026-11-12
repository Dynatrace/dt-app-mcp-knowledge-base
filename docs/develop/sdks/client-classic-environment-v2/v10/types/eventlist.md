### EventList

A list of events.

| Name                  | Type                            | Description                                                                                                                                                                                                            |
| --------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| events                | Array\<null \| [Event](#event)> | A list of events.                                                                                                                                                                                                      |
| nextPageKey           | null \| string                  | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | null \| number                  | The number of entries per page.                                                                                                                                                                                        |
| totalCount (required) | number                          | The total number of entries in the result.                                                                                                                                                                             |
| warnings              | Array\<string>                  | A list of warnings.                                                                                                                                                                                                    |
