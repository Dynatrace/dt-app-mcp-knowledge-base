## Security context

Every Dynatrace app runs inside its own cross-origin iframe in the AppShell. API calls from any app, whether it opened via a regular intent or as an overlay add-on, run under **that app's** security context, not the calling app's. Each app uses its own identity, OAuth scopes, and permissions.

Cross-origin iFrames comply with the AppShell's Content Security Policy rules.
