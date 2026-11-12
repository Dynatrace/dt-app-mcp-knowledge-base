## Logs

Beyond this, you can get more detailed information via the extension's logs. The extension posts its logs to a dedicated output channel called **Dynatrace Log**. Unlike the other two output channels, this channel will format the data as a log and provide timestamps for every message.

![dynatrace log](https://developer.dynatrace.com/assets/images/log_channel-b40c3d8f86843c8d7f2b7c1f09053206.png)

You can set the verbosity of the messages posted to this channel in your editor's global settings. Find the **Behavior** section and adjust the log level as you see fit.

![log settings](https://developer.dynatrace.com/assets/images/log_settings-886e43eb0db27cbf8c61405075737e52.png)

### Collect a log archive

The extension also maintains execution logs on disk, which have debug-level verbosity. **Dynatrace Extensions** offers a command for packaging up the internal logs folder and saving it in a dedicated location. To run this command, press F1, then choose **Download support archive**.

> **Tip**
>
> You can adjust the logs file aging mechanism from [settings](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/settings.md#logging)
