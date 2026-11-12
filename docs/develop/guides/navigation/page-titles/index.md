Page titles appear in the browser tab and help users identify the active view when multiple tabs are open. Setting descriptive page titles improves usability and accessibility across your app and embedded widgets.

> **Note**
>
> Only call `usePageTitle` for views with a persistent URL. Updating the title for transient views—overlays, modals, or intermediate states that don't persist in browser history—causes confusion when users navigate back in history.

> **Note**
>
> Add-on modals are an exception; for more information, see [Set modal titles for add-ons](#set-modal-titles-for-add-ons).
