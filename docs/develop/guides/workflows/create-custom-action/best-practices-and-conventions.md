## Best practices and conventions

The steps above show how to build a working action. This section covers the conventions that keep an action maintainable: how to structure it, where to put your integration logic, how to validate and time out external calls, and how to evolve the action without breaking existing workflows.

### Validate every input in the action

The AutomationEngine resolves the expressions in a task's input, but it does not validate the resolved values. It is the responsibility of the action itself to be the source of truth for input validation: validate every input your action receives before you use it (for example, with `zod`).

A workflow can be authored outside the Workflows UI, for example through the API or Terraform, so you must never rely on the widget to enforce a contract on the input configuration.

### The role of the action widget - an input helper only

The widget is a design-time helper for users, not a trust boundary. The action must validate all input itself — the widget can't enforce a contract on what values it receives.

Keep the following in mind when building the widget:

- Users often use expressions rather than static values, and workflows can be authored outside the Workflows UI entirely (for example, through the API or Terraform), so the widget is bypassed.
- Don't require a live connection to the target system for configuration. A connection field is often filled by an expression that can't be resolved at design time, so the widget must remain usable even when the remote system is unreachable.
- Don't replicate or compete with the target system's own UI. Focus on what the action needs.
- Use components from `@dynatrace/automation-action-components` so users can switch fields to expression mode.

### Safely evolve your action

Existing workflows are not migrated when you change an action, so an action's input and result form a contract with every workflow that already uses it. Make backwards-compatible changes only:

- **Inputs**—don't add new required inputs. Add new inputs as optional and apply a default in the action logic, so workflows created before the change keep working.
- **Results**—only add to the result. Renaming or removing a result property silently breaks downstream tasks that reference it, so keep the existing properties and add alongside them. Update the sample result whenever the shape changes.

> **Caution**
>
> A breaking change forces every existing workflow that uses the action to be updated by hand - until then the action and the workflows will fail.

### Two kinds of workflow actions

A custom action typically integrates one of two things:

- **A third-party service** reached over its HTTP API, such as Slack, Jira, or ServiceNow. The action resolves a connection into credentials and calls the remote API with `fetch`. All knowledge of that API is portable and independent of the Dynatrace platform.
- **A Dynatrace platform service** reached through an official TypeScript SDK client (`@dynatrace-sdk/client-*`), for example to run a DQL query or create a problem. Authentication flows from the workflow's actor context, so there's no third-party connection to resolve. Check the [SDK for TypeScript](https://developer.dynatrace.com/develop/sdks.md) to see whether a client exists for the service you want to call.

Both shapes share the same skeleton: validate the input, do the work, surface any failure with a clear message (see [End an action early](#end-an-action-early)), and log. They differ only in the "do the work" layer. A single action can also mix both, for example calling a platform service and a third-party API.

The **greeter** action in this guide is a third-party-style action. The conventions below apply to both shapes unless stated otherwise.

### Prefer `fetch` over custom HTTP client hierarchies

For a third-party action that calls only one to three endpoints, `fetch` together with `AbortSignal.timeout()` covers what you need. Avoid building elaborate client class hierarchies, such as custom encoders, generic call factories, or response parsers, around `fetch`. They add maintenance cost and make the action harder to pick up later. Document any API quirks in your project instead of encoding them in a class hierarchy.

### Runtime of action determines throughput

Don't rely on the full 120-second app function budget. Strive to complete as fast as possible — a target under 5 seconds is a good baseline. Faster actions allow workflows to run more concurrent executions.

Any call to an external system can hang. When you use `fetch`, always pass an `AbortSignal.timeout()` sized to the endpoint you call:

```ts skip-testing
const response = await fetch(url, {
  signal: AbortSignal.timeout(10_000),
});
```

Keep the timeout well under the app function's runtime budget, so your action can still handle the error, and log a useful message. See [Runtime limitations](https://developer.dynatrace.com/develop/guides/app-functions.md#runtime-limitations) for the app function time limit.

### Separate business logic from platform plumbing

Keep the code that knows the integrated API separate from the Dynatrace platform plumbing, that is, the connection, the action entry point, and the widget. A common convention is to place this integration logic in a `shared/api/` layer that the action imports.

For a third-party integration, this separation lets you:

- Run and iterate on the integration logic locally, without deploying the app.
- Unit-test it with no platform dependencies.
- Keep the action itself thin, so it stays simple to read and support.

For a platform-service action, the logic layer imports the SDK client, so it isn't free of platform dependencies. You mock the client in unit tests instead. You can still run it locally: every `@dynatrace-sdk/client-*` is also exported as a class that accepts a custom HTTP client, so you can point it at your environment during development.

### Actions are atomic building blocks

Users can place any action anywhere in a workflow graph, thus don't assume a specific trigger type, trigger configuration, or the presence of any preceding task.

Don't embed hidden input fields with hardcoded expression values. If your action needs access to workflow or execution context (for example, send Slack message wants to continue a Slack thread opened earlier in the same execution), use the utilities provided by `@dynatrace-sdk/automation-action-utils`.

### Action/Task testing in the UI

The widget runs only in the context of user interaction and cannot resolve expressions, so an action can't own the responsibility for single-task testing. On-demand task execution is handled by the Workflows app, not by the action.

### Connection access

Action executions run under the actor configured on the workflow, so connection resolution and app settings access happen in that user's context. Don't request or depend on the `app-settings:objects:admin` add-on permission for settings objects — use the standard settings access model. The admin permission is reserved for administrative tasks in the connection management UI, not for runtime use within an action.
