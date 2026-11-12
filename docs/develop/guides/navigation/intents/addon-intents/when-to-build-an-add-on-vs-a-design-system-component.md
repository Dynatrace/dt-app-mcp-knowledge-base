## When to build an add-on vs. a Design System component

This distinction matters when teams are deciding how to deliver shared functionality across apps.

|                   | Design System component                                              | Add-on                                                                                       |
| ----------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Purpose**       | Building blocks for app developers to compose their own UI           | A complete, self-contained experience that works identically everywhere                      |
| **Flexibility**   | App developer shapes the component to their use case                 | The add-on controls the entire experience. The consuming app cannot customize it.            |
| **Knowledge**     | Generic, composable                                                  | Expert knowledge baked in (for example, Session Replay knows exactly how to render a replay) |
| **Who builds it** | Strato / Design System team                                          | The specialist team that owns the domain (Platform UI, A\&MS, DEM, etc.)                     |
| **When to use**   | You need building blocks to construct something specific to your app | You need a pre-built solution that should work identically in every app that uses it         |

:::tip Rule of thumb
If the functionality requires deep domain expertise and should look the same everywhere, build an add-on. If app developers need to adapt the UI to their specific context, build a DS component.
:::

- **Good add-on candidates**:

  - **Session Replay**—replay playback is complex, domain-specific, and should work identically whether opened from Infrastructure, Application Monitoring, or a custom app.
  - **Alert creation**—creating an anomaly detector from a DQL query requires Alerting domain knowledge.
  - **Segment management**—segment selection and creation is a cross-cutting concern with its own UX patterns.

- **Better as Strato Design System components**:
  - A date picker, a chart renderer, a data table—these are generic building blocks that each app should be able to style and configure for its own needs.
