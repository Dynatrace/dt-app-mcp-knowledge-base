## Options

### Group options together

Use `Combobox.Group` to organize options into named groups. Add a `Combobox.GroupLabel` inside each group to show its title. Group labels aren't selectable.

**Groups**

```tsx
import { Combobox, FormField, Label } from '@dynatrace/strato-components/forms';

const Groups = () => {
  return (
    <FormField>
      <Label>Technology</Label>
      <Combobox>
        <Combobox.Content>
          {/* highlight-start */}
          <Combobox.Group>
            <Combobox.GroupLabel>Frontend</Combobox.GroupLabel>
            <Combobox.Option value="react">React</Combobox.Option>
            <Combobox.Option value="vue">Vue</Combobox.Option>
            <Combobox.Option value="angular">Angular</Combobox.Option>
          </Combobox.Group>
          <Combobox.Group>
            <Combobox.GroupLabel>Backend</Combobox.GroupLabel>
            <Combobox.Option value="node">Node.js</Combobox.Option>
            <Combobox.Option value="django">Django</Combobox.Option>
            <Combobox.Option value="spring">Spring</Combobox.Option>
          </Combobox.Group>
          {/* highlight-end */}
        </Combobox.Content>
      </Combobox>
    </FormField>
  );
};
```

### Add icons

Add an icon or other content in front of the option label with `Combobox.Prefix`, or after it with `Combobox.Suffix`. If any option has a prefix, all options reserve space for it so the labels stay aligned. Suffixes only take up space in the options that define them.

If the option content isn't a plain string, add a `textValue` prop with the text representation of the option. The `Combobox` uses it for filtering and for the text it shows after selection.

**PrefixSuffix**

```tsx
import { Combobox } from '@dynatrace/strato-components/forms';
import { AppEngineIcon, AppsIcon } from '@dynatrace/strato-icons';

const PrefixSuffix = () => {
  return (
    <Combobox>
      <Combobox.Content>
        <Combobox.Option value="engine" textValue="App engine">
          {/* highlight-start */}
          <Combobox.Prefix>
            <AppEngineIcon />
          </Combobox.Prefix>
          {/* highlight-end */}
          App engine
          {/* highlight-start */}
          <Combobox.Suffix>
            <AppsIcon />
          </Combobox.Suffix>
          {/* highlight-end */}
        </Combobox.Option>
        <Combobox.Option value="apps" textValue="Apps">
          <Combobox.Prefix>
            <AppsIcon />
          </Combobox.Prefix>
          Apps
        </Combobox.Option>
      </Combobox.Content>
    </Combobox>
  );
};
```

### Disable options

Disable individual options by adding the `disabled` prop to `Combobox.Option`. Disabled options stay visible, but users can't select them. To disable the whole `Combobox`, add the `disabled` prop to it or to the surrounding `FormField`.

**DisableOptions**

```tsx
import { Combobox } from '@dynatrace/strato-components/forms';

const DisableOptions = () => {
  return (
    <Combobox placeholder="Select status">
      <Combobox.Content>
        <Combobox.Option value="active">Active</Combobox.Option>
        <Combobox.Option value="inactive">Inactive</Combobox.Option>
        <Combobox.Option
          value="archived"
          // highlight-next-line
          disabled
        >
          Archived
        </Combobox.Option>
        <Combobox.Option
          value="deleted"
          // highlight-next-line
          disabled
        >
          Deleted
        </Combobox.Option>
      </Combobox.Content>
    </Combobox>
  );
};
```

### Pass large amounts of data

The `Combobox` can handle many options. The options are virtualized if the content is too large to fit. The virtualization only affects the first-level children, whether they're grouped or ungrouped. For a good user experience, organize options into logical groups with a reasonable number of options. For example, not more than 10 options per group.

**LargeData**

```tsx
import { useMemo, useState } from 'react';

import { Combobox } from '@dynatrace/strato-components/forms';

const LargeData = () => {
  const [value, setValue] = useState<string | null>(null);
  const options = useMemo(() => {
    return Array(100)
      .fill(1)
      .map((_, index) => ({
        id: `option-${index}`,
        text: `Option ${index}`,
      }));
  }, []);

  return (
    <Combobox value={value} onChange={setValue}>
      <Combobox.Content>
        {options.map((el) => (
          <Combobox.Option value={el.id} key={el.id} textValue={el.text}>
            {el.text}
          </Combobox.Option>
        ))}
      </Combobox.Content>
    </Combobox>
  );
};
```
