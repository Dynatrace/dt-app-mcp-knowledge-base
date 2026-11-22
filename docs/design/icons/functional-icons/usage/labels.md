## Labels

Labels provide additional context and meaning to icons. If there's space, use a label.

Avoid using tooltips as substitutes for labels. This is particularly true for icons that aren't universally known, or which represent complex actions or abstract concepts.

Always use vertical- and center-alignment when placing an icon next to a label.

There are a few exceptions where an icon can be used without a label:

- If space is extremely limited (too small for text alone).
- If the icons are universally known. Example: a magnifying glass for search.
- If the icons look like what they represent. Example: a red rectangle to set a background as red.

![Asset explanation](https://public-developer.central.internal.dynatrace.com/assets/images/functional-icon-guidelines-labeling-light-47ec1d71b8dfc66373fb6134cbff0d15.webp)&#x20;

| Universally-known icons                                                                          | Semi-universally-known icons                                                                               | Not universally-known icons                                                                              |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![Universally known icons](./icons-docs-assets/functional-icon-guidelines-universal-light.webp)  | ![Semi-universally known icons](./icons-docs-assets/functional-icon-guidelines-semi-universal-light.webp)  | ![Not universally known icons](./icons-docs-assets/functional-icon-guidelines-not-universal-light.webp)  |

:::note Important

Icons without labels must have a proper `aria-label` so the meaning is accessible to people using screen readers.

:::
