## Troubleshoot common problems

### No matching app

Nothing appears in the **Open with...** dialog. The AppShell found no installed app whose intent declarations match the payload properties.

Check the following:

1. **Is the target app installed?**—the app must be installed in the environment. Check the Hub.
2. **Do the required properties match?**—the target app's intent declaration must have `required: true` for at least one property that the source app includes in the payload. Open the Intent Explorer and compare.
3. **Is the property name exact?**—property names are case-sensitive. `dt.entity.Host` is not `dt.entity.host`.
4. **Is the schema type correct?**—if the target declares `"schema": { "type": "string" }` but the source sends an object, the match fails.

### App matches unintended payloads

Your app's intent declaration is too broad, so it matches payloads you didn't intend.

Check the following:

1. **Are your required properties specific enough?**—if your intent only requires `dt.query`, which is a very common property, your app matches almost every intent that includes a query. Add more required properties to narrow the match.
2. **Is this a self-intent?**—your app may appear in its own **Open with...** standalone dialog when you send an intent with properties your own app also handles. This is expected behavior. Use `keyProperties` in `sendIntent()` to narrow matching.

### Intent opens the wrong app

When using recommended intents, the `recommendedAppId` or `recommendedIntentId` may be wrong.

Check the following:

1. **Verify the recommended intent mapping**—look up the correct app and intent ID for your resource type in the recommended intents list.
2. **Fallback behavior**—if the `recommendedAppId` does not exist or cannot handle the payload, the AppShell falls back to the **Open with...** dialog. This is by design, not a bug.

### Target app receives incomplete properties

The AppShell strips payload properties that the target app does not declare in its intent configuration.

Check the following:

1. **Declare all properties you need**—in your `app.config.json`, every property your app needs to read must be listed in the intent's `properties` object. Undeclared properties are silently removed.
2. **Use `lastIntent` on the target side** to see the full payload as received.

### Add-on overlay doesn't open

The intent opened the target app in a new page instead of an overlay.

Check the following:

1. **Is `addonMode: "overlay"` set?**—the target app's intent declaration in the `app.config.json` file must include `"addonMode": "overlay"` for the intent to render as an add-on. You can verify this in the Intent Explorer's **Intent Properties** panel.
2. **Is the add-on triggered from within another add-on?**—currently, when an add-on triggers another add-on intent, the calling add-on closes and the new one opens. This is a known limitation. The calling context is lost.

### Intent payload is too large

This was a known issue where the AppShell encoded intent payloads as URL query arguments, and very large payloads caused rendering errors. This has been fixed.

If you still encounter payload size issues, keep payloads concise as a best practice: pass identifiers (entity IDs, query strings) rather than large data objects. If you need to share a large dataset, pass a reference (for example, a document ID) and let the target app fetch the data.
