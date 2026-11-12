## Get effective settings value

Effective values are the values that are stored in the settings or the default value. Use this method if you want to **use** settings in your app.

To retrieve the effective values for one or many settings schemas, use the `useSettingsV2` React hook from the `@dynatrace-sdk/react-hooks` package. This hook expects the schema identifier in the `schemaId` parameter. A single call will get you the effective values for a single schema.

By default, `useSettingsV2` only returns the `value`. The hook can return additional fields when you specify them in a comma-separated string in the `addFields` parameter.

In the following example, you're getting effective settings values for the `my-example` schemas:

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-next-line
import { useSettingsV2 } from '@dynatrace-sdk/react-hooks';
import { ExternalLink, Paragraph } from '@dynatrace/strato-components/typography';
import { Flex } from '@dynatrace/strato-components/layouts';

export const App = () => {
  // highlight-start
  const { data, isLoading } = useSettingsV2({
    schemaId: 'my-example',
    addFields: 'summary, schemaId',
  });
  // highlight-end

  return (
    <Flex>
      {!isLoading && data && (
        <>
          <Paragraph>{data.items[0]?.summary}</Paragraph>
          <ExternalLink href={data.items[0]?.value?.url as string}>My external link</ExternalLink>
        </>
      )}
    </Flex>
  );
};
```

The default value depends on the `multiObject` property of the schema:

- `false`: if it's false, a single default object is created. Its properties are propagated with the default values defined in your schema.
- `true`: if it's true, an empty collection is created.

This operation requires the scope `app-settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
