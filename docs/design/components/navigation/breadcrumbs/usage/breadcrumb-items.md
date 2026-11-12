## Breadcrumb items

- Include a link to the starting point of the current context as the first breadcrumb item. It doesn't have to be the app's home. For example, if using `Breadcrumbs` inside a `DetailView` or `Modal`, the first breadcrumb should direct users to the initial view.
- Always include the title of the current view or page as the last breadcrumb item and set it to disabled.
- Don't include tabs as a hierarchy level — one context or page is always one hierarchy level.
- Include hierarchy-level titles from navigational components as disabled breadcrumb items, such as submenu labels, to improve orientation.
