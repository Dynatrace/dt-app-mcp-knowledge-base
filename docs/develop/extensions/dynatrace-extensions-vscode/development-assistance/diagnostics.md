## Diagnostics

Often, perfectly valid YAML still produces a manifest that causes issues when we upload the
extension to Dynatrace or later when it tries to run. Many of these situations can be caught early, and **Dynatrace Extensions** aims to bring these to light so you can fix them and reduce the number
of failed deployment attempts.

### How do custom diagnostics work?

On every edit of your extension manifest, the diagnostics suite will trigger an update of all diagnostic
items applicable to that file. Based on findings, relevant content is highlighted within the manifest, and
hovering over the highlight will provide more details about the issue.

Some issues may provide a **Quick fix** link as part of the hover information. If this is available, it will
trigger a content change of the document to resolve the highlighted issue.

Diagnostic severities:

- `Error` - these findings are highlighted in red and represent issues that would break your extension when deployed. The [Build command](https://developer.dynatrace.com/develop/extensions/dynatrace-extensions-vscode/commands.md#build) won't work if `Error` severity diagnostics are in your manifest.
- `Warning` - these findings are highlighted in yellow and represent issues that would not stop an extension from functioning but may still produce undesired behaviors.

### Currently implemented diagnostics

| Code   | Severity  | What does it mean?                                                                                                                                                   |
| ------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DED001 | `Error`   | Your extension doesn't have a name, which is mandatory.                                                                                                              |
| DED002 | `Error`   | Your extension's name needs to be less that 50 character. characters.                                                                                                |
| DED003 | `Error`   | Your extension's name is invalid. It should only contain lowercase letters, numbers, hyphens, underscores, or dots.                                                  |
| DED004 | `Error`   | Your extension's name needs to start with custom: but it doesn't.                                                                                                    |
| DED005 | `Warning` | Internal Dynatrace extension names shouldn't start with custom:.                                                                                                     |
| DED006 | `Warning` | Metrics of type count should have keys ending in **.count** or **\_count**.                                                                                          |
| DED007 | `Warning` | Metrics of type gauge shouldn't have keys ending in **.count** or **\_count**.                                                                                       |
| DED008 | `Error`   | You referenced this card key in a screen layout, but it doesn't have a definition.                                                                                   |
| DED009 | `Warning` | You defined this card, but you're not referencing it in the screen layout.                                                                                           |
| DED010 | `Warning` | There is no online data about this Object Identifier (OID). You may want to validate it.                                                                             |
| DED011 | `Error`   | This OID isn't readable. The access permissions ([MAX-ACCESS](https://learn.microsoft.com/en-us/windows/win32/wmisdk/access-and-max-access-clauses)) don't allow it. |
| DED012 | `Error`   | This OID returns a string, but you're using it as a metric value.                                                                                                    |
| DED013 | `Warning` | This OID returns a Counter, but you're using it as a Gauge metric.                                                                                                   |
| DED014 | `Warning` | This OID returns a Gauge, but you're using it as a Counter metric.                                                                                                   |
| DED015 | `Error`   | Invalid OID syntax. OID shouldn't start/end with '.' and may only contain dots and digits.                                                                           |
| DED016 | `Error`   | Invalid OID syntax. OIDs shouldn't end in '.0' when 'table' is set to 'true' in the subgroup.                                                                        |
| DED017 | `Error`   | Invalid OID syntax. OIDs needs to end in '.0' when 'table' is set to 'false' in the subgroup.                                                                        |
| DED018 | `Error`   | Online data lists this OID as static, but you're using it inside a 'table' subgroup.                                                                                 |
| DED019 | `Error`   | Online data maps this OID to table entries, but you're not using it inside a 'table' subgroup.                                                                       |

> **Note**
>
> The code itself doesn't mean anything; it just provides a unique identifier within all diagnostics that may come up
> in VS Code. We chose the **DED** prefix to stand for Dynatrace Extensions Diagnostic.
