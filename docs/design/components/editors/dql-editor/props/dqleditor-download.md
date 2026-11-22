## DQLEditor.Download

`DQLEditor` slot definition for the "Download" action.

**`EditorDownloadProps`**

| Prop         | Type         | Default | Description                                                                                                                                                                                                                                  |
| ------------ | ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileName`   | `string`     |         | Name of the downloaded file. If no extension is provided, it is derived from the editor. Both the filename and extension are sanitized to keep only letters, digits, \`-\`, and \`\_\`. If omitted, the editor provides a default file name. |
| `onDownload` | `() => void` |         | Callback fired when the download action is triggered.                                                                                                                                                                                        |
