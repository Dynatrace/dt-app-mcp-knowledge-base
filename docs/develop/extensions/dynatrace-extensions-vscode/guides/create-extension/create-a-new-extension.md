## Create a new extension

1. Open an empty folder on Visual Studio Code.
2. Run the command `Dynatrace extensions: Initialize workspace`.
3. Choose the latest available schema version.
4. Create a new certificate or use an existing one.
5. Choose the project type `Python Extension 2.0`.
6. Give the extension the name `rabbitmq_extension`.

Python extensions are simply Python modules that must follow the [PEP8](https://www.python.org/dev/peps/pep-0008/) naming conventions, meaning that the name should be lowercase and separated by underscores.

> **Tip**
>
> To run a command on Visual Studio Code, press `F1` or `Ctrl+Shift+P` and type the command name.

![python project type](https://developer.dynatrace.com/assets/images/python-tutorial-project-type-61c850e015ffaec952ad8d9b6d22d5e0.png)

Our Visual Studio Code extension will automatically invoke the `dt-sdk create` command, which will create the necessary files and folders for the extension.

If you open the file `extension/extension.yaml`, you can examine the construction of a Python extension.\
It declares the Python module name, the minimum Python version, and the activation schema for a remote ActiveGate or local OneAgent extension.

![python extension yaml](https://developer.dynatrace.com/assets/images/python-tutorial-extension-yaml-ae95c0a449e398b93fa2dbad94dfc129.png)

Clicking the `Simulate extension` code lens will start the extension in the Visual Studio Code environment.

> **Tip**
>
> If you don't see the `Simulate extension` button, reload the Visual Studio Code window with `F1 > Reload Window`.

![python extension simulate](https://developer.dynatrace.com/assets/images/python-tutorial-simulate-09c2b21dbf161bdef6c1a2114ab6eb64.png)
