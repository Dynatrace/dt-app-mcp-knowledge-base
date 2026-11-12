## Deploy and configure your new extension

### Build and upload to Dynatrace

1. Build the extension by pressing F1 then clicking the command **Dynatrace extensions: Build**

   ![build command](./assets/build_command.png)

2. Then, choose to upload it to Dynatrace by clicking **Yes**

   ![upload prompt](https://developer.dynatrace.com/assets/images/upload_prompt-40e856edd238c200cd40673382637b83.png)

3. Next, activate this extension by clicking **Yes**

   ![activate prompt](https://developer.dynatrace.com/assets/images/activate_prompt-9ac5cfc7aa065f85a08d7652ce41cd1d.png)

### Add a monitoring configuration

1. Open your extension either from the prompt or from the Extensions menu in Dynatrace
   ![open prompt](./assets/open_prompt.png)
2. Add a monitoring configuration by clicking the button
   ![add configuration](https://developer.dynatrace.com/assets/images/add_configuration-9e949d5049ad66f9a9c9e360ebc54d7b.png)
3. Select a Host running your Java process, then click **Next step**.
   ![host configuration](https://developer.dynatrace.com/assets/images/monitoring_config_host-8a96892ab46ca5cce0806924167103a6.png)
4. On the next page click **Next step** once again, then add a description and click **Activate**.

Once your monitoring configuration is activated, data collection starts automatically.
