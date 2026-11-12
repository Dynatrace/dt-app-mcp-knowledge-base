## Scroll position management

Scroll position is another critical aspect of navigation UX that directly impacts how users interact with the back button. Modern browsers automatically restore scroll positions when users navigate through history, but this default behavior doesn't always align with user expectations in dynamic web applications.

### Understanding scroll restoration

The [History API](https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration) provides the `scrollRestoration` property, which allows you to control how browsers handle scroll position when navigating through history. This property accepts two values:

- `auto` **(default):** The browser automatically restores the scroll position to where the user was when they left the page.
- `manual`: You take control of scroll behavior and must handle scroll position restoration yourself.

### When to use automatic scroll restoration

For most Dynatrace apps, the default `auto` behavior works well. Use automatic scroll restoration when:

- Users navigate between distinct pages or views (for example, from a dashboard list to a specific dashboard).
- Content loads synchronously and the page structure remains stable.
- Users expect to return to their previous position when using the back button.

**Example Dynatrace scenarios:**

- Navigating from a list of hosts to a specific host detail page.
- Switching between different sections in Settings.
- Browsing through problem lists or log entries.

### When to use manual scroll restoration

Set `scrollRestoration` to `manual` when you need custom control over scroll behavior. This is necessary when:

- Your app performs page transitions or animations that conflict with automatic scroll restoration.
- Content loads asynchronously and the page height changes dynamically.
- You're implementing infinite scroll or virtualized lists.
- The same URL can display different content based on application state.

**Example Dynatrace scenarios:**

- Dashboards with dynamically loaded tiles that affect page height.
- Metric charts that load data asynchronously.
- Entity lists with lazy loading or infinite scroll.
- Views with expandable sections that change the page layout.

### Implementing manual scroll restoration

When you set scroll restoration to manual, you're responsible for storing and restoring scroll positions. You can store scroll position data in the history state when using `pushState()`:

**Best practices for manual scroll restoration:**

- **Store scroll position with history entries:** Capture the current scroll position before navigation and store it using `history.pushState()` or `history.replaceState()`.
- **Restore on popstate events:** Listen for popstate events and restore the scroll position from the stored state.
- **Handle async content:** Wait for dynamic content to load before restoring scroll position to avoid incorrect positioning.
- **Consider scroll regions:** Don't forget about scrollable containers within your page—not just the main document scroll.

### Scroll position and URL state

Generally, you should not include scroll position in the URL query parameters. Scroll position is ephemeral navigation state, not shareable application state. When someone shares a URL, they want to share the content and filters, not their specific scroll position.

**Exception:** In rare cases where scroll position represents meaningful content location (such as a specific log entry in a long list), consider using anchor links or dedicated parameters that identify the content item rather than a pixel position.

### Testing scroll behavior

When implementing scroll management in your Dynatrace app, test these scenarios:

- Navigate forward and back through multiple pages.
- Use the back button after scrolling partway through a long page.
- Navigate back to pages with dynamically loaded content.
- Test on different screen sizes and resolutions.
- Verify behavior with both keyboard and mouse navigation.
