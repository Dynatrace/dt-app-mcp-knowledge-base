## Query data from within the extension

### Write queries

The [Dynatrace Query Language (DQL)](https://docs.dynatrace.com/docs/shortlink/dql-dynatrace-query-language-hub) is a powerful tool to explore, filter, and aggregate data stored in Dynatrace. To query data from within the IDE, you need to create and open a file with a **.dql** postfix (**logQuery.dql**) and insert your query. Below, you can see an example DQL statement that shows the first 100 log entries:

```dql
fetch logs
| limit 100
```

When you start typing, the auto-completion will suggest available [DQL commands](https://docs.dynatrace.com/docs/shortlink/dql-commands).

![First query](https://dt-cdn.net/images/createdql-af9c31f99b.gif "First query")

You can also create multiple queries to trigger them individually or use them within TypeScript, as in the example below. To do so, you need to add a name for each of them:

```text
@name("GetLogs")
fetch logs
| limit 100

@name("GetSevereLogs")
fetch logs
| filter loglevel == "SEVERE"
```

### Call dynamic queries from within your app

With this extension, you can create TypeScript functions to query data dynamically from within your Dynatrace app. You can access each query by its given name. You can also add parameters to create dynamic queries by adding a `@param(fieldname, 'defaultValue')`
annotation.

![use query in code](https://dt-cdn.net/images/usedql-6ef9627a88.gif "Use a query in code")

### Parameter data types

Typically, parameters are handled as strings and incorporated into the DQL query by substituting the placeholders.

#### Number

```text
@name('getLogsWithLimit')
@param('number', '100')
fetch logs
| limit {{number}}
```

#### String

```text
@name('getLogsForIP')
@param('ip', '192.168.0.1:3300')
fetch logs
| filter contains(content, "{{ip}}")
```

#### String array

```text
@name('getLogsPGs')
@param('processGroupsArray', '"PROCESS_GROUP_INSTANCE-88ABDA243011B3E4", "PROCESS_GROUP_INSTANCE-60F7BE8EE694B067"')
fetch logs
| fieldsAdd pgs = array({{processGroupsArray}})
| filter in(pgs, dt.entity.process_group)
```

#### Number array

```text
@name('numberArray')
@param('numberFilterArr', '4,5,6,7')
data record(val = 2),
          record(val = 3),
          record(val = 5)
| fieldsAdd numbers = array({{numberFilterArr}})
| filter in(numbers, val)
```

:::note Permissions
The extension has all permissions to query DQL data, so the preview function returns data immediately. When you use the generated typescript function for this query, include the query scope in your [**app.config.json**](https://developer.dynatrace.com/quickstart/app-toolkit.md#configuration).
It requires either the `storage:events:read` or `storage:logs:read` permission.
:::
