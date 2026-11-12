## Select trigger components

### Select.Trigger

The `Select.Trigger` component is used to render the trigger that opens or closes the overlay.

**`SelectTriggerProps`**

```ts
export declare type SelectTriggerProps = PropsWithChildren & StylingProps & DataTestId & BehaviorTrackingProps & {
    /**
     * The placeholder text displayed in the Select.Trigger.
     */
    placeholder?: ReactNode;
    /**
     * The width of the Select.Trigger.
     * @defaultValue 'content'
     */
    width?: SelectTriggerWidthOptionsType;
};
```

#### Select.DisplayValue

**`SelectDisplayValueProps`**

```ts
export declare type SelectDisplayValueProps = PropsWithChildren<unknown>;
```

### Select.CustomTrigger

**`SelectCustomTriggerProps`**

```ts
export declare type SelectCustomTriggerProps = PropsWithChildren;
```
