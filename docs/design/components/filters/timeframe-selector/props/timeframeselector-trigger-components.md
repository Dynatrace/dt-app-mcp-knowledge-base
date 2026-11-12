### TimeframeSelector trigger components

#### TimeframeSelector.Trigger

The `TimeframeSelector.Trigger` component is used to render the trigger that opens or closes the overlay.

**`TimeframeSelectorTriggerProps`**

```ts
export declare type TimeframeSelectorTriggerProps = PropsWithChildren & StylingProps & DataTestId & AriaLabelingProps & BehaviorTrackingProps & {
    /**
     * The placeholder text displayed in the TimeframeSelector.Trigger.
     */
    placeholder?: ReactNode;
};
```

#### TimeframeSelector.DisplayValue

**`TimeframeSelectorDisplayValueProps`**

```ts
export declare type TimeframeSelectorDisplayValueProps = BehaviorTrackingProps & {
    children?: ReactNode | ((customTriggerProps: {
        displayValue: ReactNode;
    }) => ReactElement);
};
```

#### TimeframeSelector.CustomTrigger

**`TimeframeSelectorCustomTriggerProps`**

```ts
export declare type TimeframeSelectorCustomTriggerProps = AriaLabelingProps & StylingProps & DataTestId & BehaviorTrackingProps & {
    /** Elements to be displayed in the CustomTrigger. */
    children: ReactNode | undefined | ((customTriggerProps: {
        displayValue: ReactNode;
        isInvalid: boolean;
        hint: string;
    }, props: (AriaLabelingProps & StylingProps & DataTestId & (Partial<_ButtonAria<AnchorHTMLAttributes<HTMLButtonElement>>> & _AriaButtonProps)) | null) => ReactElement);
};
```
