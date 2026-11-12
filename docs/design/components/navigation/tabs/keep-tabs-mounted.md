## Keep Tabs mounted

By default, when the `Tab` content is not visible to the user, it will also be removed from the DOM to prevent unwanted component updates on hidden elements. If you want to keep the `Tab` content in the DOM to preserve the state, you can set the `keepMounted` prop on the component.

**KeepMounted**

```tsx
import { Flex } from '@dynatrace/strato-components/layouts';
import { Tab, Tabs } from '@dynatrace/strato-components/navigation';

const KeepMounted = () => {
  return (
    <Tabs>
      <Tab title="Infrastructure Monitoring">
        <Flex flexDirection="column">
          Get automatic and intelligent observability across cloud and hybrid
          environments with continuous auto-discovery of hosts, VMs, serverless,
          cloud services, containers and Kubernetes, network, devices, logs,
          events and more - all in context, with precise, AI-powered answers.
        </Flex>
      </Tab>
      <Tab
        title="Applications &amp; Microservices"
        // highlight-next-line
        keepMounted
      >
        <Flex flexDirection="column">
          Get best-in-class APM from the category leader. Automatic and
          intelligent observability at scale for cloud native workloads and
          enterprise apps helps you ensure end-to-end hybrid cloud distributed
          tracing, optimize service performance, innovate faster, collaborate
          efficiently, and deliver more value with less effort.
        </Flex>
      </Tab>
    </Tabs>
  );
};
```
