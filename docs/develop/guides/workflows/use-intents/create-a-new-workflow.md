## Create a new workflow

Do you have data in your app that should serve as a workflow starting point, for example, a daily report? You can use intents to guide the user from your app to a new workflow.

### Define the intent

An intent to create a workflow requires at least the following mandatory properties:

```json
{
  "title": "Workflow from intent",
  "tasks": {}
}
```

Here is an example of an intent for a workflow with two sequential tasks and an interval-based trigger:

```json
{
  "title": "Workflow from intent",
  "tasks": {
    "task1": {
      "name": "task1",
      "action": "dynatrace.automations:run-javascript",
      "input": {
        "script": "export default async function () { \n  console.log('Hello world.')\n}"
      },
      "position": { "x": 0, "y": 1 }
    },
    "task2": {
      "name": "task2",
      "action": "dynatrace.automations:http-function",
      "input": {
        "url": "https://www.dynatrace.com/contact/",
        "method": "GET"
      },
      "position": { "x": 0, "y": 2 },
      "predecessors": ["task1"]
    }
  },
  "trigger": {
    "schedule": {
      "trigger": {
        "type": "interval",
        "intervalMinutes": 25
      }
    }
  }
}
```

### Intent payload details

A workflow can consist of a list of `tasks`. Each task has the following properties:

- `action`: one of the actions which are made available by apps
- `input`: action parameters depending on the `action`
- `position`: the position of the task in the graph
- `predecessors`: an optional list of predecessor tasks

An optional `trigger` can be provided to define how the workflow is executed. It can specify either a `schedule` or an `eventTrigger`. If omitted, an on-demand trigger is assumed.

- `schedule` can be one of the following types:
  - cron: `{ "type": "cron", "cron": "0 * * * *" }`
  - interval: `{ "type": "interval", "intervalMinutes": 30 }`
  - time: `{ "type": "time", "time": "09:00" }`
- `eventTrigger` can be one of the following types::

  - event:

    ```ts skip-testing
    {
      "triggerConfiguration": {
        "type": "event",
        "value": { "query": "..." }
      }
    }
    ```

  - davis-problem:

    ```ts skip-testing
    {
      "triggerConfiguration": {
        "type": "davis-problem",
        "value": {
          "onProblemClose": false,
          "categories": {
            "monitoringUnavailable": true,
            "availability": true,
            "error": true,
            "slowdown": true,
            "resource": true,
            "custom": true,
            "info": true
          }
        }
      }
    }
    ```

  - davis-event:

    ```ts skip-testing
    {
      "triggerConfiguration": {
        "type": "davis-event",
        "value": {
          "onProblemClose": false,
          "types": ["APPLICATION_ERROR_RATE_INCREASED"]
        }
      }
    }
    ```

> **Note**
>
> "Davis" is the former brand name for Dynatrace AI, now called "Dynatrace Intelligence." Legacy strings and files may still use "Davis" and these references remain valid.
