## Status levels

Statuses are **classified into five universal levels** ranging from positive to negative:

| Status   | Purpose                                                                                                                                                                |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ideal    | Used for successful processes or to reinforce that no issues exist. It indicates a desired result or condition.                                                        |
| Good     | Used for informative messages, items that need to stand out, or minor issues that don't require attention. It helps to keep users informed without conveying concern.  |
| Neutral  | Used for inactive statuses and unessential information that shouldn't indicate a positive or negative condition.                                                       |
| Warning  | Used for potential issues or when a critical status is about to be reached. It indicates non-critical situations or unessential failed processes that users must know. |
| Critical | Used for critical issues that require immediate attention. It indicates a problematic situation or a failed process that can lead to negative consequences.            |

### Mapping

The universal status levels allow different **mappings for contexts and use cases**. Based on this mapping, the correct status indicator can be applied in each situation. Here are some mapping examples:

| Status   | Kubernetes cluster health | Security risk | Process status |
| :------- | :------------------------ | :------------ | -------------- |
| Ideal    | Healthy                   | -             | Completed      |
| Good     | Monitored                 | Low           | In progress    |
| Neutral  | Unmonitored               | Muted         | Not started    |
| Warning  | -                         | Medium        | -              |
| Critical | Unhealthy                 | High          | Failed         |
