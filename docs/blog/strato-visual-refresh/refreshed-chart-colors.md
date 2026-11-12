## Refreshed chart colors

Chart colors followed the UI refresh with the same intent: more vivid, more
distinct. The sequential palettes were rebuilt using the
[OKLCH color system](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch),
a perceptually-uniform model where equal numerical steps look like equal steps
to the eye. All the other palettes are derived from these new shades.

The mid-range shades keep their full saturation now, so overlapping chart
series stay visually distinct even in dense charts. Charts across dashboards,
notebooks, and custom apps all pick up the new colors automatically thanks to
the Strato design tokens.

More chart palettes are on the way, including a vivid categorical set and
several themed palettes.

![The five new chart palettes: Categorical Vivid, Neon, Aurora, Overdrive, and Tide](https://developer.dynatrace.com/assets/images/visual-refresh-chart-themes-light-2bbe2fec0df636afe5521405c63eec7d.webp)
