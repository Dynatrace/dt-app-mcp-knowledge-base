## App Toolkit requirements

To use the App Toolkit, ensure your environment meets the following prerequisites:

- **NodeJS version 24** must be installed on your local machine.
  - Download the [NodeJS](https://nodejs.org/en/download) installer for your operating system.
- Access to the following URLs:
  - [https://dt-cdn.net/](https://dt-cdn.net/)
  - [https://registry.npmjs.org/](https://registry.npmjs.org/)
  - Access to your desired Dynatrace environment.
- Local **port range 3000-3005** must be available for local app development. Alternatively, configure a [custom port](#server-options).&#x20;
- Local **port 30000** must be available for local app function execution.
- Local **port 5343** must be available for the SSO authentication process. If the port is unavailable, the toolkit will try the next port.
- Access to **localhost**.
- Access to a command line interface (for example, PowerShell, cmd, Linux terminal, macOS terminal) and the ability to execute scripts.
- Read/write access to the directory where your app is located.
- Access to read app templates on [github.com](https://github.com/).
