## CodeSnippet.Download

`CodeSnippet` slot definition for the "Download" action.

**`CodeSnippetDownloadProps`**

| Prop         | Type         | Default                                | Description                                                                                                                                                                                        |
| ------------ | ------------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileName`   | `string`     | `'code-snippet.\<derived extension\>'` | Name of the downloaded file. If no extension is provided, it is derived from the \`language\` prop. Both the filename and extension are sanitized to keep only letters, digits, \`-\`, and \`\_\`. |
| `onDownload` | `() => void` |                                        | Callback fired when the download action is triggered.                                                                                                                                              |
