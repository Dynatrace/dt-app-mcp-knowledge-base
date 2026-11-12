## Convert a JMX Extension as a new project

### Initialize your workspace

1. Create a new folder on your computer and open it in VS Code.

2. Press F1 then select the command **Dynatrace extensions: Initialize workspace**

   ![initialize command](./assets/init_command.png)

3. Next, choose schema version **1.275.0** from the list

   ![schema list](./assets/schema_select.png)

4. When prompted about certificates, choose **Use existing**

   ![certificates](https://developer.dynatrace.com/assets/images/certificates_choice-4a9cfcaad30b31d40a1507d51c764624.png)

5. When prompted about project type, choose **JMX 1.0 Conversion**

   ![project types](https://developer.dynatrace.com/assets/images/template_choice-6b9c62fdd3d2fde57027883f78d0c848.png)

Your workspace has been initialized, and you're ready to convert your old extension.

### Convert your extension

1. You need to load the JMX 1.0 Extension for conversion. You can browse your local filesystem for a `.zip` or `plugin.json` file or browse your connected Dynatrace environment. As part of this guide, we'll do the latter. Choose to load it **Remotely**:

   ![load extension choice](https://developer.dynatrace.com/assets/images/load_jmx_choice-fd86c4883e617ec3fc35d9b92afd8659.png)

2. You are now presented with a list of extensions from your tenant. Choose which one you want to convert. For example:

   ![extension choice](https://developer.dynatrace.com/assets/images/extension_choice-7c4292ea93ac16049db289ebf9036f35.png)

   > **Note**
   >
   > After selecting an extension, you may be prompted for a new extension name if your old one is too long.

3. Next, you should select a technology so that Process pages can be configured automatically. Choose one that applies to your Java process. Otherwise, choose **All other**

   ![technology choice](./assets/technology%20choice.png)

4. Optionally, we can also show the data on your Host's page. To follow along with this guide, select **Yes**

   ![host screen choice](./assets/host_charts.png)

The conversion will generate your new extension manifest at `extension/extension.yaml`.
