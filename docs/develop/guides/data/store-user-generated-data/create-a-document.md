## Create a document

To create a document, use the `useCreateDocument` hook. This hook provides an `execute` function that you can use to create a new document. It also provides some additional fields with information about the loading status, errors, and the response. These fields are common to all the document hooks. The example below shows how to create a Todo list document:

**React Hook**

```tsx title="ui/app/App.tsx"
import React from 'react';
import { useCreateDocument } from '@dynatrace-sdk/react-hooks';
import { Button } from '@dynatrace/strato-components/buttons';
import { PageLayout } from '@dynatrace/strato-components/layouts';

const todos = [
  {
    title: 'Send email to John about vacation',
    done: false,
  },
  {
    title: 'Plan workshop for next week',
    done: false,
  },
];

export const App = () => {
  const { execute, data, error, isLoading } = useCreateDocument();

  const handleClick = () => {
    execute({
      body: {
        name: 'My Todos',
        type: 'TodoList',
        content: new Blob([JSON.stringify(todos)], {
          type: 'application/json',
        }),
      },
    });
  };

  return (
    <PageLayout>
      <PageLayout.Content>
        <Button onClick={handleClick}>Create Todos</Button>
      </PageLayout.Content>
    </PageLayout>
  );
};
```

**Client SDK**

```ts title="api/todo-create.function.ts"
import { documentsClient } from '@dynatrace-sdk/client-document';

const todos = [
  { title: 'Send email to John about vacation', done: false },
  { title: 'Plan workshop for next week', done: false },
];

export default async function (payload: unknown = undefined) {
  try {
    const data = await documentsClient.createDocument({
      body: {
        name: 'My Todos',
        type: 'TodoList',
        content: new Blob([JSON.stringify(todos)], {
          type: 'application/json',
        }),
      },
    });

    return data ? 'document created successfully' : 'document creation failed';
  } catch (error) {
    console.error('Error creating document:', error);
    return 'document creation failed due to an error';
  }
}
```

This operation requires the scope `document:documents:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
