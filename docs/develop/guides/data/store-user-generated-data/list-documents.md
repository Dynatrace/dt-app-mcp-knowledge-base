## List documents

The `useListDocuments` hook lets you to get a filtered list of the available documents. Besides the common fields, this hook also provides a `refetch` function to refetch the list of documents. The following code fetches the documents of type **TodoList**.

**React Hook**

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useListDocuments } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { List, Text } from '@dynatrace/strato-components/typography';
import { PageLayout } from '@dynatrace/strato-components/layouts';

export const App = () => {
  const { data, refetch } = useListDocuments({
    filter: `type == 'TodoList'`,
  });

  const handleClick = () => {
    refetch().then((list) => console.log(list.documents));
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        {data && (
          <List>
            {data.documents.map((doc) => (
              <Text key={doc.id}>{doc.name}</Text>
            ))}
          </List>
        )}
        <Button onClick={handleClick}>Refetch Todos</Button>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

**Client SDK**

```ts title="api/todo-list.function.ts"
import { documentsClient } from '@dynatrace-sdk/client-document';

export default async function (payload: unknown = undefined) {
  try {
    const list = await documentsClient.listDocuments({
      filter: `type == 'TodoList'`,
    });

    return list?.documents ?? [];
  } catch (error) {
    console.error('Error fetching TodoList documents:', error);
    return [];
  }
}
```

This operation requires the scope `document:documents:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
