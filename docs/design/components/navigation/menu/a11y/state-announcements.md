## State announcements

`Menu` handles state announcements out of the box: `aria-expanded="true"` when open; `aria-expanded="false"` when closed, ensuring that screen readers can announce the state change correctly.

- **Do** verify that revealed content has a meaningful accessible name if needed (the dialog title, for example).
- **Do** ensure that expanded menu content follows in a logical tab order so users can navigate into it after the state is announced.
- **Do** check that focus returns to the trigger when the content closes.
