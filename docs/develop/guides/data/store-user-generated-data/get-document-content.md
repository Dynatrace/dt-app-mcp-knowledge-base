## Get document content

To retrieve the content of a specific document, you can use the `useDownloadDocument` hook. This hook expects the document ID as a parameter and returns binary data with the document's contents, which you can extract by calling the `get` function. This example shows how to fetch the content for the Todo list document that we created in the first step:

**React Hook**

```tsx title="ui/app/App.tsx"
import React, { useState, useEffect } from 'react';
import { useDownloadDocument } from '@dynatrace-sdk/react-hooks';
import { PageLayout } from '@dynatrace/strato-components/layouts';
import { Checkbox } from '@dynatrace/strato-components/forms';

interface Todo {
  title: string;
  done: boolean;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>();
  const { data } = useDownloadDocument({
    id: 'ff96e29d-2622-48f0-8c88-b2f20b2cf532',
  });

  useEffect(() => {
    if (data) {
      data.get('json').then((todos) => {
        setTodos(todos as Todo[]);
      });
    }
  }, [data]);

  return (
    <PageLayout>
      <PageLayout.Content>
        {todos &&
          todos.map((todo) => (
            <Checkbox key={todo.title} name="done" defaultValue={todo.done}>
              {todo.title}
            </Checkbox>
          ))}
      </PageLayout.Content>
    </PageLayout>
  );
};
```

**Client SDK**

```ts title="api/todo-get.function.ts"
import { documentsClient } from '@dynatrace-sdk/client-document';

export default async function () {
  try {
    const documentContent = await documentsClient.downloadDocumentContent({
      id: 'ff96e29d-2622-48f0-8c88-b2f20b2cf532',
    });

    const jsonContent = (await documentContent?.get('json')) as string;

    if (!jsonContent) {
      console.warn('No JSON content found in the document.');
      return null;
    }

    return jsonContent;
  } catch (error) {
    console.error('Error downloading document content:', error);
    return null;
  }
}
```

`useDownloadDocument` returns only the content. If you also need the metadata, such as the `name` to display or the `version` required for a later [update](#update-document), use the `useDocument` hook instead. The `useDocument` hook returns both in a single multipart response, so you don't have to pair it with `useDocumentMetaData`. `data` is undefined until the request resolves, and both `metadata` and `content` are optional on the response, so guard them before you use them:

**React Hook**

```tsx title="ui/app/App.tsx"
import React, { useState, useEffect } from 'react';
import { useDocument } from '@dynatrace-sdk/react-hooks';
import { PageLayout } from '@dynatrace/strato-components/layouts';
import { Checkbox } from '@dynatrace/strato-components/forms';
import { Heading } from '@dynatrace/strato-components/typography';

interface Todo {
  title: string;
  done: boolean;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>();
  const { data } = useDocument({
    id: 'ff96e29d-2622-48f0-8c88-b2f20b2cf532',
  });

  useEffect(() => {
    if (data?.content) {
      data.content.get('json').then((todos) => {
        setTodos(todos as Todo[]);
      });
    }
  }, [data]);

  return (
    <PageLayout>
      <PageLayout.Content>
        {data?.metadata?.name && <Heading level={2}>{data.metadata.name}</Heading>}
        {todos &&
          todos.map((todo) => (
            <Checkbox key={todo.title} name="done" defaultValue={todo.done}>
              {todo.title}
            </Checkbox>
          ))}
      </PageLayout.Content>
    </PageLayout>
  );
};
```

**Client SDK**

```ts title="api/todo-get-with-metadata.function.ts"
import { documentsClient } from '@dynatrace-sdk/client-document';

interface Todo {
  title: string;
  done: boolean;
}

export default async function () {
  try {
    const document = await documentsClient.getDocument({
      id: 'ff96e29d-2622-48f0-8c88-b2f20b2cf532',
    });

    if (!document.metadata || !document.content) {
      console.warn('No metadata or content found for the document.');
      return null;
    }

    return {
      name: document.metadata.name,
      version: document.metadata.version,
      todos: (await document.content.get('json')) as Todo[],
    };
  } catch (error) {
    console.error('Error retrieving document:', error);
    return null;
  }
}
```

The `useDocument` hook fetches as soon as your component renders. If the `id` comes from another hook, such as `useListDocuments`, it's still empty on the first render. Pass `{ autoFetch: !!id, autoFetchOnUpdate: true }` as the second argument to hold the request until the ID is available. When you pass the options argument, set both fields. Leaving `autoFetchOnUpdate` out means the request never fires once the ID arrives.

This operation requires the scope `document:documents:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
