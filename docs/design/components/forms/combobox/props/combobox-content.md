### Combobox.Content

`Combobox.Content` wraps all options and groups. It's required.

**`ComboboxContentProps`**

```ts
export declare type ComboboxContentProps = PropsWithChildren<unknown> & StylingProps & DataTestId & BehaviorTrackingProps & {
    /**
     * When true, shows a loading spinner instead of options.
     * @defaultValue false
     */
    loading?: boolean;
};
```
