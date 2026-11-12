## Types

### AdjustFractionDigitsOptions

#### Properties

| Name                     | Type                     | Description                                                                                         |
| ------------------------ | ------------------------ | --------------------------------------------------------------------------------------------------- |
| locale                   | string \| Array\<string> | The locale according to which the number will be adjusted.                                          |
| maximumFractionDigits    | number                   | Maximum number of decimal digits.                                                                   |
| maximumSignificantDigits | number                   | Maximum number of significant digits. Default is 21                                                 |
| minimumFractionDigits    | number                   | Minimum number of decimal digits.                                                                   |
| minimumSignificantDigits | number                   | Minimum number of significant digits. Default is 1                                                  |
| useGrouping              | boolean                  | Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. |

### FormatCurrencyOptions

#### Properties

| Name       | Type                     | Description                                                                         |
| ---------- | ------------------------ | ----------------------------------------------------------------------------------- |
| abbreviate | boolean                  | It will shorten the number to a shorter format. (e.g. `input: 1500, output: 1.5k`). |
| locale     | string \| Array\<string> | The locale according to which the number will be formatted.                         |

### FormatDateOptions

Interface that extends Intl.DateTimeFormatOptions to pass an optional property to overwrite the default locale.
See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options).

#### Properties

| Name   | Type                     | Description                                                 |
| ------ | ------------------------ | ----------------------------------------------------------- |
| locale | string \| Array\<string> | The locale according to which the number will be formatted. |

### FormatOptions

#### Properties

| Name                     | Type                                                      | Description                                                                                                                                                                                                                                                                                               |
| ------------------------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| abbreviate               | boolean                                                   | It will shorten the number to a shorter format. (e.g. `input: 1500, output: 1.5k`).                                                                                                                                                                                                                       |
| cascade                  | number                                                    | Will search for the biggest unit within its group and cascade it down the the specified depth. The last number will get rounded to `maximumFractionDigits`. (e.g. `format(1500, { input: units.length.meter, cascade: 2}), output: '1 km 500 m')`).                                                       |
| input                    | FromUnit                                                  | If input unit is defined, it will convert it to the best fitting unit. (e.g. `format(1500, { input: units.length.meter }), output: '1.5 km')`).                                                                                                                                                           |
| locale                   | string \| Array\<string>                                  | The locale that will be used to format the number. By default it will use the platform locale specified by the user.                                                                                                                                                                                      |
| maximumFractionDigits    | number                                                    | The amount of maximumFractionDigits points. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumfractiondigits). If minimumFractionDigits is passed, set to minimumFractionDigits by default. Otherwise set to 0 by default. |
| maximumSignificantDigits | number                                                    | Maximum number of significant digits. Default is 21                                                                                                                                                                                                                                                       |
| minimumFractionDigits    | number                                                    | The amount of minimumFractionDigits points. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumfractiondigits).                                                                                                             |
| minimumSignificantDigits | number                                                    | Minimum number of significant digits. Default is 1                                                                                                                                                                                                                                                        |
| output                   | OutputUnit\<UndefinedCoalescing\<FromUnit \| > \| ToUnit> | If not specified, the conversion is disabled (e.g. `format(1500), output: 1.5K`).                                                                                                                                                                                                                         |
| suffix                   | string                                                    | A custom suffix that overwrites the unit symbol.                                                                                                                                                                                                                                                          |
| useGrouping              | boolean                                                   | Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping)                                                                 |

### TimeValue

The value of a part of a timeframe.

#### Properties

| Name                    | Type                      | Description                                                                           |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| absoluteDate (required) | string                    | The actual selected date as ISOString, equals the value in case of an 'iso8601'-type. |
| type (required)         | "expression" \| "iso8601" | Defines the type of the value.                                                        |
| value (required)        | string                    | The sanitized value.                                                                  |
