## App function logs

Search within logs for errors or specific custom logs related to your app's functions. Logs for Dynatrace app functions are automatically reported in the environment where the app lives. Consider this when deploying your app to a production environment.

### Accessing app function logs

No additional configuration is required. Logs are automatically sent to the environment where your Dynatrace app is deployed.

To view them, for instance, launch Notebooks and run the following query:

```dql
fetch logs
| filter dt.app.id == "<Your-App-ID>"
```

### Privacy with app function logs

When integrating commands like console.log(data) within your Dynatrace application functions, exercise caution regarding the nature and sensitivity of the data you're recording. Logs, irrespective of their level, are amassed in the environment where the application operates. Our comprehensive [guide on log masking](https://docs.dynatrace.com/docs/shortlink/lma-mask-sensitive-data) provides techniques to circumvent unintended data exposures.
