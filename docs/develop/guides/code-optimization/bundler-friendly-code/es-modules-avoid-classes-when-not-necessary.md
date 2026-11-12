## ES Modules: Avoid classes when not necessary

Classes are not tree-shakeable. If you use a class, even if only for a single method, you'll end up with the entire class in your file. Sometimes, you don't need classes at all. The following code is inspired by a real shared module that is imported by many packages:

```ts
// Environment.ts
export default class Environment {
  private static variableList: string[] = [];
  static variables(): string[] {
    /* ... */
  }
  static setVariable(key: string, value: any): void {
    /* ... */
  }
  static getValue(key: string): unknown {
    /* ... */
  }
}

// Usage in another file
import * as Environment from './Environment';
console.log(Environment.variables());
```

Even if you only use a single method, you include the entire `Environment` class. A similar module with functions does the same thing, but is tree-shakeable:

```ts
const variableList: string[] = [];

export function variables(): string[] {
  /* ... */
}
export function setVariable(key: string, value: any): void {
  /* ... */
}
export function getValue(key: string): unknown {
  /* ... */
}

// Usage in another file
import * as Environment from './Environment';
console.log(Environment.variables());
```

A simple template literal can replace a full DQL builder class. If you use a DQL builder even once, you include the whole class. Replacing it with a template literal eliminates **12–15 KB** — around **10%** of total function size in at least one real case. That's significant in serverless execution.

```ts
const query = `fetch dt.davis.events, from: ${from}, to: ${to}
| filter contains(affected_entity_ids, "${monitorId}")`;
```
