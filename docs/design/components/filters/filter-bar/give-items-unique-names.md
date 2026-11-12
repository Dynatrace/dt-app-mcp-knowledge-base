## Give items unique names

The name provided to the `FilterBar.Item` must be unique to initialize the `defaultValue` correctly. This is true even if the item is rendered conditionally. If the same `name` is used for two items, React will map the `name` of the new item to the old `defaultValue`.

```
{conditionalFilter ? (
          <FilterBar.Item name="conditional-keyword" label="Keyword">
            <TextInput defaultValue='Automation' />
          </FilterBar.Item>
        ) : (
          <FilterBar.Item name="conditional-owner" label="Owner">
            <TextInput defaultValue="Dora Braun" />
          </FilterBar.Item>
        )}
```
