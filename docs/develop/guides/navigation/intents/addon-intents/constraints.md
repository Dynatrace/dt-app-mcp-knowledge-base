## Constraints

### Modal stacking

> **Caution**
>
> Application add-ons should not open other application add-ons. Currently, if an add-on triggers another add-on intent, the calling add-on closes and the new one opens, which means the user loses their original context. This is a known limitation.

Proper stacking for platform-level system primitives (the intent picker, file upload, permission prompts) is in development. Once shipped, these platform primitives will stay on top of an existing add-on without closing it.

**Maximum depth:** 2 levels (base context + one platform primitive on top). A third level is permitted only if a platform primitive triggers another platform primitive (for example, upload picker opens a permission prompt).

Add-ons share the same [security context](https://developer.dynatrace.com/develop/guides/navigation/intents/about-intents.md#security-context) and [context sharing](https://developer.dynatrace.com/develop/guides/navigation/intents/about-intents.md#context-sharing) model as all other intents.
