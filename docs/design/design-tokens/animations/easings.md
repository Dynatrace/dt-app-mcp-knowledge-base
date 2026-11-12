## Easings

Easings define the rate of change of an animation over time, affecting speed, acceleration, and deceleration.

```ts
import Easings from '@dynatrace/strato-design-tokens/easings';
```

| Name                    | Value                              | CSS variable                    | Description                                                                                                                                                |
| ----------------------- | ---------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Easings.Decelerate`    | `cubic-bezier(0, 0, 0.2, 1)`       | `--dt-easings-decelerate`       | Use to convey the deceleration of an object, such as when it's coming to a stop. It starts at a fast pace and then slows down at the end.                  |
| `Easings.Accelerate`    | `cubic-bezier(0.5, 0, 1, 1)`       | `--dt-easings-accelerate`       | Use to convey the acceleration of an object, such as when it's being launched. It starts at a slow pace and then speeds up at the end.                     |
| `Easings.SlowInFastOut` | `cubic-bezier(0.8, 0, 0.5, 1)`     | `--dt-easings-slow-in-fast-out` | Use to draw attention to an object. It starts slowly, accelerates in the middle, and then slows down again at the end.                                     |
| `Easings.FastInSlowOut` | `cubic-bezier(0.4, 0, 0.2, 1)`     | `--dt-easings-fast-in-slow-out` | Use to move or scale objects. It starts slowly, quickly accelerates in the middle, and slows down at the end.                                              |
| `Easings.OutBack`       | `cubic-bezier(0.4, 1.6, 0.7, 1)`   | `--dt-easings-out-back`         | Use to convey a playful or elastic effect, such as when an object bounces or stretches. It overshoots its target position before settling back into place. |
| `Easings.RotateElastic` | `cubic-bezier(0.8, 0.3, 0.3, 0.8)` | `--dt-easings-rotate-elastic`   | Use to create dynamic, nonlinear rotation that adds energy and movement, ideal for rotating loading indicators.                                            |
