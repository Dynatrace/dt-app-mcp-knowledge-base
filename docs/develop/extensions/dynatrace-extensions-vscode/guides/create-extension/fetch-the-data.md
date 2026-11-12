## Fetch the data

In this section, we will implement the `query` method of the extension. This method is called every minute and is responsible for fetching the data from the RabbitMQ instance.

### Cluster level metrics

Let's start by reporting a metric for the number of queues in our RabbitMQ instance.

To do that, we can call the [/api/overview endpoint](https://rawcdn.githack.com/rabbitmq/rabbitmq-server/v3.13.0/deps/rabbitmq_management/priv/www/api/index.html).

We will also need to include `requests` as a dependency of our extension.

```python
from dynatrace_extension import Extension, Status, StatusValue
import requests

class ExtensionImpl(Extension):

    def initialize(self):
        self.extension_name = "rabbitmq_extension"

    def query(self):
        """
        The query method is automatically scheduled to run every minute
        """
        self.logger.info("query method started for rabbitmq_extension.")

        for endpoint in self.activation_config["endpoints"]:
            url = endpoint["url"]
            user = endpoint["user"]
            password = endpoint["password"]
            self.logger.debug(f"Running endpoint with url '{url}'")

            # We've added these three lines
            # 1 - Make a request to the /api/overview endpoint
            cluster = requests.get(f"{url}/api/overview", auth=(user, password)).json()

            # 2 - Collect some dimensions for our metrics
            dimensions = {
                "cluster": cluster["cluster_name"],
                "rabbitmq_version": cluster["rabbitmq_version"]
            }

            # 3 - Send a metric to Dynatrace
            self.report_metric("rabbitmq.cluster.queues", cluster["object_totals"]["queues"], dimensions)

        self.logger.info("query method ended for rabbitmq_extension.")

    def fastcheck(self) -> Status:
        """
        This is called when the extension runs for the first time.
        If this AG cannot run this extension, raise an Exception or return StatusValue.ERROR!
        """
        return Status(StatusValue.OK)

def main():
    ExtensionImpl().run()

if __name__ == '__main__':
    main()

```

To include requests as a dependency, add it to `install_requires` in `setup.py`:

```python
from setuptools import setup, find_packages

setup(name="rabbitmq_extension",
      version="0.0.1",
      description="Rabbitmq_extension python EF2 extension",
      author="Dynatrace",
      packages=find_packages(),
      python_requires=">=3.10",
      include_package_data=True,
      install_requires=["dt-extensions-sdk", "requests"],
      extras_require={"dev": ["dt-extensions-sdk[cli]"]},
      )
```

> **Tip**
>
> Don't forget to also install the `requests` package in your development environment
> with `pip install requests`

Running the extension should now show you a metric being collected:

```text
2024-02-29 21:42:56,099 [INFO] api (MainThread): send_metric: rabbitmq.cluster.queues,
cluster="rabbit@49bf21ab3628",rabbitmq_version="3.12.12" gauge,1 1709264569592
```

For this tutorial, we won't add more metrics
but you can visit the [RabbitMQ Management API](http://localhost:15672/api/overview)
in your local instance and add more metrics to your extension.

### Node level metrics

Adding metrics to the nodes of the RabbitMQ cluster is a similar process.\
A cluster can have many nodes, so let's loop through them and report some metrics.

Add the following lines after reporting the `cluster` metric:

```python
            # 4 - Get nodes
            nodes = requests.get(f"{url}/api/nodes", auth=(user, password)).json()
            for node in nodes:

                # 5 - Add node specific dimensions, including it's parent (the cluster) dimensions
                node_dimensions = {
                    "node": node["name"],
                    **dimensions
                }

                # 6 - Report a metric for each node
                self.report_metric("rabbitmq.node.mem_used", node["mem_used"], node_dimensions)
```

### Queue level metrics

Finally, let's add some metrics for the queues in our RabbitMQ instance.

```python
            # 7 - Get queues
            queues = requests.get(f"{url}/api/queues", auth=(user, password)).json()
            for queue in queues:

                # 8 - Add queue specific dimensions, including it's parent (the cluster) dimensions
                queue_dimensions = {
                    "name": queue["name"],
                    "node": queue["node"],
                    "state": queue["state"],
                    **dimensions
                }

                # 9 - Report a metric for each queue
                self.report_metric("rabbitmq.queue.messages", queue["messages"], queue_dimensions)
```

### Final code

```python
from dynatrace_extension import Extension, Status, StatusValue
import requests

class ExtensionImpl(Extension):

    def initialize(self):
        self.extension_name = "rabbitmq_extension"

    def query(self):
        """
        The query method is automatically scheduled to run every minute
        """
        self.logger.info("query method started for rabbitmq_extension.")

        for endpoint in self.activation_config["endpoints"]:
            url = endpoint["url"]
            user = endpoint["user"]
            password = endpoint["password"]
            self.logger.debug(f"Running endpoint with url '{url}'")

            # We've added these three lines
            # 1 - Make a request to the /api/overview endpoint
            cluster = requests.get(f"{url}/api/overview", auth=(user, password)).json()

            # 2 - Collect some dimensions for our metrics
            dimensions = {
                "cluster": cluster["cluster_name"],
                "rabbitmq_version": cluster["rabbitmq_version"]
            }

            # 3 - Send a metric to Dynatrace
            self.report_metric("rabbitmq.cluster.queues", cluster["object_totals"]["queues"], dimensions)

            # 4 - Get nodes
            nodes = requests.get(f"{url}/api/nodes", auth=(user, password)).json()
            for node in nodes:

                # 5 - Add node specific dimensions, including it's parent (the cluster) dimensions
                node_dimensions = {
                    "node": node["name"],
                    **dimensions
                }

                # 6 - Report a metric for each node
                self.report_metric("rabbitmq.node.mem_used", node["mem_used"], node_dimensions)

            # 7 - Get queues
            queues = requests.get(f"{url}/api/queues", auth=(user, password)).json()
            for queue in queues:

                # 8 - Add queue specific dimensions, including it's parent (the cluster) dimensions
                queue_dimensions = {
                    "name": queue["name"],
                    "node": queue["node"],
                    "state": queue["state"],
                    **dimensions
                }

                # 9 - Report a metric for each queue
                self.report_metric("rabbitmq.queue.messages", queue["messages"], queue_dimensions)

        self.logger.info("query method ended for rabbitmq_extension.")

    def fastcheck(self) -> Status:
        """
        This is called when the extension runs for the first time.
        If this AG cannot run this extension, raise an Exception or return StatusValue.ERROR!
        """
        return Status(StatusValue.OK)

def main():
    ExtensionImpl().run()

if __name__ == '__main__':
    main()

```

> **Tip**
>
> You should separate the `query` method into smaller methods.
>
> For the complete code you can visit our real [RabbitMQ extension in Github](https://github.com/dynatrace-extensions/python-rabbitmq)
> that includes dashboards, topology, screens, all metrics, and more.
