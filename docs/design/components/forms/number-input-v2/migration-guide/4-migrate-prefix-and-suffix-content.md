## 4. Migrate prefix and suffix content

`NumberInputV2` exposes `NumberInputV2.Prefix`, `NumberInputV2.Suffix`, and `NumberInputV2.Button` as compound components instead of as separate layout wrappers.

```diff
- <NumberInput value={value} onChange={setValue} />
+ <NumberInputV2 value={value} onChange={setValue}>
+   <NumberInputV2.Suffix>kg</NumberInputV2.Suffix>
+ </NumberInputV2>
```
