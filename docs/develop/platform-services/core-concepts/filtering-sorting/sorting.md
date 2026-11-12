## Sorting

You can use the query parameter `sort` to sort the list. The `sort` parameter requires a single field name or a comma-separated list of field names defining the sorting order. The order of the field names in the list is left to right, meaning that the first field name is the primary sorting criteria, followed by the second, and then next fields.

By default, the sorting order is ascending. However, you can change this by prefixing the field name with a minus sign, `-`. It will sort the list in descending order based on that particular field. It's important to note that string comparison for sorting is case-insensitive.

Look at the following API call:

```text
GET …/problems?sort=status,-startTime,relevance
```

The API will sort the result items by ascending `status` first, then by descending `startTime`, and finally ascending `relevance`.
