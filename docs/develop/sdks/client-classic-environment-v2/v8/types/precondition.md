### Precondition

A precondition for visibility of a property.

| Name            | Type                                                                   | Description                                                                                                                                                     |
| --------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expectedValue   | AnyValue                                                               | The expected value of the property. Only applicable to properties of the `EQUALS` type. <br /><br />**Example:** `expectedValue`                                |
| expectedValues  | Array\<AnyValue>                                                       | A list of valid values of the property. Only applicable to properties of the `IN` type. <br /><br />**Example:** `expectedValues`                               |
| pattern         | string                                                                 | The Regular expression which is matched against the property. Only applicable to properties of the `REGEX_MATCH` type. <br /><br />**Example:** `example Regex` |
| precondition    | [Precondition](#precondition)                                          | A precondition for visibility of a property.                                                                                                                    |
| preconditions   | Array\<[Precondition](#precondition)>                                  | A list of child preconditions to be evaluated. Only applicable to properties of the `AND` and `OR` types.                                                       |
| property        | string                                                                 | The property to be evaluated.<br /><br />**Example:** `propertyToEvaluate`                                                                                      |
| type (required) | "EQUALS" \| "AND" \| "IN" \| "NOT" \| "NULL" \| "OR" \| "REGEX_MATCH" | The type of the precondition.<br /><br />**Example:** `NULL`                                                                                                    |
