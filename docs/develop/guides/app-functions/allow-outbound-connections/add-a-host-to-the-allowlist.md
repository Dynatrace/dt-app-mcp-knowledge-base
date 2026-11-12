## Add a host to the allowlist

To perform a call to an external host, you need to allow requests to this host.
Open the `Settings` app from the Dynatrace Launcher on your environment and select `General` from the side menu. You will find `External requests` in the `Environment management` group.

> **Note**
>
> After adding or modifying the allowed hosts, the change might take up to 10 seconds.

You can configure allowed hosts by IP address or DNS name. DNS names with at least three segments can start with wildcards.

Examples for allowed entries:

```text
123.123.123.123
www.example.com
api.example.com
*.api.example.com
*.example.com
```

Examples for invalid entries:

```text
http://123.123.123.123       # Protocol must not be part of the entry
https://example.com          # Protocol must not be part of the entry
example.com/api              # Only the domain is allowed
*.com                        # Wildcards are only allowed with at least three segments
123.*.123.123                # Wildcards are not allowed for IP addresses
*api.example.com             # Wildcards must match a whole segment
api.*.example.com            # Wildcards must be at the beginning of the entry
```

You can also turn off allowlist enforcement to allow connections to any external host.

> **Caution**
>
> Disabling the allowlist enforcement permits connections to any external host, which can pose significant security risks.
