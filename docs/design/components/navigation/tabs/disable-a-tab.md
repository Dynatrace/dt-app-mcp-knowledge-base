## Disable a tab

The disabled prop allows you to disable specific tabs. In the example below, the third tab is disabled.

**Disabled**

```tsx
import { Flex } from '@dynatrace/strato-components/layouts';
import { Tab, Tabs } from '@dynatrace/strato-components/navigation';

const Disabled = () => {
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
      <Tab title="Applications &amp; Microservices">
        <Flex flexDirection="column">
          Get best-in-class APM from the category leader. Automatic and
          intelligent observability at scale for cloud native workloads and
          enterprise apps helps you ensure end-to-end hybrid cloud distributed
          tracing, optimize service performance, innovate faster, collaborate
          efficiently, and deliver more value with less effort.
        </Flex>
      </Tab>
      <Tab
        title="Application Security"
        // highlight-next-line
        disabled
      >
        <Flex flexDirection="column">
          A unique approach to securing cloud-native applications at runtime
          combined with intelligent automation empowers DevSecOps at scale
        </Flex>
      </Tab>
    </Tabs>
  );
};
```
