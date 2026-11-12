## Page

The [page component](https://developer.dynatrace.com/contents/docs/design/components/layouts/Page/index.mdx/) is an excellent first place to start structuring your app. It comes with basic styling and four regions, your app's main structural building blocks.

![Page component](./assets/app-structure-page-light.webp)

1. **Header:** The header is for your app's main navigational elements and primary actions. You can use the [app header component](https://developer.dynatrace.com/contents/docs/design/components/layouts/AppHeader/index.mdx/) to ensure a consistent navigational experience in your app.
2. **Sidebar:** The sidebar's content should influence, change, or filter content inside the main view. Additionally, it may accommodate actions or any other elements related to the sidebar's content.
3. **Main view:** The main view provides the center stage for your app's content.
4. **Detail view:** The detail view uses the additional screen real estate of widescreen monitors and provides a quick and easy way to show additional information related to main view content without users having to navigate to a new page. Don't use the detail view to show content unrelated to the main view.
