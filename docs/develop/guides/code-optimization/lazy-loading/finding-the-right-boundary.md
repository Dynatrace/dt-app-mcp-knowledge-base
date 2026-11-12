## Finding the right boundary

Not every component should be lazy loaded. There's overhead involved: a new chunk, a network request, a `Suspense` boundary, and a fallback UI. The question is whether the code you're deferring is worth that trade-off.

On top of that, splitting isn't always one file per lazy import. If the lazy-loaded module shares dependencies with other parts of your app—utility libraries, charting packages, form validation logic—the bundler may extract those shared dependencies into their own additional files to avoid duplicating code. A single `lazy()` call can therefore result in more than one new file: the chunk for your component, plus one or more extra files for anything it shares with the rest of the app.

The browser then has to load your lazy chunk, discover it needs those additional shared files, and fetch those too before the component can render. The bundler mitigates this by hinting to the browser upfront which files it will need, so they can be fetched in parallel rather than one after another, but the risk remains. If you split at too fine a granularity, you can end up with many tiny files that the browser has to resolve before anything renders, which can be slower than not splitting at all.

### Good candidates

| Pattern                             | Why                                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Pages / Routes**                  | Natural navigation boundary. Users expect a brief transition. High impact because each page pulls in its own dependency tree. |
| **Secondary tabs**                  | Hidden behind interaction. Often heavy with dedicated data fetching and visualizations.                                       |
| **Modals and drawers**              | Not rendered until triggered. Can contain complex forms or detail views.                                                      |
| **Settings / Configuration panels** | Rarely visited. Often includes form libraries and validation logic.                                                           |
| **Heavy visualization components**  | Charting, graphing, or topology views that import large rendering libraries.                                                  |

### Poor candidates

| Pattern                                  | Why                                                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Small, shared UI components**          | Buttons, labels, icons — the overhead of a lazy boundary far outweighs the bytes saved.       |
| **Components visible on initial render** | Lazy loading them delays LCP. You're making the first paint worse, not better.                |
| **Deeply nested internal components**    | Splitting at too granular a level creates a waterfall of chunk requests.                      |
| **Components used on every page**        | They'll be loaded on the first navigation regardless. Shared code belongs in the main bundle. |

### Rule of thumb

If you're deferring less than \~20-30 KB of uncompressed JavaScript, the overhead of a separate chunk probably isn't worth it. Focus on boundaries where you're deferring entire feature surfaces with their own dependency subtrees.

### Tips for keeping splits healthy

- **Validate the actual bundle output before shipping**—run `npx dt-app build` and look at the files produced in the `dist/` folder. You can also use the [`rollup-plugin-visualizer`](https://github.com/btd/rollup-plugin-visualizer) for a visual map of your bundle. Look for unexpectedly many small files or suspiciously large shared files. These are signals that your split boundaries may need adjusting.

- **Keep shared low-level utilities in the main bundle**—small utility modules used everywhere (date formatting, type guards, constants) are better left in the main bundle than deferred. The overhead of an extra network round-trip for a tiny shared file outweighs the savings from splitting it out.

- **Avoid deeply nested lazy boundaries**—a lazy component that itself lazily renders another component creates a chain: the browser loads the first chunk, mounts it, then triggers the load of the second. Flatten your lazy boundaries so that all the chunks a given page or view needs are kicked off at the same time, not one after another.

- **Check the Network tab after a production build**—open the browser Network tab filtered to JavaScript files and look at the load timing. If you see files loading strictly one after another rather than in parallel, it's a sign that your chunk boundaries create a chain. Compare the load order against the component tree to identify which boundary causes the cascade.
