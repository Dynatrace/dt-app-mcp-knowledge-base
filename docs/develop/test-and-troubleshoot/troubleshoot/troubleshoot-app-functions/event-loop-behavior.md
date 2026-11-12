## Event loop behavior

The behavior of deployed Dynatrace app functions differs from that of other JavaScript runtimes like Bun or Deno. Deployed Dynatrace app functions always wait for the JavaScript event loop to finish. For example, you might expect your function invocation to finish immediately rather than waiting for five seconds. This isn't the case, though. The function runs until the timeout finishes.

```ts testable
export default function () {
  setTimeout(() => {
    console.log('Timer completed.');
  }, 5000);
}
```

`Promises` that never resolve or reject can behave in a similar way. You might encounter issues with third-party packages that do work in the background if those background tasks aren't gracefully shut down.
In such cases, your Dynatrace app function will appear stuck and eventually run into a timeout error if the event loop doesn't terminate.
