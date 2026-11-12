## Number formats and localization

The `NumberInput` uses the user's regional format (from `@dynatrace-sdk/user-preferences`) to interpret and display numbers. Because of this it accepts a wide range of input formats.

### Valid number formats

A value is **fully valid** once it is parseable as a JavaScript number. The following formats are accepted:

| Format              | Example                                                                   |
| ------------------- | ------------------------------------------------------------------------- |
| Plain integer       | `42`, `-7`, `+100`                                                        |
| Decimal             | `3.14` or `3,14` (locale-dependent decimal separator)                     |
| Scientific notation | `1.5e3`, `-2.4E-6`, `1e+10`                                               |
| Locale-grouped      | `1,234,567` (EN) / `1.234.567` (DE) / `1 234 567` (FR) / `1'234'567` (CH) |

The input accepts `.` and `,` interchangeably as a decimal separator — the correct interpretation is inferred automatically from grouping context (e.g. `1,234` is treated as a grouped thousand, while `1,5` is treated as a decimal value of 1.5).

### Typing behaviour

While the user is typing, the field is intentionally permissive: intermediate states such as `-`, `1.`, or `1.5e` are kept in the input without being rejected. The `onChange` callback is only fired when a **fully valid number** can be parsed. Clearing the field fires `onChange` with `null`.

### Paste behaviour

When a formatted number is pasted (e.g. `1,234,567.89` copied from a spreadsheet or `1.234.567,89` from a German locale), the component attempts to normalise it automatically. It strips locale-specific grouping separators (spaces, apostrophes `'`, commas, or dots used as thousands separators) and converts the remaining decimal separator to the value expected by the current locale. If the pasted string cannot be resolved to a valid number it is discarded and the previous value is restored.
