## Select base components

### Select.Content

The `Select.Content` wraps all the custom content of the overlay, including the options, groups, and group labels.

**`SelectContentProps`**

```ts
export declare type SelectContentProps = PropsWithChildren<unknown> & StylingProps & DataTestId & BehaviorTrackingProps & {
    /**
     * The current loading state of the Select.Content. If true, a loading icon is shown.
     * @defaultValue false
     */
    loading?: boolean;
    /**
     * The width of the Select.Content (overlay). By default it has a min-width of 96px and adjusts to the size of the trigger.
     * @defaultValue 'trigger'
     */
    width?: SelectContentWidthOptionsType;
    /**
     * Whether the selected options are reordered to the top of the options.
     * @defaultValue false
     */
    showSelectedOptionsFirst?: boolean;
};
```

### Select.Prefix

The `Select.Prefix` component can only be used inside the `Select.DisplayValue` component or the `Select.Option` component.

**`SelectPrefixProps`**

```ts
export declare type SelectPrefixProps = PropsWithChildren<unknown> & StylingProps & DataTestId & BehaviorTrackingProps;
```

### Select.Suffix

The `Select.Suffix` component can only be used inside the `Select.DisplayValue` component or the `Select.Option` component.

**`SelectSuffixProps`**

```ts
export declare type SelectSuffixProps = PropsWithChildren<unknown> & StylingProps & DataTestId & BehaviorTrackingProps;
```
