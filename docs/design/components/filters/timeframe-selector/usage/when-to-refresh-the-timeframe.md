## When to refresh the timeframe

### Manual refresh

If needed, add a button next to `TimeframeSelector` to let users refresh the timeframe manually. Each time users click the button, the timeframe updates.

### Auto refresh

You can also provide an option for users to set an interval for automatic timeframe updates. If you add auto-refresh, also provide a manual refresh option.

### Last updated

If possible, show when the timeframe was last updated and what the active timeframe is. Use [InformationOverlay](https://developer.dynatrace.com/design/components/content/InformationOverlay.md) next to `TimeframeSelector` to show this.

![A TimeframeSelector with a manual refresh button next to it and an InformationOverlay showing when the timeframe was last updated.](https://developer.dynatrace.com/assets/images/timeframeselector-refresh-light-4b789a1604167b5040ded01ce4e9e39d.webp)&#x20;
