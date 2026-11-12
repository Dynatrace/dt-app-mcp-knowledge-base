### Action widget

The widget is a react app. The UI part of the action allows the user to configure and parameterize a task within a workflow. For example, the built-in `HTTP request` action lets users specify parameters like HTTP method, URL address, payload, and headers. You can build this input form to suit your action as a developer.

Users can either provide static values or use expressions to reference the results of the earlier steps as task inputs. Find more information about expressions in the user documentation [expression reference](https://dt-url.net/workflows-expression-reference).
To properly support the user in configuring inputs, there are specific Automation action UI components ([@dynatrace/automation-action-components](https://www.npmjs.com/package/@dynatrace/automation-action-components)) we highly recommend to use for widget implementation. Those support expression auto-completion, input expand mode, etc.

The App Toolkit will set up your widget for communication with the Workflows, thus ensuring task input values are populated, and Automation action component features work.
