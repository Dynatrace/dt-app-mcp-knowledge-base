## What should go in the URL?

### States worth sharing

Include UI states that make sense for users to share or bookmark.

In Dynatrace apps, this typically includes:

- **Time ranges:** Absolute timestamps or relative timeframes (e.g., "last 15 minutes").
- **Entity selections:** Specific hosts, services, applications, or processes being monitored.
- **Filter criteria:** Status filters, tag filters, management zones.
- **View configurations:** Selected metrics, chart types, grouping options, table configurations.
- **Navigation context:** Active tab, expanded sections, selected dashboard.

**Example URL structure:**

```text
/dashboards/service-overview?
    service=payment-api&
    timeframe=2h&
    metric=response-time&
    environment=production&
    view=chart
```

### States to exclude

Not everything belongs in the URL. According to best practices for URL design, avoid including:

- **Transient UI states:** Hover states, tooltip visibility, loading indicators, foldouts, expanded accordions, etc.
- **Sensitive information:** User credentials, personally identifiable information (PII).
- **Session-specific data:** Temporary states that are not meaningful outside the current session.
