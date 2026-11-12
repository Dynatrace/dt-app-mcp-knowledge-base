## Import the certificate

After generating the certificate, you need to import it into **Keychain Access** as follows:

1. Open the **Keychain Access** app on your Mac and select **Default Keychains** > **login** from the side menu.

2. Go to **File** > **Import Items** to import your newly generated `cert.crt` file from the earlier step:

   ![add certificate in keychain](https://developer.dynatrace.com/assets/images/keychain-add-cert-81f0fba6192fc1b2cfcb04c303887546.png)

3. Double-click the newly added certificate, which is named **localhost**, to open a new dialog. Expand the **Trust** section and, for the **When using this certificate** option, select **Always Trust**:

   ![trust certificate](https://developer.dynatrace.com/assets/images/trust-cert-a59c059f4257ad752acfe523646b6bab.png)
