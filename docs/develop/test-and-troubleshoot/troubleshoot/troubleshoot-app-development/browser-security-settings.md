## Browser security settings

Some of the browser security settings also interfere with app development. The following section describes the common issues with the solution for each browser.

### Microsoft Edge

#### Third-part cookies

Blocking third-party cookies breaks the SDK injection. It leads to an endless loop of `Uncaught (in promise) Error: No environmentUrl value provided` console errors and making the browser unresponsive.

**Solution**: Open the `edge://settings/content/cookies` page via address bar and disable the `Block third-party cookies` setting.

### Google Chrome

#### Third-part cookies

Blocking third-party cookies leads to `DOMException: Failed to read the 'sessionStorage' property from 'Window': Access is denied for this document` console error.

**Solution**: Open the `chrome://settings/cookies` page via address bar and disable the `Block third-party cookies` setting.

#### Connect to local network

Selecting **Block** on the popup asking to allow `Look for and connect to any device on your local network` leads to a `404 This application doesn't exist` error.

**Solution**: When you see this popup for the first time, select **Allow**.

If you've accidentally clicked on **Block** before:

- Enter `chrome://settings/content/all?searchSubpage=apps.dynatrace.com` in the address bar to access your Chrome settings page.
- Expand the entry for the URL of your tenant.
- Change the setting for **Local network access** to either **Allow** or **Ask**.

### Mozilla Firefox

#### Enhanced tracking protection

Enabling `Enhanced tracking protection` crashes the browser with `ResizeObserver loop completed with undelivered notifications` console error when Firefox developer tools are open.

**Solution**: Turn off the Enhanced tracking protection for the site. Look at [this article](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) to learn how to disable it per site.
