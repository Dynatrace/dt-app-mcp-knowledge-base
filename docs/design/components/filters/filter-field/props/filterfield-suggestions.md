## FilterField.Suggestions

The `FilterField.Suggestions` component to render a list of suggestions is optional, but can be used to set options specific to the suggestions.

**`FilterFieldSuggestionsProps`**

```ts
export declare type FilterFieldSuggestionsProps = WithChildren & StylingProps & DataTestId & BehaviorTrackingProps & {
    /** Whether the suggestions are loading. If true, a loading indicator is shown and otherwise the suggestions are shown. */
    loading?: boolean;
};
```
