## Every heavy table we tested got faster

The gains go beyond the tracing table. We benchmarked six heavy table shapes, from 10,000 rows with 20 columns to 200 columns of plain text. Wheel scrolling improved in all of them.

Dropped frames:

Frame time at the 95th percentile:

React render time while wheel scrolling:

Blank area while scrolling:

Two more changes you'll notice right away:

- **Drag the scrollbar and you see rows.** When you jump through a large table, the area outside the rendered rows used to stay blank. Now the table paints a row pattern there before React renders, so the mid-jump blank area dropped from 96% to 0%.
- **Small tables stay crisp.** Tables that render quickly never show skeleton placeholders now, even when you flick through them fast.
