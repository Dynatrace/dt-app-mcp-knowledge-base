## Connectivity issues

If you don't receive the desired outputs of the above commands, several problems might occur. The most common error messages are outlined in the following table and usually indicate a proxy or firewall issue.

| CURL Error                    | Node.js Error | Interpretation                                                                        |
| ----------------------------- | ------------- | ------------------------------------------------------------------------------------- |
| CURLE_COULDNT_RESOLVE_HOST | ENOTFOUND     | The host couldn't be found, something is blocking DNS resolution.                     |
| CURLE_OPERATION_TIMEDOUT    | ETIMEDOUT     | The host couldn't be reached, the request timed out.                                  |
| CURLE_REMOTE_ACCESS_DENIED | ECONNREFUSED  | The connection was refused by some entity, either the host or some other server.      |
| CURLE_RECV_ERROR            | ECONNRESET    | The connection has been reset by some entity, either the client or some other server. |

If you need further information or experience issues not listed here, refer to the curl documentation for detailed information [curl](https://curl.se/libcurl/c/libcurl-errors.html). This can help identify your error more quickly. If you find different HTTP error codes, refer to [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/) for more details.
The most likely culprits in this respect are misconfigured proxy servers and enterprise firewall software.

### Proxy server

If you don't configure a proxy server correctly, you can experience connection issues.

If your company requires a proxy server for outbound connections, you must configure the App Toolkit with the `DT_APP_HTTPS_PROXY` environment variable to use the proxy server.

Use the following format to configure your proxy server:

```text
DT_APP_HTTPS_PROXY=http{s}://{<username>:<password>@}<host>:<port>
```

The curly braces (`{}`) identify optional components.

> **Tip**
>
> If you still see connection issues after using this setup, it could be due to an enterprise firewall blocking outbound connections.

### Firewall

If the proxy isn't the culprit, an enterprise firewall might be actively tampering with connections. App Toolkit is a relatively unknown application. It might be blocked by default in enterprise firewall products, hindering access to the Dynatrace environment. Make sure to unblock the App Toolkit in the corporate firewall or create specific firewall rules to allow as unrestricted access as possible for the App Toolkit.

A common issue you might find is the `SELF_SIGNED_CERT_IN_CHAIN` error. You can work around this by adding your PEM certificate to the NPM config with the following command:

```bash
npm config set cafile /path/to/cert.pem
```

Contact your in-house IT department for further assistance if you run into any proxy server or firewall issues.

### GitHub access

If none of the previous solutions work, there's a workaround that might help. When you create a new app with the App Toolkit, it fetches the templates for scaffolding your app from GitHub. Sometimes this process might fail due to your system's restrictions. You can work around this by downloading [the templates](https://github.com/Dynatrace/dt-app-templates) manually, and using the `--template-dir` option from the App Toolkit.

```bash
npx dt-app@latest create --template-dir ./path-to-templates-repo/templates/default
```
