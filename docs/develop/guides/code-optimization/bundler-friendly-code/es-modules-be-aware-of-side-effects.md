## ES Modules: Be aware of side effects

Here's a real example of an accidental side effect. Consider this function:

```ts
import { identifier } from './dependency.ts';

export default function main() {
  return identifier;
}
```

It just loads a string from a dependency. The dependency looks like this:

```ts testable
import z from 'zod';

export const identifier = 'yolo';

const davisValueSchema = z.object({
  name: z.string(),
  values: z.number().array(),
});

type DavisValue = z.infer<typeof davisValueSchema>;

export const isDavisValue = (record: unknown): record is DavisValue => davisValueSchema.safeParse(record).success;
```

Tree-shaking should only include the string from line 2, but it will actually include **all of Zod**. The `davisValueSchema` on line 4 executes within the module scope, making it a **side effect**. Tree-shaking can't tell whether that schema creation matters for your app's functionality — it only knows the code runs at module load time, so it pulls in everything required to run it.

> **Tip**
>
> Splitting code into separate, focused files solves this. Keep your modules small and side-effect-free.
