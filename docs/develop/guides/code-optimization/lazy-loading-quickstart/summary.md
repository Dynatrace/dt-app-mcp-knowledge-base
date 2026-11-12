## Summary

| Technique                 | Best for         | How it works                                         |
| ------------------------- | ---------------- | ---------------------------------------------------- |
| Route-based splitting     | Pages / views    | `React.lazy()` + `Suspense` on route components      |
| Component-based splitting | Heavy components | `React.lazy()` + `Suspense` on individual components |

Combine these techniques to progressively reduce your app's initial bundle size and improve load performance.
