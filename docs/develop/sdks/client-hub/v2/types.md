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

| Name                | Type                          | Description                                                                                                                                          |
| ------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| id (required)       | string                        | The category's ID<br /><br />**Example:** `home`                                                                                                     |
| itemIds (required)  | Array\<string>                | The IDs of the items associated with this category<br /><br />**Example:** `["dynatrace.hub","com.dynatrace.extension.active-directory","oneagent"]` |
| page (required)     | [CategoryPage](#categorypage) |                                                                                                                                                      |
| subgroup (required) | string                        | Groups categories to related subpages<br /><br />**Example:** `platform-group-1`                                                                     |

### CategoryPage

| Name                   | Type                                                | Description                                                                                                                                                              |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| content (required)     | Array\<[CategoryPageContent](#categorypagecontent)> |                                                                                                                                                                          |
| description (required) | string                                              | The customer facing description of this page<br /><br />**Example:** `In Dynatrace Hub, you'll find hundreds of technologies to tame digital complexity and get more...` |
| shortTitle (required)  | string                                              | A shorter version of the customer facing title of the page<br /><br />**Example:** `Hub home`                                                                            |
| title (required)       | string                                              | The customer facing title of the page<br /><br />**Example:** `Extend Dynatrace, empower your team`                                                                      |

### CategoryPageContent

| Name                   | Type                                                                                      | Description                                                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| blocks                 | Array\<[CategoryPageContentBlock](#categorypagecontentblock)>                             | The blocks of the items associated with this category                                                                                                |
| contentType (required) | "section" \| "curated_content_block" \| "content_block_group" \| "browse_all_block" | The type of content                                                                                                                                  |
| description (required) | string                                                                                    | The customer facing description of the content<br /><br />**Example:** `Stay up-to-date with what's new in Dynatrace.`                               |
| itemIds                | Array\<string>                                                                            | The IDs of the items associated with this category<br /><br />**Example:** `["dynatrace.hub","com.dynatrace.extension.active-directory","oneagent"]` |
| title (required)       | string                                                                                    | The customer facing title of the content<br /><br />**Example:** `What's new`                                                                        |

### CategoryPageContentBlock

| Name             | Type   | Default |
| ---------------- | ------ | ------- |
| description      | string | ``      |
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

| Name               | Type   | Description                                                                    |
| ------------------ | ------ | ------------------------------------------------------------------------------ |
| name (required)    | string | The name of the required dependency<br /><br />**Example:** `/platform/hub/v1` |
| version (required) | string | SemVer2 version of the required dependency<br /><br />**Example:** `1.2.3`     |

### Detail

Meta data of the latest version of this item.

| Name                        | Type                                                      | Description                                                                                                                                |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| author                      | [Author](#author)                                         |                                                                                                                                            |
| comingSoon (required)       | boolean                                                   |                                                                                                                                            |
| contentCount                | [ContentCount](#contentcount)                             |                                                                                                                                            |
| createdTime                 | Date                                                      | The time this Hub item was originally created.<br /><br />**Example:** `2023-04-25T12:00:00Z`                                              |
| currentRelease              | [Release](#release)                                       |                                                                                                                                            |
| description (required)      | string                                                    | **Example:** `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.` |
| detailSections (required)   | Array\<[DetailSection](#detailsection)>                   |                                                                                                                                            |
| hasDetailSection (required) | boolean                                                   | Whether the details of this item contain one or more detail content sections.                                                              |
| hubItemId                   | string                                                    | The Hub item id, aka. slug.<br /><br />**Example:** `example`                                                                              |
| icon                        | string                                                    | **Example:** `https://dt-cdn.net/images/techn-icon-oneagent-4ea8f5d12c.svg`                                                                |
| id (required)               | string                                                    | The id is only unique within a specific type.<br /><br />**Example:** `dynatrace.example`                                                  |
| keywords (required)         | Array\<string>                                            | **Example:** `["cloud","k8s"]`                                                                                                             |
| links                       | Array\<[Link](#link)>                                     |                                                                                                                                            |
| name (required)             | string                                                    | **Example:** `Example App`                                                                                                                 |
| relatedItems                | Array\<[Overview](#overview)>                             |                                                                                                                                            |
| releaseTime                 | Date                                                      | The time this latest version of the item was released.<br /><br />**Example:** `2023-04-25T12:00:00Z`                                      |
| resourceContext             | [ResourceContext](#resourcecontext)                       |                                                                                                                                            |
| type (required)             | "APP" \| "CLASSIC_APP" \| "EXTENSION_2" \| "TECHNOLOGY" |                                                                                                                                            |
| version                     | string                                                    | The latest version of this item.<br /><br />**Example:** `2.3.4`                                                                           |

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

**type**: Record\<string, number>

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

**type**: Record\<string, string>

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

| Name                        | Type                                                      | Description                                                                                                                                |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| author                      | [Author](#author)                                         |                                                                                                                                            |
| comingSoon (required)       | boolean                                                   |                                                                                                                                            |
| contentCount                | [ContentCount](#contentcount)                             |                                                                                                                                            |
| createdTime                 | Date                                                      | The time this Hub item was originally created.<br /><br />**Example:** `2023-04-25T12:00:00Z`                                              |
| description (required)      | string                                                    | **Example:** `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.` |
| hasDetailSection (required) | boolean                                                   | Whether the details of this item contain one or more detail content sections.                                                              |
| hubItemId                   | string                                                    | The Hub item id, aka. slug.<br /><br />**Example:** `example`                                                                              |
| icon                        | string                                                    | **Example:** `https://dt-cdn.net/images/techn-icon-oneagent-4ea8f5d12c.svg`                                                                |
| id (required)               | string                                                    | The id is only unique within a specific type.<br /><br />**Example:** `dynatrace.example`                                                  |
| keywords (required)         | Array\<string>                                            | **Example:** `["cloud","k8s"]`                                                                                                             |
| links                       | Array\<[Link](#link)>                                     |                                                                                                                                            |
| name (required)             | string                                                    | **Example:** `Example App`                                                                                                                 |
| releaseTime                 | Date                                                      | The time this latest version of the item was released.<br /><br />**Example:** `2023-04-25T12:00:00Z`                                      |
| resourceContext             | [ResourceContext](#resourcecontext)                       |                                                                                                                                            |
| type (required)             | "APP" \| "CLASSIC_APP" \| "EXTENSION_2" \| "TECHNOLOGY" |                                                                                                                                            |
| version                     | string                                                    | The latest version of this item.<br /><br />**Example:** `2.3.4`                                                                           |

### OverviewsList

A list of item meta data. Per default contains only compatible items, but can be controlled using the onlyCompatible flag.

| Name             | Type                          |
| ---------------- | ----------------------------- |
| items (required) | Array\<[Overview](#overview)> |

### Release

| Name                       | Type                                                                          | Description                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| compatible (required)      | "COMPATIBLE" \| "INCOMPATIBLE" \| "UNKNOWN"                                   |                                                                                                                 |
| contentCount               | [ContentCount](#contentcount)                                                 |                                                                                                                 |
| extensionDocuments         | [any](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) |                                                                                                                 |
| extensionMetadata          | [ExtensionMetadata](#extensionmetadata)                                       |                                                                                                                 |
| manifest                   | [Manifest](#manifest)                                                         |                                                                                                                 |
| publicationTime (required) | Date                                                                          | **Example:** `2023-04-25T12:00:00Z`                                                                             |
| releaseNotes               | string                                                                        | Markdown content describing this release.<br /><br />**Example:** `Now even more descriptive!`                  |
| revocation                 | [Revocation](#revocation)                                                     | The existence of this object marks a release as being revoked. It contains information on why this is the case. |
| version (required)         | string                                                                        | A semantic versioning 2.0 conform version.<br /><br />**Example:** `2.0.0`                                      |

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
