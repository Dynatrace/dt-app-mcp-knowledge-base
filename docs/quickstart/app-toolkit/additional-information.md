## Additional information

### Supported file types

App functions cannot access the file system. The only file types that can be imported are: `.js`, `.ts`, [.json](https://esbuild.github.io/content-types/#json), and [.txt](https://esbuild.github.io/content-types/#text).

### Logs

Toolkit logs are stored in the `.dt-app/logs` directory within your app workspace.

### Migrating from v0.x to v1.x

The default `sourceRoot` is now set to `./`, and all UI-related files are organized under the `./ui` folder. To customize the `sourceRoot`, refer to the [`build.sourceRoot` option](#build-options).&#x20;

- **Move UI files to `./ui`**

  **v0.x structure:**

  ```text
    my-first-app/
    ├── src/
    │   ├── <UI files and folders>
    │   └── main.tsx
    ├── app.config.json
    └── tsconfig.json
  ```

  **v1.x structure:**

  ```diff
    my-first-app/
  - ├── src/
  - │   ├── <UI files and folders>
  - │   └── main.tsx
  + ├── ui/
  + │   ├── <UI files and folders>
  + │   ├── main.tsx
  + │   └── tsconfig.json
    ├── app.config.json
  - └── tsconfig.json
  ```

- **Special handling for `app.config.ts/.cts`**

  If you use `app.config.json`, no changes are required.
  For configuration files with a `.ts` or `.cts` suffix, a default `tsconfig.json` is used from the `.dt-app` folder:

  ```text
    my-first-app/
    ├── ui/
    │   └── tsconfig.json // Moved here during v0.x to v1.x migration
    └── app.config.ts
  ```

  To customize TypeScript settings, place a new `tsconfig.json` next to `app.config.ts`:

  ```diff
    my-first-app/
    ├── ui/
    │   └── tsconfig.json // Moved here during v0.x to v1.x migration
    ├── app.config.ts
  + └── tsconfig.json
  ```

- **Documents moved to `sourceRoot`**

  **v0.x:**

  ```text
    my-first-app/
    └── src/documents/
  ```

  **v1.x (with default `sourceRoot`):**

  ```diff
    my-first-app/
  - ├── src/documents/
  + └── documents/
  ```

- **Removed build option `--prod`**

  In v1.0, the `dt-app build` command performs a production build by default.
