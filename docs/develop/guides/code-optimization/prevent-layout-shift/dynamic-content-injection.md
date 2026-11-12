## Dynamic content injection

Toasts, banners, and inline alerts that appear asynchronously can cause layout shift if they're inserted into document flow and push existing content down.

### Toasts and notifications

Toasts should render in a **fixed-position overlay**, never in document flow. Strato's `Toast` and notification components already do this—they render in a portal at a fixed position on the page. If you're building custom notifications, follow the same pattern:

```tsx
// ❌ Bad: Banner inserted at top of page, pushes everything down
<div>
  {showBanner && <MyAppBanner message="Deployment complete" />}
  <MyAppContent />
</div>
```

```tsx
// ✅ Good: Banner has reserved space, no shift when it appears
<div>
  <div style={{ minHeight: 48 }}>{showBanner && <MyAppBanner message="Deployment complete" />}</div>
  <MyAppContent />
</div>
```

Or better—use a fixed-position overlay that floats above content:

```tsx
// ✅ Best: Overlay doesn't affect document flow at all
{
  showBanner && (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: Elevations.Overlay }}>
      <MyAppBanner message="Deployment complete" />
    </div>
  );
}
<MyAppContent />;
```

### Inline validation and error messages

Form validation messages that appear below inputs push subsequent fields down. Reserve space for them:

```tsx
// ❌ Bad: Error message appears and shifts the next field
<TextInput value={name} />;
{
  error && <FormFieldMessages.Item variant="error">{error}</FormFieldMessages.Item>;
}
<TextInput value={email} />;
```

```tsx
// ✅ Good: Space is always reserved for the error message
<TextInput value={name} />
<div style={{ minHeight: 24 }}>
  {error && <FormFieldMessages.Item variant="error">{error}</FormFieldMessages.Item>}
</div>
<TextInput value={email} />
```
