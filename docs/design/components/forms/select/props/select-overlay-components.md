## Select overlay components

### Select.Option

Every option of the select is represented by the children of the `Select.Option` component.

**`SelectOptionProps`**

```ts
export declare type SelectOptionProps<OptionValue> = PropsWithChildren & StylingProps & DataTestId & BehaviorTrackingProps & {
    value: OptionValue;
    textValue?: string;
    id?: Key;
    'aria-label'?: string;
    disabled?: boolean;
};
```

### Select.Group

The `Select.Group` component can be used to add groups to the `Select` component.

**`SelectGroupProps`**

```ts
export declare type SelectGroupProps = PropsWithChildren<unknown> & StylingProps & DataTestId & BehaviorTrackingProps;
```

### Select.GroupLabel

When using groups inside the `Select` component, you can name each group by adding a `Select.GroupLabel` component with a suitable title.

**`SelectGroupLabelProps`**

```ts
export declare type SelectGroupLabelProps = PropsWithChildren<unknown> & StylingProps & DataTestId & BehaviorTrackingProps;
```

### Select.Filter

**`SelectFilterProps`**

```ts
export declare type SelectFilterProps = StylingProps & DataTestId & BehaviorTrackingProps & {
    /**
     * Flag indicating if the client-side filtering should be disabled or not.
     * @defaultValue false
     **/
    disableFiltering?: boolean;
    /** Defines the default filter string. */
    defaultValue?: string;
    /** Defines the filter string value. */
    value?: string;
    /** The callback is triggered when the filterValue changes. */
    onChange?: (filterValue: string) => void;
};
```

### Select.EmptyState

**`SelectEmptyStateProps`**

```ts
export declare type SelectEmptyStateProps = PropsWithChildren<unknown> & StylingProps & DataTestId & BehaviorTrackingProps;
```
