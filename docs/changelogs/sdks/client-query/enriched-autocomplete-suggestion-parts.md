# Enriched autocomplete suggestion parts

The AutocompleteSuggestionPart model has been extended with additional fields that provide richer context for query autocompletion:

- **category** — field category of the suggestion
- **currentParameterKey** — current parameter key context
- **dataType** — data type associated with the suggestion
- **fieldReference** — reference to the associated field
- **priority** — ranking priority (higher values rank first)
- **reference** — generic reference string
- **referenceType** — token type of the reference (TokenType)
- **synopsis** — synopsis of the suggestion

These fields are all optional additions to the existing suggestion (required) and type/info fields.

## 1.27.0 (2026-07-21) \{#1270}

### Minor changes

- Add `PayloadTooLarge` (HTTP 413) error response to `/query:execute`, `/query:verify`, `/query:parse` and `/query:autocomplete` endpoints, returned when the request body exceeds the maximum allowed size
- Add new token types to the `DQLTerminalNode` `type` field
- Normalize request header names to lower case

## 1.26.0 (2026-05-26) \{#1260}

### Minor changes

- Added `flags` field in response to indicate specific properties of the query execution, such as CLASSIC_ENTITY_MIGRATION_ADVISED.

## 1.25.0 (2026-04-15) \{#1250}

### Minor changes

- Add new body parameter pollingPromiseSeconds to indicate the number of seconds the client promises to send the next polling request after a response for a running query was sent. If the client does not poll within this time window, the query will be cancelled.

## 1.24.0 (2026-03-17) \{#1240}

### Minor changes

- Remove the deprecated enforce-query-consumption-limit header
- Extend Query API spec descriptions for maxResultBytes, maxResultRecords, defaultScanLimitGbytes and fetchTimeoutSeconds body parameters

## 1.23.1 (2026-03-13) \{#1231}

### Patch changes

- Revert: Fix redundant undefined or optional properties in model types. (APPDEV-7583) (APPDEV-16631)

## 1.23.0 (2026-02-27) \{#1230}

Minor changes

### Minor changes

- Adds the additional response body parameter "aggregation" to the metadata section.

## 1.22.1 (2026-02-18) \{#1221}

Patch changes

- Improve description of query-api spec

## 1.22.0 (2026-01-22) \{#1220}

### Minor changes

- Add new token types to the `TokenType` enum
- Add new body parameter `includeContributions` to indicate whether contribution information should be included in the query response metadata.

## 1.21.3 (2025-12-09) \{#1213}

### Patch changes

- Replace HTML tags with Markdown
- Improve some descriptions for query-api spec

## 1.21.2 (2025-09-05) \{#1212}

### Patch changes

- Fix transformations for date format strings. (APPDEV-14400)
- Update dependencies. (APPDEV-14014)
- Update dependencies. (APPDEV-13611)

## 1.21.1 (2025-06-11) \{#1211}

### Patch changes

- Update dependencies. (APPDEV-11813)

## 1.21.0 (2025-06-02) \{#1210}

### Minor changes

- Add new token types to the `TokenType` enum
- Add `Retry-After` header that indicates the number of seconds to wait before retrying the request
- Add `retryAfterSeconds` property to ErrorResponse to indicate the number of seconds to wait until the next retry
- Deprecate `enfore-query-consumption-limit` header
- Add `enforceQueryConsumptionLimit` body parameter to `ExecuteRequest` and `AutocompleteRequest`

## 1.20.2 (2025-05-16) \{#1202}

### Patch changes

- Improve performance of date transformations. (APPDEV-12840)

## 1.20.1 (2025-05-09) \{#1201}

### Patch changes

- Improve performance of payload transformations. (APPDEV-12840)
- Remove generatedAt property from metadata file. (APPDEV-12696)

## 1.20.0 (2025-03-31) \{#1200}

### Minor changes

