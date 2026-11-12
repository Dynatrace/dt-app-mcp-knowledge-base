## Concepts

You need to know the following concepts to work with the notification service.

### Notifications

Notifications are emails sent to a user, triggered by an event. A notification configuration defines which event triggers a notification related to a resource of your domain and how this notificaiton looks like.

### Notification configurations

A notification is sent based on a notification configuration.

A notification configuration is defined via the notification service API and the notification template as a static asset in your app. The default approach to registering/unregistering a notification configuration is to use the [NotifyButton](https://developer.dynatrace.com/contents/docs/design/components/buttons/NotifyButton/index.mdx/) the Strato design system offers. You can use the [notifications-client-v2 SDK](https://developer.dynatrace.com/contents/docs/develop/sdks/client-notification-v2/index.md/) to customize the behavior to your needs.

While all notification configurations are about events and the resource they are about, there are two types of notification configurations, resource and event notification configurations.

#### Resource notifications

A resource notification configuration is streamlined to cover notifcations that are always triggered by the same events and only differ in the resource selection (e.g. a document change, a workflow change, an app release, ...). This is also the main use case for notifications.

- A **resource ID** that identifies the relevant resource. Together with the notification type, you can use this to look up a notification configuration.
- The **notification type** that associates the notification template with the notification configuration.
- The **base query** and **resource_attribute** the notification service shall use to build the trigger configuration.
- The **notification template** defines the email's subject and body text.

##### Resource notification template example

```yaml
event_type: dt.system.events
base_query: event.provider == "AUTOMATION_ENGINE" AND event.type == "WORKFLOW_DELETED"
resource_attribute: dt.automation_engine.workflow.id
subject: Workflow "{{ event()["dt.automation_engine.workflow.title"] }} has been deleted
content: Workflow "{{ (workflow_title) }}" ({{ (event()["dt.automation_engine.workflow.id"]) }}) was deleted by {{ user(event()["user.id"])["name"] }}.
```

Properties available for `event()` depend on the events matching your notification trigger configuration.

#### Event notifications

Event notifications are for use cases where event selection is part of the user's input in the use case. For example, to notify about problem-type events, as filtered by the user. There is an associated resource, such as a filter id, for looking up the notification configuration. The app owner is responsible for managing the event filter and related event notification configuration.

- A **resource ID** that identifies the relevant resource. Together with the notification type, you can use this to look up a notification configuration.
- The **notification type** that associates the notification template with the notification configuration.
- The **trigger configuration** defines which event(s) trigger a notification.
- The **notification template** defines the email's subject and body text.

Any notification configuration is always implicitly associated with the user who clicked the NotifyButton and the app where the request originated.

#### Event notification template example

An event notification template is similar to the resource notification template but omits everything but `subject` and `content`

### Resource ID

The resource ID identifies which resource the notification is about (for example, an app ID for app update notifications, or a workflow ID for workflow change notifications). Together with the notification type, you can use the resource ID to determine whether there is a notification configuration for the user and app.

### Notification type

The notification type is a string that allows users to differentiate between multiple types of notifications in the context of one app. It can associate a notification with a template, see [Notification template](#notification-template).

### Notification template

The notification template defines the properties of a notification configuration that the notification service resolves (e.g. subject and body of the email to send). For details please check resource and event notification configurations above.

The notification service expects a JSON or YAML file in your app's static asset folder. The filename must follow the convention `{notification_type}.notification.json|yaml` and can be either in JSON or YAML format.

The service supports Markdown syntax to format the content in the notification body.

The subject and body may contain expressions to define the content dynamically, for example, by referencing attributes of the triggering event. The expressions are a subset of the expressions supported by the AutomationEngine:

- `environment()`
- `event()`
- `now()`
- `timedelta()`

Additionally the following expressions are supported for notification configurations:

- `owner()` - returns the uuid of the owner of the notification configuration ie. the user who created the notification configuration. This allows for example to avoid sending notifications to the owner by using the expression in the base query of a resoure notification (e.g. workflow change event only if the owner is not the editor of the change)
  Example:

  ```json
  {{ owner() }}

  # results in
  cfb56028-f1b6-4819-8567-308cec8d9173
  ```

- `user(userId)` - returns human readable user information for a given uuid of a user.
  Example:

  ```json
  {{ user("cfb56028-f1b6-4819-8567-308cec8d9173") }}

  # results in
  {
    "id": "cfb56028-f1b6-4819-8567-308cec8d9173",
    "email": "jane.doe@sample.com",
    "name": "Jane Doe",
    "displayName": "Jane Doe (jane.doe@sample.com)"
  }
  ```

- `problem_link()` - returns URL to a Davis problem in the Problems app.
  Example:

  ```json
  {{ problem_link() }}

  # results in
  "https://xyz12345.apps.dynatrace.com/ui/apps/dynatrace.davis.problems/problem/20d01063-14d7-4b99-aef1-77e92962fb7f"

  ```

For details, refer to the AutomationEngine [expression reference](https://dt-url.net/workflows-expression-reference).

### Trigger configuration

The trigger configuration defines which events trigger sending an email to the user. Check out the notification-client SDK and .

### Notify button

The Strato Design System offers a NotifyButton that allows users to register and unregister a self-notification. Look at the [component documentation](https://developer.dynatrace.com/design/components/buttons/NotifyButton/index.mdx/) for details.
