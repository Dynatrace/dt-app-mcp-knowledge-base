## Configurable CSP rule exceptions

Because of security restrictions, you can't configure every available CSP rule for your app. You can extend the following directives:

| **Name**     | **Purpose**                                         | **Allowed values**                                                                                           |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `font-src`   | Applying custom fonts to the app.                   | - `https://my.domain.com`
   (only https is allowed, no trailing slash)
- `'data:'`
- `'sha*-*'`             |
| `img-src`    | Loading custom images from outside of the platform  | * `https://my.domain.com`
   (only https is allowed, no trailing slash)
* `'data:'`
* `'blob:'`
* `'sha*-*'` |
| `media-src`  | Loading media files (videos, audio)                 | - `https://my.domain.com`
   (only https is allowed, no trailing slash)
- `'sha*-*'`                         |
| `script-src` | Loading custom scripts from outside of the platform | * `https://my.domain.com`
   (only https is allowed, no trailing slash)
* `'sha*-*'`                         |
| `style-src`  | Loading custom styles from outside of the platform  | - `https://my.domain.com`
   (only https is allowed, no trailing slash)
- `'unsafe-inline'`
- `'sha*-*'`     |
