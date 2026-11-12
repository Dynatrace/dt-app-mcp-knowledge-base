## Default open tab

Allows you to open a specific tab when the component is loaded. In the example below, the third tab is open when component is loaded.

**DefaultOpen**

```tsx
import { Flex } from '@dynatrace/strato-components/layouts';
import { Tab, Tabs } from '@dynatrace/strato-components/navigation';
import { Text } from '@dynatrace/strato-components/typography';

const DefaultOpen = () => {
  return (
    <Tabs
      // highlight-next-line
      defaultIndex={2}
    >
      <Tab title="Digital Experience">
        <Flex flexDirection="column">
          <Text>
            Improve user experiences with best-in-class digital experience
            monitoring. Ensure every application is available, functional, fast,
            and efficient across every channel including mobile, web, IoT, and
            APIs.
          </Text>
        </Flex>
      </Tab>
      <Tab title="Business Analytics">
        <Flex flexDirection="column">
          <Text>
            Drive better business outcomes across web, mobile, and IoT channels
            through digital application analytics that deliver real-time
            visibility into business KPIs and improve IT and business
            collaboration.
          </Text>
        </Flex>
      </Tab>
      <Tab title="Cloud Automation">
        <Flex flexDirection="column">
          <Text>
            Empower DevOps platform engineers, SREs, and Development teams to
            deliver higher quality software faster and more securely.
          </Text>
        </Flex>
      </Tab>
    </Tabs>
  );
};
```
