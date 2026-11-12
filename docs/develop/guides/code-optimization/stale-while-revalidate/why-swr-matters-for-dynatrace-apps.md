## Why SWR matters for Dynatrace apps

Dynatrace apps frequently display data that is:

- **Expensive to query**—DQL queries against Grail can take seconds, especially for complex joins, large timeframes, or high-cardinality entity lookups.
- **Relatively stable**—host lists, topology data, metric definitions, and configuration don't change every second.
- **Repeatedly accessed**—users navigate back and forth between pages, re-visit dashboards, switch between tabs.

Without SWR, every navigation or tab switch triggers a fresh query and a loading state. For a Grail query that takes 3 seconds, that's 3 seconds of spinner every time the user returns to a page they've already seen—even if the data hasn't changed.

With SWR, the second visit is instant. The user sees the data from 30 seconds ago while fresh data loads in the background. When it arrives, the table or chart updates smoothly.
