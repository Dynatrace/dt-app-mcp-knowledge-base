### ChromiumStartupFlagsDto

Chromium startup flags of a Browser Monitor.

| Name                          | Type                                                                                      | Description                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| autoplay-policy               | null \| "no-user-gesture-required" \| "document-user-activation-required"                 | autoplay-policy type.                                                                 |
| disable-features              | null \| [ChromiumStartupFlagsDtoDisableFeatures](#chromiumstartupflagsdtodisablefeatures) | disable-features map                                                                  |
| disable-site-isolation-trials | null \| boolean                                                                           | disable-site-isolation-trials flag.                                                   |
| disable-web-security          | null \| boolean                                                                           | disable-web-security flag. If no value is passed, it will be set to false by default. |
| host-resolver-rules           | null \| string                                                                            | host-resolver-rules.                                                                  |
| ignore-certificate-errors     | null \| boolean                                                                           | ignore-certificate-errors flag.                                                       |
| ssl-version-max               | null \| string                                                                            | ssl-version-max.                                                                      |
| ssl-version-min               | null \| string                                                                            | ssl-version-min.                                                                      |
| test-type                     | null \| boolean                                                                           | test-type flag.                                                                       |
