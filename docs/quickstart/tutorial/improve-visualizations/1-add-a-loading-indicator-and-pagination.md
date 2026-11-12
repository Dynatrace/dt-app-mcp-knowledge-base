## 1. Add a loading indicator and pagination

To improve our app's user experience, let's add a loading indicator and pagination to the table as follows:

```tsx title="ui/app/pages/HostList.tsx" dependencies=access-dynatrace-data.md
import React from 'react';
import { Flex, TitleBar } from '@dynatrace/strato-components/layouts';
  // highlight-start
import { 
  ProgressCircle
} from '@dynatrace/strato-components/content';
  // highlight-end
import { convertToColumns, DataTable } from '@dynatrace/strato-components/tables';
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
      // highlight-next-line
      {result.isLoading && <ProgressCircle />}
      {result.data && (
        <DataTable data={result.data.records} columns={convertToColumns(result.data.types)} fullWidth>
          // highlight-next-line
          <DataTable.Pagination />
        </DataTable>
      )}
    </Flex>
  );
};
```

> **Tip**
>
> Learn more about [ProgressCircle](https://developer.dynatrace.com/contents/docs/design/components/content/ProgressCircle/index.mdx/).

After the changes, the app should look like the following:

![loading-and-pagination-dark](https://developer.dynatrace.com/assets/images/loading-and-pagination-dark-56b41439ca5dae9208454a538b652c72.gif)
