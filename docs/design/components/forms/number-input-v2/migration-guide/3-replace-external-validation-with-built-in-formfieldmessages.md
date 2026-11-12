## 3. Replace external validation with built-in FormFieldMessages

`NumberInputV2` validates `min`, `max`, and `step` automatically and surfaces error messages through `FormField` and `FormFieldMessages`. You no longer need to wire up external validation libraries just for range errors.

```diff
- <FormField>
-   <Label>Threshold</Label>
-   <NumberInput
-     value={value}
-     onChange={setValue}
-     min={0}
-     max={100}
-     controlState={{ type: 'error', text: errorMessage }}
-   />
- </FormField>
+ <FormField>
+   <Label>Threshold</Label>
+   <NumberInputV2 value={value} onChange={setValue} min={0} max={100} />
+   <FormFieldMessages />
+ </FormField>
```
