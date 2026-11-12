## Interactive elements and ARIA

> **Tip**
>
> Relates to [WCAG 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) and [WCAG 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard).

ARIA (Accessible Rich Internet Applications) attributes help make complex and custom UI patterns accessible by communicating roles, states, and properties to assistive technologies. Used correctly, ARIA bridges the gap between custom interactions and the accessibility tree. Used incorrectly, ARIA can mislead assistive technologies and create a worse experience than using no ARIA at all.

To provide high-quality experiences for all users, follow established ARIA authoring patterns for all components, apply tabindex values deliberately and conservatively, and avoid nesting interactive elements inside one another.

**Example components:** [AiLoadingIndicator](https://developer.dynatrace.com/design/components/content/AiLoadingIndicator/a11y.md)
