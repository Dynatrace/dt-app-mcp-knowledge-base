### RevisionDiffPage

The paged response payload for diff between revisions of settings.

| Name                 | Type                                  | Description                                                                                                                                                                                                            |
| -------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endTime (required)   | string                                | The 'to' time in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z') from the original request.<br /><br />**Example:** `2024-06-24T01:02:03Z`                                                                              |
| items (required)     | Array\<[RevisionDiff](#revisiondiff)> | The list of revisions changes in the current page.                                                                                                                                                                     |
| nextPageKey          | string                                | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize (required)  | number                                | The number of entries per page.                                                                                                                                                                                        |
| startTime (required) | string                                | The 'from' time in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z') from the original request.<br /><br />**Example:** `2024-06-10T01:02:03Z`                                                                            |
