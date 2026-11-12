### ObjectsList

A list of settings objects.

| Name                  | Type                                      | Description                                                                                                                                                                |
| --------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| items (required)      | Array\<[SettingsObject](#settingsobject)> | A list of settings objects.                                                                                                                                                |
| nextPageKey           | string                                    | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. |
| pageSize (required)   | number                                    | The number of entries per page.                                                                                                                                            |
| totalCount (required) | number                                    | The total number of entries in the result.                                                                                                                                 |
