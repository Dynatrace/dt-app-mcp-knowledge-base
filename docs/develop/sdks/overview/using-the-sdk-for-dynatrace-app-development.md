## Using the SDK for Dynatrace app development

### Generic layer

This layer of the SDK can be used in all TypeScript apps, providing a use case-based approach for Dynatrace app developers and for writing scripts in Dynatrace Workflows and Dynatrace Notebooks.

Here is an example of how to format a number to a human-readable string in a Dynatrace function:

```tsx
// highlight-next-line
import { format, units } from '@dynatrace-sdk/units';

export default async function () {
  const value = 1200;
  // highlight-start
  const displayValue = format(value, {
    input: units.data.byte,
  });
  // highlight-end
  return displayValue; // returns "1.17 KiB"
}
```

### Low-level clients

Client packages give you direct access to Dynatrace platform services. These reflect the services API and provide you with granular use of the services. The requests have authentication with the user's permissions on the respective environment.

The following example loads the connected ActiveGates matching network zone `lab`:

```tsx
// highlight-next-line
import { activeGatesClient } from '@dynatrace-sdk/client-classic-environment-v2';

export default async function () {
  // highlight-start
  const activeGates = await activeGatesClient.getAllActiveGates({
    networkZone: 'lab',
  });
  // highlight-end
  // …
}
```

> **Note**
>
> Your app needs to declare scopes for the services it uses to improve security. Please find the necessary scope in the reference for each client.
