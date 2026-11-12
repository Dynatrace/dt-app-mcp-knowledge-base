### MetricDescriptorCollection

A list of metrics along with their descriptors.

| Name                  | Type                                          | Description                                                                                                                                                                |
| --------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| metrics (required)    | Array\<[MetricDescriptor](#metricdescriptor)> | A list of metric along with their descriptors                                                                                                                              |
| nextPageKey           | null \| string                                | The cursor for the next page of results. Has the value of `null` on the last page. Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result. |
| totalCount (required) | number                                        | The estimated number of metrics in the result.                                                                                                                             |
| warnings              | Array\<string>                                | A list of potential warnings about the query. For example deprecated feature usage etc.                                                                                    |
