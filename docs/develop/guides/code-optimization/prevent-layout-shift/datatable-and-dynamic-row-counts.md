## DataTable and dynamic row counts

Tables are the most layout-shift-prone component in data-heavy apps. A `DataTable` that goes from 0 rows to 50 rows shifts everything below it dramatically.

### Reserve space for the table container

Wrap your table in a container with a fixed or minimum height. The exact value depends on your expected row count and row height:

```tsx
<div style={{ minHeight: 600 }}>
  <DataTable data={data?.records ?? []} columns={columns} />
</div>
```

If the table renders fewer rows than expected, the container holds the space. If it renders more, the container grows naturally—which is fine because content only shifts downward beyond the fold, and that has minimal CLS impact since the user isn't looking there.

### Pagination vs. infinite scroll

**Pagination is CLS-friendly.** A paginated table has a predictable, fixed height per page. The container height doesn't change when the user navigates between pages—the content swaps in place.

**Infinite scroll can cause CLS** if new rows are appended above the fold or if the scroll container isn't properly sized. If you use infinite scroll, make sure:

- New rows are appended below the current viewport (which is the natural behavior).
- The scroll container has a fixed height with `overflow: auto`—content grows inside the container, not outside it.

```tsx
// ✅ Fixed-height scroll container—no external layout shift
<div style={{ height: 600, overflow: 'auto' }}>
  <DataTable data={allLoadedRecords} columns={columns} />
</div>
```

### Empty states

When a query returns zero results, don't collapse the table container to zero height. Show an empty state placeholder that matches the table's expected dimensions:

```tsx
<div style={{ minHeight: 400 }}>
  {data?.records?.length === 0 ? (
    <EmptyState message="No hosts match the current filter." />
  ) : (
    <DataTable data={data.records} columns={columns} />
  )}
</div>
```
