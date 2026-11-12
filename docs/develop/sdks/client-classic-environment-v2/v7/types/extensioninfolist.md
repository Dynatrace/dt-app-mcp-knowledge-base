### ExtensionInfoList

| Name                  | Type                                    | Description                                                                                                                                                                |
| --------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| extensions (required) | Array\<[ExtensionInfo](#extensioninfo)> | A list of extensions with additional metadata.                                                                                                                             |
| nextPageKey           | string                                  | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. |
| pageSize              | number                                  | The number of entries per page.                                                                                                                                            |
| totalCount (required) | number                                  | The total number of entries in the result.                                                                                                                                 |
