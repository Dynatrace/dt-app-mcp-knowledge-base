## Change panel overflow

The `panelOverflow` prop allows you to enable/disable vertical scrolling when the content would overflow the tab panel.

**PanelOverflow**

```tsx
import { Flex } from '@dynatrace/strato-components/layouts';
import { Tab, Tabs } from '@dynatrace/strato-components/navigation';

const PanelOverflow = () => {
  return (
    <Tabs
      // highlight-next-line
      panelOverflow="scroll-y"
      style={{
        height: '100px',
        maxWidth: '1000px',
      }}
    >
      <Tab title="Infrastructure Monitoring">
        <Flex flexDirection="column">
          Get automatic and intelligent observability across cloud and hybrid
          environments with continuous auto-discovery of hosts, VMs, serverless,
          cloud services, containers and Kubernetes, network, devices, logs,
          events and more - all in context, with precise, AI-powered answers.
          Unify, store, and contextually analyze massive volumes of
          infrastructure data with speed and cost-efficiency using our
          causational data lakehouse. Grail helps unlock value from all your
          infrastructure data by automatically connecting and analyzing together
          with all other observability, security, and business data.
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
      <Tab title="Application Security">
        <Flex flexDirection="column">
          A unique approach to securing cloud-native applications at runtime
          combined with intelligent automation empowers DevSecOps at scale.
        </Flex>
      </Tab>
    </Tabs>
  );
};
```
