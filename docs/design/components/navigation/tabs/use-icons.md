## Use icons

By using `prefixIcon` you can add icons to each tab.

**WithIcons**

```tsx
import { Tab, Tabs } from '@dynatrace/strato-components/navigation';
import { Text } from '@dynatrace/strato-components/typography';
import { AccountIcon, ThumbsUpIcon } from '@dynatrace/strato-icons';

const WithIcons = () => {
  return (
    <Tabs>
      <Tab
        title="Personal info"
        // highlight-next-line
        prefixIcon={<AccountIcon />}
      >
        <Text as="p">
          Personal data, also known as personal information or personally
          identifiable information is any information related to an identifiable
          person.
        </Text>
      </Tab>
      <Tab
        title="Recommendations"
        // highlight-next-line
        prefixIcon={<ThumbsUpIcon />}
      >
        <Text as="p">
          Simplify cloud complexity and innovate faster, more efficiently, and
          more securely with automatic and intelligent observability.
        </Text>
      </Tab>
    </Tabs>
  );
};
```
