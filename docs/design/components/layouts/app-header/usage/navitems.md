## NavItems

- Use `NavItems` for main navigational items that must be accessible anytime within the app. Simple, single-page apps might not require `NavItems`.
- Include the same `NavItems` across the entire app and keep their target consistent.
- If you have more than one `NavItem`, always include the app's home as the first `NavItem` and link `AppNavLink` to it. This ensures a consistent navigation pattern across apps that works well on all screen sizes.
  - Avoid calling the first `NavItem` "Home" or "Start". Instead, use a descriptive label.
  - If the app's home summarizes information or data from further parts of the app and acts as an entry point, consider calling it "Overview".
- Avoid prefix icons for only some `NavItems`. If you use icons, ensure all items have them.

![Example of correct AppHeader NavItems using the descriptive label "Overview" with no prefix icons, and an incorrect set labeled "Home" with icons on only some items.](https://developer.dynatrace.com/assets/images/appheader-navitems-light-6bb9965efb21df295ed1b7842ddf7156.webp)
