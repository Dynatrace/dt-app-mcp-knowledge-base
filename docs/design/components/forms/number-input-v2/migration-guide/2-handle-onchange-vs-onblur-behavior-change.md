## 2. Handle onChange vs onBlur behavior change

In `NumberInput`, `onChange` fires only on blur — that is, when the user commits a value by leaving the field. By contrast, in `NumberInputV2`, `onChange` fires on every keystroke, as soon as a valid number is entered. For example, if `min={0}` and `max={100}`, valid numbers include `0`, `50`, `99.99`, or any number within that range that respects the `step` interval.

If your application logic depends on the old commit-on-blur behavior (e.g., triggering a network request or expensive computation), move that logic into `onBlur` instead:

```diff
- <NumberInput
-   value={value}
-   onChange={(newValue) => {
-     setValue(newValue);
-     triggerExpensiveOperation(newValue); // was safe because onChange only fired on blur
-   }}
- />
+ <NumberInputV2
+   value={value}
+   onChange={setValue}
+   onBlur={() => triggerExpensiveOperation(value)} // move commit logic here
+ />
```

If you only need the value for controlled state, no change is required — `onChange={setValue}` works the same way.
