## Suggestions

Suggestions help users build valid filter expressions and discover available options. When the FilterField is focused, suggestions appear in an overlay below the field and update dynamically as the user types.

Show different suggestions in the FilterField depending on the user's input and the current suggestion type.

![A FilterField with an open suggestions overlay below it, displaying
suggestions that update as the user
types.](https://developer.dynatrace.com/assets/images/filterfield-suggestions-light-a1d3e4e0c624fce0401285765ec6a318.webp)

The FilterField suggestions are shown in an overlay and react to user input.

### General rules

- Match the suggestion label to what will be inserted in the input, except for characters that require escaping. For example:
  - Don't use `Warning` as a suggestion label when the value `WARN` will be inserted.
  - Display `Process group` as the label, and insert `"Process group"` into the input.
- Only show matching suggestions when users start typing.
- Make matches case-insensitive and show them that way. For example, typing "cluster" also shows "Cluster" as a suggestion.
- Order key and value suggestions from most relevant to least relevant.
  - Define relevance based on your app's domain. This may include usage metrics (for example, how frequently a value is used in an app) or domain-specific defaults.
  - If the relevance can be determined for only some suggestions, list those first, and then order the others alphabetically below.
  - If the relevance can't be determined, use alphabetical order.
- Rank the matching suggestions in the following order when users start typing: exact matches, starts-with matches, contains and ends with matches. Within each ranking category, keep the original suggestion order (by relevance or alphabetically).
- Don't override FilterField's automatic suggestions, such as recently used, pinned, and search. These are managed by the component and triggered automatically based on the input phase, configuration, prioritization, and order.
- Don't include escape characters (`"` and `\`) in the suggestion unless part of the actual key or value. These characters are added automatically in the input field when the suggestion is selected.
- Don't hide or limit suggestions based on previous or subsequent filter statements.
  - For example, even if `status = error` is applied, still suggest `status` as a key.

**Recommendation:** Use description labels to clarify suggestions when labels are ambiguous or not self-explanatory.

### Rules for key suggestions

> **Note**
>
> When using `validatorMap`, `autoSuggestions={true}`, or default `onSuggest`, key suggestions are automatically managed by the `FilterField` component.

Keys are filterable attributes or fields in a dataset that users can select to define their filter criteria. For example, `Status`.

- Always show key suggestions at the beginning of a new filter statement, for example, when the FilterField is empty or a complete filter statement is already present.
- Indicate the data type with an icon.

![A FilterField suggestions overlay showing key suggestions, each prefixed
with an icon indicating the data
type.](https://developer.dynatrace.com/assets/images/filterfield-key-suggestions-light-65a90a7576e0b7cacc171db36aa796a0.webp)

Key suggestions include an icon that indicates the data type.

### Rules for filter statement suggestions (optional)

While users are typing, you can suggest the typed input as a value for a filter statement. This is common for two use cases:

- When the typed input matches a known filter value. For example, when a user types `error`, you suggest `status = error`.
- When suggesting the typed input as the value for commonly used keys. For example, when a user filters a list of entities and types `dev`, you suggest `Entity name = dev`.

If you include filter statement suggestions, follow these rules:

- Place filter statement suggestions below key suggestions.
- Suggest full filter statements consisting of key, comparison operator, and typed value.
- Suggest filter statements with matching values above the ones for commonly used keys.

![A FilterField overlay showing filter statement suggestions such as "Status
equals error", listed below the key suggestion after the user typed
"error".](https://developer.dynatrace.com/assets/images/filterfield-statement-suggestions-light-29cd8fed357b20be1d011b03fac95f4e.webp)

Filter statement suggestions are shown for matching filter values and
commonly used keys.

### Rules for comparison operator suggestions

> **Note**
>
> With `validatorMap` or default `onSuggest`, operator suggestions are automatically managed by the `FilterField` component.

Comparison operators define how a key compares to a value. For example, equals `=` or does not equal `!=`.

- Always show comparison operator suggestions after users select a key suggestion or enter a space.
- Keep the default order of comparison operator suggestions unless the first suggestion won't lead to useful results for the given key.
- Only suggest comparison operators that are compatible with the key's data type.
- Don't auto-insert a comparison operator after a key.

![Example of a correct operator list for the text key "Status" — Equals,
Doesn't equal, and Contains — and an incorrect one offering numeric operators
it doesn't support, such as Less than and Greater
than.](https://developer.dynatrace.com/assets/images/filterfield-comparison-operator-suggestions-light-8cb03b524ab62460bba8dd9035dd52f1.webp)

Only suggest comparison operators that are supported for the entered key.

### Rules for value suggestions

> **Note**
>
> With `validatorMap`, `autoSuggestions={true}`, or default `onSuggest`, value suggestions are automatically managed by the `FilterField` component.

Values are data that define a given key. For example, `Warning` and `Error` are potential values for a `Status` key.

- Always show value suggestions after users select a comparison operator suggestion or enter a space. The only **exceptions** are when:
  - The comparison operator is *starts with*, *ends with*, *contains*, *matches wildcard*, *exists*, or *matches phrase*.
  - The value is a duration or number. In these cases, only show suggestions if they're truly helpful for users.

![A FilterField suggestions overlay listing the possible values for the
"Status" key — NONE, INFO, WARN, and ERROR — shown as soon as the user selects
the equals
operator.](https://developer.dynatrace.com/assets/images/filterfield-value-suggestions-light-b51643023bc6e6fbd44454a52a39ae0d.webp)

After a comparison operator has been selected, suggested values for the
entered key appear.

### Rules for logical operator suggestions

> **Note**
>
> With `autoSuggestions={true}` or default `onSuggest`, logical operator suggestions are automatically managed by the `FilterField` component.

Logical operators connect multiple filter statements. The FilterField automatically uses an implicit `AND` between two filter statements. The `OR` suggestion in the overlay helps users discover the second logical operator option.

- Always suggest `OR` once a statement is complete, and place it below the key and statement suggestions.
- Never suggest the `AND` operator, as it is implicit and handled automatically.

![Example of a correct suggestions overlay that lists "OR" below the key
suggestions, and an incorrect one that suggests "AND" and places both
operators above
them.](https://developer.dynatrace.com/assets/images/filterfield-logical-operator-suggestions-light-d7b1b3c4961be0208cad278d9f77038b.webp)

Show the OR suggestion below the key suggestions and don't include a
suggestion for the AND operator.

### Suggestion groups

- If needed, use groups to categorize key and value suggestions within their suggestion type.
- Don't use generic group titles like "Key suggestions." Use categories that help users make a choice more quickly.
