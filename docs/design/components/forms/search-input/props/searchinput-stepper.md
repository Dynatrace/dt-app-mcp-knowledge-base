### SearchInput.Stepper

Use the `SearchInput.Stepper` component to display match navigation controls inside the `SearchInput`.

**`SearchInputStepperProps`**

| Prop                         | Type                      | Default | Description                                        |
| ---------------------------- | ------------------------- | ------- | -------------------------------------------------- |
| `current` (required)         | `number`                  |         | The zero-based index of the current match.         |
| `onCurrentChange` (required) | `(value: number) => void` |         | Called when the current match index should change. |
| `total` (required)           | `number`                  |         | The total number of matches.                       |