- Add request body parameter `includeTypes` to `ExecuteRequest`
- Add header `dt-client-context` to all query endpoints
- Add `enforce-query-consumption-limit` header to `/query:execute` and `/query:autocomplete` endpoints

## 1.19.0 (2025-03-12) \{#1190}

### Minor changes

- Added support for optional transformations. (APPDEV-11914)

### Patch changes

- Added fix for 'transformToFormDataField' function. (APPDEV-12478)

## 1.18.1 (2025-01-10) \{#1181}

### Patch changes

- Fix date-time format serialization. (APPDEV-11661)

## 1.18.0 (2024-12-12) \{#1180}

### Minor changes

- Add `scalar` parameter to `MetricMetadata`
- Add `SEARCH_OPERATOR`, `SEARCH_PATTERN`, `SAVED_TABLE_NAME` and `PARAMETER_MODIFIER` to the `TokenType` enum

## 1.17.1 (2024-12-12) \{#1171}

### Patch changes

- Replace model transformations with single transformation function. (APPDEV-10818)
- Redundant error serializers are removed. (APPDEV-10272)
- Missing await added for API Gateway handler and line breaks at the end of the string are ignored. APPDEV-10883
- Imports reformatted and fixed incorrect type rendered for arrays of enum values. APPDEV-10701

## 1.17.0 (2024-10-08) \{#1170}

### Minor changes

- Enums are replaced with unions of literals. APPDEV-10338
- Inline enums as union of literals. APPDEV-9924

### Patch changes

- Add return types and improve usage examples inside JSDoc. APPDEV-7536

## 1.16.0 (2024-08-28) \{#1160}

### Features

- Export errors from the package.

## 1.15.0 (2024-08-06) \{#1150}

### Minor changes

- Add new token type to the `TokenType` enum and new field type to the `FieldType` enum.

## 1.14.0 (2024-07-31) \{#1140}

### Minor changes

- Introduced @dynatrace-sdk/shared-errors package and improved response errors handling.

## 1.13.0 (2024-07-18) \{#1130}

### Features

- Add `filterSegments` property to `ExecuteRequest`

## 1.12.1 (2024-06-10) \{#1121}

### Patch changes

- Updated boolean serialization handling. APPDEV-9047

## 1.12.0 (2024-06-05) \{#1120}

### Minor changes

- Client updated to support latest API changes. NOISSUE
- Updated dependencies
  - @dynatrace-sdk/http-client\@1.3.0

### Patch changes

- Documentation removed from the package. APPDEV-8356

## 1.11.1 (2024-05-17) \{#1111}

### Patch changes

- Fix broken links in the readme file.

## 1.11.0 (2024-04-17) \{#1110}

### Minor changes

- Add `canonicalQuery` property to VerifyRequest
- Provide actual error code in the error message instead of wildcard. APPDEV-7744
- Add option to generate canonical query to `VerifyRequest`

### Patch changes

- Do not print empty fields in the default message of an error. APPDEV-7630
- Fix typo in the description of `defaultTimeframeStart`
- Remove `Authorization` header
- Update documentation. APPDEV-8154

## 1.10.1 (2024-03-29) \{#1101}

### Patch changes

- Fixed explode method of query parameters serialization.
- Sanitize links in the documentation
- Add API reference to the readme file

## 1.10.0 (2024-03-05) \{#1100}

### Minor changes

- Add `QueryOptions` to `AutocompleteRequest`, `ExecuteRequest` and `ParseRequest`
- Add `shifted` parameter to `MetricMetadata`
- Add new token types to the `TokenType` enum

### Patch changes

- Update http-client

## 1.9.1 (2024-02-06) \{#191}

### Patch changes

- Update documentation

## 1.9.0 (2024-02-01) \{#190}

### Minor changes

- `queryId` was added to ErrorResponseDetails
- `scannedDataPoints` was added to GrailMetadata (datapoints that have been scanned during a timeseries query)
- `maxDataSuggestions` was added to AutocompleteRequest (max number of dynamic entries that should be returned e.g. metric keys, metric dimensions and custom fields)

