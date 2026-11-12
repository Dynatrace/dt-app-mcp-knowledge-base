## SDK

App developers typically don't directly interact with the platform service APIs and instead use the [Dynatrace SDK for TypeScript](contents/docs/develop/sdks/index.md).
We build a Dynatrace SDK package to match a certain platform service API version exactly. The package's metadata documents the exact API version that the package represents.

All platform service SDK packages follow this naming schema:

```text
client-<Service-Namespace>-<Service-Name>-v<Version>
```

`<Service-Name>` and `<Service-Namespace>` correspond with the URL structure of the platform service that the package represents.
`<Version>` is the API version and is only set if more than one major version of the same service is available.

> **Note**
>
> The API version isn't the same as the package build version. Developers might rebuild a package without changing the API version it represents (for example, to include bug fixes or other improvements in
> the SDK implementation without affecting the API it represents).

### Example

![SDK naming](https://developer.dynatrace.com/assets/images/sdk-1056ab155ef87cafa3574f7ed20ccbd1.png)
