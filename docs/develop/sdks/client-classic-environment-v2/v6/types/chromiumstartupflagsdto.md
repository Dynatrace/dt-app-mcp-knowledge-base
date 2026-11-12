### ChromiumStartupFlagsDto

Chromium startup flags of a Browser Monitor.

| Name                          | Type                                                                              | Description                                                                           |
| ----------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| autoplay-policy               | "no-user-gesture-required" \| "document-user-activation-required"                 | autoplay-policy type.                                                                 |
| disable-features              | [ChromiumStartupFlagsDtoDisableFeatures](#chromiumstartupflagsdtodisablefeatures) | disable-features map                                                                  |
| disable-site-isolation-trials | boolean                                                                           | disable-site-isolation-trials flag.                                                   |
| disable-web-security          | boolean                                                                           | disable-web-security flag. If no value is passed, it will be set to false by default. |
| host-resolver-rules           | string                                                                            | host-resolver-rules.                                                                  |
| ignore-certificate-errors     | boolean                                                                           | ignore-certificate-errors flag.                                                       |
| ssl-version-max               | string                                                                            | ssl-version-max.                                                                      |
| ssl-version-min               | string                                                                            | ssl-version-min.                                                                      |
| test-type                     | boolean                                                                           | test-type flag.                                                                       |
