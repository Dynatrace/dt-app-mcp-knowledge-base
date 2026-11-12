### SegmentSelector.CustomTrigger

**`SegmentSelectorCustomTriggerProps`**

```ts
export declare type SegmentSelectorCustomTriggerProps = StylingProps & DataTestId & BehaviorTrackingProps & {
    /** Elements to be displayed in the CustomTrigger. */
    children: ReactNode | ((customTriggerProps: {
        displayValue: ReactNode;
        isLoading: boolean;
    }, props: (StylingProps & DataTestId & (Partial<_ButtonAria<AnchorHTMLAttributes<HTMLButtonElement>>> & _AriaButtonProps)) | null) => ReactElement);
};
```
