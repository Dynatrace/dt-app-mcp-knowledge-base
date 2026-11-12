## Demo

The `AppRoot` takes care of detecting the users preferred color scheme depending on the preferred theme you have set in your Dynatrace account. By default, we are using the preferred color scheme you have set in your browser or OS. The design tokens are set accordingly to render the corresponding theme.

For localization, the `AppRoot` also detects the current language the same way it is detecting the preferred color scheme. The resulting language is then used to translate the text on the page, using English as fallback if the language is not supported.

The `AppRoot` component is automatically added in the `main.tsx` file of your app when creating the app with the Dynatrace App Toolkit.

```tsx
import { AppRoot } from '@dynatrace/strato-components/core';

export const App = () => <AppRoot>App Root Content</AppRoot>;
```
