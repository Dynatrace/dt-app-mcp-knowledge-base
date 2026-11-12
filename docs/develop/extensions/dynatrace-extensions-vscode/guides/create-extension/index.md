Dynatrace provides a means to develop Python extensions using the new Extensions 2.0 framework.
You should use these extensions when the existing data sources can't cover your use cases.

Develop Python extensions when:

- You need complex logic to fetch metrics, events, or logs from a source.
- You can't achieve data collection with a declarative data source (SQL, SNMP, WMI, JMX, Prometheus, etc).

The [dt-extensions-sdk](https://pypi.org/project/dt-extensions-sdk/) python package provides a Software Development Kit (SDK) and a Command Line Interface (CLI) delivering support for your Python extension.

Python extensions are also supported by our [Visual Studio Code Add-on](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode.md), our recommended way of developing them.

---

In this step-by-step guide, we will create a working `RabbitMQ` extension from scratch.

This extension will leverage the [RabbitMQ Management API](https://www.rabbitmq.com/docs/management) to bring metrics for the cluster, nodes, and queues.
