## What changed under the hood

We made the following changes in small steps and measured each step against the preceding one:

1. **Skip cell re-renders while scrolling.** Cells that are already on screen no longer render again when the table scrolls. React only renders the rows that come into view.
2. **Lighter cells.** We removed wrapper components from each cell, reduced meter bar re-renders after mount, and now mount row drilldowns only when you first open them.
3. **Rows at named grid lines.** Each row places itself on the table's CSS grid by name, so the browser does less layout work per row.
4. **Placeholders when rows can't keep up.** During fast scrolling, rows that can't render in time show placeholder cells until scrolling slows down. This change brought the biggest improvement: dropped frames averaged over four interactions fell from 60% to 3%.
5. **Placeholders only for slow tables.** The table remembers whether it renders slowly, so fast tables show real rows all the time.
6. **Row pattern extends beyond the rendered rows.** The scroll area always looks like a table, even before React catches up.

Some ideas looked promising and didn't survive the benchmark. Fixed row heights made no measurable difference, so we kept rows' flexible height. Fewer overscan rows rendered fewer cells, but left more blank space while scrolling. We shipped a change only when a benchmark proved its value.

Here's how React render time over four scroll interactions dropped with each commit:
