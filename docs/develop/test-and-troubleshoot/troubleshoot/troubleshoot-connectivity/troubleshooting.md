## Troubleshooting

This guide helps identify connectivity issues when accessing Dynatrace resources on your corporate network. Follow the commands and compare your machine's outputs with the expected ones. If there are any deviations, go to the [connectivity issues](https://developer.dynatrace.com/develop/test-and-troubleshoot/troubleshoot/troubleshoot-connectivity.md#connectivity-issues) section to troubleshoot.

You need to replace the `Environment-Id` with your actual environment ID in the following examples.

### Connectivity of your machine

You'll see if you can access Dynatrace Single Sign-On (SSO) and your environment.

#### Access Single Sign-On server

To start, check if your machine can access the Dynatrace environment using curl or a similar tool. It tests whether you can reach the Dynatrace Single Sign-On server and whether your machine can access hosts outside your corporate network.

```bash
curl -I https://sso.dynatrace.com
```

The following output containing a [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) is expected:

```bash
HTTP/2 200
...
```

**Show full example response output**

```bash
HTTP/2 200
date: Thu, 01 Feb 2024 10:10:10 GMT
content-type: text/html
content-length: 2281
set-cookie: ; Expires=Thu, 10 Feb 2024 10:10:10 GMT; Path=/
set-cookie: ; Expires=Thu, 10 Feb 2024 10:10:10 GMT; Path=/; SameSite=None; Secure
x-frame-options: deny
frame-options: deny
x-xss-protection: 1; mode=block
x-content-type-options: nosniff
content-security-policy: default-src 'self' https://static.sso.dynatrace.com https://dt-cdn.net; script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://static.sso.dynatrace.com ; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://dt-cdn.net https://static.sso.dynatrace.com; frame-ancestors 'none'; frame-src 'self' https://www.google.com/recaptcha/
x-content-security-policy: default-src 'self' https://static.sso.dynatrace.com https://dt-cdn.net; script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://static.sso.dynatrace.com ; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://dt-cdn.net https://static.sso.dynatrace.com; frame-ancestors 'none'; frame-src 'self' https://www.google.com/recaptcha/
strict-transport-security: max-age=31536000; preload
cache-control: private, no-store, must-revalidate
pragma: no-cache
set-cookie: b925d32c=; Path=/; Domain=sso.dynatrace.com; Expires=Thu, 01-Jan-1970 00:00:00 GMT; Max-Age=0; Secure; HttpOnly; SameSite=None
set-cookie: ssoCSRFCookie=; Path=/; Domain=.dynatrace.com; Expires=Thu, 01-Jan-1970 00:00:00 GMT; Max-Age=0; Secure; SameSite=None
```

The Dynatrace SSO server is reachable and responding to your requests. It also means your machine can reach hosts outside your corporate network.

#### Access your environment

The following command checks if you can access your Dynatrace environment to access your data. This tests if your specific environment is reachable.

```bash
curl -I https://<Environment-Id>.apps.dynatrace.com/
```

The following output containing a [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) status is expected, as you aren't yet authenticated.

```bash
HTTP/2 401
...
```

It means your environment is reachable from your machine within the corporate network, and your Dynatrace environment is available.

The last command is to check access to your Dynatrace environment with SSO authentication and whether you can facilitate the authentication process. The authentication process is complex, sending and receiving many requests and responses.

```bash
curl -I https://<Environment-Id>.apps.dynatrace.com/platform/oauth2/authorization/dynatrace-sso
```

The following output containing a [302 Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302) status is expected:

```bash
HTTP/2 302
...
```

It means that Dynatrace SSO is reachable for the authentication for your Dynatrace environment. You get a 302 in this case because curl doesn't follow redirects.

If you don't receive these outputs, refer to this guide's [connectivity issues](https://developer.dynatrace.com/develop/test-and-troubleshoot/troubleshoot/troubleshoot-connectivity.md#connectivity-issues) section.
If you have gotten those outputs, try the same Node.js procedure to ensure the Node.js application has identical connectivity. Sometimes, Node.js is blocked from accessing the outside network within corporate networks. Follow along in the next section of this guide.

### Connectivity of Node.js

As Node.js is your app's main development environment, access to all relevant resources is necessary. Check the following commands to ensure that Node.js is working correctly.

#### Access Single Sign-On server

Execute the first command to access Dynatrace SSO:

```bash
node -e "fetch('https://sso.dynatrace.com').then(console.log)"
```

The following output containing a [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) is expected:

```text
 ...
 status: 200,
 ...
 statusText: 'OK',
 ...
```

**Show full example response output**

```ts skip-testing
Response {
  [Symbol(realm)]: null,
  [Symbol(state)]: {
    aborted: false,
    rangeRequested: false,
    timingAllowPassed: true,
    requestIncludesCredentials: true,
    type: 'default',
    // highlight-next-line
    status: 200,
    timingInfo: {
      startTime: 39.133354,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: 39.133354,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 1270,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null
    },
    cacheState: '',
    // highlight-next-line
    statusText: 'OK',
    headersList: HeadersList {
      cookies: [Array],
      [Symbol(headers map)]: [Map],
      [Symbol(headers map sorted)]: null
    },
    urlList: [ URL {} ],
    body: { stream: undefined }
  },
  [Symbol(headers)]: HeadersList {
    cookies: [],
    [Symbol(headers map)]: Map(18) {
      'date' => [Object],
      'content-type' => [Object],
      'content-length' => [Object],
      'connection' => [Object],
      'set-cookie' => [Object],
      'server-timing' => [Object],
      'x-oneagent-js-injection' => [Object],
      'x-frame-options' => [Object],
      'frame-options' => [Object],
      'x-xss-protection' => [Object],
      'x-content-type-options' => [Object],
      'content-security-policy' => [Object],
      'x-content-security-policy' => [Object],
      'strict-transport-security' => [Object],
      'cache-control' => [Object],
      'pragma' => [Object],
      'vary' => [Object],
      'content-encoding' => [Object]
    },
    [Symbol(headers map sorted)]: null
  }
}
```

#### Access your environment

Execute the following command to see if you can access your Dynatrace environment:

```bash
node -e "fetch('https://<Environment-Id>.apps.dynatrace.com').then(console.log)"
```

The following output containing a [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) status is expected, as you aren't yet authenticated.

```text
 ...
 status: 401,
 ...
 statusText: 'Unauthorized',
 ...
```

Execute the following command to see if you can access the authorization APIs of your environment:

```bash
node -e "fetch('https://<Environment-Id>.apps.dynatrace.com/platform/oauth2/authorization/dynatrace-sso').then(console.log)"
```

The following output containing a [200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) status is expected:

```text
 ...
 status: 200,
 ...
 statusText: 'OK',
 ...
```

If you don't receive these outputs, refer to this guide's [connectivity issues](https://developer.dynatrace.com/develop/test-and-troubleshoot/troubleshoot/troubleshoot-connectivity.md#connectivity-issues) section.

If you did receive these outputs, everything should work as expected if you develop your app with the help of App Toolkit.
