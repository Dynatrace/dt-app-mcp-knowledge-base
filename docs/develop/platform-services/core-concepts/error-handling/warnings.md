## Warnings

Sometimes a response may contain warning information although the request was successful. It may happen when some data in the request payload was missing and replaced with default values.

Warnings are optional, but if a response contains warnings, they're returned as the first field in the response body, named `warnings`.
It includes an array of potential warning objects. Each warning object has at least a string `message` field with the warning message.

A `details` field may add additional details about each warning.
This section conveys additional information about the warning, for example, which query parameter violated a precondition. The `details` may contain any fields to describe the warning further.

These are commonly used fields in the `details` object:

- `warningRef` is a uuid string (see [rfc-4122](https://datatracker.ietf.org/doc/html/rfc4122)) and represents a reference of the warning into e.g., the log file of the service.
- `traceId` is a string containing a 32-character hex integer value.
- `constraintViolations` is an array of `ConstraintViolation` objects.
  - A ConstraintViolation contains information about an input parameter (path, query, or request body) that violated some validation rule of the service API and caused the warning.
    - `ConstraintViolation` always contains a field `message` describing the warning.
    - `ConstraintViolation` may contain a separate field, `parameterLocation`, which describes the general location of the violating parameter (query parameter, request body, etc.)
    - `ConstraintViolation` may contain a separate field `path` that refers to the violating parameter within the `parameterLocation`.
    - `ConstraintViolation` may contain additional fields further describing the warning.

### Example

```json
{
  "warnings": [
    {
      "message": "caffeine saturation is low",
      "details": {
        "warningRef": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
        "traceId": "99633483d17779d7c81141f50dbc2a49",
        "constraintViolations": [
          {
            "path": "dynatrace.employee",
            "message": "Caffeine is getting low! Grab a cappuccino in the Dynatrace cafeteria!",
            "parameterLocation": "DYNATRACE_OFFICE"
          }
        ]
      }
    }
  ],
  "items": [
    {
      "latestSchemaVersion": "1.4.2",
      "schemaId": "builtin:anomaly.infrastructure",
      "displayName": "Anomaly Detection for Infrastructure"
    }
  ],
  "totalCount": 1
}
```
