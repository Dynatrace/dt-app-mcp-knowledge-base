## RabbitMQ

We suggest you use docker to test this extension against a real RabbitMQ broker.

You can start a RabbitMQ node with the management extension enabled by:

```bash
docker run -d --name rabbit -p 15672:15672 rabbitmq:3-management
```

To make the extension more interesting, log in to `http://localhost:15672` with the default credentials `guest:guest` and create a new queue.

![rabbitmq create queue](https://developer.dynatrace.com/assets/images/python-tutorial-rabbitmq-queue-22f6a09faa83821dbc50ad72443deb80.png)
