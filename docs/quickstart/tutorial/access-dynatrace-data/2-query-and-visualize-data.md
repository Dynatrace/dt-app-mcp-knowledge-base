## 2. Query and visualize data

Now, we can query and display the CPU information in the `HostList` component.

### 1. Set the permissions

First, set the permissions in the [app config file](https://developer.dynatrace.com/contents/docs/quickstart/app-toolkit/index.mdx/#configuration) that the app needs to work. In this case, the app requires access to metrics and entities. Add the necessary permissions in the `app.config.json` file as follows:

```json testable-app-config-json
{
  "environmentUrl": "https://wkf10640.apps.dynatrace.com/",
  "app": {
    "name": "Host Insights",
    "version": "0.0.0",
    "description": "A starting project with routing, fetching data, and charting",
    "id": "my.host.insights",
    "scopes": [
      { "name": "storage:logs:read", "comment": "default template" },
      { "name": "storage:buckets:read", "comment": "default template" },
      // highlight-start
      { "name": "storage:metrics:read", "comment": "Allows to read metrics" },
      { "name": "storage:entities:read", "comment": "Allows to read entities" }
      // highlight-end
    ]
  }
}
```

:::tip Restart the development server

For changes in the config file to take effect, restart the development server using the appropriate command for your operating system. For example, on Windows and MacOS, use Ctrl + C in the terminal where the server is running. Then, run the `npx dt-app dev` command.

:::

### 2. Query the data

Now, create a new file, `ui/app/queries.ts`, which exports the [DQL](https://docs.dynatrace.com/docs/shortlink/dql-dynatrace-query-language-hub) query we'll use to fetch the data, as follows:

```ts testable title="ui/app/queries.ts"
export const CPU_USAGE_QUERY = `timeseries cpuAvg = avg(dt.host.cpu.usage), by:{dt.smartscape.host, host.name}
| fieldsRename hostId = dt.smartscape.host, hostName = host.name
| lookup [
  timeseries {
    idle=avg(dt.host.cpu.idle),
    ioWait=avg(dt.host.cpu.iowait),
    user=avg(dt.host.cpu.user),
    system=avg(dt.host.cpu.system),
    steal=avg(dt.host.cpu.steal)
  },
  by:{dt.smartscape.host}
  | fieldsAdd idle = arrayAvg(idle), ioWait = arrayAvg(ioWait), user = arrayAvg(user), system = arrayAvg(system), steal = arrayAvg(steal)
  | fieldsAdd other = 100 - idle - ioWait - user - system - steal
], sourceField:hostId, lookupField:dt.smartscape.host, fields:{idle, ioWait, user, system, steal, other}`;
```

> **Tip**
>
> Run this query in [Notebooks](https://wkf10640.apps.dynatrace.com/ui/intent/dynatrace.notebooks/view-query#%7B%22dt.query%22%3A%22timeseries%20cpuAvg%20%3D%20avg\(dt.host.cpu.usage\)%2C%20by%3A%7Bdt.smartscape.host%2C%20host.name%7D%5Cn%7C%20fieldsRename%20hostId%20%3D%20dt.smartscape.host%2C%20hostName%20%3D%20host.name%5Cn%7C%20lookup%20%5B%5Cn%20%20timeseries%20%7B%5Cn%20%20%20%20idle%3Davg\(dt.host.cpu.idle\)%2C%5Cn%20%20%20%20ioWait%3Davg\(dt.host.cpu.iowait\)%2C%5Cn%20%20%20%20user%3Davg\(dt.host.cpu.user\)%2C%5Cn%20%20%20%20system%3Davg\(dt.host.cpu.system\)%2C%5Cn%20%20%20%20steal%3Davg\(dt.host.cpu.steal\)%5Cn%20%20%7D%2C%5Cn%20%20by%3A%7Bdt.smartscape.host%7D%5Cn%20%20%7C%20fieldsAdd%20idle%20%3D%20arrayAvg\(idle\)%2C%20ioWait%20%3D%20arrayAvg\(ioWait\)%2C%20user%20%3D%20arrayAvg\(user\)%2C%20system%20%3D%20arrayAvg\(system\)%2C%20steal%20%3D%20arrayAvg\(steal\)%5Cn%20%20%7C%20fieldsAdd%20other%20%3D%20100%20-%20idle%20-%20ioWait%20-%20user%20-%20system%20-%20steal%5Cn%5D%2C%20sourceField%3AhostId%2C%20lookupField%3Adt.smartscape.host%2C%20fields%3A%7Bidle%2C%20ioWait%2C%20user%2C%20system%2C%20steal%2C%20other%7D%22%2C%22dt.timeframe%22%3A%7B%22from%22%3A%22now-2h%22%2C%22to%22%3A%22now%22%7D%2C%22hideInput%22%3Afalse%2C%22sourceApplication%22%3A%22dynatrace.notebooks%22%2C%22visualization%22%3A%22table%22%2C%22visualizationSettings%22%3A%7B%22thresholds%22%3A%5B%5D%2C%22chartSettings%22%3A%7B%22gapPolicy%22%3A%22connect%22%2C%22circleChartSettings%22%3A%7B%22groupingThresholdType%22%3A%22relative%22%2C%22groupingThresholdValue%22%3A0%2C%22valueType%22%3A%22relative%22%7D%2C%22categoryOverrides%22%3A%7B%7D%2C%22categoricalBarChartSettings%22%3A%7B%22categoryAxis%22%3A%22hostId%22%2C%22categoryAxisLabel%22%3A%22hostId%22%2C%22valueAxis%22%3A%22interval%22%2C%22valueAxisLabel%22%3A%22interval%22%7D%2C%22fieldMapping%22%3A%7B%22timestamp%22%3A%22timeframe%22%2C%22leftAxisValues%22%3A%5B%22cpuAvg%22%5D%2C%22leftAxisDimensions%22%3A%5B%22hostId%22%2C%22hostName%22%2C%22idle%22%2C%22ioWait%22%2C%22user%22%2C%22system%22%2C%22steal%22%2C%22other%22%5D%7D%7D%2C%22singleValue%22%3A%7B%22showLabel%22%3Atrue%2C%22label%22%3A%22%22%2C%22prefixIcon%22%3A%22%22%2C%22recordField%22%3A%22hostId%22%2C%22autoscale%22%3Atrue%2C%22alignment%22%3A%22center%22%2C%22colorThresholdTarget%22%3A%22value%22%7D%2C%22table%22%3A%7B%22rowDensity%22%3A%22condensed%22%2C%22enableSparklines%22%3Afalse%2C%22hiddenColumns%22%3A%5B%5D%2C%22lineWrapIds%22%3A%5B%5D%2C%22firstVisibleRowIndex%22%3A0%2C%22columnWidths%22%3A%7B%7D%7D%2C%22histogram%22%3A%7B%22dataMappings%22%3A%5B%7B%22valueAxis%22%3A%22interval%22%2C%22rangeAxis%22%3A%22%22%7D%2C%7B%22valueAxis%22%3A%22idle%22%2C%22rangeAxis%22%3A%22%22%7D%2C%7B%22valueAxis%22%3A%22ioWait%22%2C%22rangeAxis%22%3A%22%22%7D%2C%7B%22valueAxis%22%3A%22user%22%2C%22rangeAxis%22%3A%22%22%7D%2C%7B%22valueAxis%22%3A%22system%22%2C%22rangeAxis%22%3A%22%22%7D%2C%7B%22valueAxis%22%3A%22steal%22%2C%22rangeAxis%22%3A%22%22%7D%2C%7B%22valueAxis%22%3A%22other%22%2C%22rangeAxis%22%3A%22%22%7D%5D%7D%2C%22honeycomb%22%3A%7B%22shape%22%3A%22square%22%7D%7D%7D).

Next, import the query in the `HostList` file and fetch that data with [`useDql`](https://developer.dynatrace.com/contents/docs/develop/sdks/react-hooks/index.md/#simplified-data-querying-from-grail). To use the hook, import it and call it in the `HostList` component. Then, pass the `CPU_USAGE_QUERY` from before as the query property of the body and assign the result to a `result` variable, as follows:

```tsx title="ui/app/pages/HostList.tsx"
import React from 'react';
import { Flex, TitleBar } from '@dynatrace/strato-components/layouts';
// highlight-start
import { useDql } from '@dynatrace-sdk/react-hooks';
import { CPU_USAGE_QUERY } from '../queries';
// highlight-end

export const HostList = () => {
  // highlight-start
  const result = useDql({
    query: CPU_USAGE_QUERY,
  });
  // highlight-end

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Hosts Insights</TitleBar.Title>
      </TitleBar>
    </Flex>
  );
};
```

> **Note**
>
> You might see an IDE warning such as: "result is assigned a value but never used." You can dismiss it since we'll use the `result` variable in the next step.

The `result` variable has all the information about the loading or error states of the query and the data itself after loading. If you open the browser's Network tab, you'll notice that an HTTP request is sent to Grail to fetch the data.

### 3. Show the data in a table

We're now ready to visualize this data in the UI.

Begin by importing the [`DataTable`](https://developer.dynatrace.com/contents/docs/design/components/tables/DataTable/index.mdx/) component and the [`convertToColumns`](https://developer.dynatrace.com/contents/docs/design/components/tables/convertToColumns/index.mdx/) function from the `@dynatrace/strato-components` package. The query result isn't available when the component first loads. Therefore, we need to conditionally render the `DataTable` only when the data is ready. The `DataTable` component requires two props: `data`, for which we'll use `result.data.records`, and `columns`, which we obtain by calling `convertToColumns(result.data.types)`.

Here's the complete code:

```tsx title="ui/app/pages/HostList.tsx"
import React from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { TitleBar } from '@dynatrace/strato-components/layouts';
  // highlight-start
import { convertToColumns, DataTable } from '@dynatrace/strato-components/tables';
  // highlight-end
import { useDql } from '@dynatrace-sdk/react-hooks';
import { CPU_USAGE_QUERY } from '../queries';

export const HostList = () => {
  const result = useDql({
    query: CPU_USAGE_QUERY,
  });

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Hosts Insights</TitleBar.Title>
      </TitleBar>
      // highlight-start
      {result.data && (
        <DataTable 
          data={result.data.records} 
          columns={convertToColumns(result.data.types)} 
          fullWidth 
        />
      )}
      // highlight-end
    </Flex>
  );
};
```

After the development server reloads, you should see something like this:

![query-and-visualize-screenshot](https://developer.dynatrace.com/assets/images/query-and-visualize-screenshot-dark-12225a70ee824b360b3ccc3fa1708e1d.png)

You've queried Grail using DQL and showed it in a table. In the next section, we'll improve this visualization for a better user experience.
