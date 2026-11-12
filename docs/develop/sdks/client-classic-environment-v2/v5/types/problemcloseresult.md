### ProblemCloseResult

The result of closing a problem.

| Name                      | Type                | Description                                        |
| ------------------------- | ------------------- | -------------------------------------------------- |
| closeTimestamp (required) | number              | The timestamp when the user triggered the closing. |
| closing (required)        | boolean             | True, if the problem is being closed.              |
| comment                   | [Comment](#comment) | The comment to a problem.                          |
| problemId (required)      | string              | The ID of the problem.                             |
