## 1. Review changed props

| Prop             | `NumberInput`                      | `NumberInputV2`                                  |
| ---------------- | ---------------------------------- | ------------------------------------------------ |
| `min`            | `number \| string`                 | `number`                                         |
| `max`            | `number \| string`                 | `number`                                         |
| `step`           | `number` — controls increment only | `number` — also defines the valid value interval |
| `stepMultiplier` | —                                  | `number` (new)                                   |
| `variant`        | —                                  | `'default' \| 'minimal'` (new)                   |
| `children`       | —                                  | `Prefix`, `Suffix`, `Button` slots (new)         |
| `autoComplete`   | ✓                                  | removed                                          |
| `minLength`      | ✓                                  | removed                                          |
| `maxLength`      | ✓                                  | removed                                          |
| `pattern`        | ✓                                  | removed                                          |

If you passed `min` or `max` as strings (e.g. `min="0"`), change them to numbers:

```diff
- <NumberInput min="0" max="100" />
+ <NumberInputV2 min={0} max={100} />
```
