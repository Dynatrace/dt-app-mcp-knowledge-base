Compound component that arranges `SegmentSelector`, `FilterField`, `TimeframeSelector`, and `ApplyButton` in the standard order with a built-in responsive layout.

Built-in slots are always rendered in their canonical order regardless of their JSX position. Any custom children that are not built-in slots are interleaved based on their JSX position relative to the built-in slots, falling into one of five zones:

- Zone A: before `SegmentSelector`
- Zone B: between `SegmentSelector` and `FilterField`
- Zone C: between `FilterField` and `TimeframeSelector`
- Zone D: between `TimeframeSelector` and `ApplyButton`
- Zone E: after `ApplyButton`

Package `@dynatrace/strato-components`, latest version **3.17.1**. Below are the changes to `FilterComposition`. See [Components changelog](https://developer.dynatrace.com/changelogs/design-system/components-changelog.md) for all changes to the package.
