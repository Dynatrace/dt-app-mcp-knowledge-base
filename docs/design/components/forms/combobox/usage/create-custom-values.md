## Create custom values

Users can create a new value in the following ways:

- Select the create option at the end of the list.
- Press **Enter** while the create option is highlighted.
- Move focus out of the `Combobox` after typing text.

Moving focus out of `Combobox` also commits the typed text. If the text matches an option, regardless of case, the `Combobox` selects that option. Otherwise, it creates a new value. In a controlled `Combobox`, the created value is only applied if `onCreateOption` sets it.

The create option never appears for empty or whitespace-only input, or when the text matches an existing option. The comparison ignores case.

In an uncontrolled `Combobox`, the value is applied and `onChange` is called before `onCreateOption`. In a controlled `Combobox`, `onChange` isn't called for the created value.
