## Delete document

You can delete documents as well. To do so, use the `useDeleteDocument` hook. To delete a document, you need to provide the [optimistic locking](https://developer.dynatrace.com/develop/platform-services/core-concepts/locking-strategies.md) version of the document you want to delete.
To delete the document we created in the first step, your code should look like this:

**React Hook**

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useDocumentMetaData, useDeleteDocument } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { PageLayout } from '@dynatrace/strato-components/layouts';

export const App = () => {
  const metadata = useDocumentMetaData({
    id: 'ff96e29d-2622-48f0-8c88-b2f20b2cf532',
  });
  const { execute } = useDeleteDocument();

  const handleClick = () => {
    if (metadata.data) {
      execute({
        id: metadata.data.id,
        optimisticLockingVersion: metadata.data.version,
      });
    }
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        <Button onClick={handleClick}>Delete Todos</Button>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

**Client SDK**

```ts title="api/todo-delete.function.ts"
import { documentsClient } from '@dynatrace-sdk/client-document';

export default async function (payload: unknown = undefined) {
  try {
    const metadata = await documentsClient.getDocumentMetadata({
      id: 'ff96e29d-2622-48f0-8c88-b2f20b2cf532',
    });

    if (!metadata) {
      console.warn('No metadata found for the document.');
      return 'document deletion failed';
    }

    await documentsClient.deleteDocument({
      id: metadata.id,
      optimisticLockingVersion: metadata.version,
    });

    return 'document successfully delete';
  } catch (error) {
    console.error('Error deleting document:', error);
    return 'document deletion failed';
  }
}
```

This operation requires the scope `document:documents:delete` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
