## Presets

As a starting point, we have the presets [`config:best-practices`](https://docs.renovatebot.com/presets-config/#configbest-practices) and [`config:js-app`](https://docs.renovatebot.com/presets-config/#configjs-app) for a general, ecosystem-agnostic set of dependency management rules. Among other configurations, `config:best-practices` includes [`security:minimumReleaseAgeNpm`](https://docs.renovatebot.com/presets-security/#securityminimumreleaseagenpm) to make sure the packages we update have been published for at least three days, for the sake of security and stability.

```json title="renovate.json"
{
  "extends": ["config:best-practices", "config:js-app"]
}
```
