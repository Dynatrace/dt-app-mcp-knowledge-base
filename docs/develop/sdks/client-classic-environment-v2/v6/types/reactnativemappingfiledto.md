### ReactNativeMappingFileDto

A list of React Native mapping files.

| Name          | Type                                                                    | Description                                                     |
| ------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
| appId         | string                                                                  | The ID of the application the mapping file belongs to.          |
| appInternalId | string                                                                  | The internal ID of the application the mapping file belongs to. |
| bundleName    | string                                                                  | The name of the bundle.                                         |
| bundleVersion | string                                                                  | The version of the bundle.                                      |
| fileName      | string                                                                  | The name of the mapping file.                                   |
| metadata      | [ReactNativeMappingFileMetadataDto](#reactnativemappingfilemetadatadto) |                                                                 |
| platform      | "ANDROID" \| "IOS"                                                      | The platform (operating system) the mapping file belongs to.    |
