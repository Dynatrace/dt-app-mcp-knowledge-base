## Recommended intents

Without central coordination, each app builds its own mapping from resource types to target apps. This creates inconsistency: clicking a host ID in one app opens the Hosts app, while clicking the same ID in another opens something different.

**Recommended intents** solve this with a centrally managed mapping from resource types to recommended target apps. Instead of hardcoding `recommendedAppId: 'dynatrace.classic.hosts'` in your source code, you query the recommended intents list to get the right target for `dt.entity.host`.

This ensures users always land in the same destination for the same resource type, regardless of which app they started from.
