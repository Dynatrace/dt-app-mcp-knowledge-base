## Example: Share code between app functions

Let's imagine you have a function `validateStringInput`, checking if the payload sent to your function is a `String` as you would expect.
As this functionality is needed in multiple app functions, it can be re-used in numerous of your app functions.
This example shows two example functions: `getAdress.ts` and `getZipCode.ts`. In both functions, you have to validate that your input is a string.

First, you need to export the `validateStringInput` function within function `getAdress.ts`:

```ts title="api/getAdress.function.ts"
export function validateStringInput(payload: unknown) {
  if (typeof payload === 'string' && payload != '') {
    return;
  }
  throw new Error(`Input is not a valid string!`);
}

export default async function (zipCode: string): Promise<unknown> {
  validateStringInput(zipCode);
  const city = fetch('https://api.getmyadress.com/api/zipCode/?zipCode=' + zipCode).then((res) => res.json());
  return city;
}
```

Now you can import and use that function in your app function `getZipCode.ts` like this:

```ts title="api/getZipCode.function.ts" untestable
import { validateStringInput } from './getAdress';

export default async function (city: string) {
  validateStringInput(city);
  const zipCode = fetch('https://api.getmyadress.com/api/city/?city=' + city).then(
    (res) => res.json() as Promise<unknown>,
  );
  return zipCode;
}
```

By importing functions like shown above, you can easily re-use functionality between your app functions.
