## Component overview

Choose the simplest filter component or combination that meets users' filtering needs.

### FilterField

**Description:** An advanced filtering component that supports complex filtering using [Filter field syntax](https://docs.dynatrace.com/docs/shortlink/ui-filter-field), plus auto-suggestions. See [Usage](https://developer.dynatrace.com/design/components/filters/FilterField/usage.md).

![FilterField](https://developer.dynatrace.com/assets/images/filters-filterfield-light-e1c8fe15473e011da3264c7fc3964583.webp)

**Best for:**

- Large datasets with more than five filter categories and several operators
- Power users accustomed to building queries
- Users with highly individual filtering needs
- Scenarios requiring OR operations

> **Note**
>
> `DQLEditor` may be used instead of `FilterField` in special cases where users need to combine advanced filtering with editing DQL queries.

### FilterBar

**Description:** A versatile filtering component that supports a variety of filter methods, including text input, single or multiple selection, booleans, and more, based on form components. See [Usage](https://developer.dynatrace.com/design/components/filters/FilterBar/usage.md).

![FilterBar](https://developer.dynatrace.com/assets/images/filters-filterbar-light-c676fa993585e9b00646c8c63705516d.webp)

**Best for:**

- Tables or lists with five or fewer filter categories
- Scenarios requiring a few simultaneous filters and no query-building skills
- Cases where filter categories should be visible and simple to use
- Situations requiring different types of filters, such as selection, text input, timeframe, etc. (Note: `TimeframeSelector` provides the functionality for filtering by time.)

### SegmentSelector

**Description:** Component for filtering data by pre-defined [Segments](https://docs.dynatrace.com/docs/shortlink/segments) (applications, infrastructure, organizational units, etc.). Functions as a top-level filter, setting the scope for additional filters. See [Usage](https://developer.dynatrace.com/design/components/filters/SegmentSelector/usage.md).

![SegmentSelector](https://developer.dynatrace.com/assets/images/filters-segmentselector-light-0ee95015b7bb8e813280b5a13a9bd824.webp)

**Best for:**

- Top-level filtering that sets the scope for additional filters

### TimeframeSelector

**Description:** Component for filtering data from specific timeframes. See [Usage](https://developer.dynatrace.com/design/components/filters/TimeframeSelector/usage.md).

![TimeframeSelector](https://developer.dynatrace.com/assets/images/filters-timeframeselector-light-10478540f3207c293fbafae172194cae.webp)

**Best for:**

- Scoping data by time
- Historical data analysis
- Time-filtering functionality in `FilterBar`

### Form components

**Description:** Form components provide filter logics for `FilterBar` and can also be used as standalone filters:

- Single selection - `Radio`, `Checkbox`, or `Select`
- Multiple selection - `Checkbox` or `Select`
- Boolean - `Switch`
- Date/time picker - `DateTimePicker`
- Text - `TextInput`

**Best for:**

- Filter logics in `FilterBar`
- Standalone filters for simple datasets or lists
- [Filters in the sidebar](#note-about-filters-in-the-sidebar), used in combination with `FilterField`
