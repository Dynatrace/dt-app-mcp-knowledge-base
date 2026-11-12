## Content (required)

`PageLayout.Content` is the only required slot. Every page needs one, and it never collapses to a drawer, so anything essential to the page belongs here.

- Use `Content` for the primary view for which the page exists, for example a table, a dashboard, or a form.
- Use the optional `Sidebar` for navigation, entity lists, or filters that exist independently of any selection in `Content`. `Content` should be meaningful and understandable without the sidebar.
- Use `Details` for information tied to a specific selection or entity in `Content`. If it only makes sense after the user selects something, it goes there, not in `Content`.
