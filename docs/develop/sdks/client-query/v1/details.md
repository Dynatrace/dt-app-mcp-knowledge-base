## &#x20;Details

The query tree consists of nodes that contain different additional information (everything optional):

### &#x20;General Fields

| Field         | Mandatory | Description                                                                                        |
| ------------- | --------- | -------------------------------------------------------------------------------------------------- |
| tokenPosition | no        | optional. If present, it represents the position within the query string where the node refers to. |
| isOptional    | no        | whether this node could be left out and the result would still be the same query (semantically).   |

#### &#x20;tokenPosition

contains `start` (inclusive) and `end` (inclusive), both contain `index` (0 based; fur substrings), `line`
and `column` (both 1-based; for readability).

- If `tokenPosition` is present, it always contains start and end with all fields
- If `tokenPosition` is not present, there might still be nested nodes that do contain a position
- If `start == end`, the position refers to a single character
- If `start > end`, we know for sure that something was inserted.

We can always check whether the canonical representation of a node matches the text in the tokenPosition to see whether
something was inserted, removed, or changed.

#### &#x20;isOptional

only present if it is true.

Optional nodes can e.g. be optional braces that make a query more readable, but are not necessary. This could be used to
enter *ghost braces* and *implicit functions* in the user's input field; maybe with different formatting
(using the tokenPosition of sibling nodes we can also check whether the user wrote these or not).

### &#x20;Advanced Token Types

each node is of one of following types and may contain more fields:

- Terminal Node
- ContainerNode
- Alternative Node

#### &#x20;Terminal Node

can be identified by checking whether `canonicalString` is present

| Field                  | Mandatory | Description                                                                                                                                     |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| type                   | yes       | the type of the terminal node - do not confuse with the type of container nodes                                                                 |
| canonicalString        | yes       | the canonical string representation. Concatenating the canonicalString of all nested terminal nodes provides the canonical form of the query.   |
| isMandatoryOnUserOrder | no        | may only be present if (`type="BRACE_OPEN"` or `type="BRACE_CLOSE"`) and `isOptional=true`. For usage see section Special node type: PARAMETERS |

##### &#x20;Current types of terminal nodes (list might grow):

- SPACE
- LINEBREAK
- INDENT
- PIPE
- DOT
- COLON
- COMMA
- BRACE_OPEN
- BRACE_CLOSE
- BRACKET_OPEN
- BRACKET_CLOSE
- PARENTHESIS_OPEN
- PARENTHESIS_CLOSE
- QUOTE
- SLASH
- BOOLEAN_TRUE
- BOOLEAN_FALSE
- NULL
- COMMAND_NAME
- PARAMETER_KEY
- PARAMETER_VALUE_SCOPE
- FUNCTION_NAME
- OPERATOR
- TRAVERSAL_OPERATOR
- TRAVERSAL_RELATION_NAME
- TRAVERSAL_HOP_COUNT
- SIMPLE_IDENTIFIER
- NUMBER
- STRING
- TIME_UNIT
- TIMESTAMP_VALUE
- METRIC_KEY
- VARIABLE

#### &#x20;ContainerNode

can be identified by checking whether `children` is present

| Field    | Mandatory | Description                                                                     |
| -------- | --------- | ------------------------------------------------------------------------------- |
| type     | yes       | the type of the container node - do not confuse with the type of terminal nodes |
| children | yes       | the children for the node. might be of any type                                 |

##### &#x20;Current types of container nodes (list might grow):

- QUERY
- EXECUTION_BLOCK
- COMMAND
- COMMAND_SEPARATOR
- PARAMETER_WITH_KEY
- GROUP
- PARAMETERS - check examples further down
- PARAMETER_NAMING
- PARAMETER_SEPARATOR
- FUNCTION
- FUNCTION_PART - check examples further down
- EXPRESSION
- IDENTIFIER
- SOURCE_ID
- DURATION
- TIMESTAMP
- TIMEFRAME
- TRAVERSAL_PATH
- TRAVERSAL_STEP

##### &#x20;Special node type: PARAMETERS

can contain children representing the parameters. Every second child is of type PARAMETER_SEPARATOR.

You may reorder the children based on their tokenPosition to get the user order. However, in this case,
you need to consider `isMandatoryOnUserOrder` to determine whether the grouping braces are mandatory or not.

###### &#x20;Example

For the query `SORT a, {direction:"descending", b}`, the canonical form is:

`SORT a, {b, direction:"descending"}`

This is the order, in which the parameters are returned in the query tree.
Parameters are \{a} and \{\{b} and \{direction:"descending"}}. In this case, the braces are optional.

