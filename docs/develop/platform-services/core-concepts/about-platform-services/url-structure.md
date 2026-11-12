## URL structure

The general URL structure of the Dynatrace platform API looks like this:

```text
<Root>/platform/<Service-Namespace>/<Service-Name>/<Version>/<Api-Resources>
```

- The environment-specific domain name `<Your-Environment-Id>.apps.dynatrace.com` defines the `<Root>` URL.
  - `<Environment-Id>` is the customer environment's unique identifier.
- `platform` is the mandatory root path for all platform services.
- `<Service-Name>` is the mandatory name of the platform service. A `<Service-Namespace>` may prepend the `<Service-Name>` to group platform services that belong together.
- `<Version>` is the current [platform service version](https://developer.dynatrace.com/develop/platform-services/core-concepts/api-versions.md) in this format: `v<Major-Version>`.
- `<Api-Resources>` is the path within the platform service.

### Example

![URL structure](https://developer.dynatrace.com/assets/images/url-8929eb4cc38b246bad37e749a6dbb5db.png)
