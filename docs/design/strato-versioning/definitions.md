## Definitions

### Breaking change

Any change that could break apps or significantly change how users interact with the component. Release type: MAJOR

> **Note**
>
> The following don't qualify as breaking changes:
>
> - Spreading undocumented props onto elements to access native elements for testing.
> - Relying on internal DOM structures. (Internal DOM structures can change at any time.)
> - Overriding a component's display CSS.
> - Not using the `@dynatrace/dt-app` project structure for the IDE, including build setup and package manager.
> - API changes that break builds.

### Bug fix

A change that corrects an error or malfunction in an earlier release. Release type: PATCH

### Changelog

A chronological record of code changes, written to be accessible and relevant to most Strato users. This is what Dynatrace Developer Portal publishes as the Strato changelog. Elsewhere you may see the same content called "release notes".

### Update

A feature update or improvement that's compatible with previous releases. It won't cause issues. Also called a "non-breaking change." Release type: MINOR

### Peer dependency update

A change to code that other packages depend on to run properly. If you're not familiar with how they work, please take a few minutes to learn about [Node.js peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies) (external site). Release type: MAJOR

### Changelog entry

Information that helps a product's users understand what's new in a specific software version and how it benefits the product. Strato changelog entries include breaking changes (MAJOR), updates (MINOR), bug fixes (PATCH), and dependency updates (MAJOR). Future breaking changes are published in [Upcoming changes](https://developer.dynatrace.com/changelogs/design-system/upcoming-changes.md).

### Upcoming change

Advance notice of a breaking change in a future release. Release type: MAJOR, planned
