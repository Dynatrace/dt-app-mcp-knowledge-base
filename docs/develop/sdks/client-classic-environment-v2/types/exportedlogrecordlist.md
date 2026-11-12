### ExportedLogRecordList

A list of exported log records.

| Name                  | Type                            | Description                                                                                                                                                                                                            |
| --------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nextPageKey           | string                          | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. <br /><br />**Example:** `AQAAABQBAAAABQ==` |
| pageSize              | number                          | The number of entries per page.                                                                                                                                                                                        |
| results               | Array\<[LogRecord](#logrecord)> | A list of retrieved log records.                                                                                                                                                                                       |
| totalCount (required) | number                          | The total number of entries in the result.                                                                                                                                                                             |
| warnings              | string                          | Optional warning messages.                                                                                                                                                                                             |
