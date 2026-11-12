Use the `Microguide` to guide users through features or functionality in small steps, supporting onboarding of new users and the introduction of new features.

**`MicroguideProps`**

| Prop                 | Type                                                           | Default          | Description                                                                                                                                                              |
| -------------------- | -------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `open` (required)    | `boolean`                                                      |                  | Whether the Microguide is currently shown or not. Has to be controlled by the consumer.                                                                                  |
| `placement`          | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'` | Placement of the Microguide.                                                                                                                                             |
| `onClose` (required) | `(currentStep: number, finished: boolean) => void`             |                  | Callback fired when closing the Microguide. Indicates the current step (zero-based) when closing and whether the Microguide was finished (i.e. closed in the last step). |
| `onStepChange`       | `(step: number) => void`                                       |                  | Callback fired when the user navigates between steps. Indicates the target step (zero-based).                                                                            |
