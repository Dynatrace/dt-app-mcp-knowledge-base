## Best practices

### Layout

Follow these established Dynatrace filter patterns to maintain consistency and predictability:

- Position filter groups directly above or beside their affected data.
- Group related filters together.
- Arrange filters from general to specific:

1. Start with `SegmentSelector` (top left).
2. Enable category filters with `Filter` or `FilterField`, not both.
3. Place `TimeframeSelector` at the end.
4. Place additional action buttons or menus on the right side of the filter group.

![FilterBar layout](https://developer.dynatrace.com/assets/images/filters-layout-filterbar-light-128cf94a1e7987def24e67c4f5382a86.webp)

![FilterBar layout](https://developer.dynatrace.com/assets/images/filters-layout-filterfield-light-25523d1f15ceaf119bdd806add0e5b42.webp)

#### Note about filters in the sidebar

If your app doesn't need `FilterField`, and there are five or fewer filter categories, don't put filters in the sidebar. Use `FilterBar` instead.

In rare cases, a combination of `FilterField` plus a few form component filters in the sidebar may improve filtering experiences by helping users discover which filters exist. In these rare cases:

- [Form components](#form-components) in the sidebar should always be combined with `FilterField` as the primary filter.
- Only put the most important filters in the sidebar. There should never be as many filters in the sidebar as there are filter categories. All filter categories are accessible with `FilterField`.
- The user's selections in the sidebar should be visible in `FilterField` with correct syntax. Likewise, filter statements in `FilterField` should be visible in any corresponding filter in the sidebar.
- Use `Accordion` to enable collapsing filters in the sidebar. The first accordion should be open in the starting state.

### Behavior

#### Starting state

- Start with all selected if most users will eliminate one or a few values.
- Start with all unselected if most users will select just one or a few values.

#### State persistence

- Users may need to navigate away from a filtered view during a flow. Their filter selections should persist until they reset their filters, refresh the page, or the session times out.

#### Validation messages

- If there are no results to a user’s filter selection, provide a "No results found" message with suggestions to adjust the filters.

![No results message](https://developer.dynatrace.com/assets/images/filters-no-results-light-8150847724c09231628bd1377ae74b7b.webp)

#### Dynamic vs batch filtering

##### Use dynamic filtering (immediate update) for

- Single filter controls with instant results
- Text inputs, selects, and valid syntax queries (`FilterField`)
- Applications that respond quickly

##### Use batch filtering (delayed update) when

- Multiple filter selections are needed for meaningful results
- Processing time is required
- Dynamic filtering could incur extra costs for the user or Dynatrace
- You’re unsure – batch filtering is the safer choice to avoid premature updates that might frustrate users

#### Sharable filter views

- Enable users to share filter views. Recipients should see the filtered view that was shared, without the need to manually apply filters.

### Accessibility

- Use [labels that can be understood](https://styleguide.dynatrace.com/docs/accessibility-and-inclusivity/internationalization/#best-practices-for-internationalization) by most users.
- Provide clear, actionable error messages that help users resolve issues independently, if possible.
