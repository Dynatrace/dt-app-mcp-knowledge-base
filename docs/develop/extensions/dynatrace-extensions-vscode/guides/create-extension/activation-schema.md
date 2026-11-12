## Activation schema

We need to ask the user for three pieces of information when they're configuring our extension:

- RabbitMQ Management URL
- Username
- Password

You can define these in the `extension/activationSchema.json` file.
By default, the SDK creates this file with fields for a URL, Username, and Password, which is convenient for us.
You should modify this file to fit the specific needs of the extension for most use cases.

During development, the SDK reads these configuration values from the file `activation.json`. Modify this file to point to our local RabbitMQ instance.

```json
{
  "enabled": true,
  "description": "rabbitmq_extension activation",
  "version": "0.0.1",
  "activationContext": "REMOTE",
  "pythonRemote": {
    "endpoints": [
      {
        "url": "http://localhost:15672",
        "user": "guest",
        "password": "guest"
      }
    ]
  }
}
```

> **Tip**
>
> You can only use the `activation.json` during development, and it's not bundled with the extension. You must be careful not to commit secrets to your source control accidentally.
