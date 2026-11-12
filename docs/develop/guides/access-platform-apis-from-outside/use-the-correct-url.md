## Use the correct URL

You need to use the absolute URL of the respective API endpoint to call a platform API or app function from outside the platform.
The URL for platform APIs is always following the following pattern: `$ENVIRONMENT_URL/platform/<Your-Api-Endpoint>`

App functions are available via this URL pattern: `$ENVIRONMENT_URL/platform/app-engine/app-functions/v1/apps/<Your-App-ID>/api/<Your-Function-Name>`

A complete list of available platform APIs is available in the SwaggerUI of your environment. You can find a link to swagger by using the in-product search and searching for "Dynatrace API" or access it via `<ENVIRONMENT_URL`>/platform/swagger-ui/index.html\`

> **Note**
>
> You need to replace the placeholders `<Your-Api-Endpoint>`,`<Your-App-ID>`, and `<Your-Function-Name>` with your values.
