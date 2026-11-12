## Serialization errors

JSON serialization errors ("Failed to serialize result to JSON") might occur when returning a value from a function.

Whenever an app function returns a value, the runtime internally calls
[`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
to convert the given value to a JSON representation. Therefore, the same
[limitations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#exceptions)
also apply when returning a value from a function:

- The returned value must not contain a circular reference.
- The returned value must not be or contain a
  [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
  Refer to the
  [MDN documentation on how to use `BigInt` within JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json)
  for a workaround.
