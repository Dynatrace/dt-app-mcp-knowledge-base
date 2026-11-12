### AttackList

A list of attacks.

| Name                  | Type                      | Description                                                                                                                                                                                                            |
| --------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attacks               | Array\<[Attack](#attack)> | A list of attacks.                                                                                                                                                                                                     |
| nextPageKey           | string                    | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | number                    | The number of entries per page.                                                                                                                                                                                        |
| totalCount (required) | number                    | The total number of entries in the result.                                                                                                                                                                             |
