## Intents as public APIs

Intents behave like public APIs. An app's intent types define its **public contract**. Consuming apps can rely on a specific intent type always accepting the same payload shape.

- Intent types have owners, just like API owners own API types.
- The intent type name and its required properties form a stable interface.
- Breaking changes to an intent's required properties are breaking API changes and require a deprecation process to phase out safely.
