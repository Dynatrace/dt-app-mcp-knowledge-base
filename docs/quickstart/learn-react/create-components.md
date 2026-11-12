## Create components

Creating a component is as easy as creating a JavaScript function that returns some markup. Take a look at the following example:

```tsx skip-testing
function MyComponent() {
  return <span>My Fancy Component</span>;
}
```

You have a function named `MyComponent` that returns the `span` element.

### Render components

To render your components, you create a React root using `createRoot` by passing the DOM container. This React root is then used to render React elements into the DOM with the `render` function, as shown:

```tsx skip-testing
// highlight-start
import { createRoot } from 'react-dom/client';
// highlight-end

function MyComponent() {
  return <span>My Fancy Component</span>;
}

// highlight-start
const domRoot = document.getElementById('root');
const reactRoot = createRoot(domRoot);

reactRoot.render(<MyComponent />);
// highlight-end
```
