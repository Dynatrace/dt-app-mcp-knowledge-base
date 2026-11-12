## Measure CLS

Use the **Experience Web Vitals App** in Dynatrace to monitor CLS across your app in production. The app captures real-user CLS scores across sessions and lets you identify which pages and interactions produce the worst shifts.

Key things to look for:

- **Pages with CLS > 0.1**—these are violations. Sort by CLS score to find the worst offenders.
- **CLS spikes correlated with navigation patterns**—if CLS is high on a specific route, the Suspense fallback or skeleton on that route is likely the wrong size.
- **CLS spikes correlated with data resolution**—if CLS is high a few seconds after page load, an async query resolves and causes a shift. This is where SWR with `staleTime` or `placeholderData` helps.

For local debugging during development, use the Chrome DevTools Performance panel. Enable the **Layout Shift Regions** checkbox in the Rendering drawer—this highlights elements as they shift in real time. The Experience section of the Performance recording shows individual shift events with their scores.
