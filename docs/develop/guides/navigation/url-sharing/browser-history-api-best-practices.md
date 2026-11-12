## Browser history API best practices

The browser history API allows you to manage the user's navigation history seamlessly. Use the `history.pushState()` method to add a new entry to the history stack when the URL changes due to user interactions, such as filtering or navigating to a different view.

> **Note**
>
> For any automatic redirection, use the history API's `replaceState` method instead of `pushState`. It ensures a clean and usable history stack, preventing issues with navigation through history.
>
> While this is most commonly relevant for initial redirects (for example, from the app's root location to the default view), it also applies to redirects that occur later in the app's lifecycle.

### Key recommendations

- Use [`pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) for significant state changes, like switching dashboards or applying filters.
- Use [`replaceState`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) for minor updates, such as adjusting relative timeframes, to avoid cluttering the history stack.
