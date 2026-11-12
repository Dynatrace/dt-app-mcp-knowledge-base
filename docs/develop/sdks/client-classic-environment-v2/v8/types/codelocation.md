### CodeLocation

Information about a code location.

| Name           | Type                                            | Description                                                  |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| className      | string                                          | The fully qualified class name of the code location.         |
| columnNumber   | number                                          | The column number of the code location.                      |
| displayName    | string                                          | A human readable string representation of the code location. |
| fileName       | string                                          | The file name of the code location.                          |
| functionName   | string                                          | The function/method name of the code location.               |
| lineNumber     | number                                          | The line number of the code location.                        |
| parameterTypes | [TruncatableListString](#truncatableliststring) | A list of values that has possibly been truncated.           |
| returnType     | string                                          | The return type of the function.                             |
