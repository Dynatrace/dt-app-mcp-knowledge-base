## Functions

### abbreviateNumber

**abbreviateNumber(input,scale,options): \{ formattedValue, postfix }**

Abbreviates large numbers into a shorter format with metric prefixes.

#### Parameters

| Name               | Type                                                        | Description                                                                                                                                                                                                                      |
| ------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input (required)   | number                                                      | Number to be abbreviated                                                                                                                                                                                                         |
| scale (required)   | Scale                                                       | Scale configuration for abbreviation: * base: Base number for scaling (e.g., 1000 for metric, 1024 for binary)
* levels: Array of prefix symbols (e.g., ['', 'k', 'M', 'G']) Default is decimal metric scale (k, M, G, T, etc.) |
| options (required) | [AdjustFractionDigitsOptions](#adjustfractiondigitsoptions) | Formatting options: * minimumFractionDigits: Minimum decimal places
* maximumFractionDigits: Maximum decimal places
* roundingMode: How to handle rounding                                                                       |

#### Returns

| Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- |
| Object containing: * formattedValue: The scaled numeric value as string
* postfix: The metric prefix symbol |

**Code example**

```ts
// Basic decimal abbreviation
abbreviateNumber(1500)
// Returns: { formattedValue: '2', postfix: 'k' }
```

**Code example**

```ts
// Binary (bytes) abbreviation
abbreviateNumber(1048576, ExponentialOctalByteLevels)
// Returns: { formattedValue: '1', postfix: 'MiB' }
```

**Code example**

```ts
// Custom fraction digits
abbreviateNumber(1500000, ExponentialDecimalLevels, { maximumFractionDigits: 2 })
// Returns: { formattedValue: '1.50', postfix: 'M' }
```

### adjustFractionDigits

**adjustFractionDigits(input,options?): string**

Formats a number with precise control over decimal places and handles very small values.

#### Parameters

| Name             | Type                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input (required) | number                                                      | The number to format                                                                                                                                                                                                                                                                                                                                                                                                                |
| options          | [AdjustFractionDigitsOptions](#adjustfractiondigitsoptions) | Formatting configuration: * minimumFractionDigits: Minimum decimal places (defaults to 0)
* maximumFractionDigits: Maximum decimal places (defaults to minimumFractionDigits)
* minimumSignificantDigits: Minimum significant digits (default: 1)
* maximumSignificantDigits: Maximum significant digits (default: 21)
* locale: Override default locale (e.g., 'en-US', 'de-DE')
* useGrouping: Whether to use thousand separators |

#### Returns

| Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Formatted number string, with special handling for very small values: * Positive tiny values are prefixed with '\< '
* Negative tiny values are prefixed with '> '
* Zero returns '0' |

**Code example**

```ts
// Basic formatting
adjustFractionDigits(1234.5678, { maximumFractionDigits: 2 })
// Returns: '1,234.57'
```

**Code example**

```ts
// Format with custom locale
adjustFractionDigits(1234.5, { locale: 'de-DE', maximumFractionDigits: 1 })
// Returns: '1.234,5'
```

**Code example**

```ts
// Handle very small values
adjustFractionDigits(0.0000001, { maximumFractionDigits: 3 })
// Returns: '< 0.001'
```

### convert

**convert(input,from,to): number**

Converts a numeric value from one unit to another within the same measurement system

#### Parameters

| Name             | Type                                   | Description                                                      |
| ---------------- | -------------------------------------- | ---------------------------------------------------------------- |
| input (required) | number                                 | The numeric value to convert                                     |
| from (required)  | FromUnit                               | Source unit (e.g., units.length.meter, units.time.second)        |
| to (required)    | ConvertibleTarget\<FromUnit \| ToUnit> | Target unit for conversion (must be compatible with source unit) |

#### Returns

| Description             |
| ----------------------- |
| Converted numeric value |

#### Throws

| Error Type | Error Message                                                   |
| ---------- | --------------------------------------------------------------- |
| undefined  | Error if units are incompatible (different measurement systems) |

**Code example**

```ts
// Convert length
import { convert, units } from "@dynatrace-sdk/units";
convert(1500, units.length.meter, units.length.kilometer)
// Returns: 1.5
```

**Code example**

```ts
// Convert temperature
convert(32, units.temperature.degree_fahrenheit, units.temperature.degree_celsius)
// Returns: 0
```

**Code example**

```ts
// Convert time
convert(3600, units.time.second, units.time.hour)
// Returns: 1
```

**Code example**

```ts
// Using unsafe mode to convert with runtime-determined unit
convert(100, outputUnit, units.data.mebibyte, true)
```

**convert(input,from,to,unsafe): number**

#### Parameters

| Name              | Type            |
| ----------------- | --------------- |
| input (required)  | number          |
| from (required)   | ConvertibleUnit |
| to (required)     | ConvertibleUnit |
| unsafe (required) | true            |

### extractDisplayValueFromTimeValues

**extractDisplayValueFromTimeValues(from,to,intl,precision,valueFrom?,valueTo?): FormatTimeValuesResult**

Extracts the display value string from the from and to time values.

This function processes raw time values (which can be strings or TimeValue objects),
validates them, and returns a formatted display string. It's a higher-level wrapper
around `formatTimeValues` that handles parsing and validation.

#### Parameters

| Name                 | Type                            | Description                                                                               |
| -------------------- | ------------------------------- | ----------------------------------------------------------------------------------------- |
| from (required)      | null \| [TimeValue](#timevalue) | The starting time value (can be null)                                                     |
| to (required)        | null \| [TimeValue](#timevalue) | The ending time value (can be null)                                                       |
| intl (required)      | IntlShape                       | The internationalization shape for formatting messages                                    |
| precision (required) | TimePrecision                   | The time precision level ('minutes', 'seconds', or 'milliseconds'). Defaults to 'minutes' |
| valueFrom            | string                          | Optional raw string value for debugging purposes                                          |
| valueTo              | string                          | Optional raw string value for debugging purposes                                          |

#### Returns

| Description                                                             |
| ----------------------------------------------------------------------- |
| An object containing the display value, validity flag, and hint message |

**Code example**

```typescript
const result = extractDisplayValueFromTimeValues(
  { value: 'now-1h', type: 'expression', absoluteDate: '2024-01-01T11:00:00Z' },
  { value: 'now', type: 'expression', absoluteDate: '2024-01-01T12:00:00Z' },
  intl,
  'minutes'
);
// Returns: { displayValue: "Last 1 hour", isInvalid: false, hint: "" }
```

### format

**format(number,options?): string**

Converts and formats a numeric value using units and formatting options.

#### Parameters

| Name              | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| number (required) | number                                               | The numeric value to format                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| options           | [FormatOptions](#formatoptions)\<FromUnit \| ToUnit> | Formatting configuration options: * cascade: Cascades value down to specified unit depth (e.g., '1 km 500 m' for depth 2)
* input: Source unit for conversion (e.g., units.length.meter)
* output: Target unit for conversion (if not specified, only formatting is applied)
* suffix: Custom suffix to override unit symbol
* minimumFractionDigits: Minimum number of decimal places
* maximumFractionDigits: Maximum number of decimal places (defaults to minimumFractionDigits or 0)
* minimumSignificantDigits: Minimum significant digits (default: 1)
* maximumSignificantDigits: Maximum significant digits (default: 21)
* locale: Locale for number formatting (defaults to platform locale)
* useGrouping: Whether to use thousand separators
* abbreviate: Whether to shorten large numbers (e.g., 1.5K) |

#### Returns

| Description                                     |
| ----------------------------------------------- |
| A formatted string with the number and its unit |

**Code example**

```ts
// Format without units (abbreviation enabled by default)
format(1500)
// Returns: '2K'
```

**Code example**

```ts
// Format with unit conversion
format(1500, {
  input: units.length.meter,
  maximumFractionDigits: 1
})
// Returns: '1.5 km'
```

**Code example**

```ts
// Format with unit cascading
format(1500, {
  input: units.length.meter,
  cascade: 2
})
// Returns: '1 km 500 m'
```

### formatCurrency

**formatCurrency(number,currency,options?): string**

Formats a number according to currency and locale conventions.

#### Parameters

| Name                | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| number (required)   | number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | The numeric value to format                                                                                                                                                                                                                                                                                                                                            |
| currency (required) | undefined \| "CHF" \| "AED" \| "AFN" \| "ALL" \| "AMD" \| "ANG" \| "AOA" \| "ARS" \| "AUD" \| "AWG" \| "AZN" \| "BAM" \| "BBD" \| "BDT" \| "BGN" \| "BHD" \| "BIF" \| "BMD" \| "BND" \| "BOB" \| "BRL" \| "BSD" \| "BTN" \| "BWP" \| "BYN" \| "BZD" \| "CAD" \| "CDF" \| "CLP" \| "CNY" \| "COP" \| "CRC" \| "CUC" \| "CUP" \| "CVE" \| "CZK" \| "DJF" \| "DKK" \| "DOP" \| "DZD" \| "EGP" \| "ERN" \| "ETB" \| "EUR" \| "FJD" \| "FKP" \| "GBP" \| "GEL" \| "GHS" \| "GIP" \| "GMD" \| "GNF" \| "GTQ" \| "GYD" \| "HKD" \| "HNL" \| "HRK" \| "HTG" \| "HUF" \| "IDR" \| "ILS" \| "INR" \| "IQD" \| "IRR" \| "ISK" \| "JMD" \| "JOD" \| "JPY" \| "KES" \| "KGS" \| "KHR" \| "KMF" \| "KPW" \| "KRW" \| "KWD" \| "KYD" \| "KZT" \| "LAK" \| "LBP" \| "LKR" \| "LRD" \| "LSL" \| "LYD" \| "MAD" \| "MDL" \| "MGA" \| "MKD" \| "MMK" \| "MNT" \| "MOP" \| "MRU" \| "MUR" \| "MVR" \| "MWK" \| "MXN" \| "MYR" \| "MZN" \| "NAD" \| "NGN" \| "NIO" \| "NOK" \| "NPR" \| "NZD" \| "OMR" \| "PAB" \| "PEN" \| "PGK" \| "PHP" \| "PKR" \| "PLN" \| "PYG" \| "QAR" \| "RON" \| "RSD" \| "RUB" \| "RWF" \| "SAR" \| "SBD" \| "SCR" \| "SDG" \| "SEK" \| "SGD" \| "SHP" \| "SLE" \| "SLL" \| "SOS" \| "SRD" \| "SSP" \| "STN" \| "SVC" \| "SYP" \| "SZL" \| "THB" \| "TJS" \| "TMT" \| "TND" \| "TOP" \| "TRY" \| "TTD" \| "TWD" \| "TZS" \| "UAH" \| "UGX" \| "USD" \| "UYU" \| "UZS" \| "VES" \| "VND" \| "VUV" \| "WST" \| "XAF" \| "XCD" \| "XCG" \| "XDR" \| "XOF" \| "XPF" \| "XSU" \| "YER" \| "ZAR" \| "ZMW" \| "ZWL" \| | ISO 4217 currency code (e.g., 'USD', 'EUR')                                                                                                                                                                                                                                                                                                                            |
| options             | [FormatCurrencyOptions](#formatcurrencyoptions)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Currency formatting configuration: * locale: Override default locale (e.g., 'en-US', 'de-DE')
* abbreviate: Whether to shorten large numbers (e.g., '$1.5K')
* minimumFractionDigits: Minimum decimal places
* maximumFractionDigits: Maximum decimal places
* useGrouping: Whether to use thousand separators Additional options from Intl.NumberFormat are supported |

#### Returns

| Description               |
| ------------------------- |
| Formatted currency string |

**Code example**

```ts
// Format with default options
formatCurrency(1500, 'USD')
// Returns: '$1.50K'
```

**Code example**

```ts
// Format with custom locale and no abbreviation
formatCurrency(1500, 'EUR', {
  locale: 'de-DE',
  abbreviate: false
})
// Returns: '1.500,00 €'
```

**Code example**

```ts
// Format large number with abbreviation
formatCurrency(1500000, 'USD', { abbreviate: true })
// Returns: '$1.50M'
```

### formatDate

**formatDate(input,options?): string**

Formats a date according to locale and timezone settings.

#### Parameters

| Name             | Type                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input (required) | number \| Date                          | The date to format, as either: * Number of milliseconds since UNIX epoch
* JavaScript Date object                                                                                                                                                                                                                                                                                                                                                 |
| options          | [FormatDateOptions](#formatdateoptions) | Date formatting configuration: * locale: Override default locale (e.g., 'en-US', 'de-DE')
* timeZone: Timezone name (e.g., 'UTC', 'America/New_York')
* dateStyle: Full date formatting style ('full', 'long', 'medium', 'short')
* timeStyle: Time formatting style ('full', 'long', 'medium', 'short')
* hour12: Whether to use 12-hour clock (true) or 24-hour clock (false) Additional options from Intl.DateTimeFormatOptions are supported |

#### Returns

| Description                                           |
| ----------------------------------------------------- |
| Formatted date string according to locale and options |

**Code example**

```ts
// Format date with default locale and timezone
formatDate(new Date())
// Returns: '5/27/2025'
```

**Code example**

```ts
// Format with custom locale and timezone
formatDate(new Date(), {
  locale: 'de-DE',
  timeZone: 'Europe/Berlin',
  dateStyle: 'full'
})
// Returns: 'Dienstag, 27. Mai 2025'
```

**Code example**

```ts
// Format timestamp with custom style
formatDate(1621344000000, {
  dateStyle: 'short',
  timeStyle: 'short'
})
// Returns: '5/27/25, 2:30 PM'
```

### formatLong

**formatLong(value,options?): string**

Formats large numbers with precise decimal handling, useful for scientific or financial calculations.

#### Parameters

| Name             | Type                       | Description                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value (required) | string \| number \| bigint | The value to format. Accepts: * number: Regular JavaScript number
* bigint: For values beyond Number.MAX_SAFE_INTEGER
* string: Numeric string representation                                                                                                                                                                                      |
| options          | FormatLong                 | Formatting configuration: * locale: Override default locale (e.g., 'en-US', 'de-DE')
* minimumFractionDigits: Minimum decimal places
* maximumFractionDigits: Maximum decimal places
* minimumSignificantDigits: Minimum significant digits
* maximumSignificantDigits: Maximum significant digits
* useGrouping: Whether to use thousand separators |

#### Returns

| Description                                           |
| ----------------------------------------------------- |
| Formatted number string with precise decimal handling |

**Code example**

```ts
// Format large number
formatLong('123456789.123456789')
// Returns: '123,456,789.123'
```

**Code example**

```ts
// Format with custom locale and fraction digits
formatLong(123456.789, {
  locale: 'de-DE',
  maximumFractionDigits: 2
})
// Returns: '123.456,79'
```

**Code example**

```ts
// Format BigInt value
formatLong(BigInt('9007199254740991'))
// Returns: '9,007,199,254,740,991'
```

### formatTimeValues

**formatTimeValues(from,to,intl,precision,fromDate,toDate,hint): FormatTimeValuesResult**

Returns the display value props for given time values that include relative expressions.

This function formats two time values (from and to) into a human-readable display string,
handling both absolute dates and relative expressions like "Last 5 minutes" or "Tomorrow".

#### Parameters

| Name                 | Type                    | Description                                                        |
| -------------------- | ----------------------- | ------------------------------------------------------------------ |
| from (required)      | [TimeValue](#timevalue) | The starting time value                                            |
| to (required)        | [TimeValue](#timevalue) | The ending time value                                              |
| intl (required)      | IntlShape               | The internationalization shape for formatting messages             |
| precision (required) | TimePrecision           | The time precision level ('minutes', 'seconds', or 'milliseconds') |
| fromDate (required)  | Date                    | The from date as a Date object                                     |
| toDate (required)    | Date                    | The to date as a Date object                                       |
| hint (required)      | string                  | Optional hint message for additional context                       |

#### Returns

| Description                                                     |
| --------------------------------------------------------------- |
| An object containing the display value, validity flag, and hint |

**Code example**

```typescript
const result = formatTimeValues(
  { value: 'now-5m', type: 'expression', absoluteDate: '2024-01-01T12:00:00Z' },
  { value: 'now', type: 'expression', absoluteDate: '2024-01-01T12:05:00Z' },
  intl,
  'minutes',
  new Date('2024-01-01T12:00:00Z'),
  new Date('2024-01-01T12:05:00Z'),
  ''
);
// Returns: { displayValue: "Last 5 minutes", isInvalid: false, hint: "" }
```

### formatTimeframe

**formatTimeframe(value,intl,precision): FormatTimeValuesResult**

Formats a timeframe (from/to date strings or TimeValue objects) into a human-readable display string.

Handles parsing of string values. It accepts objects with `from` and `to` properties that can be
either strings or TimeValue objects.

#### Parameters

| Name                 | Type                  | Description                                                                                                                                                                                                                                                   |
| -------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value (required)     | null \| \{ from, to } | An object containing `from` and/or `to` properties. The properties can be either: - Strings: timeframe expressions (e.g., "now-1h") or ISO 8601 date strings - TimeValue objects: already parsed time values At least one of `from` or `to` must be provided. |
| intl (required)      | IntlShape             | The Intl shape object for internationalization                                                                                                                                                                                                                |
| precision (required) | TimePrecision         | The precision level for formatting dates ('minutes', 'seconds', or 'milliseconds'). Defaults to 'minutes'.                                                                                                                                                    |

#### Returns

| Description                                                                                    |
| ---------------------------------------------------------------------------------------------- |
| An object containing the formatted display value, validation status, and optional hint message |

**Code example**

```typescript
// With string values
const result = formatTimeframe(
  { from: 'now-1h', to: 'now' },
  intl
);
// Returns: { displayValue: "Last 1 hour", isInvalid: false, hint: "" }

// With ISO 8601 strings
const result2 = formatTimeframe(
  { from: '2024-01-01T00:00:00Z', to: '2024-01-02T00:00:00Z' },
  intl
);
// Returns: { displayValue: "Jan 1, 2024, 00:00 → Jan 2, 2024, 00:00", isInvalid: false, hint: "" }

// With TimeValue objects
const result3 = formatTimeframe(
  {
    from: { value: 'now-1h', type: 'expression', absoluteDate: '2024-01-01T11:00:00Z' },
    to: { value: 'now', type: 'expression', absoluteDate: '2024-01-01T12:00:00Z' }
  },
  intl
);
// Returns: { displayValue: "Last 1 hour", isInvalid: false, hint: "" }
```

### formatTimeframeToParts

**formatTimeframeToParts(from,to,intl,clampFutureToDateToNow,separator): string |&#x20;**

Formats a timeframe into a localized array of strings.

This function converts the from and to dates into timezone-aware strings using the user's locale,
and returns their formatted representations along with a separator string.
The IntlShape passed to the function is used to determine the language, while the IntlShape created
in the function (intlTimeFormat) is used to determine the type of time display.

If the current time is within the timeframe and `clampFutureToDateToNow` is true,
the `to` date is clamped to "now" to avoid showing future dates.

#### Parameters

| Name                              | Type              | Description                                     |
| --------------------------------- | ----------------- | ----------------------------------------------- |
| from (required)                   | Date              | Start date in the timeframe                     |
| to (required)                     | Date              | End date in the timeframe                       |
| intl (required)                   | IntlShape         | Intl object                                     |
| clampFutureToDateToNow (required) | boolean           | If false, the to date won't be clamped to `Now` |
| separator (required)              | MessageDescriptor |                                                 |

#### Returns

| Description                  |
| ---------------------------- |
| an array of timeframe parts. |

**Code example**

```ts
// Format timeframe
formatTimeframeToParts(new Date('2020-01-01'), new Date('2021-01-01'), intl //en)
// Returns: `["01 Jan, 2020, 00:00","to","01 Jan, 2021, 00:00"]`
```

**Code example**

```ts
// Format timeframe with the funture date to "Now"
formatTimeframeToParts(new Date('2020-01-01'), new Date('2026-01-01'), intl //en)
// Returns: `["01 Jan, 2020, 00:00","to","Now"]`
```

### formatUnit

**formatUnit(unit): string**

Formats a unit into a human-readable string representation.

#### Parameters

| Name            | Type            | Description                                                         |
| --------------- | --------------- | ------------------------------------------------------------------- |
| unit (required) | FormattableUnit | The unit to format, consisting of group, index, and exponent values |

#### Returns

| Description           |
| --------------------- |
| Formatted unit string |

**Code example**

```ts
// Format a simple unit
formatUnit([{ group: 'meter', index: 3, exponent: 1 }])
// Returns: 'km'
```

**Code example**

```ts
// Format a compound unit
formatUnit([
  { group: 'meter', index: 0, exponent: 1 },
  { group: 'hour', index: 0, exponent: '–1' }
])
// Returns: 'm/s'
```

**Code example**

```ts
// Format with exponents
formatUnit([{ group: 'meter', index: 0, exponent: 2 }])
// Returns: 'm^2'
```

### getFormatting

**getFormatting(number,options?): Formatting**

Converts and formats a number into its constituent parts for flexible display.

#### Parameters

| Name              | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| number (required) | number                                               | The numeric value to format                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| options           | [FormatOptions](#formatoptions)\<FromUnit \| ToUnit> | Formatting configuration options: * cascade: Cascades value down to specified unit depth (e.g., '1 km 500 m' for depth 2)
* input: Source unit for conversion (e.g., units.length.meter)
* output: Target unit for conversion
* suffix: Custom suffix to override unit symbol
* minimumFractionDigits: Minimum number of decimal places
* maximumFractionDigits: Maximum number of decimal places
* minimumSignificantDigits: Minimum significant digits (default: 1)
* maximumSignificantDigits: Maximum significant digits (default: 21)
* locale: Locale for number formatting
* useGrouping: Whether to use thousand separators
* abbreviate: Whether to shorten large numbers (e.g., 1.5K) |

#### Returns

| Description                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An array of formatting parts, where each part contains: * separator: The spacing between value and symbol
* symbol: The unit symbol or suffix
* symbolPrefix: Whether the symbol appears before the value
* value: The formatted numeric string |

**Code example**

```ts
// Format bytes with default options
getFormatting(1500)
// Returns: [{ value: '2K', symbol: '', separator: '', symbolPrefix: false }]
```

**Code example**

```ts
// Format with custom units and fraction digits
getFormatting(1500, {
  input: units.length.meter,
  maximumFractionDigits: 2
})
// Returns: [{ value: '1.5', symbol: 'km', separator: ' ', symbolPrefix: false }]
```

### mapGrailUnit

**mapGrailUnit(grailUnit): GrailUnitEquivalency**

Maps a Grail unit string to its corresponding units system equivalent.

#### Parameters

| Name                 | Type   | Description                                              |
| -------------------- | ------ | -------------------------------------------------------- |
| grailUnit (required) | string | The Grail unit string to convert (e.g., 'BytePerSecond') |

#### Returns

| Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit equivalency object containing: * unit: Corresponding units system unit
* type: Type of measurement (e.g., 'data', 'time')
* base: Base unit for the measurement type |

**Code example**

```ts
// Map data transfer rate unit
mapGrailUnit('BytePerSecond')
// Returns: { 'namespace': 'datarate', 'unitName': 'Bps', 'unit': [ { 'group': 'byte_m', 'index': 0, 'exponent': 1 }, { 'group': 'second', 'index': 0, 'exponent': '–1' } ] }
```

### ~~parseTime~~

> ⚠️ **Deprecated**
> Use the `parseTimeAsTimeValue` function instead

**parseTime(candidate?,relativeDate): null | TimeDetails**

Converts a string representation of time into a structured TimeDetails object.

#### Parameters

| Name                                      | Type           | Description                                                                                                                                                                                       |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~candidate~~**DEPRECATED**               | null \| string | Input string to parse. Supports: * ISO 8601 format (e.g., '2025-05-27T14:30:00Z')
* Relative expressions (e.g., 'now-30m', 'now+1h')
* Date formats (e.g., '2025-05-27', '14:30')
* 'now' keyword |
| ~~relativeDate~~**DEPRECATED** (required) | number         | Reference timestamp for relative expressions (defaults to current time)                                                                                                                           |

#### Returns

| Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TimeDetails object containing: * normalized: Cleaned and standardized input string
* date: JavaScript Date object
* type: 'expression' for relative times or 'iso8601' for absolute times Returns null if parsing fails |

**Code example**

```ts
// Parse ISO datetime
parseTime('2025-05-27T14:30:00Z')
// Returns: {
//   normalized: '2025-05-27T14:30:00Z',
//   date: Date('2025-05-27T14:30:00.000Z'),
//   type: 'iso8601'
// }
```

**Code example**

```ts
// Parse relative time
parseTime('now-30m')
// Returns: {
//   normalized: 'now-30m',
//   date: [Date 30 minutes before current time],
//   type: 'expression'
// }
```

**Code example**

```ts
// Parse date format
parseTime('2025-05-27 14:30')
// Returns: {
//   normalized: '2025-05-27T14:30:00Z',
//   date: Date('2025-05-27T14:30:00.000Z'),
//   type: 'iso8601'
// }
```

### parseTimeAsTimeValue

**parseTimeAsTimeValue(candidate?,relativeDate?,precision?): [TimeValue](#timevalue) | null**

Converts various time string formats into a normalized TimeValue object.

#### Parameters

| Name         | Type                                              | Description                                                                                                                                                                                |
| ------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| candidate    | null \| string                                    | Input string to parse. Supports: * ISO 8601 (e.g., '2025-05-27T14:30:00Z')
* Relative expressions (e.g., 'now-30m', 'now+1h')
* Date formats (e.g., '2025-05-27', '14:30')
* 'now' keyword |
| relativeDate | number                                            | Reference timestamp for relative expressions                                                                                                                                               |
| precision    | "day" \| "minutes" \| "seconds" \| "milliseconds" | Output precision level: * 'day': Date only
* 'minutes': Up to minutes
* 'seconds': Up to seconds
* 'milliseconds': Up to milliseconds                                                      |

#### Returns

| Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TimeValue object containing: * type: 'expression' \| 'iso8601'
* value: Normalized input string
* absoluteDate: Resolved ISO timestamp Returns null if parsing fails |

**Code example**

```ts
// Parse ISO datetime
parseTime('2025-05-27T14:30:00Z')
// Returns: {
//   type: 'iso8601',
//   value: '2025-05-27T14:30:00Z',
//   absoluteDate: '2025-05-27T14:30:00Z'
// }
```

**Code example**

```ts
// Parse relative time
parseTime('now-30m')
// Returns: {
//   type: 'expression',
//   value: 'now()-30m',
//   absoluteDate: [ISO string 30 minutes before now]
// }
```

### variantNames

**variantNames(unit): VariantNames\<U>**

Returns the names of all units to which the provided unit can be converted.

#### Parameters

| Name            | Type | Description                                                                 |
| --------------- | ---- | --------------------------------------------------------------------------- |
| unit (required) | U    | The source unit to find convertible variants for (e.g., units.length.meter) |

#### Returns

| Description                                           |
| ----------------------------------------------------- |
| Array of unit names that are valid conversion targets |

**Code example**

```ts
// Get all length unit names
variantNames(units.length.meter)
// Returns:
// ['meter', 'kilometer', 'centimeter', 'millimeter', ...]
```

**Code example**

```ts
// Get temperature unit names
variantNames(units.temperature.degree_celsius)
// Returns:
// ['degree_celsius', 'degree_fahrenheit', ...]
```

### variantUnits

**variantUnits(unit): VariantUnits\<U>**

Returns all units to which the provided unit can be converted.

#### Parameters

| Name            | Type | Description                                                                 |
| --------------- | ---- | --------------------------------------------------------------------------- |
| unit (required) | U    | The source unit to find convertible variants for (e.g., units.length.meter) |

#### Returns

| Description                                             |
| ------------------------------------------------------- |
| Array of unit objects that are valid conversion targets |

**Code example**

```ts
// Get all length units
variantUnits(units.length.meter)
// Returns:
// [
//   [{ 'group': 'meter', 'index': -15, 'exponent': 1 }],
//   [{ 'group': 'meter', 'index': 30, 'exponent': 1 }],
//   ...
// ]
```

**Code example**

```ts
// Get convertible temperature units
variantUnits(units.temperature.degree_celsius)
// Returns:
// [
//   [{ 'group': 'degree_celsius', 'index': 0, 'exponent': 1 }],
//   [{ 'group': 'degree_fahrenheit', 'index': 0, 'exponent': 1 }],
//   ...
// ]
```
