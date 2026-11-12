### JavaScriptMappingFileDto

| Name              | Type                                  | Description                                                            |
| ----------------- | ------------------------------------- | ---------------------------------------------------------------------- |
| fileName          | string                                | The name of the file.                                                  |
| fileType          | "MINIFIED" \| "SOURCE" \| "SOURCEMAP" | The type of the file.                                                  |
| minifiedJsFileUrl | string                                | The minified JavaScript file URL to which the mapping file belongs to. |
| numberOfFiles     | number                                | The number of files.                                                   |
| pinned            | boolean                               | Whether the file is pinned and therefore not automatically deleted.    |
| size              | number                                | The size of the file, in KB.                                           |
| uploadTimestamp   | number                                | The timestamp of the file upload, in UTC milliseconds.                 |
| zipped            | boolean                               | Whether several files are zipped into one file.                        |
