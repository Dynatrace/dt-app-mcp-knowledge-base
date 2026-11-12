Use the `CodeSnippet` to display a code block in a read-only context. By default, the code is formatted but not highlighted.

**`CodeSnippetProps`**

```ts
export declare type CodeSnippetProps = WithChildren & StylingProps & DataTestId & MaskingProps & AriaLabelingProps & BehaviorTrackingProps & CodeSnippetHeightProps & {
    /**
     * Code language to be used to run highlighting on the given code.
     */
    language?: HighlightLanguage;
    /**
     * Whether the copy button should be displayed.
     * @defaultValue true
     * @deprecated Will be removed. Use `CodeSnippet.ActionsMenu` with `CodeSnippet.Copy` instead.
     */
    allowCopy?: boolean;
    /**
     * Whether the copy button should be displayed.
     * @defaultValue true
     * @deprecated Will be removed. Use `CodeSnippet.ActionsMenu` with `CodeSnippet.Copy` instead.
     */
    showCopyAction?: boolean;
    /**
     * Whether line numbers should be shown.
     * @defaultValue true
     */
    showLineNumbers?: boolean;
    /**
     * Whether the content breaks into new lines automatically or not.
     * @defaultValue false
     */
    lineBreaks?: boolean;
    /**
     * Callback fired when copy button is clicked and the code snippet was copied.
     * @deprecated Will be removed. Use the `onCopy` prop of `CodeSnippet.Copy` instead.
     */
    onCopy?: () => void;
    /**
     * CodeSnippet layout size, 'default' for standard spacing and 'condensed' for reduced font size, padding and margins.
     * @defaultValue 'default'
     */
    size?: 'default' | 'condensed';
    /**
     * Called when the component receives focus.
     */
    onFocus?: (e: FocusEvent<HTMLDivElement>) => void;
    /**
     * Called when the component loses focus.
     */
    onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
    /**
     * Handler that is called when the element's focus status changes.
     * @deprecated Use onFocus/onBlur instead.
     */
    onFocusChange?: (isFocused: boolean) => void;
};
```
