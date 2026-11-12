NotificationSettings component

**`NotificationSettingsProps`**

```ts
export declare type NotificationSettingsProps = StylingProps & DataTestId & MaskingProps & DOMProps & AriaLabelingProps & BehaviorTrackingProps & NotificationSettingsConfig & {
    /**
     * Either a ReactNode or a render function that gets passed certain values
     * from the currently configured notification */
    children?: (({ disabled, headingText, infoText, hasReadPermission, hasWritePermission, }: {
        disabled: boolean;
        headingText: string;
        infoText: string;
        hasReadPermission: boolean;
        hasWritePermission: boolean;
    }) => ReactNode) | ReactNode;
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

**`UseNotificationSettingsMenuItemProps`**

```ts
export declare type UseNotificationSettingsMenuItemProps = Pick<NotificationSettingsProps, 'type' | 'config'> & {
    /** Either a ReactNode or a render function that gets passed certain values from the currenlty configured notification */
    content?: (({ disabled, headingText, infoText, hasReadPermission, hasWritePermission, }: {
        disabled: boolean;
        headingText: string;
        infoText: string;
        hasReadPermission: boolean;
        hasWritePermission: boolean;
    }) => ReactNode) | ReactNode;
};
```
