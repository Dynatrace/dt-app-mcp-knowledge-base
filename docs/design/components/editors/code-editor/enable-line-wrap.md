## Enable line wrap

To enable line wrap as soon as the content overflows, use the `lineWrap` property.

**LineWrap**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';

const LineWrap = () => {
  return (
    <Flex flexDirection="row">
      <Flex maxWidth="50%" flexItem>
        <CodeEditor
          language="json"
          defaultValue='{
  "alert_settings": [
    {
      "alert_id": "custom_connections_alert",
      "event_type": "AVAILABILITY_EVENT",
      "event_name": "No connections!",
      "description": "The {metricname} of {severity} is {alert_condition} the threshold of {threshold}"
    }
  ]
}'
          // highlight-next-line
          lineWrap
        />
      </Flex>
      <Flex maxWidth="50%" flexItem>
        <CodeEditor
          language="json"
          defaultValue='{
  "alert_settings": [
    {
      "alert_id": "custom_connections_alert",
      "event_type": "AVAILABILITY_EVENT",
      "event_name": "No connections!",
      "description": "The {metricname} of {severity} is {alert_condition} the threshold of {threshold}"
    }
  ]
}'
        />
      </Flex>
    </Flex>
  );
};
```
