## Verify access to the npm registry

You should also confirm that npm has access to the registry by running the following command in the terminal:

```bash
npm ping
```

Following is the expected output:

```bash
npm notice PING https://registry.npmjs.org/
npm notice PONG 335ms
```

This output means that npm has access to the public registry. If npm doesn't have access to the official registry, this hints towards a networking issue likely caused by a proxy or firewall in your network. Configure your network and your machine in a way that allows npm and, subsequently, the App Toolkit to access the public npm repository.
