The `CodeEditor` provides a text input field that is specifically designed for editing code. It further offers properties to configure e.g. syntax highlighting, spell checks or line wrapping. Once the editor is focused via the keyboard, the user must press `Enter` to start editing and `Escape` to quit editing and return to the keyboard navigation flow.

**`CodeEditorProps`**

```ts
export declare type CodeEditorProps = CodeEditorBaseProps & (CodeEditorControlledProps | CodeEditorUncontrolledProps);
```