`SORT a, {b, direction:"descending"}` is equivalent to `SORT a, b, direction:"descending"`

However, if you reorder the children by tokenPosition, the braces are not optional, because

`SORT a, direction:"descending", b` is interpreted as `SORT {a, direction:"descending"}, b`

So, if the children in PARAMETERS are re-ordered by tokenPosition, braces (or in general: TerminalNodes)
are only optional if `isOptional && !isMandatoryOnUserOrder`.

##### &#x20;Special node type: FUNCTION_PART

A container node of type `FUNCTION` may contain nodes of type `FUNCTION_PART`.

If those `FUNCTION_PART`s are marked as optional, this means you have to either include *all* or *none* of these
optional function parts.

*Example*:

`filter anyMatch(a.b == 1, input:a)`

The optional function parts are `anyMatch(` and `, input:a)`. If you leave out both, the command will still work:
`filter a.b == 1` and return the same result. Using one of these optional function parts and removing the other will lead
to an invalid query.

#### &#x20;Alternative Node

can be identified by checking whether `alternatives` is present

| Field        | Mandatory | Description                          |
| ------------ | --------- | ------------------------------------ |
| alternatives | yes       | Type: Map\<AlternativeType, DQLNode> |

When displaying the query, pick one option. You may use the other options for hovering, replacing, and more.

##### &#x20;Current values of AlternativeType (list might grow):

- CANONICAL: This node is the one we will use for our canonical form
- USER: An alternative that is also valid, but not canonical; and this version was picked by the user.
- INFO: only if the canonical version is not present

*Examples*:

- `CANONICAL` is not present, `USER` is present: user's nodes are optional, but not canonical (usually optional nodes
  are still canonical)
- `CANONICAL` is present, `USER` is not present: same as if the canonical node was optional. If this happens, it is
  likely that there is also an `INFO` node
- `CANONICAL` is present, `USER` is present: there are different alternatives
- `INFO` is present: usually if `CANONICAL` is not present (e.g. the parameter key for `FILTER a == 1`), there is an info node
  for `FILTER condition:a == 1`. This `condition:` was neither written by the user nor is it canonical; but it might be
  used to help the user understand what this parameter means.

#### Parameters

| Name                   | Type                          | Description                                                                                                                                                                                                                     |
| ---------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config.body (required) | [ParseRequest](#parserequest) |                                                                                                                                                                                                                                 |
| config.dtClientContext | string                        | The dt-client-context header is an optional string parameter used for monitoring purposes. When included in a request, it helps retrieve information about the execution of the query. It shouldn't hold sensitive information. |

#### Returns

| Return type                                                                                                               | Description                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[DQLNode](#dqlnode)> | A node containing more nodes,  a node offering different (semantically equivalent) versions of the query parts, or a terminal node that shows the canonical form. |

#### Throws

| Error Type             | Error Message                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| BadRequest             | The supplied request is wrong. Either the query itself or other parameters are wrong.                                          |
| Unauthorized           | Unauthorized. The request lacks valid authentication credentials. Happens when the authentication token is missing or invalid. |
| InsufficientPermission | Insufficient permissions.                                                                                                      |
| TenantNotFound         | Not Found - Returned when the tenant is not active (e.g. it is being deleted or deactivated) or not found.                     |
| MethodNotAllowed       | Method not allowed. The HTTP method is not supported for this endpoint.                                                        |
| PayloadTooLarge        | Payload Too Large - The request body exceeds the maximum allowed size.                                                         |
| UnsupportedMediaType   | Unsupported media type. The request content type is not supported.                                                             |
| InternalServerError    | An internal server error has occurred.                                                                                         |
| ServiceUnavailable     | Service Unavailable - The grail instance is either shutting down or busy.                                                      |
| GatewayTimeout         | Gateway timeout. The service did not respond in time.                                                                          |
| GeneralError           | An unexpected error occurred.                                                                                                  |

**Code example**

```ts
import { queryAssistanceClient } from "@dynatrace-sdk/client-query";

const data = await queryAssistanceClient.queryParse({
  body: {
    query:
      'fetch events | filter event.type == "davis" AND davis.status != "CLOSED" | fields timestamp, davis.title, davis.underMaintenance, davis.status | sort timestamp | limit 10',
  },
});
```

### queryVerify

**queryAssistanceClient.queryVerify(config): Promise\<[VerifyResponse](#verifyresponse)>**

Verifies a query without executing it.

For information about the required permissions see the [Bucket and table permissions in Grail documentation](https://docs.dynatrace.com/docs/shortlink/assign-bucket-table-permissions).
