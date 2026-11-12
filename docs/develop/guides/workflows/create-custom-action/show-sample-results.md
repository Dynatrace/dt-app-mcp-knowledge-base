## Show sample results

You can show a sample result for your action. Users can look at this sample and figure out what the action output would look like.

The App Toolkit creates a `greeter.sample-result.json` file in the `/assets` directory for our greeter action. Open this file and add the sample JSON result.

Make the sample mirror a real, successful result: use the exact shape your action returns, with realistic values. Users and downstream tasks rely on it to understand the output, so an accurate sample is what lets them build on your action. Don't include personal data or secrets, because the sample is visible at design time.
