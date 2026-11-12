## Types

### AssetCount

| Name             | Type   |
| ---------------- | ------ |
| total (required) | number |

### Author

| Name            | Type   |
| --------------- | ------ |
| icon            | string |
| name (required) | string |
| salesEmail      | string |
| salesLink       | string |
| supportEmail    | string |
| supportLink     | string |

### Categories

| Name                  | Type                          |
| --------------------- | ----------------------------- |
| categories (required) | Array\<[Category](#category)> |

### Category

An item category in the Hub

| Name                | Type                          | Description                                        |
| ------------------- | ----------------------------- | -------------------------------------------------- |
| id (required)       | string                        | The category's ID                                  |
| itemIds (required)  | Array\<string>                | The IDs of the items associated with this category |
| page (required)     | [CategoryPage](#categorypage) |                                                    |
| subgroup (required) | string                        | Groups categories to related subpages              |

### CategoryPage

| Name                   | Type                                                | Description                                                |
| ---------------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| content (required)     | Array\<[CategoryPageContent](#categorypagecontent)> |                                                            |
| description (required) | string                                              | The customer facing description of this page               |
| shortTitle (required)  | string                                              | A shorter version of the customer facing title of the page |
| title (required)       | string                                              | The customer facing title of the page                      |

### CategoryPageContent

| Name                   | Type                                                                                      | Description                                           |
| ---------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| blocks                 | Array\<[CategoryPageContentBlock](#categorypagecontentblock)>                             | The blocks of the items associated with this category |
| contentType (required) | "section" \| "curated_content_block" \| "content_block_group" \| "browse_all_block" | The type of content                                   |
| description (required) | string                                                                                    | The customer facing description of the content        |
| itemIds                | Array\<string>                                                                            | The IDs of the items associated with this category    |
| title (required)       | string                                                                                    | The customer facing title of the content              |

### CategoryPageContentBlock

| Name             | Type   | Default |
| ---------------- | ------ | ------- |
| description      | string | `""`    |
| href (required)  | string |         |
| hrefText         | string |         |
| image (required) | string |         |
| title (required) | string |         |

### ConstraintViolation

Contains information about a constraint violation caused by invalid input.

| Name               | Type   | Description                                                    |
| ------------------ | ------ | -------------------------------------------------------------- |
| message (required) | string | The constraint violation description message                   |
| path               | string | The path of the parameter that caused the constraint violation |

### ContentCount

| Name      | Type                            |
| --------- | ------------------------------- |
| actions   | [AssetCount](#assetcount)       |
| documents | [DocumentCount](#documentcount) |
| settings  | [AssetCount](#assetcount)       |

### Dependency

| Name               | Type   | Description                                |
| ------------------ | ------ | ------------------------------------------ |
| name (required)    | string | The name of the required dependency        |
| version (required) | string | SemVer2 version of the required dependency |

### Detail

Meta data of the latest version of this item.

| Name                        | Type                                                      | Description                                                                   |
| --------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| author                      | [Author](#author)                                         |                                                                               |
| comingSoon (required)       | boolean                                                   |                                                                               |
| contentCount                | [ContentCount](#contentcount)                             |                                                                               |
| createdTime                 | Date                                                      | The time this Hub item was originally created.                                |
| currentRelease              | [Release](#release)                                       |                                                                               |
| description (required)      | string                                                    |                                                                               |
| detailSections (required)   | Array\<[DetailSection](#detailsection)>                   |                                                                               |
| hasDetailSection (required) | boolean                                                   | Whether the details of this item contain one or more detail content sections. |
| hubItemId                   | string                                                    | The Hub item id, aka. slug.                                                   |
| icon                        | string                                                    |                                                                               |
| id (required)               | string                                                    | The id is only unique within a specific type.                                 |
| keywords (required)         | Array\<string>                                            |                                                                               |
| links                       | Array\<[Link](#link)>                                     |                                                                               |
| name (required)             | string                                                    |                                                                               |
| relatedItems                | Array\<[Overview](#overview)>                             |                                                                               |
| releaseTime                 | Date                                                      | The time this latest version of the item was released.                        |
| resourceContext             | [ResourceContext](#resourcecontext)                       |                                                                               |
| type (required)             | "APP" \| "CLASSIC_APP" \| "EXTENSION_2" \| "TECHNOLOGY" |                                                                               |
| version                     | string                                                    | The latest version of this item.                                              |

### DetailSection

Can be either a Markdown or Gallery section. Only one of the respective properties is returned (`markdown`, or `gallery`).

| Name                | Type                                |
| ------------------- | ----------------------------------- |
| gallery             | [GallerySection](#gallerysection)   |
| markdown            | [MarkdownSection](#markdownsection) |
| sourceId (required) | string                              |

### DocumentCount

| Name             | Type                                      |
| ---------------- | ----------------------------------------- |
| total (required) | number                                    |
| types            | [DocumentCountTypes](#documentcounttypes) |

### DocumentCountTypes

**type**: Record\<string, number | undefined>

### Error

Standard error response

| Name               | Type                          | Description                    |
| ------------------ | ----------------------------- | ------------------------------ |
| code (required)    | number                        | The error code (HTTP response) |
| details            | [ErrorDetails](#errordetails) | Optional details of the error  |
| message (required) | string                        | The error code (HTTP response) |

### ErrorDetails

Optional details of the error

| Name                 | Type                                                | Description                                                                     |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------- |
| constraintViolations | Array\<[ConstraintViolation](#constraintviolation)> | A list of constraint violations of input parameters (path, query, request body) |

### ErrorEnvelope

| Name             | Type            | Description             |
| ---------------- | --------------- | ----------------------- |
| error (required) | [Error](#error) | Standard error response |

### ExtensionMetadata

| Name               | Type                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| extensionContents  | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)                    |
| featureSets        | Array\<string>                                                                                   |
| featureSetsDetails | Record\<string \| [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)> |

### GalleryImage

| Name           | Type                                                | Description                                  |
| -------------- | --------------------------------------------------- | -------------------------------------------- |
| alt            | string                                              | Descriptive text of what the image expresses |
| caption        | string                                              |                                              |
| resolutions    | [GalleryImageResolutions](#galleryimageresolutions) |                                              |
| src (required) | string                                              |                                              |
| title          | string                                              |                                              |

### GalleryImageResolutions

**type**: Record\<string, string | undefined>

### GallerySection

| Name              | Type                                  |
| ----------------- | ------------------------------------- |
| images (required) | Array\<[GalleryImage](#galleryimage)> |
| title (required)  | string                                |

### Link

| Name            | Type                                                           | Description                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId           | string                                                         |                                                                                                                                                                                                                                                |
| pageToken       | string                                                         |                                                                                                                                                                                                                                                |
| target          | string                                                         |                                                                                                                                                                                                                                                |
| type (required) | "DOCUMENTATION" \| "MARKETING" \| "ACTIVATION" \| "REPOSITORY" | Links can be of the following types: * `DOCUMENTATION`
   \- Technical documentation
* `MARKETING`
   \- Promotion material
* `ACTIVATION`
   \- Location within the product to configure the item
* `REPOSITORY`
   \- Source code repository |

### Manifest

| Name                    | Type                                                                          | Default |
| ----------------------- | ----------------------------------------------------------------------------- | ------- |
| actions                 | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) |         |
| contentCount            | [ContentCount](#contentcount)                                                 |         |
| csp                     | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) |         |
| dependencies (required) | Array\<[Dependency](#dependency)>                                             |         |
| documents               | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) |         |
| hidden (required)       | boolean                                                                       | `false` |
| intents                 | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) |         |
| pageTokens              | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) |         |
| scopes                  | Array\<[ManifestScope](#manifestscope)>                                       |         |
| settings                | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) |         |

### ManifestScope

| Name               | Type   |
| ------------------ | ------ |
| comment (required) | string |
| name (required)    | string |

### MarkdownSection

| Name                | Type   |
| ------------------- | ------ |
| markdown (required) | string |
| title (required)    | string |

Meta data of the latest version of this item.

| Name                        | Type                                                      | Description                                                                   |
| --------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| author                      | [Author](#author)                                         |                                                                               |
| comingSoon (required)       | boolean                                                   |                                                                               |
| contentCount                | [ContentCount](#contentcount)                             |                                                                               |
| createdTime                 | Date                                                      | The time this Hub item was originally created.                                |
| description (required)      | string                                                    |                                                                               |
| hasDetailSection (required) | boolean                                                   | Whether the details of this item contain one or more detail content sections. |
| hubItemId                   | string                                                    | The Hub item id, aka. slug.                                                   |
| icon                        | string                                                    |                                                                               |
| id (required)               | string                                                    | The id is only unique within a specific type.                                 |
| keywords (required)         | Array\<string>                                            |                                                                               |
| links                       | Array\<[Link](#link)>                                     |                                                                               |
| name (required)             | string                                                    |                                                                               |
| releaseTime                 | Date                                                      | The time this latest version of the item was released.                        |
| resourceContext             | [ResourceContext](#resourcecontext)                       |                                                                               |
| type (required)             | "APP" \| "CLASSIC_APP" \| "EXTENSION_2" \| "TECHNOLOGY" |                                                                               |
| version                     | string                                                    | The latest version of this item.                                              |

### OverviewsList

A list of item meta data. Per default contains only compatible items, but can be controlled using the onlyCompatible flag.

| Name             | Type                          |
| ---------------- | ----------------------------- |
| items (required) | Array\<[Overview](#overview)> |

### Release

| Name                       | Type                                        | Description                                                                                                     |
| -------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| compatible (required)      | "COMPATIBLE" \| "INCOMPATIBLE" \| "UNKNOWN" |                                                                                                                 |
| extensionMetadata          | [ExtensionMetadata](#extensionmetadata)     |                                                                                                                 |
| manifest                   | [Manifest](#manifest)                       |                                                                                                                 |
| publicationTime (required) | Date                                        |                                                                                                                 |
| releaseNotes               | string                                      | Markdown content describing this release.                                                                       |
| revocation                 | [Revocation](#revocation)                   | The existence of this object marks a release as being revoked. It contains information on why this is the case. |
| version (required)         | string                                      | A semantic versioning 2.0 conform version.                                                                      |

### ReleasesList

| Name                | Type                        |
| ------------------- | --------------------------- |
| releases (required) | Array\<[Release](#release)> |

### ResourceContext

| Name       | Type              |
| ---------- | ----------------- |
| operations | Array\<"install"> |

### Revocation

The existence of this object marks a release as being revoked. It contains information on why this is the case.

| Name              | Type                                                   |
| ----------------- | ------------------------------------------------------ |
| description       | string                                                 |
| reason (required) | "SECURITY_ISSUE" \| "FAULTY_RELEASE" \| "DEPRECATED" |
| severity          | "LOW" \| "MEDIUM" \| "HIGH"                            |
