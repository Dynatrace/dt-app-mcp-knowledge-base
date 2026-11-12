If you fetch data from external APIs in a Dynatrace App, you'll get the following error in the console:

```text
Refused to connect to example.com/api because it violates the following Content Security Policy directive: "connect-src https://widget.usersnap.com https://fonts.googleapis.com https://dt-cdn.net 'self'"
```

This is because the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) rules don't allow external APIs.
By using app functions you can access any external APIs.
