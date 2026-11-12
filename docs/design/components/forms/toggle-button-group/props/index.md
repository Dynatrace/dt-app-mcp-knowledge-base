`ToggleButtonGroup` lets users toggle between a set of related options, typically with one preselected. It's best for switching between views or a compact group of options with immediate effect.

**`ToggleButtonGroupProps`**

```ts
export declare type ToggleButtonGroupProps = FormControlProps<string, (value: string, event?: SyntheticEvent<HTMLElement | SVGElement>) => void | never, HTMLDivElement> & PropsWithChildren & DOMProps & StylingProps & DataTestId & MaskingProps & BehaviorTrackingProps & {
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
     * The width of the ToggleButtonGroup.
     * @defaultValue 'content'
     */
    width?: 'content' | 'full' | CSS.Property.Width<string & {}>;
};
```
