## Concepts

You need to know the following concepts to work with Grail.

### Grail Query API

The Grail Query API is the entry point for querying data stored in Grail.

You can query data in Grail using the . To write queries, you use [Dynatrace Query Language](https://dt-url.net/bv03yk8) (DQL).

There are two types of operations the Grail Query API offers:

- **Query execution** lets the client start queries, cancel a running query, and fetch query results.
- **Language services** support writing DQL queries and provide syntax information.

### Query execution

The Grail Query API executes queries asynchronously via REST.

The final result is guaranteed to be available for one minute after the query has finished, so **we strongly recommend a polling interval of less than one minute**.

- **Query start**: You start a DQL query by sending an `HTTP POST` request. The query and all corresponding parameters are part of the request body in the JSON. For the following requests, you need to include the `request-token` as a query parameter to reference the started query.

- **Polling and long polling**: You can use `request-token` to poll queries. The response to a polling request contains the query's status.

  - **Long polling**: When starting a query and polling operation, you can specify a `request-timeout`. If the final result or a preview is available before the specified timeout, the API returns the response; otherwise, it returns the state of the query.

- **Preview**: You can enable previews within the initial request. The following polling responses will contain new previews if they're available. A new preview will always be whole, not as a delta to any previous preview.

- **Cancel**: You can cancel a query using the `request-token` from the response to the initial request. If the query has finished, you'll get the final result as a response to the cancellation request. If the query is still being executed, Grail will stop execution and discard the result.

- **Metadata**: The API returns metadata in addition to the query result. Some metadata types are always part of the response, while you must explicitly request others by setting the `enrich` parameter to specify the list of the requested metadata types.

  The API provides the following metadata types:

  | Metadata  | Description                                                                                                                                                                                                                                                                                                                                                                          |
  | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `grail`   | The Grail metadata is always added and gives meta-information about the query execution.                                                                                                                                                                                                                                                                                             |
  | `metrics` | You can request metric metadata by adding the `?enrich=metric-metadata` parameter to `/query:execute` and `/query:poll` requests. Suppose the query result has metric keys (for example, `dt.host.disk.free` ). In that case, the response will include an additional metadata section called `metrics` with information about those metrics, such as their units and display names. |

- **Endpoints**: These are the endpoints for starting queries and fetching the current status, including the final result and query cancellation.

  | Endpoint         | Description                                                                                                              |
  | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
  | `/query:execute` | Starts a Grail query.                                                                                                    |
  | `/query:poll`    | Retrieves the query status and the final result from Grail.                                                              |
  | `/query:cancel`  | If the query has finished: returns the result. If the query has not finished: cancels the query and discards the result. |

### Grail language services

The language services support you in writing DQL queries.

- **Endpoints**:

  | Endpoint              | Description                                                                                                                                                                                                                    |
  | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `/query:verify`       | Checks a DQL query without executing it and returns a response with error messages if the query is invalid.                                                                                                                    |
  | `/query:parse`        | Creates a tree of the query's canonical form. Nodes contain references to the related token positions in the DQL query string. It can be used for hover effects, marking optional items, displaying canonical forms, and more. |
  | `/query:autocomplete` | Creates a list of suggestions for the query at the given cursor position.                                                                                                                                                      |

### Filter segments

Filter segments allow you to segment data in Grail, enhancing data analytics and troubleshooting by providing the necessary focus. They use query-time filtering to limit the results of consumer queries to selected segments.

To create a filter segment, follow the steps outlined in the documentation. Once you have created a filter segment and obtained its ID, you can use it in your queries.

If the request defines multiple segments, they will be combined using the `AND` boolean operator, and the Grail data will be filtered accordingly. The values defined in the request will replace the variables used in the filter segments.

### Permissions

To query data stored in Grail, you need to define permissions using Dynatrace's IAM policies. A typical IAM permission follows this structure:

```text
ALLOW <action> WHERE <condition> <operator> <value> (AND <condition> <operator> <value> ...)
```

- `ALLOW`—grants the specified action (e.g., `storage:buckets:read`).
- `WHERE`—specifies the conditions under which the action is allowed.
- `<condition>`—represents a field or attribute being evaluated (e.g., `storage:bucket-name`).
- `<operator>`—defines how the condition is compared to the value (e.g., =, IN, STARTSWITH).
- `<value>`—the value being compared (e.g., `"default_logs"`).
- `AND`/`OR`—combines multiple conditions logically

#### Supported operators

The operators available depend on the specific permission type or condition you use. These are all the available operators:

- `=`—checks whether the condition equals the specified value. For example:

  ```text
  ALLOW storage:logs:read WHERE storage:bucket-name = "default_logs"
  ```

- `IN`—checks whether the condition matches any value in a list. For example:

  ```text
  ALLOW storage:buckets:read WHERE storage:bucket-name IN ("default_logs", "default_metrics")
  ```

- `STARTSWITH`—checks whether the condition starts with the specified value. For example:

  ```text
  ALLOW storage:logs:read WHERE storage:bucket-name STARTSWITH "default"
  ```

- `!=`—checks whether the condition does not equal the specified value. For example:

  ```text
  ALLOW storage:logs:read WHERE storage:bucket-name != "restricted_logs"
  ```

- `NOT IN`—checks whether the condition does not match any value in a list. For example:

  ```text
  ALLOW storage:buckets:read WHERE storage:bucket-name NOT IN ("restricted_logs", "sensitive_logs")
  ```

- `NOT STARTSWITH`—checks whether the condition does not start with the specified value. For example:

  ```text
  ALLOW storage:logs:read WHERE storage:bucket-name NOT STARTSWITH "restricted"
  ```

- `MATCH`—checks whether the condition matches a specific pattern. For example:

  ```text
  ALLOW storage:logs:read WHERE storage:bucket-name MATCH ("default-*", "security_logs")
  ```

#### Permission types

You need to have the correct permissions to query data stored in Grail. Grail stores records in Grail buckets and assigns each bucket to a table.

- **Bucket permissions**: A typical bucket read permission looks like this: `ALLOW storage:buckets:read;`. Adding this permission grants access to all buckets. You need table permissions in addition to this to access Grail data. Without proper table permissions, it won't be accessible.

  Bucket permissions can also be conditional, depending on which buckets you want to make accessible. The following conditional permission give access to buckets with the names `default_logs` and `default_metrics`.

  ```text
  ALLOW storage:buckets:read WHERE storage:bucket-name IN ("default_logs", "default_metrics");
  ```

  Conditions support the following operators: `=`, `IN`, `STARTSWITH`, `!=`, `NOT IN`, `NOT STARTSWITH` and `MATCH`.

- **Table permissions**: Grail has pre-defined tables whose permissions you can define as follows, for example:

  - `ALLOW storage:metrics:read;`,
  - `ALLOW storage:logs:read;`,
  - `ALLOW storage:events:read;`,
  - `ALLOW storage:system:read;`,
  - and so on.

  These permissions grant access to the table. In order to read the data stored in the buckets, you also need to add bucket permissions.
  A few tables have unrestricted access and don't need bucket or table permissions, such as `dt.system.data_objects`.

- **Record-level permissions**: You can restrict table permissions at the record level by adding conditions to certain predefined fields. Adding conditions restricts access to only the records that satisfy the condition.

  The following record-level permission grants access to only those records in the metrics table that have the metric key `dt.host.cpu.load`.

  ```text
  ALLOW storage:metrics:read WHERE storage:metric.key = "dt.host.cpu.load";
  ```

  Conditions support the following operators: `=`, `IN`, `STARTSWITH` and `MATCH`.

  Use the `AND` operator to join multiple conditions.

  ```text
  ALLOW storage:logs:read WHERE storage:log.source STARTSWITH "/var/log" AND storage:host.name IN ("host1", "host2");
  ```

  If a table has many associated statements, they're they're processed with the logical `OR`. The following set of conditional table permissions grant access to those records in the `events` table that have
  an event type of `PROCESS_RESTART` **OR** an event kind of `DAVIS_EVENT`.

  ```text
  ALLOW storage:events:read WHERE storage:event.type = "PROCESS_RESTART";
  ALLOW storage:events:read WHERE storage:event.kind = "DAVIS_EVENT";
  ```

  Unconditional table permissions override conditional table permissions on the same table. The following set of permissions grants access to all records in the `events` table:

  ```text
  ALLOW storage:events:read WHERE storage:event.type = "PROCESS_RESTART";
  ALLOW storage:events:read;
  ```

  As with table permissions, you must combine them with bucket permissions to access data stored in the buckets.

- **Bucket scope permissions**: You can combine bucket- and record-level permissions to grant access to specific records only if they're located in the designated buckets.

  The following permissions will provide access to all logs in the `unrestricted_logs` bucket and only specific records in the `restricted_logs` bucket:

  ```text
  ALLOW storage:buckets:read;
  ALLOW storage:logs:read WHERE storage:bucket-name = "unrestricted_logs";
  ALLOW storage:logs:read WHERE storage:bucket-name = "restricted_logs" AND storage:dt.security_context = "TeamA";
  ```

  A `storage:bucket-name` condition on table- or record-level permissions will work only if the user has access to the specified bucket.
  The following permissions won't provide any access to logs because the user has no access to the `unrestricted_logs` or `restricted_logs` buckets, resulting in an empty query result:

  ```text
  ALLOW storage:buckets:read WHERE storage:bucket-name STARTSWITH "default"
  ALLOW storage:logs:read WHERE storage:bucket-name = "unrestricted_logs";
  ALLOW storage:logs:read WHERE storage:bucket-name = "restricted_logs" AND storage:dt.security_context = "TeamA";
  ```

  Conditions support the following operators on `storage:bucket-name`: `=`, `IN`, `STARTSWITH`, `!=`, `NOT IN`, `NOT STARTSWITH` AND `MATCH`.

- **Fieldset**: A fieldset is a collection of fields with a unique name. You define them on a bucket, table, or environment scope.
  There are two predefined fieldsets for the spans table: `builtin-request-attributes-spans` and `builtin-sensitive-spans`.
  Likewise, there is one for the tables `user.events` and `user.sessions`: `builtin-sensitive-user-events-and-sessions`.

  The fields in `builtin-request-attributes-spans` are dynamically generated through request attributes.
  The fields in `builtin-sensitive-spans` and `builtin-sensitive-user-events-and-sessions` are static:

  - `builtin-sensitive-spans`

    - `client.ip`
    - `db.connection_string`
    - `http.request.header.referer`
    - `http.request.header.proxy-authorization`
    - `http.request.header.authorization`
    - `http.request.header.api-key`
    - `http.request.header.x-xsrf-token`
    - `url.full`
    - `url.query`
    - `db.query.parameters`

  - `builtin-sensitive-user-events-and-sessions`

    - `client.ip`
    - `dt.rum.user_tag`
    - `geo.location.latitude`
    - `geo.location.longitude`
    - `user.identifier`

    You can create custom fieldsets to hide fields containing sensitive data via the
    .

- **Fieldset permissions**: A typical fieldset read permission looks like `ALLOW storage:fieldsets:read;`. Adding this permission grants access to all sensitive fields.

  Fieldset permissions can also be conditional based on the buckets and tables where access to sensitive fields is required.

  The following conditional permission gives access to sensitive fields on buckets with the name `default_spans` and `sensitive_spans`.

  ```text
  ALLOW storage:fieldsets:read WHERE storage:bucket-name IN ("default_spans", "sensitive_spans");
  ```

  The following conditional permission gives access to sensitive fields on the `spans` table.

  ```text
  ALLOW storage:fieldsets:read WHERE storage:table-name = "spans";
  ```

  The following conditional permission gives access to sensitive fields with the fieldset named `builtin-sensitive-spans`.

  ```text
  ALLOW storage:fieldsets:read WHERE storage:fieldset-name = "builtin-sensitive-spans";
  ```

  If a field is defined in multiple fieldsets and you don't have permission for all of them, you won't have access to that field.

  Currently, conditions support the following operators: `=`, `IN`, `STARTSWITH`, `!=`, `NOT IN`, `NOT STARTSWITH` and `MATCH`.

- **Endpoints**:

  | Endpoint              | Permission Handling                                                                        |
  | --------------------- | ------------------------------------------------------------------------------------------ |
  | `/query:execute`      | Requires bucket and table permissions.                                                     |
  | `/query:poll`         | Permissions to execute the request apply. Only the user that started the query can poll.   |
  | `/query:cancel`       | Permissions to execute the request apply. Only the user that started the query can cancel. |
  | `/query:verify`       | Requires table permissions.                                                                |
  | `/query:parse`        | Requires table permissions.                                                                |
  | `/query:autocomplete` | Requires bucket and table permissions.                                                     |
