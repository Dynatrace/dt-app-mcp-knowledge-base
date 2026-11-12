## Caveats

The roving focus currently has some limitations that you should consider when using it.

### Query children

The `useRovingFocus` hook currently queries the children of the given container using `querySelectorAll` and the provided selector. You can query any children of the container, whether they're interactive or not. The roving tab index will be added to all children matching the selector.

Currently, the hook doesn't deal well with dynamic children. As long as the settings or the amount of rendered child nodes don't change, it won't re-query the children. Hence, the roving focus will only apply to the children rendered when the hook was initialized.

### Nested containers / roving focus groups

It is not yet possible to properly nest roving focus containers or create groups of items inside a container via a configuration object.

### Virtualization

It is not yet possible to virtualize the items inside the roving focus container.
