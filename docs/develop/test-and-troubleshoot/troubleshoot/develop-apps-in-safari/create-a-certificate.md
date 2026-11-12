## Create a certificate

First, you need to create a self-signed root certificate that you'll use to encrypt the connection. Your macOS comes with `openssl`, a terminal command that lets you create certificates as follows:

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.crt -sha256 -days 365 -nodes -subj "/CN=localhost"
```

You'll see two files named `key.pem` and `cert.crt` in your current directory.

> **Tip**
>
> If you are working on multiple app projects you will use the same certificate and private key for all projects.
> Therefore, put the generated files in a central location for easy access.
