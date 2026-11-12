## 2. Adapt your app

1. **Go to your new directory** when the toolkit finishes creating the app.

   ```bash
   cd my-first-app
   ```

2. **Run the following command** in your terminal to run your project.

   ```bash
   npx dt-app dev
   ```

   Your new app will automatically open in a browser to show what you created.

   > **Note**
   >
   > For Chrome 142 or later, you need to give the browser permission to connect to any device on your local network.
   >
   > If you encounter issues with local app development, visit [Troubleshoot app development](https://developer.dynatrace.com/develop/test-and-troubleshoot/troubleshoot/troubleshoot-app-development.md) for hints.

3. **Open** the file `ui/app/pages/Home.tsx` in your code editor.

4. **Locate** and **change** the `Heading` element to `My first app`. The highlighted line in the following code snippet shows the relevant change.

```tsx title="ui/app/pages/Home.tsx" untestable
import React from "react";
import { Flex, Heading, Paragraph, Strong, useCurrentTheme } from "@dynatrace/strato-components";
import { Card } from "../components/Card";

export const Home = () => {
  const theme = useCurrentTheme();
  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>
      <img src="./assets/Dynatrace_Logo.svg" alt="Dynatrace Logo" width={150} height={150} style={{ paddingBottom: 32 }}></img>
      // highlight-next-line
      <Heading>My first app</Heading>
      <Paragraph>
        Edit <Strong>ui/app/pages/Home.tsx</Strong> and save to reload the app.
      </Paragraph>
      …
  );
};
```

When you save your file, the new heading will automatically update in the browser.

> **Note**
>
> The dev server runs the app locally on your machine only. To share it with your colleagues, [deploy your app](https://developer.dynatrace.com/develop/guides/deploy-your-app.md).
