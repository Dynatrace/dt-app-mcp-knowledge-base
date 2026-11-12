## Errors

Error responses are always returned in an error envelope like this:

```json
{
  "error": {
    "code": "error code",
    "message": "error message"
  }
}
```

- `code` is set to the HTTP response code or an API-specific error code documented in the service APIs Swagger UI.
- `message` is a brief description of the error that occurred

You can add additional details about each error in a details field. This section conveys additional information about the error, for example, which query parameter violated a precondition. The `details` field contains fields to describe the error further.

These are commonly used fields in the `details` object:

- `errorRef` is a uuid string (see [rfc-4122](https://datatracker.ietf.org/doc/html/rfc4122)) and represents a reference of the error into e.g., the log file of the service.
- `traceId` is a string containing a 32-character hex integer value.
- `errorCode` is a string value representing more detailed error information than the HTTP response code alone.
- `constraintViolations` is an array of ConstraintViolation objects.
  - A ConstraintViolation contains information about an input parameter (path, query, or request body) that violated some validation rule of the service API and caused the error.
    - `ConstraintViolation` always contains a field `message` describing the error.
    - `ConstraintViolation` may contain a separate field, `parameterLocation`, which describes the general location of the violating parameter (query parameter, request body, etc.)
    - `ConstraintViolation` may contain a separate field, `path`, which refers to the violating parameter within the `parameterLocation`.
    - `ConstraintViolation` may contain additional fields further describing the error.
- `missingScopes` must be set if the API returns a 403 - Forbidden response.
  - `missingScopes` is an array of strings containing a complete list of missing IAM scopes necessary to execute the request successfully.

### Examples

Following are some examples of error responses.

- Error response with `details` object.

```json
{
  "error": {
    "code": 400,
    "message": "Constraints violated.",
    "details": {
      "errorRef": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
      "traceId": "99633483d17779d7c81141f50dbc2a49",
      "errorCode": "InvalidPaginationToken",
      "constraintViolations": [
        {
          "path": "detectionRules[0].filterConfig.pattern",
          "message": "may not be null",
          "parameterLocation": "PAYLOAD_BODY"
        }
      ]
    }
  }
}
```

- Error response with `missingScopes`.

```json
{
  "error": {
    "code": 403,
    "message": "Insufficient permissions.",
    "details": {
      "missingScopes": ["document:documents:read", "state:app-states:write"]
    }
  }
}
```
