## Get stored settings values

To fetch previously stored values for a settings schema, use the `useSettingsObjectsV2` hook. Use this and the [`useUpdateSettingsV2` hook](#update-settings-values) if you want to **manage** settings in your app.

This hook expects the schema identifier in the `schemaId` parameter.

By default, `useSettingsObjectsV2` only returns the `objectId` and `version` parameters. You can define extra fields to return by specifying them in a comma-separated string in the `addFields` parameter.

By specifying the respective parameters, you can also [filter and sort](https://developer.dynatrace.com/develop/platform-services/core-concepts/filtering-sorting.md) the effective values. You can use the following fields to filter:

- `modificationInfo.createdBy`
- `modificationInfo.createdTime`
- `modificationInfo.lastModifiedBy`
- `modificationInfo.lastModifiedTime`
- `value` with properties and sub-properties separated by dot. For example, `value.isEnabled = true`.
- `owner.type`
- `owner.id`

You can use the following fields to sort:

- `modificationInfo.createdBy`
- `modificationInfo.createdTime`
- `modificationInfo.lastModifiedBy`
- `modificationInfo.lastModifiedTime`
- `value` with properties and sub-properties separated by dot (for example, `value.isEnabled`)

Note that only fields included in the response via `addFields` can be used for filtering and sorting.

```tsx title="ui/app/App.tsx"
import React from 'react';
// highlight-next-line
import { useSettingsObjectsV2 } from '@dynatrace-sdk/react-hooks';
import { ExternalLink, Paragraph } from '@dynatrace/strato-components/typography';
import { Flex } from '@dynatrace/strato-components/layouts';

export const App = () => {
  // highlight-start
  const { data, isLoading } = useSettingsObjectsV2({
    schemaId: 'my-example',
    addFields: 'value, summary',
  });
  // highlight-end

  return (
    <Flex>
      {!isLoading && data && (
        <>
          <Paragraph>{data.items[0]?.summary}</Paragraph>
          <ExternalLink href={data.items[0]?.value?.url as string}>My external url</ExternalLink>
        </>
      )}
    </Flex>
  );
};
```

This operation requires the scope `app-settings:objects:read` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
