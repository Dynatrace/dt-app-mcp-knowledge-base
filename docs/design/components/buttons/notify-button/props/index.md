The `NotifyButton` lets users turn notifications about resource updates on or off. Common use cases include notifications about updates to saved filters, workflows, or entities. Users will be notified via e-mail.

**`NotifyButtonProps`**

```ts
export declare type NotifyButtonProps = DOMProps & StylingProps & DataTestId & MaskingProps & BehaviorTrackingProps & PropsWithChildren & AriaLabelingProps & AriaDisabledProps & NotificationSettingsConfig & {
    /**
     * Configures the size of the trigger.
     * @defaultValue 'default
     */
    size?: 'default' | 'condensed';
    /**
     * Configures the variant of the trigger.
     * @defaultValue 'default
     */
    variant?: 'default' | 'emphasized';
    /**
     * Whether the NotifyButton is read-only.
     * @defaultValue false
     */
    readOnly?: boolean;
    /**
     * Whether the NotifyButton is disabled.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * Whether the label text is shown on the trigger.
     * @defaultValue false
     */
    showLabel?: boolean;
};
```

**`NotificationSettingsConfig`**

```ts
export declare type NotificationSettingsConfig = NotificationSettingsEventNotification | NotificationSettingsResourceNotification;
```

**`NotificationSettingsEventNotification`**

| Prop                | Type                       | Default | Description                                                                                 |
| ------------------- | -------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| `type` (required)   | `'event'`                  |         | Defines the type of the notifcation that should be subscribed to.                           |
| `config` (required) | `EventNotificationRequest` |         | Configuration for a event notification. Uses the \`@dynatrace-sdk/client-notification-v2\`. |

**`NotificationSettingsResourceNotification`**

| Prop                | Type                          | Default | Description                                                                                    |
| ------------------- | ----------------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `type` (required)   | `'resource'`                  |         | Defines the type of the notifcation that should be subscribed to.                              |
| `config` (required) | `ResourceNotificationRequest` |         | Configuration for a resource notification. Uses the \`@dynatrace-sdk/client-notification-v2\`. |
