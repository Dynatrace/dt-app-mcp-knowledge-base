## Troubleshooting

A data analyzer execution can fail for different reasons. If it does fail, the response will contain a log array that you can use to figure out why the analysis was unsuccessful. For instance, if the provided query doesn't return enough data points, the response will look something like this:

```json
{
    "result": {
        "resultId": "4e1a8a1efd560193",
        "resultStatus": "FAILED",
        "executionStatus": "COMPLETED",
        "input": {
            ...
        },
        "logs": [
            {
                "level": "WARNING",
                "message": "More historical data is required to generate a reliable forecast. Increase the timeframe or adapt the resolution to include a minimum of 14 non-NaN observations.",
                "analyzerName": "dt.statistics.GenericForecastAnalyzer"
            },
            {
                "level": "SEVERE",
                "message": "The analysis of the data was not successful.",
                "analyzerName": "dt.statistics.GenericForecastAnalyzer"
            }
        ],
        "output": []
    }
}
```
