## HTTP status code

Each time you run an app function, it returns a specific response type that includes the HTTP status code. The following table explains each HTTP status code, and the reason behind the code:

| HTTP code | Reason                                                                   | Definition                                                                                                                    |
| --------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 200       | No Error                                                                 | Function executed successfully.                                                                                               |
| 400       | Bad request                                                              | The app function can't or won't process the request due to perceived client error—for example, malformed request syntax, etc. |
| 404       | The app or the function name wasn't found                                | The app or function doesn't exist.                                                                                            |
| 409       | The app's backend is being deployed and isn't able to serve requests yet | The app's backend can't serve the request because it's currently being deployed.                                              |
| 500       | Internal server error                                                    | The app function encountered something unexpected and couldn't fulfill the request.                                           |
| 540       | JavaScript errors, event loop errors                                     | There is an error in the application code. It can be TypeError, JavaScript error, unhandled exceptions, or event loop error.  |
| 541       | Runtime errors (Mem exceeded, Timeout, etc.)                             | This is an error thrown by the runtime. It can occur because the code exceeds the timeout or memory limit.                    |
