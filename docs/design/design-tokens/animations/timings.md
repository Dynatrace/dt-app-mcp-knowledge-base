## Timings

Timings define the duration of an animation.

```ts
import Timings from '@dynatrace/strato-design-tokens/timings';
```

| Name                                                                                    | Value                  | CSS variable                   | Description |
| --------------------------------------------------------------------------------------- | ---------------------- | ------------------------------ | ----------- |
| `Timings.Instant.Default`                                                               | `0ms`                  | `--dt-timings-instant-default` |             |
| `Timings.Offset.Short;Timings.Offset.Medium;Timings.Offset.Long;Timings.Offset.Default` | `20ms;30ms;100ms;50ms` | `--dt-timings-offset-short`    |             |
| `Timings.Fast.Quick;Timings.Fast.Default;Timings.Fast.Moderate`                         | `150ms;170ms;200ms`    | `--dt-timings-fast-quick`      |             |
| `Timings.Base.Quick;Timings.Base.Default;Timings.Base.Moderate`                         | `250ms;300ms;350ms`    | `--dt-timings-base-quick`      |             |
| `Timings.Slow.Default;Timings.Slow.Moderate;Timings.Slow.Gentle`                        | `400ms;600ms;800ms`    | `--dt-timings-slow-default`    |             |
| `Timings.Slowest.Default;Timings.Slowest.Moderate;Timings.Slowest.Gentle`               | `1000ms;1200ms;1500ms` | `--dt-timings-slowest-default` |             |
