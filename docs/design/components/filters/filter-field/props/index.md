`FilterField` is an advanced, text-based filtering component. It supports complex data filtering with intuitive filter field syntax and auto-suggestions.

**`FilterFieldProps`**

````ts
export declare type FilterFieldProps = PropsWithChildren<StylingProps & DataTestId & MaskingProps & BehaviorTrackingProps & FormControlProps<string, (value: string, tree: FilterFieldTree, isValid: boolean) => void, HTMLDivElement> & {
    /**
     * Internal: associates this control with a `_Form` rendered outside its
     * React subtree via the native `form` attribute. Unstable.
     * @internal
     */
    _form?: string;
    /**
     * Internal: routes this control's native/Strato validation messages to the
     * field outlet (default), the enclosing form's outlet, or both. Unstable.
     * @internal
     */
    _messageTarget?: _MessageTarget | _MessageTarget[];
    /**
     * Placeholder text displayed when the filter field is empty.
     * @defaultValue 'Type to filter'
     */
    placeholder?: string;
    /**
     * Whether the automatically determined suggestions (logical / comparison operators) should be shown.
     * If set to true, the suggestions will automatically be added to the suggestions overlay.
     * @defaultValue false
     */
    autoSuggestions?: boolean;
    /**
     * The number of default suggestions rendered before showing a "Show more" button.
     * Set to -1 to always render all the available suggestions.
     * You can specify different counts for when the input is empty and when the user has typed something.
     * @defaultValue \{ empty: 5, filled: 10 \}
     */
    defaultSuggestionsCount?: {
        empty?: number;
        filled?: number;
    } | number;
    /**
     * Callback triggered when the suggestions may need to be updated.
     * @defaultValue undefined
     */
    onSuggest?: FilterFieldSuggestionsCallback;
    /**
     * Callback triggered when the user submits the currently entered filter for filtering.
     * @defaultValue undefined
     */
    onFilter?: (filterState: {
        /** The current value of the filter field. */
        value: string;
        /** Syntax tree of the current value. */
        syntaxTree: FilterFieldTree;
        /** Whether the current value is valid. */
        isValid: boolean;
    }) => void;
    /**
     * Custom types to restrict allowed values in the validator map.
     * Keys are type names that can be used in the validatorMap, values are validation functions.
     * @example
     * ```tsx
     * <FilterField
     *   customTypes={{
     *     Email(value) {
     *        return /someRegex/.test(value);
     *     },
     *   }}
     *   validatorMap={{
     *     keyPredicates: {
     *       email: { valuePredicate: { type: 'Email' } }
     *     }
     *   }}
     * />
     * ```
     */
    customTypes?: FilterFieldCustomTypes;
    /** Validators to restrict allowed keys and their operators. */
    validatorMap?: FilterFieldValidatorMap;
    /** Config to enable new nodes in the FilterFieldTree. */
    parserConfig?: {
        /**
         * Whether search operators are enabled in the filter field. If set to false,
         * they will be marked as error and returned accordingly in the syntax tree.
         * @defaultValue false
         * @deprecated With the next breaking change cycle, the SearchOperator node will be returned by default
         */
        searchConversion?: boolean;
        /**
         * Whether a key will be converted to a JSONPath node if a JSONPath is entered in the FilterField.
         * If set to false, they will be marked as error and returned accordingly in the syntax tree.
         * @defaultValue false
         * @deprecated With the next breaking change cycle, the jsonPathConversion will be enabled by default
         */
        jsonPathConversion?: boolean;
        /**
         * Whether a value will be converted to an IPAddress node if an IPAddress is entered in the FilterField.
         * If set to false, they will be returned as a 'String' node in the syntax tree.
         * @defaultValue false
         * @deprecated With the next breaking change cycle, the ipAddressConversion will be enabled by default
         */
        ipAddressConversion?: boolean;
        /**
         * Whether a value will be converted to a UID node if a UID is entered in the FilterField.
         * If set to false, they will be returned as a 'String' node in the syntax tree.
         * @defaultValue false
         * @deprecated With the next breaking change cycle, the uidConversion will be enabled by default
         */
        uidConversion?: boolean;
        /**
         * Whether a value will be converted to a Timestamp node if a Timestamp is entered in the FilterField.
         * If set to false, they will be returned as a 'String' node in the syntax tree.
         * @defaultValue false
         * @deprecated With the next breaking change cycle, the timestampConversion will be enabled by default
         */
        timestampConversion?: boolean;
        /**
         * Whether a value will be converted to a SmartscapeId node if a SmartscapeId is entered in the FilterField.
         * If set to false, they will be returned as a 'String' node in the syntax tree.
         * @defaultValue false
         * @deprecated With the next breaking change cycle, the smartscapeIdConversion will be enabled by default
         */
        smartscapeIdConversion?: boolean;
        /**
         * Whether a `*` in the middle of a value (e.g. `emea-*-prod`) is accepted as a wildcard,
         * producing a `matches-wildcard` or `not-matches-wildcard` operator node.
         * When off (default), a middle `*` is a parse error.
         * Per-key scoping is available via `validatorMap.comparisonOperators` once this flag is on.
         * @defaultValue false
         * @deprecated With the next breaking change cycle, the matchesWildcardConversion will be enabled by default
         */
        matchesWildcardConversion?: boolean;
    };
    /**
     * Namespace identifying the used key for the recent and saved filters storage.
     * Defaults currently to null and will default to `'root'` with the next breaking change.
     * Set the value to `null` if you want to opt out of the recent and saved filters api.
     * @defaultValue null
     *
     */
    filterNamespace?: string | null;
}>;
````
