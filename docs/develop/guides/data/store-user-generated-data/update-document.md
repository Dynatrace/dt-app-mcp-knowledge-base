## Update document

Whenever you need to change the contents of a document, use the `useUpdateDocument` or the `useUpdateDocumentMetadata` hooks.
For all modifying operations, keep [optimistic locking](https://developer.dynatrace.com/develop/platform-services/core-concepts/locking-strategies.md) in mind. Every document has a version that's incremented whenever its metadata or content is modified. For every modifying operation, you have to pass this exact version, which you can retrieve with the `useDocumentMetadata` hook. It could look like the following:

**React Hook**

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useDocumentMetaData, useUpdateDocument } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { PageLayout } from '@dynatrace/strato-components/layouts';

const updatedTodos = [
  {
    title: 'Send e-mail to John concerning vacation',
    done: true,
  },
  {
    title: 'Plan workshop for next week',
    done: false,
  },
];

export const App = () => {
  const metadata = useDocumentMetaData({
    id: 'ff96e29d-2622-48f0-8c88-b2f20b2cf532',
  });
  const { execute } = useUpdateDocument();

  const handleClick = () => {
    if (metadata.data) {
      execute({
        id: metadata.data.id,
        optimisticLockingVersion: metadata.data.version,
        body: {
          content: new Blob([JSON.stringify(updatedTodos)], {
            type: 'application/json',
          }),
        },
      });
    }
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        <Button onClick={handleClick}>Update Todos</Button>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

**Client SDK**

```ts title="api/todo-update.function.ts"
import { documentsClient } from '@dynatrace-sdk/client-document';

export default async function (payload: unknown = undefined) {
  const updatedTodos = [
    {
      title: 'Send e-mail to John concerning vacation',
      done: true,
    },
    {
      title: 'Plan workshop for next week',
      done: false,
    },
  ];

  try {
    const metadata = await documentsClient.getDocumentMetadata({
      id: 'ff96e29d-2622-48f0-8c88-b2f20b2cf532',
    });

    if (!metadata) {
      console.warn('No metadata found for the document.');
      return 'document updation failed';
    }

    const data = await documentsClient.updateDocumentContent({
      id: metadata.id,
      optimisticLockingVersion: metadata.version,
      body: {
        content: new Blob([JSON.stringify(updatedTodos)], {
          type: 'application/json',
        }),
      },
    });

    return data ? 'document updated successfully' : 'document updation failed';
  } catch (error) {
    console.error('Error updating document:', error);
    return 'document updation failed';
  }
}
```

This operation requires the scope `document:documents:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
