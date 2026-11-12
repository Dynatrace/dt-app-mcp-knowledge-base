### EventTypeList

A list of event types.

| Name                  | Type                            | Description                                                                                                                                                                                                            |
| --------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventTypeInfos        | Array\<[EventType](#eventtype)> | A list of event types.                                                                                                                                                                                                 |
| nextPageKey           | null \| string                  | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | null \| number                  | The number of entries per page.                                                                                                                                                                                        |
| totalCount (required) | number                          | The total number of entries in the result.                                                                                                                                                                             |
