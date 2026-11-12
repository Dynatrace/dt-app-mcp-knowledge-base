## Write effective error messages

Use the format that gives users just enough context to understand and resolve the problem. A field-level validation error may be a single line of text, while a system failure may need an icon, title, details, and an action. Whatever the shape, the same writing principles apply.

### Use simple words

Explain what happened in plain language. Avoid jargon and internal Dynatrace terminology unless it's industry standard.

|  Do                                                                           |  Don't                                   |
| ----------------------------------------------------------------------------- | ---------------------------------------- |
| Your query reached the data scan limit. Narrow the time range or add filters. | Query exceeded max scan bytes threshold. |

### Be specific

Use exact numbers, dates, and formats.

|  Do                                       |  Don't                 |
| ----------------------------------------- | ---------------------- |
| Passwords must be at least 16 characters. | Password is too short. |

### Show a way forward

Lead with the most likely cause or simplest fix. If the problem might recur, add a fallback such as contacting support. When one action resolves it, offer that action directly. Label it with one or two imperative words instead of vague labels.

|  Do     |  Don't |
| ------- | ------ |
| Retry   | OK     |
| Refresh | Done   |

### Skip obvious next steps

When space is limited, and the solution is self-explanatory, leaving it out can help the user by giving them fewer words to read. In the example, there's no need to tell the user to double-check their command. It's already self-explanatory and its location in the query will be highlighted.

|  Do                           |  Don't                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| There's no command 'testing'. | There's no command 'testing'. Please double-check your command and rerun your query. |

### Avoid generic errors or raw codes

Unless no further context is available, don't fall back on "Something went wrong". Even then, pair it with plain-language context or next step rather than showing it alone. When surfacing server-side errors (400, 401, 403, 404, 500, etc.), follow the [Error handling](https://developer.dynatrace.com/develop/platform-services/core-concepts/error-handling.md) reference. Don't make a raw error code the entire message.

|  Do                                                   |  Don't                           |
| ----------------------------------------------------- | -------------------------------- |
| 404 <br /> The page you're looking for doesn't exist. | Error 404. Something went wrong. |

### Don't assign blame

Lead with the value or action the user needs, not with what they did wrong.

|  Do                            |  Don't                        |
| ------------------------------ | ----------------------------- |
| Use a value between 1 and 100. | You entered an invalid value. |

### Don't be overly apologetic

Apologies aren't necessary, unless we caused a big inconvenience. Stay calm and supportive. Avoid humor, idioms, or phrases that may not translate.

|  Do                                          |  Don't                                 |
| -------------------------------------------- | -------------------------------------- |
| Couldn't save your changes. Try again later. | We're really sorry! An error occurred. |

### Don't exaggerate or downplay

This might cause the user to panic or ignore an error that needs attention. Adjust the tone according to the error's severity. Skip filler words like "Oops!" or "Uh oh!".

|  Do                                                      |  Don't               |
| -------------------------------------------------------- | -------------------- |
| Couldn't load data. Check your connection and try again. | Uh oh! Nothing here. |
