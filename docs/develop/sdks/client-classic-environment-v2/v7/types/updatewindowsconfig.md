### UpdateWindowsConfig

Basic information about all configured update windows

| Name               | Type                                  | Description                                                                                                                                                    |
| ------------------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| windows (required) | Array\<[UpdateWindow](#updatewindow)> | List of update windows when the OneAgent update can start. If there is no value and update should be performed, the update will start at earliest convenience. |
