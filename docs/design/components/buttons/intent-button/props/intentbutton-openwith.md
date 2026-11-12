### IntentButton.OpenWith

The `OpenWith` component renders an `IntentMenu` with a default label that can't be changed. Pass the `payload` prop for the intent.

**`OpenWithProps`**

```ts
export declare type OpenWithProps = Omit<MenuIntentProps, 'onResponse' | 'options' | 'children'> & BehaviorTrackingProps;
```
