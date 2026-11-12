## The core principle: Bidirectional state synchronization

The W3C's guidance on web architecture emphasizes that URLs should represent the state of a resource. For modern web applications, this means establishing bidirectional data flow between your application state and the URL:

- **When the URL changes** (via navigation, back button, or direct access), the UI state updates accordingly.
- **When the UI state changes** (via user interaction), the URL updates to reflect the new state.

This synchronization keeps URLs as the single source of truth for shareable application states.