## 1.8.1 (2024-01-12) \{#181}

### Patch changes

- Update documentation.

## 1.8.0 (2023-12-28) \{#180}

### Minor changes

- `rollup` and `rate` properties were added to the `MetricMetadata` object

## 1.7.2 (2023-11-10) \{#172}

### Patch changes

- Fixed a bug that caused abort errors from http-client to be wrapped in ApiClientError('UnexpectedError').

## 1.7.1 (2023-11-08) \{#171}

### Patch changes

- Update dependencies.

## 1.7.0 (2023-11-02) \{#170}

### Minor changes

- Handle 429 error code in query execution.
- Add `UID_VALUE` Autocomplete Token Type.
- Handle generic 4XX and 5XX error codes in query execution.

### Patch changes

- Fixed a bug that caused internal http-client errors to be thrown for error responses.

## 1.6.0 (2023-10-24) \{#160}

### Minor changes

- New response FieldType enum value: `uid`
- Add `enrich` query param to the query cancel method

## 1.5.1 (2023-10-03) \{#151}

### Patch changes

- Update JSDoc examples.

## 1.5.0 (2023-09-21) \{#150}

### Minor changes

- Change title from **Storage – Query Service** to **DQL Query**
- Support 400 error code for poll and cancel operations.

## 1.4.3 (2023-08-07) \{#143}

### Patch changes

- Fix transformation of null values for nullable properties

## 1.4.2 (2023-07-28) \{#142}

### Patch changes

- Update documentation
- Fix transformation of null and Date values
- Update package description
- Updated dependencies

  - @dynatrace-sdk/http-client\@1.0.6

## 1.4.1 (2023-07-13) \{#141}

### Patch changes

- Update error messages
- Updated dependencies

  - @dynatrace-sdk/http-client\@1.0.5

## 1.4.0 (2023-06-29) \{#140}

### Minor changes

- Add `max-result-bytes` query parameter to DPS Query API

## 1.3.1 (2023-06-27) \{#131}

### Patch changes

- Update documentation

## 1.3.0 (2023-06-15) \{#130}

### Minor changes

- Expose the metric metadata `fieldName`.

## 1.2.2 (2023-06-07) \{#122}

### Patch changes

- Update docs.

## 1.2.1 (2023-06-06) \{#121}

### Patch changes

- Add JSDoc @example for operations.
- Fix handling of the application/cloudevent+json content type.

## 1.2.0 (2023-05-04) \{#120}

### Minor changes

- Add `sampled` property to GrailMetadata

## 1.1.0 (2023-04-19) \{#110}

### Minor changes

- Export model transformations

## 1.0.6 (2023-04-19) \{#106}

### Patch changes

- Move model transformations to a separate module
- Update `@dynatrace-sdk/http-client` to `^1.0.3`

## 1.0.5 (2023-04-05) \{#105}

### Patch changes

- Update `@dynatrace-sdk/http-client` to `^1.0.1`
- Use parsed response body in error serializer

## 1.0.4 (2023-04-03) \{#104}

### Patch changes

- Send response body in error serializer
- Updated dependencies
  - @dynatrace-sdk/http-client\@1.0.0

## 1.0.3 (2023-03-23) \{#103}

### Patch changes

- Updated descriptions and examples.

## 1.0.2 (2023-03-23) \{#102}

### Patch changes

- Generate client package with template-typescript-client v0.13.10. Query question mark is now removed from url when there are no search params.

## 1.0.1 (2023-03-16) \{#101}

### Patch changes

- Generate client package with template-typescript-client v0.13.9.
  Config param is now optional for valid operations.
  Improve error handling of unsupported data types.
- Process HTML tags in the documentation.
- Add missing typeguards and improve data transformations.

## 1.0.0 (2023-03-10) \{#100}

### Major changes

- Initial release of @dynatrace-sdk/client-query.
