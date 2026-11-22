## Smooth scrolling through heavy tables

Tables are at the heart of most Dynatrace apps. You scan logs, traces, problems, and entities in them all day, so every slow frame while scrolling adds up. We set out to fix that and measured each change along the way.

One of our toughest tests was a tracing table modeled on the **Distributed Tracing** app. We used 1,000 rows, and 10,000 rows for the large variant. Here's the tracing table with the improvements in Strato 3.18. Each row shows one step of a request with a duration bar and expandable details. We scrolled with the trackpad, then flicked fast and jumped back to the top:

The video shows a manual trackpad scroll. The numbers below come from the automated benchmark described in [How we measured](#how-we-measured).

Here's how wheel scrolling through the table changed. Lower is better, so each card shows the new value and how much it dropped:

:::note What each card measures

- **Frame time (p95):** 95 of 100 frames render at or below this time. A 60 Hz display needs a new frame every 16.7 ms. On a 120 Hz display, such as a MacBook Pro, the budget is 8.3 ms, so the less work each frame requires, the more of these faster frames the table can deliver.
- **Dropped frames:** Frames the browser skipped because it was busy, which makes scrolling look uneven.
- **Main-thread blocking:** Time the browser can't respond to your input because of long frames.
- **Blank area:** Share of the table that shows empty space instead of rows while you scroll.

:::

React render time over four scroll interactions fell from 8.39 seconds to 1.29 seconds—85 percent less work for the same rows.
