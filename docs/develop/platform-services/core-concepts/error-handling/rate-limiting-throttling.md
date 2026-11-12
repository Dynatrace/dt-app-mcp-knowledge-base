## Rate limiting (throttling)

Services may decide to reject request execution if it's overloaded or to guarantee fair request execution distribution across multiple customer environments.

If a service throttles a request it returns:

- **HTTP 429 - Too Many Requests** if the throttling was caused by the client.
- **HTTP 503 - Service Unavailable** if the service is generally overloaded or is unable to determine if overloading is caused by client.

In both cases the service sets the `retry-after` header with the number of seconds to wait until the next retry. The error response also includes the time until the next retry in the field `retryAfterSeconds` in seconds.

It may also include details about the violated constraint in the field `details`.

### Example

```json
{
  "error": {
    "code": 503,
    "message": "service is overloaded",
    "retryAfterSeconds": 3,
    "details": "service is busy, good luck next time!"
  }
}
```
