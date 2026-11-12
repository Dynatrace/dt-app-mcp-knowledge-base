## Real User Monitoring (RUM)

Gain deep insights into your app users' behaviors with [Dynatrace's Real User Monitoring](https://docs.dynatrace.com/docs/shortlink/rum-overview). Quickly identify errors, examine response codes, and dive into user session analysis. All monitoring data is channeled either to a custom-configured environment or to the environment where the Dynatrace app is deployed.

> **Note**
>
> Session Replay is currently not supported for custom apps.

### Setting up RUM

To route your Dynatrace app's monitoring data to a target environment, you need to create a RUM application:

1. Go to the desired target environment.
2. Open the 'Frontend' app and, from the top-right dropdown menu, choose 'Set up agentless monitoring.'
3. Provide a descriptive name and click 'Add web application.'
4. From the `<script>` code section, copy the URL within the `src` attribute (for example `https://js-cdn.dynatrace.com/jstag/1234567890a/bf12345678/1234567890abcdef_complete.js`).

Use this script in your app configuration file for the `selfMonitoringAgent` property:

```json testable-app-config-json
{
  "environmentUrl": "<Your-Environment-URL>",
  "app": {
    "id": "<Your-App-ID>",
    "name": "<Your-App-Name>",
    "version": "0.0.0",
    "description": "<Your-App-Description>",
    "scopes": [],
    // highlight-next-line
    "selfMonitoringAgent": "https://js-cdn.dynatrace.com/jstag/1234567890a/bf12345678/1234567890abcdef_complete.js"
  }
}
```

Save your modifications and redeploy your app. You've now set up RUM monitoring!

> **Tip**
>
> Make sure you use RUM JavaScript with a version of >1.271 for the Agentless monitoring setup.
> To check this (after adding the web application):
>
> 1. Go to the frontend app and select the newly added web application.
> 2. From the top-right dropdown menu, choose **Edit**.
> 3. Scroll down and expand the **Setup** section.
> 4. Select **RUM JavaScript updates** and check the selected version to be equal/greater than 1.271.

### Privacy with RUM

Once RUM is initialized, data is channeled to the pre-defined target environment.
Guidance on bolstering security and [ensuring data privacy for RUM](https://docs.dynatrace.com/docs/shortlink/sensitive-data#real-user-monitoring-rum) will lead you through the steps for a secure deployment.
