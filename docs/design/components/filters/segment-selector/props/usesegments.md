### useSegments

**`useSegments`**

```ts
export declare const useSegments: () => {
    segments: FilterSegment[];
    addSegment: (segment: FilterSegment) => Promise<false | undefined>;
    removeSegment: (id?: string | null) => void;
    removeAllSegments: () => void;
    setSegments: (segments: FilterSegment[], force?: boolean) => Promise<void>;
};
```
