App routes that can be accessed from other apps should be registered via page tokens and considered as a public API of the app.
They should stay consistent across app versions and be independent of the internal app routing schema to avoid breaking existing links in other apps.

This is where page tokens come into place. They allow you to provide static, consistent, and externally accessible links to specific routes within your app.

By using page tokens, you can keep your app interfaces consistent independently of your internal route changes.
This can be particularly useful when linking to static content, for example a guide, an article or some documentation.

Page tokens allow you to define static path segments for routes in your Dynatrace App. You can ensure that external links to specific routes won't break if your internal route structure changes by providing page tokens. This guide will teach you how to specify page tokens for your app routes.
