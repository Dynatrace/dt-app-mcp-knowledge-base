## When not to use

- For simple filtering where users don't need to control logical or comparison operators themselves. For these scenarios, use [FilterBar](https://developer.dynatrace.com/design/components/filters/FilterBar.md).
- Never combine FilterField and FilterBar for the same dataset.

For best practices on when to use which filter component, see [Filtering](https://developer.dynatrace.com/design/patterns/filtering.md).

![An incorrect example showing a FilterField and a FilterBar both used to
filter the same
dataset.](https://developer.dynatrace.com/assets/images/filterfield-when-to-use-light-cb225a6e10847849d9a77d6278e83037.webp)

Don't combine the FilterField and the FilterBar for the same dataset.
