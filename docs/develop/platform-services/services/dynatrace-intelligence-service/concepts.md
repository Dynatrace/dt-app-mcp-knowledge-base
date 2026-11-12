## Concepts

You need to know the following concepts to work with the Dynatrace Intelligence service.

### Analyzer definitions

Every analyzer has a static definition, which describes its capabilities. The definition consists of the following parts: general metadata, input, and output definition.

The general metadata section contains essential information about the analyzer, such as its **name**, **displayName**, and **description**. An analyzer's **name** is fully qualified and guaranteed not to change in the future.

Input and output definitions share a standard schema describing how the input and output of a specific analyzer are structured. You can retrieve the exact structure of the input and output objects for a particular analyzer from the `analyzers/<Analyzer-Name>/json-schema/input` or the `analyzers/<Analyzer-Name>/json-schema/output` endpoints.

### Analyzer execution

#### Flow

To execute an analyzer for the first time, we recommend the following request flow:

1. **Query all analyzers**: You should query all the available analyzers and choose among them using the  endpoint.

2. **Query a specific analyzer**: Query a particular definition of an analyzer to see which functional scope and parameters the selected analyzer supports using the  endpoint.

3. **Query schema**: Query the input and result schema of the analyzer using the  and  endpoint. The response is a [JSON schema](https://json-schema.org/) for the analyzer you're interested in.

4. **Execute the data analyzer**: Use the  endpoint to execute a data analyzer. The Dynatrace Intelligence service executes analyzers asynchronously and returns a synchronous result within the defined wait period.

#### Execution logs

An analyzer provides **execution logs** if the execution fails or if additional information about the result is available. Before the Dynatrace Intelligence service executes an analyzer, it performs preliminary checks, such as input validations. If these checks fail, the analyzer is not executed and the service returns an error.

If the input matches the input definition, the request will always produce a consumable, successful result.

However, it can still happen that some analysis inside the analyzer fails for other reasons. In such cases, the analyzer provides execution logs pointing toward the problem.

Execution logs have a specific level, indicating the severity of the issue for the given analyzer. These levels can be filtered when executing an analyzer.

#### Example

The `dt.statistics.GenericForecastAnalyzer` produces a forecast for a given time series and is an excellent tool for predicting business metrics.

Given the following input:

```json
{
  "timeSeriesData": "timeseries avg(dt.host.cpu.usage)"
}
```

This analyzer returns the forecast predictions for the given time series:

```json
{
  "result": {
    "resultId": "b433d5b1e3125ff3",
    "resultStatus": "SUCCESSFUL",
    "executionStatus": "COMPLETED",
    "input": {
      "generalParameters": {
        "timeframe": "unknown-unknown",
        "logVerbosity": "WARNING",
        "resolveDimensionalQueryData": false
      },
      "forecastHorizon": 10,
      "timeSeriesData": {
        "expression": "timeseries avg(dt.host.cpu.usage)"
      },
      "coverageProbability": 0.9,
      "nPaths": 200
    },
    "output": [
      {
        "timeSeriesDataWithPredictions": {
          "records": [
            {
              "dt.davis.forecast:lower": [
                20.302533297777046, 20.30119956974749, 20.299826093391346, 20.298413637147934, 20.296962988044072,
                20.295474948510375, 20.293950333306114, 20.29238996657088, 20.290794679018166, 20.289165305282822
              ],
              "dt.davis.forecast:upper": [
                20.531565739653274, 20.5316575385106, 20.53178908569177, 20.531959612757507, 20.532168332681056,
                20.53241444303185, 20.532697129050682, 20.53301556659801, 20.533368924960413, 20.53375636950308
              ],
              "dt.davis.forecast:point": [
                20.4170495226752, 20.416428558113733, 20.41580759355227, 20.415186628990803, 20.414565664429336,
                20.41394469986787, 20.413323735306403, 20.412702770744936, 20.412081806183473, 20.411460841622006
              ],
              "interval": "60000000000",
              "timeframe": {
                "end": "2023-04-03T05:42Z",
                "start": "2023-04-03T05:32Z"
              },
              "dt.davis.internal.dataName": "avg(dt.host.cpu.usage)"
            }
          ],
          "types": [
            {
              "indexRange": [0, 0],
              "mappings": {
                "dt.davis.forecast:lower": {
                  "type": "array",
                  "types": [
                    {
                      "indexRange": [0, 9],
                      "mappings": {
                        "element": {
                          "type": "double"
                        }
                      }
                    }
                  ]
                },
                "timeframe": {
                  "type": "timeframe"
                },
                "dt.davis.forecast:upper": {
                  "type": "array",
                  "types": [
                    {
                      "indexRange": [0, 9],
                      "mappings": {
                        "element": {
                          "type": "double"
                        }
                      }
                    }
                  ]
                },
                "dt.davis.forecast:point": {
                  "type": "array",
                  "types": [
                    {
                      "indexRange": [0, 9],
                      "mappings": {
                        "element": {
                          "type": "double"
                        }
                      }
                    }
                  ]
                },
                "interval": {
                  "type": "duration"
                },
                "dt.davis.internal.dataName": {
                  "type": "string"
                }
              }
            }
          ]
        },
        "forecastQualityAssessment": "valid",
        "analysisStatus": "OK",
        "analyzedTimeSeriesQuery": {
          "expression": "timeseries avg(dt.host.cpu.usage)",
          "timeframe": {
            "startTime": "2023-04-03T03:31:32.718Z",
            "endTime": "2023-04-03T05:31:32.718Z"
          }
        }
      }
    ]
  }
}
```
