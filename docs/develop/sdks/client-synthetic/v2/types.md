## Types

### AuthenticationDto

Authentication dto for Browser Monitor step.

| Name                 | Type                                              | Description                                                                                                                                                                |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authServerAllowlist  | string                                            | String containing the allowed servers of KERBEROS authentication. Can be defined only for `KERBEROS` authentication type.                                                  |
| domain               | string                                            | String containing the KERBEROS authentication domain. Can be defined only for `KERBEROS` authentication type.                                                              |
| inputType (required) | "PLAIN" \| "SECURE"                               | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureAuthenticationDto
* `PLAIN`
   -> PlainAuthenticationDto |
| type (required)      | "HTTP_AUTHENTICATION" \| "KERBEROS" \| "WEBFORM" | Type of authentication.                                                                                                                                                    |

### BaseWaitConditionDto

Wait condition for Browser Monitor step.

| Name            | Type                                                                     | Description                                                                                                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type (required) | "NETWORK" \| "NEXT_EVENT" \| "PAGE_COMPLETE" \| "TIME" \| "VALIDATION" | Defines the actual set of fields depending on the value. See one of the following objects: * `TIME`
   -> TimeWaitConditionDto
* `VALIDATION`
   -> ValidationWaitConditionDto
* `PAGE_COMPLETE`
   -> BaseWaitConditionDto
* `NETWORK`
   -> BaseWaitConditionDto
* `NEXT_EVENT`
   -> BaseWaitConditionDto |

### BrowserMonitorConfigurationDto

Browser Monitor configuration.

| Name                   | Type                                                            | Description                                                                                                            |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| blockedRequests        | Array\<string>                                                  | All requests matching the specified patterns will be blocked during the execution of the monitor.                      |
| browserPermissions     | [BrowserPermissionsDto](#browserpermissionsdto)                 | Permissions settings for browser.                                                                                      |
| bypassCSP              | boolean                                                         | Bypass ContentSecurity Policy for monitored pages. If not defined in request, it will be set to false by default.      |
| chromiumStartupFlags   | [ChromiumStartupFlagsDto](#chromiumstartupflagsdto)             | Chromium startup flags of a Browser Monitor.                                                                           |
| clientCertificates     | Array\<[ClientCertificateDto](#clientcertificatedto)>           | Identifier of stored client's certificate.                                                                             |
| cookies                | Array\<[MonitorCookieDto](#monitorcookiedto)>                   | Cookies list.                                                                                                          |
| device (required)      | [TestDeviceDto](#testdevicedto)                                 | Test device of a Browser Monitor.                                                                                      |
| enablement             | [PlatformEnablementDto](#platformenablementdto)                 | Browser monitor enablement settings for 3rd gen.                                                                       |
| experimentalProperties | Array\<[BrowserMonitorPropertyDto](#browsermonitorpropertydto)> | Experimental properties list.                                                                                          |
| filteredRequests       | [FilteredRequestsDto](#filteredrequestsdto)                     | Filtered requests of a Browser Monitor.                                                                                |
| ignoredErrorCodes      | [IgnoredErrorCodesDto](#ignorederrorcodesdto)                   | Ignored Error Codes of a Browser Monitor.                                                                              |
| javaScriptSettings     | [JavaScriptAgentSettingsDto](#javascriptagentsettingsdto)       | JavaScript Agent Settings.                                                                                             |
| monitorFrames          | boolean                                                         | Capture performance metrics for pages loaded in frames. If not defined in request, it will be set to false by default. |
| networkThrottling      | [NetworkThrottlingDto](#networkthrottlingdto)                   | Network throttling of a Browser Monitor.                                                                               |
| proxy                  | [ProxyDto](#proxydto)                                           | Browser Monitor proxy.                                                                                                 |
| requestHeaderOptions   | [RequestHeaderOptionsDto](#requestheaderoptionsdto)             | Header Options of a Browser Monitor.                                                                                   |
| useIESupportedAgent    | boolean                                                         | useIESupportedAgent flag. If not defined in request, it will be set to false by default.                               |
| userAgent              | string                                                          | User agent.                                                                                                            |

### BrowserMonitorPropertyDto

Property of a Browser Monitor.

| Name             | Type   | Description     |
| ---------------- | ------ | --------------- |
| name (required)  | string | Property name.  |
| value (required) | string | Property value. |

### BrowserMonitorRequest

Browser monitor update.

| Name                     | Type                                                                  | Description                                                                                                                                                                                                                          |
| ------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| configuration (required) | [BrowserMonitorConfigurationDto](#browsermonitorconfigurationdto)     | Browser Monitor configuration.                                                                                                                                                                                                       |
| description              | string                                                                | Monitor description.                                                                                                                                                                                                                 |
| enabled                  | boolean                                                               | If true, the monitor is enabled. *default:* `true`                                                                                                                                                                                   |
| frequencyMin             | number                                                                | The frequency of the monitor, in minutes. Default value depends on the monitor type (1 minute for NAM and HTTP, 15 minutes for BROWSER).                                                                                             |
| keyPerformanceMetrics    | [KeyPerformanceMetricsDto](#keyperformancemetricsdto)                 | The key performance metrics configuration.                                                                                                                                                                                           |
| locations (required)     | Array\<string>                                                        | The locations to which the monitor is assigned.                                                                                                                                                                                      |
| manuallyAssignedEntities | Array\<string>                                                        | Manually assigned entities.                                                                                                                                                                                                          |
| name (required)          | string                                                                | The name of the monitor.                                                                                                                                                                                                             |
| outageHandling           | [MonitorOutageHandlingSettingsDto](#monitoroutagehandlingsettingsdto) | Outage handling configuration.                                                                                                                                                                                                       |
| performanceThresholds    | [MonitorPerformanceThresholdsDto](#monitorperformancethresholdsdto)   | Performance thresholds configuration.                                                                                                                                                                                                |
| primaryGrailTags         | Array\<[MonitorPrimaryGrailTagDto](#monitorprimarygrailtagdto)>       | Primary Grail tags as a list of key-value pairs. Up to 10 tags. Those fields are only available for SaaS and not for Managed.                                                                                                        |
| securityContext          | Array\<string>                                                        | [FEATURE DISABLED] Security context as a list of strings. Up to 10 values, max 200 characters per value. Those fields are only available for SaaS and not for Managed.                                                              |
| steps (required)         | Array\<[BrowserMonitorStepDto](#browsermonitorstepdto)>               | The steps of the monitor.                                                                                                                                                                                                            |
| tags                     | Array\<[SyntheticTagWithSourceDto](#synthetictagwithsourcedto)>       | A set of tags assigned to the monitor. You can specify only the value of the tag here and the `CONTEXTLESS` context and source 'USER' will be added automatically. But preferred option is usage of SyntheticTagWithSourceDto model. |
| type (required)          | "NETWORK_AVAILABILITY" \| "BROWSER" \| "HTTP"                        | Monitor type.                                                                                                                                                                                                                        |

### BrowserMonitorResponse

Browser Monitor.

| Name                             | Type                                                                  | Description                                                                                                                                                                                                                          |
| -------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| automaticallyAssignedEntities    | Array\<string>                                                        | Automatically assigned entities.                                                                                                                                                                                                     |
| configuration (required)         | [BrowserMonitorConfigurationDto](#browsermonitorconfigurationdto)     | Browser Monitor configuration.                                                                                                                                                                                                       |
| description                      | string                                                                | Monitor description.                                                                                                                                                                                                                 |
| enabled                          | boolean                                                               | If true, the monitor is enabled.                                                                                                                                                                                                     |
| frequencyMin                     | number                                                                | The frequency of the monitor, in minutes.                                                                                                                                                                                            |
| id (required)                    | string                                                                | The smartscape id of the monitor.                                                                                                                                                                                                    |
| keyPerformanceMetrics (required) | [KeyPerformanceMetricsDto](#keyperformancemetricsdto)                 | The key performance metrics configuration.                                                                                                                                                                                           |
| locations                        | Array\<string>                                                        | The locations to which the monitor is assigned.                                                                                                                                                                                      |
| manuallyAssignedEntities         | Array\<string>                                                        | Manually assigned entities.                                                                                                                                                                                                          |
| modificationTimestamp            | number                                                                | The timestamp of the last modification.                                                                                                                                                                                              |
| name                             | string                                                                | The name of the monitor.                                                                                                                                                                                                             |
| outageHandling (required)        | [MonitorOutageHandlingSettingsDto](#monitoroutagehandlingsettingsdto) | Outage handling configuration.                                                                                                                                                                                                       |
| performanceThresholds            | [MonitorPerformanceThresholdsDto](#monitorperformancethresholdsdto)   | Performance thresholds configuration.                                                                                                                                                                                                |
| primaryGrailTags                 | Array\<[MonitorPrimaryGrailTagDto](#monitorprimarygrailtagdto)>       | Primary Grail tags as a list of key-value pairs. Up to 10 tags. Those fields are only available for SaaS and not for Managed.                                                                                                        |
| securityContext                  | Array\<string>                                                        | [FEATURE DISABLED] Security context as a list of strings. Up to 10 values, max 200 characters per value. Those fields are only available for SaaS and not for Managed.                                                              |
| steps (required)                 | Array\<[BrowserMonitorStepDto](#browsermonitorstepdto)>               | The steps of the monitor.                                                                                                                                                                                                            |
| tags                             | Array\<[SyntheticTagWithSourceDto](#synthetictagwithsourcedto)>       | A set of tags assigned to the monitor. You can specify only the value of the tag here and the `CONTEXTLESS` context and source 'USER' will be added automatically. But preferred option is usage of SyntheticTagWithSourceDto model. |
| type (required)                  | "NETWORK_AVAILABILITY" \| "BROWSER"                                  | Monitor type.                                                                                                                                                                                                                        |

### BrowserMonitorStepDto

Base step of Browser Monitor.

| Name            | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id              | string                                                                                         | Step Id.                                                                                                                                                                                                                                                                                                                                                   |
| name (required) | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| type (required) | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |

### BrowserPermissionsDto

Permissions settings for browser.

| Name          | Type    | Description                                                                              |
| ------------- | ------- | ---------------------------------------------------------------------------------------- |
| camera        | boolean | Camera permission. If not defined in request, it will be set to false by default.        |
| location      | boolean | Location permission. If not defined in request, it will be set to false by default.      |
| microphone    | boolean | Microphone permission. If not defined in request, it will be set to false by default.    |
| notifications | boolean | Notifications permission. If not defined in request, it will be set to false by default. |

### ChromiumStartupFlagsDto

Chromium startup flags of a Browser Monitor.

| Name                          | Type                                                                              | Description                                                                           |
| ----------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| autoplay-policy               | "no-user-gesture-required" \| "document-user-activation-required"                 | autoplay-policy type.                                                                 |
| disable-features              | [ChromiumStartupFlagsDtoDisableFeatures](#chromiumstartupflagsdtodisablefeatures) | disable-features map.                                                                 |
| disable-site-isolation-trials | boolean                                                                           | disable-site-isolation-trials flag.                                                   |
| disable-web-security          | boolean                                                                           | disable-web-security flag. If no value is passed, it will be set to false by default. |
| host-resolver-rules           | string                                                                            | host-resolver-rules.                                                                  |
| ignore-certificate-errors     | boolean                                                                           | ignore-certificate-errors flag.                                                       |
| ssl-version-max               | string                                                                            | ssl-version-max.                                                                      |
| ssl-version-min               | string                                                                            | ssl-version-min.                                                                      |
| test-type                     | boolean                                                                           | test-type flag.                                                                       |

### ChromiumStartupFlagsDtoDisableFeatures

disable-features map.

**type**: Record\<string, boolean>

### ClientCertificateDto

Client certificate.

| Name                    | Type   | Description                            |
| ----------------------- | ------ | -------------------------------------- |
| credentialId (required) | string | Certificate CV id.                     |
| domain (required)       | string | Domain certificate will be applied to. |

### ConstraintViolation

Information about a single constraint violation.

| Name               | Type                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context            | [ConstraintViolationContext](#constraintviolationcontext) | Structured context of the constraint violation. Well known keys that **can** be present are: * `reason`
   -> Additional reasoning behind the occurred violation.
* `pipeline`
   -> Pipeline related to the violation.
* `endpoint`
   -> Endpoint related to the violation.
* `stage`
   -> Stage related to the violation.
* `processor`
   -> Processor related to the violation.
* `routingRule`
   -> Routing rule related to the violation. |
| message (required) | string                                                    | Description of the constraint violation.                                                                                                                                                                                                                                                                                                                                                                                                           |

### ConstraintViolationContext

Structured context of the constraint violation.
Well known keys that **can** be present are:

- `reason` -> Additional reasoning behind the occurred violation.
- `pipeline` -> Pipeline related to the violation.
- `endpoint` -> Endpoint related to the violation.
- `stage` -> Stage related to the violation.
- `processor` -> Processor related to the violation.
- `routingRule` -> Routing rule related to the violation.

**type**: Record\<string, string>

### ConstraintViolationDetails

List of encountered constraint violations.

| Name                            | Type                                                | Description                                                                                                                                         |
| ------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| constraintViolations (required) | Array\<[ConstraintViolation](#constraintviolation)> | List of encountered constraint violations.                                                                                                          |
| type (required)                 | "constraintViolation"                               | Defines the actual set of fields depending on the value. See one of the following objects: * `constraintViolation`
   -> ConstraintViolationDetails |

### CookieStepDto

Cookie step of Browser Monitor.

| Name               | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cookies (required) | Array\<[MonitorCookieDto](#monitorcookiedto)>                                                  | Field containing the list of cookies.                                                                                                                                                                                                                                                                                                                      |
| id                 | string                                                                                         | Step Id.                                                                                                                                                                                                                                                                                                                                                   |
| name (required)    | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| type (required)    | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |

### ErrorResponse

Basic information of the encountered error.

| Name               | Type                                          | Description                           |
| ------------------ | --------------------------------------------- | ------------------------------------- |
| code (required)    | number                                        | The returned HTTP status code.        |
| details            | [ErrorResponseDetails](#errorresponsedetails) | Detailed information of the error.    |
| message (required) | string                                        | Description of the encountered error. |

### ErrorResponseDetails

Detailed information of the error.

| Name            | Type                  | Description                                                                                                                                         |
| --------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| type (required) | "constraintViolation" | Defines the actual set of fields depending on the value. See one of the following objects: * `constraintViolation`
   -> ConstraintViolationDetails |

### ErrorResponseEnvelope

Encloses the encountered error.

| Name             | Type                            | Description                                 |
| ---------------- | ------------------------------- | ------------------------------------------- |
| error (required) | [ErrorResponse](#errorresponse) | Basic information of the encountered error. |

### ExtendedNodeResponse

Configuration of a synthetic node. Compare to NodeResponse contains additional browser-related data.

| Name                              | Type           | Description                                                                       |
| --------------------------------- | -------------- | --------------------------------------------------------------------------------- |
| activeGateVersion (required)      | string         | The version of the Active Gate.                                                   |
| autoUpdateEnabled (required)      | boolean        | The Active Gate has the Auto update option enabled ('true') or not ('false').     |
| browserMonitorsEnabled (required) | boolean        | The synthetic node is able to execute browser monitors (`true`) or not (`false`). |
| browserType (required)            | string         | The browser type.                                                                 |
| browserVersion (required)         | string         | The browser version.                                                              |
| capabilities (required)           | Array\<string> | The list of node's capabilities.                                                  |
| healthCheckStatus (required)      | string         | The health check status of the synthetic node.                                    |
| hostname (required)               | string         | The hostname of the synthetic node.                                               |
| id (required)                     | string         | The ID of the synthetic node.                                                     |
| ips (required)                    | Array\<string> | The IP of the synthetic node.                                                     |
| oneAgentRoutingEnabled (required) | boolean        | The Active Gate has the One Agent routing enabled ('true') or not ('false').      |
| operatingSystem (required)        | string         | The Active Gate's host operating system.                                          |
| playerVersion (required)          | string         | The version of the synthetic player.                                              |
| status (required)                 | string         | The status of the synthetic node.                                                 |
| version (required)                | string         | The version of the synthetic node.                                                |

### FilteredRequestsDto

Filtered requests of a Browser Monitor.

| Name                | Type                                          | Description                        |
| ------------------- | --------------------------------------------- | ---------------------------------- |
| mode (required)     | "BLOCK" \| "ALLOW"                            | Filter mode for filtered requests. |
| requests (required) | Array\<[RequestFilterDto](#requestfilterdto)> | Requests to be filtered.           |

### FrameworkOptionsDto

JS framework options of a JS Agent.

| Name          | Type    | Description                                                                           |
| ------------- | ------- | ------------------------------------------------------------------------------------- |
| activeXObject | boolean | activeXObject support. If not defined in request, it will be set to false by default. |
| angular       | boolean | Angular support. If not defined in request, it will be set to false by default.       |
| dojo          | boolean | Dojo support. If not defined in request, it will be set to false by default.          |
| extJs         | boolean | extJs support. If not defined in request, it will be set to false by default.         |
| icefaces      | boolean | icefaces support. If not defined in request, it will be set to false by default.      |
| jQuery        | boolean | jquery support. If not defined in request, it will be set to false by default.        |
| mooTools      | boolean | mooTools support. If not defined in request, it will be set to false by default.      |
| prototype     | boolean | prototype support. If not defined in request, it will be set to false by default.     |

### HeaderDto

A header of the request.

| Name             | Type   | Description     |
| ---------------- | ------ | --------------- |
| name (required)  | string | Header's name.  |
| value (required) | string | Header's value. |

### HttpAuthenticationDto

The Http step's authentication.

| Name                   | Type                                            | Description                                    |
| ---------------------- | ----------------------------------------------- | ---------------------------------------------- |
| credentials (required) | string                                          | Credential vault identifier.                   |
| kdcIp                  | string                                          | KDC IP in case KERBEROS auth type is selected. |
| realmName              | string                                          | Realm name in case KERBEROS type is selected.  |
| type (required)        | "KERBEROS" \| "BASIC_AUTHENTICATION" \| "NTLM" | Authentication type.                           |

### HttpMonitorAdvancedSettingsDto

Http monitor's advanced settings.

| Name                            | Type   | Description                                                           |
| ------------------------------- | ------ | --------------------------------------------------------------------- |
| connectTimeout                  | number | Connect timeout per request in ms.                                    |
| dnsQueryTimeout                 | number | DNS query timeout in ms.                                              |
| maxCustomScriptSize             | number | Maximum size of each pre- or post- execution script size in bytes.    |
| maxHeaderSize                   | number | Maximum size of each request header in bytes.                         |
| maxRequestBodySize              | number | Maximum request body size in bytes.                                   |
| maxResponseBodyReadByScriptSize | number | Maximum size of response body read by post-execution script in bytes. |
| maxResponseBodySize             | number | Maximum response body size in bytes.                                  |
| monitorExecutionTimeout         | number | Monitor execution timeout in ms.                                      |
| requestTimeout                  | number | Request timeout in ms.                                                |
| scriptExecutionTimeout          | number | Pre- or post- execution script timeout in ms.                         |

### HttpMonitorRequest

Http monitor's settings.

| Name                     | Type                                                                  | Description                                                                                                                                                                                                                          |
| ------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| advancedSettings         | [HttpMonitorAdvancedSettingsDto](#httpmonitoradvancedsettingsdto)     | Http monitor's advanced settings.                                                                                                                                                                                                    |
| cookies                  | Array\<[MonitorCookieDto](#monitorcookiedto)>                         | The cookies of the monitor.                                                                                                                                                                                                          |
| description              | string                                                                | Monitor description.                                                                                                                                                                                                                 |
| enabled                  | boolean                                                               | If true, the monitor is enabled. *default:* `true`                                                                                                                                                                                   |
| frequencyMin             | number                                                                | The frequency of the monitor, in minutes. Default value depends on the monitor type (1 minute for NAM and HTTP, 15 minutes for BROWSER).                                                                                             |
| locations (required)     | Array\<string>                                                        | The locations to which the monitor is assigned.                                                                                                                                                                                      |
| manuallyAssignedEntities | Array\<string>                                                        | Manually assigned entities.                                                                                                                                                                                                          |
| name (required)          | string                                                                | The name of the monitor.                                                                                                                                                                                                             |
| outageHandling           | [MonitorOutageHandlingSettingsDto](#monitoroutagehandlingsettingsdto) | Outage handling configuration.                                                                                                                                                                                                       |
| performanceThresholds    | [MonitorPerformanceThresholdsDto](#monitorperformancethresholdsdto)   | Performance thresholds configuration.                                                                                                                                                                                                |
| primaryGrailTags         | Array\<[MonitorPrimaryGrailTagDto](#monitorprimarygrailtagdto)>       | Primary Grail tags as a list of key-value pairs. Up to 10 tags. Those fields are only available for SaaS and not for Managed.                                                                                                        |
| securityContext          | Array\<string>                                                        | [FEATURE DISABLED] Security context as a list of strings. Up to 10 values, max 200 characters per value. Those fields are only available for SaaS and not for Managed.                                                              |
| steps (required)         | Array\<[HttpMonitorStepDto](#httpmonitorstepdto)>                     | The steps of the monitor.                                                                                                                                                                                                            |
| tags                     | Array\<[SyntheticTagWithSourceDto](#synthetictagwithsourcedto)>       | A set of tags assigned to the monitor. You can specify only the value of the tag here and the `CONTEXTLESS` context and source 'USER' will be added automatically. But preferred option is usage of SyntheticTagWithSourceDto model. |
| type (required)          | "NETWORK_AVAILABILITY" \| "BROWSER" \| "HTTP"                        | Monitor type.                                                                                                                                                                                                                        |

### HttpMonitorResponse

Http monitor.

| Name                          | Type                                                                  | Description                                                                                                                                                                                                                          |
| ----------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| advancedSettings              | [HttpMonitorAdvancedSettingsDto](#httpmonitoradvancedsettingsdto)     | Http monitor's advanced settings.                                                                                                                                                                                                    |
| automaticallyAssignedEntities | Array\<string>                                                        | Automatically assigned entities.                                                                                                                                                                                                     |
| cookies                       | Array\<[MonitorCookieDto](#monitorcookiedto)>                         | The cookies of the monitor.                                                                                                                                                                                                          |
| description                   | string                                                                | Monitor description.                                                                                                                                                                                                                 |
| enabled                       | boolean                                                               | If true, the monitor is enabled.                                                                                                                                                                                                     |
| frequencyMin                  | number                                                                | The frequency of the monitor, in minutes.                                                                                                                                                                                            |
| id (required)                 | string                                                                | The smartscape id of the monitor.                                                                                                                                                                                                    |
| locations                     | Array\<string>                                                        | The locations to which the monitor is assigned.                                                                                                                                                                                      |
| manuallyAssignedEntities      | Array\<string>                                                        | Manually assigned entities.                                                                                                                                                                                                          |
| modificationTimestamp         | number                                                                | The timestamp of the last modification.                                                                                                                                                                                              |
| name                          | string                                                                | The name of the monitor.                                                                                                                                                                                                             |
| outageHandling (required)     | [MonitorOutageHandlingSettingsDto](#monitoroutagehandlingsettingsdto) | Outage handling configuration.                                                                                                                                                                                                       |
| performanceThresholds         | [MonitorPerformanceThresholdsDto](#monitorperformancethresholdsdto)   | Performance thresholds configuration.                                                                                                                                                                                                |
| primaryGrailTags              | Array\<[MonitorPrimaryGrailTagDto](#monitorprimarygrailtagdto)>       | Primary Grail tags as a list of key-value pairs. Up to 10 tags. Those fields are only available for SaaS and not for Managed.                                                                                                        |
| securityContext               | Array\<string>                                                        | [FEATURE DISABLED] Security context as a list of strings. Up to 10 values, max 200 characters per value. Those fields are only available for SaaS and not for Managed.                                                              |
| steps (required)              | Array\<[HttpMonitorStepDto](#httpmonitorstepdto)>                     | The steps of the monitor.                                                                                                                                                                                                            |
| tags                          | Array\<[SyntheticTagWithSourceDto](#synthetictagwithsourcedto)>       | A set of tags assigned to the monitor. You can specify only the value of the tag here and the `CONTEXTLESS` context and source 'USER' will be added automatically. But preferred option is usage of SyntheticTagWithSourceDto model. |
| type (required)               | "NETWORK_AVAILABILITY" \| "BROWSER"                                  | Monitor type.                                                                                                                                                                                                                        |

### HttpMonitorStepDto

The step of a Http monitor.

| Name                   | Type                                                                   | Description                     |
| ---------------------- | ---------------------------------------------------------------------- | ------------------------------- |
| authentication         | [HttpAuthenticationDto](#httpauthenticationdto)                        | The Http step's authentication. |
| configuration          | [HttpStepConfigurationDto](#httpstepconfigurationdto)                  | The Http step's configuration.  |
| constraints (required) | Array\<[MonitorConstraintDto](#monitorconstraintdto)>                  | The list of constraints.        |
| id                     | string                                                                 | Step Id.                        |
| methodType (required)  | "GET" \| "POST" \| "PUT" \| "DELETE" \| "HEAD" \| "OPTIONS" \| "PATCH" | Method type.                    |
| name (required)        | string                                                                 | Step name.                      |
| postScript             | string                                                                 | PostScript.                     |
| preScript              | string                                                                 | PreScript.                      |
| requestBody            | string                                                                 | Request body.                   |
| requestTimeout         | number                                                                 | Request timeout in s.           |
| url (required)         | string                                                                 | Step url.                       |

### HttpStepConfigurationDto

The Http step's configuration.

| Name                                | Type                            | Description                                                             |
| ----------------------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| acceptAnyCertificate                | boolean                         | If true accept any certificate flag. *default:* `true`                  |
| clientCertificateId                 | string                          | Identifier of stored client's certificate.                              |
| doNotPersistSensitiveData           | boolean                         | If true the step's data aren't stored and displayed. *default:* `false` |
| followRedirects                     | boolean                         | If true follow redirects. *default:* `false`                            |
| headers                             | Array\<[HeaderDto](#headerdto)> | The headers.                                                            |
| sslCertificateExpirationDaysToAlert | number                          | Number of days within SSL certificate expires.                          |

### IgnoredErrorCodesDto

Ignored Error Codes of a Browser Monitor.

| Name                     | Type   | Description                                                         |
| ------------------------ | ------ | ------------------------------------------------------------------- |
| matchingDocumentRequests | string | Ignoring status codes will be applied to requests matching pattern. |
| statusCodes              | string | Status codes to be ignored.                                         |

### InteractionStepDto

Interaction step of Browser Monitor.

| Name              | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button (required) | "MOUSE_LEFT" \| "MOUSE_MIDDLE" \| "MOUSE_RIGHT"                                             | Integer containing the button index.                                                                                                                                                                                                                                                                                                                       |
| id                | string                                                                                         | Step Id.                                                                                                                                                                                                                                                                                                                                                   |
| name (required)   | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| target            | [TargetDto](#targetdto)                                                                        | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required)   | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |
| validationRules   | Array\<[ValidationRuleDto](#validationruledto)>                                                | List of validation rules for the step to perform.                                                                                                                                                                                                                                                                                                          |
| waitCondition     | [BaseWaitConditionDto](#basewaitconditiondto)                                                  | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |

### JavaScriptAgentSettingsDto

JavaScript Agent Settings.

| Name                       | Type                                                      | Description                                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customProperties           | string                                                    | Custom configuration properties.                                                                                                                                                                      |
| experimentalValues         | boolean                                                   | Experimental values support. If not defined in request, it will be set to false by default.                                                                                                           |
| fetchRequests              | boolean                                                   | Capture fetch() requests. If not defined in request, it will be set to true by default.                                                                                                               |
| javaScriptErrors           | boolean                                                   | Enable this setting to monitor JavaScript errors. The window\.onError handler is used for capturing JavaScript errors. If not defined in request, it will be set to true by default.                  |
| javaScriptFrameworkSupport | [FrameworkOptionsDto](#frameworkoptionsdto)               | JS framework options of a JS Agent.                                                                                                                                                                   |
| timedActions               | boolean                                                   | Within JavaScript frameworks, XHRs are often sent via setTimeout methods. Enable this setting to detect actions that trigger such XHRs. If not defined in request, it will be set to true by default. |
| timeoutSettings            | [TimeoutSettingsDto](#timeoutsettingsdto)                 | Timeout settings of a Browser Monitor.                                                                                                                                                                |
| visuallyCompleteOptions    | [VisuallyCompleteOptionsDto](#visuallycompleteoptionsdto) | Visually Complete Options of a Browser Monitor.                                                                                                                                                       |
| xmlHttpRequests            | boolean                                                   | Capture xml Http requests (XHR). If not defined in request, it will be set to true by default.                                                                                                        |

### JavaScriptStepDto

JavaScript step of Browser Monitor.

| Name                  | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | string                                                                                         | Step Id.                                                                                                                                                                                                                                                                                                                                                   |
| javaScript (required) | string                                                                                         | String containing a script in JavaScript.                                                                                                                                                                                                                                                                                                                  |
| name (required)       | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| target                | [TargetDto](#targetdto)                                                                        | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required)       | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |
| waitCondition         | [BaseWaitConditionDto](#basewaitconditiondto)                                                  | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |

### KeyPerformanceMetricsDto

The key performance metrics configuration.

| Name          | Type                                                                                                                                                                                                                                          | Description                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| loadActionKpm | "USER_ACTION_DURATION" \| "VISUALLY_COMPLETE" \| "SPEED_INDEX" \| "DOM_INTERACTIVE" \| "LOAD_EVENT_START" \| "LOAD_EVENT_END" \| "RESPONSE_START" \| "RESPONSE_END" \| "LARGEST_CONTENTFUL_PAINT" \| "CUMULATIVE_LAYOUT_SHIFT" | Load action key performance metric. |
| xhrActionKpm  | "USER_ACTION_DURATION" \| "VISUALLY_COMPLETE" \| "RESPONSE_START" \| "RESPONSE_END"                                                                                                                                                      | XHR action key performance metric.  |

### KeyStrokesStepDto

Key strokes step of Browser Monitor.

| Name              | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                | string                                                                                         | Step Id.                                                                                                                                                                                                                                                                                                                                                   |
| input (required)  | [KeystrokesInputDto](#keystrokesinputdto)                                                      | Key strokes step input.                                                                                                                                                                                                                                                                                                                                    |
| name (required)   | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| simulateBlurEvent | boolean                                                                                        | Boolean value set to true if blur event should be simulated.                                                                                                                                                                                                                                                                                               |
| simulateReturnKey | boolean                                                                                        | Boolean value set to true if return key should be simulated.                                                                                                                                                                                                                                                                                               |
| target            | [TargetDto](#targetdto)                                                                        | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required)   | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |
| validationRules   | Array\<[ValidationRuleDto](#validationruledto)>                                                | List of validation rules for the step to perform.                                                                                                                                                                                                                                                                                                          |
| waitCondition     | [BaseWaitConditionDto](#basewaitconditiondto)                                                  | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |

### KeystrokesInputDto

Key strokes step input.

| Name            | Type                | Description                                                                                                                                                                  |
| --------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type (required) | "PLAIN" \| "SECURE" | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureKeyStrokesInputDto
* `PLAIN`
   -> PlainKeyStrokesInputDto |

### LocationCollectionElementDto

A synthetic location.

| Name                       | Type                                                                                                                    | Description                                                                                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| capabilities               | Array\<string>                                                                                                          | The list of location's capabilities.                                                                                                                         |
| cloudPlatform              | "AZURE" \| "ALIBABA" \| "GOOGLE_CLOUD" \| "OTHER" \| "AMAZON_EC2" \| "DYNATRACE_CLOUD" \| "INTEROUTE" \| "UNDEFINED" | The cloud provider where the location is hosted. Only applicable to `PUBLIC` locations.                                                                      |
| deploymentType             | "UNKNOWN" \| "KUBERNETES" \| "OPENSHIFT" \| "STANDARD"                                                                  | Location's deployment type.                                                                                                                                  |
| geoCity                    | string                                                                                                                  | Location's city.                                                                                                                                             |
| geoContinent               | string                                                                                                                  | Location's continent.                                                                                                                                        |
| geoCountry                 | string                                                                                                                  | Location's country.                                                                                                                                          |
| geoLatitude                | number                                                                                                                  | Location's latitude.                                                                                                                                         |
| geoLocationId (required)   | string                                                                                                                  | The Dynatrace GeoLocation ID.                                                                                                                                |
| geoLongitude               | number                                                                                                                  | Location's longitude.                                                                                                                                        |
| id (required)              | string                                                                                                                  | The Dynatrace Location ID.                                                                                                                                   |
| ips                        | Array\<string>                                                                                                          | The list of IP addresses assigned to the location. Only applicable to `PUBLIC` locations.                                                                    |
| lastModificationTimeMillis | number                                                                                                                  | The timestamp of the last modification of the location, in milliseconds since the Unix epoch.                                                                |
| name (required)            | string                                                                                                                  | The name of the location.                                                                                                                                    |
| nodes                      | Array\<string>                                                                                                          | A list of synthetic nodes belonging to the location. You can retrieve the list of available nodes with the [GET all nodes](https://dt-url.net/miy3rpl) call. |
| stage                      | "BETA" \| "COMING_SOON" \| "DELETED" \| "GA"                                                                           | The release stage of the location.                                                                                                                           |
| status                     | "DISABLED" \| "ENABLED" \| "HIDDEN"                                                                                     | The status of the location.                                                                                                                                  |
| type (required)            | "PUBLIC" \| "PRIVATE" \| "CLUSTER"                                                                                      | The type of the location.                                                                                                                                    |

### LocatorDto

Browser Monitor locator.

| Name             | Type           | Description                     |
| ---------------- | -------------- | ------------------------------- |
| type (required)  | "CSS" \| "DOM" | Enum value of the locator type. |
| value (required) | string         | Value of the locator.           |

### MonitorConstraintDto

Synthetic monitor constraint. The allowed type and properties depend on the monitor and step/request context.

| Name                  | Type                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| properties (required) | [MonitorConstraintDtoProperties](#monitorconstraintdtoproperties) | Constraint properties. Most constraint types use operator and value keys. Some protocol-specific constraints may use additional keys, for example DNS_STATUS_CODE can use status.                                                                                                                                                                                                                                                     |
| type (required)       | string                                                            | Constraint type. Allowed values depend on monitor type and step/request context. HTTP monitor step constraints: HTTP_STATUSES, HTTP_RESPONSE_PATTERN, HTTP_RESPONSE_REGEX. Network availability monitor(NAM) step constraints: SUCCESS_RATE_PERCENT. Network availability monitor(NAM) request configuration constraints are request-type specific, for example ICMP_SUCCESS_RATE_PERCENT (ICMP) and DNS_STATUS_CODE (DNS). |

### MonitorConstraintDtoProperties

Constraint properties. Most constraint types use operator and value keys. Some protocol-specific constraints may use additional keys, for example DNS_STATUS_CODE can use status.

**type**: Record\<string, string>

### MonitorCookieDto

Cookie dto for Synthetic Monitor step.

| Name              | Type   | Description    |
| ----------------- | ------ | -------------- |
| domain (required) | string | Cookie domain. |
| name (required)   | string | Cookie name.   |
| path              | string | Cookie path.   |
| value (required)  | string | Cookie value.  |

### MonitorIdResponse

A Response with monitor ID.

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| id (required) | string | Monitor ID. |

### MonitorOutageHandlingSettingsDto

Outage handling configuration.

| Name                                  | Type                                            | Description                                                                                                            |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| globalConsecutiveOutageCountThreshold | number                                          | Number of consecutive failures for all locations.                                                                      |
| globalOutages (required)              | boolean                                         | Generate a problem and send an alert when the monitor is unavailable at all configured locations.                      |
| localConsecutiveOutageCountThreshold  | number                                          | Number of consecutive failures.                                                                                        |
| localLocationOutageCountThreshold     | number                                          | Number of failing locations.                                                                                           |
| localOutages (required)               | boolean                                         | Generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location. |
| origin                                | "MONITOR" \| "TENANT" \| "DEFAULT" \| "UNKNOWN" | Indicates the origin of these settings.                                                                                |
| retryOnError                          | boolean                                         | Only Browser Monitor property. If set to true, execution retry will take place in case the monitor fails.              |

### MonitorPerformanceThresholdDto

The performance threshold rule.

| Name                 | Type                                     | Description                                                                                                                                                                      |
| -------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aggregation          | "AVG" \| "MAX" \| "MIN"                  | Aggregation type. *default:* `"AVG"`                                                                                                                                             |
| dealertingSamples    | number                                   | Number of most recent non-violating request executions that closes the problem.                                                                                                  |
| samples              | number                                   | Number of request executions in analyzed sliding window (sliding window size).                                                                                                   |
| stepIndex            | number                                   | Specify the step's index to which a threshold applies. If threshold is monitor-level, no index is needed.                                                                        |
| threshold (required) | number                                   | Notify if monitor request takes longer than *X* time units to execute. For network availability monitors the time unit is milliseconds, for browser and HTTP monitors - seconds. |
| type                 | "MONITOR" \| "STEP" \| "UNDEFINED_STEP" | Type of performance threshold.                                                                                                                                                   |
| violatingSamples     | number                                   | Number of violating request executions in analyzed sliding window.                                                                                                               |

### MonitorPerformanceThresholdsDto

Performance thresholds configuration.

| Name               | Type                                                                      | Description                                                      |
| ------------------ | ------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| enabled (required) | boolean                                                                   | Performance threshold is enabled (`true`) or disabled (`false`). |
| thresholds         | Array\<[MonitorPerformanceThresholdDto](#monitorperformancethresholddto)> | The list of performance threshold rules.                         |

### MonitorPrimaryGrailTagDto

Primary grail tag key-value pair.

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| key (required)   | string | Tag key.    |
| value (required) | string | Tag value.  |

### NavigateStepDto

Step of Browser Monitor that navigates to a website.

| Name            | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authentication  | [AuthenticationDto](#authenticationdto)                                                        | Authentication dto for Browser Monitor step.                                                                                                                                                                                                                                                                                                               |
| id              | string                                                                                         | Step Id.                                                                                                                                                                                                                                                                                                                                                   |
| name (required) | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| target          | [TargetDto](#targetdto)                                                                        | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required) | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |
| url (required)  | string                                                                                         | Field containing the url that the monitor should navigate to.                                                                                                                                                                                                                                                                                              |
| validationRules | Array\<[ValidationRuleDto](#validationruledto)>                                                | List of validation rules for the step to perform.                                                                                                                                                                                                                                                                                                          |
| waitCondition   | [BaseWaitConditionDto](#basewaitconditiondto)                                                  | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |

### NetworkAvailabilityMonitorRequest

Network availability monitor.

| Name                  | Type                                                                            | Description                                                                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| description           | string                                                                          | Monitor description.                                                                                                                                                                                                                 |
| enabled               | boolean                                                                         | If true, the monitor is enabled. *default:* `true`                                                                                                                                                                                   |
| frequencyMin          | number                                                                          | The frequency of the monitor, in minutes. Default value depends on the monitor type (1 minute for NAM and HTTP, 15 minutes for BROWSER).                                                                                             |
| locations (required)  | Array\<string>                                                                  | The locations to which the monitor is assigned.                                                                                                                                                                                      |
| name (required)       | string                                                                          | The name of the monitor.                                                                                                                                                                                                             |
| outageHandling        | [MonitorOutageHandlingSettingsDto](#monitoroutagehandlingsettingsdto)           | Outage handling configuration.                                                                                                                                                                                                       |
| performanceThresholds | [MonitorPerformanceThresholdsDto](#monitorperformancethresholdsdto)             | Performance thresholds configuration.                                                                                                                                                                                                |
| primaryGrailTags      | Array\<[MonitorPrimaryGrailTagDto](#monitorprimarygrailtagdto)>                 | Primary Grail tags as a list of key-value pairs. Up to 10 tags. Those fields are only available for SaaS and not for Managed.                                                                                                        |
| securityContext       | Array\<string>                                                                  | [FEATURE DISABLED] Security context as a list of strings. Up to 10 values, max 200 characters per value. Those fields are only available for SaaS and not for Managed.                                                              |
| steps (required)      | Array\<[NetworkAvailabilityMonitorStepDto](#networkavailabilitymonitorstepdto)> | The steps of the monitor.                                                                                                                                                                                                            |
| tags                  | Array\<[SyntheticTagWithSourceDto](#synthetictagwithsourcedto)>                 | A set of tags assigned to the monitor. You can specify only the value of the tag here and the `CONTEXTLESS` context and source 'USER' will be added automatically. But preferred option is usage of SyntheticTagWithSourceDto model. |
| type (required)       | "NETWORK_AVAILABILITY" \| "BROWSER" \| "HTTP"                                  | Monitor type.                                                                                                                                                                                                                        |

### NetworkAvailabilityMonitorRequestConfigurationDto

The configuration of a network availability monitor request.

| Name                   | Type                                                  | Description          |
| ---------------------- | ----------------------------------------------------- | -------------------- |
| constraints (required) | Array\<[MonitorConstraintDto](#monitorconstraintdto)> | Request constraints. |

### NetworkAvailabilityMonitorResponse

Network availability monitor.

| Name                      | Type                                                                            | Description                                                                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| description               | string                                                                          | Monitor description.                                                                                                                                                                                                                 |
| enabled                   | boolean                                                                         | If true, the monitor is enabled.                                                                                                                                                                                                     |
| frequencyMin              | number                                                                          | The frequency of the monitor, in minutes.                                                                                                                                                                                            |
| id (required)             | string                                                                          | The smartscape id of the monitor.                                                                                                                                                                                                    |
| locations                 | Array\<string>                                                                  | The locations to which the monitor is assigned.                                                                                                                                                                                      |
| modificationTimestamp     | number                                                                          | The timestamp of the last modification.                                                                                                                                                                                              |
| name                      | string                                                                          | The name of the monitor.                                                                                                                                                                                                             |
| outageHandling (required) | [MonitorOutageHandlingSettingsDto](#monitoroutagehandlingsettingsdto)           | Outage handling configuration.                                                                                                                                                                                                       |
| performanceThresholds     | [MonitorPerformanceThresholdsDto](#monitorperformancethresholdsdto)             | Performance thresholds configuration.                                                                                                                                                                                                |
| primaryGrailTags          | Array\<[MonitorPrimaryGrailTagDto](#monitorprimarygrailtagdto)>                 | Primary Grail tags as a list of key-value pairs. Up to 10 tags. Those fields are only available for SaaS and not for Managed.                                                                                                        |
| securityContext           | Array\<string>                                                                  | [FEATURE DISABLED] Security context as a list of strings. Up to 10 values, max 200 characters per value. Those fields are only available for SaaS and not for Managed.                                                              |
| steps (required)          | Array\<[NetworkAvailabilityMonitorStepDto](#networkavailabilitymonitorstepdto)> | The steps of the monitor.                                                                                                                                                                                                            |
| tags                      | Array\<[SyntheticTagWithSourceDto](#synthetictagwithsourcedto)>                 | A set of tags assigned to the monitor. You can specify only the value of the tag here and the `CONTEXTLESS` context and source 'USER' will be added automatically. But preferred option is usage of SyntheticTagWithSourceDto model. |
| type (required)           | "NETWORK_AVAILABILITY" \| "BROWSER"                                            | Monitor type.                                                                                                                                                                                                                        |

### NetworkAvailabilityMonitorStepDto

The step of a network availability monitor.

| Name                             | Type                                                                                                            | Description                                                      |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| constraints (required)           | Array\<[MonitorConstraintDto](#monitorconstraintdto)>                                                           | The list of constraints which apply to all requests in the step. |
| name (required)                  | string                                                                                                          | Step name.                                                       |
| properties (required)            | [NetworkAvailabilityMonitorStepDtoProperties](#networkavailabilitymonitorstepdtoproperties)                     | The properties which apply to all requests in the step.          |
| requestConfigurations (required) | Array\<[NetworkAvailabilityMonitorRequestConfigurationDto](#networkavailabilitymonitorrequestconfigurationdto)> | Request configurations.                                          |
| requestType (required)           | "ICMP" \| "TCP" \| "DNS"                                                                                        | Request type.                                                    |
| targetFilter                     | string                                                                                                          | Target filter.                                                   |
| targetList                       | Array\<string>                                                                                                  | Target list.                                                     |

### NetworkAvailabilityMonitorStepDtoProperties

The properties which apply to all requests in the step.

**type**: Record\<string, string>

### NetworkThrottlingDto

Network throttling of a Browser Monitor.

| Name     | Type   | Description                                                                          |
| -------- | ------ | ------------------------------------------------------------------------------------ |
| download | number | Download throughput. If not defined in request, it will be set to -1 by default.     |
| latency  | number | Latency. If not defined in request, it will be set to 0 by default.                  |
| name     | string | Predefined network type. If not defined in request, it will be set to "" by default. |
| upload   | number | Upload throughput. If not defined in request, it will be set to -1 by default.       |

### NodeResponse

Configuration of a synthetic node.

A *synthetic node* is an ActiveGate that is able to execute synthetic monitors.

| Name                              | Type           | Description                                                                   |
| --------------------------------- | -------------- | ----------------------------------------------------------------------------- |
| activeGateVersion (required)      | string         | The version of the Active Gate.                                               |
| autoUpdateEnabled (required)      | boolean        | The Active Gate has the Auto update option enabled ('true') or not ('false'). |
| browserMonitorsEnabled (required) | boolean        | Browser check capabilities enabled flag.                                      |
| capabilities (required)           | Array\<string> | The list of node's capabilities.                                              |
| healthCheckStatus (required)      | string         | The health check status of the synthetic node.                                |
| hostname (required)               | string         | The hostname of a node.                                                       |
| id (required)                     | string         | The ID of a node.                                                             |
| ips (required)                    | Array\<string> | The IP of a node.                                                             |
| oneAgentRoutingEnabled (required) | boolean        | The Active Gate has the One Agent routing enabled ('true') or not ('false').  |
| operatingSystem (required)        | string         | The Active Gate's host operating system.                                      |
| playerVersion (required)          | string         | The version of the synthetic player.                                          |
| status (required)                 | string         | The status of the synthetic node.                                             |
| version (required)                | string         | The version of a node.                                                        |

### NodesResponse

A list of synthetic nodes.

| Name             | Type                                  | Description                |
| ---------------- | ------------------------------------- | -------------------------- |
| nodes (required) | Array\<[NodeResponse](#noderesponse)> | A list of synthetic nodes. |

### PlainAuthenticationDto

Plain authentication dto for Browser Monitor step.

| Name                 | Type                                              | Description                                                                                                                                                                |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authServerAllowlist  | string                                            | String containing the allowed servers of KERBEROS authentication. Can be defined only for `KERBEROS` authentication type.                                                  |
| domain               | string                                            | String containing the KERBEROS authentication domain. Can be defined only for `KERBEROS` authentication type.                                                              |
| inputType (required) | "PLAIN" \| "SECURE"                               | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureAuthenticationDto
* `PLAIN`
   -> PlainAuthenticationDto |
| password (required)  | string                                            | String containing the password.                                                                                                                                            |
| type (required)      | "HTTP_AUTHENTICATION" \| "KERBEROS" \| "WEBFORM" | Type of authentication.                                                                                                                                                    |
| username (required)  | string                                            | String containing the username.                                                                                                                                            |

### PlainKeyStrokesInputDto

Credential-based input for keystrokes step.

| Name                 | Type                | Description                                                                                                                                                                  |
| -------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| masked               | boolean             | Boolean value set to true only if key strokes input `textValue` field is encoded by recorder and should be decoded by VUP. Set to `false` by default.                        |
| textValue (required) | string              | String value containing the text.                                                                                                                                            |
| type (required)      | "PLAIN" \| "SECURE" | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureKeyStrokesInputDto
* `PLAIN`
   -> PlainKeyStrokesInputDto |

### PlatformEnablementDto

Browser monitor enablement settings for 3rd gen.

| Name                     | Type                                            | Description                                                                           |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| enableOnGrail (required) | boolean                                         | Enable 3rd gen JS agent reporting. Relevant only for grail-enabled SaaS environments. |
| origin                   | "MONITOR" \| "TENANT" \| "DEFAULT" \| "UNKNOWN" | Indicates the origin of these settings.                                               |

### ProxyDto

Browser Monitor proxy.

| Name              | Type   | Description                                     |
| ----------------- | ------ | ----------------------------------------------- |
| pacUrl (required) | string | URL of the Proxy Auto-Configuration (PAC) file. |

### RequestFilterDto

Request filter for Browser Monitor.

| Name                       | Type                                                                | Description                                       |
| -------------------------- | ------------------------------------------------------------------- | ------------------------------------------------- |
| matchingPattern (required) | string                                                              | Regex for request that filter will be applied to. |
| type (required)            | "STARTS_WITH" \| "ENDS_WITH" \| "CONTAINS" \| "EQUALS" \| "REGEX" | Filter type.                                      |

### RequestHeaderOptionsDto

Header Options of a Browser Monitor.

| Name                        | Type                            | Description                                 |
| --------------------------- | ------------------------------- | ------------------------------------------- |
| matchingPatterns (required) | Array\<string>                  | Apply headers to requests matching pattern. |
| requestHeaders (required)   | Array\<[HeaderDto](#headerdto)> | Request headers list.                       |

### SecureAuthenticationDto

Secure authentication dto for Browser Monitor step.

| Name                    | Type                                              | Description                                                                                                                                                                |
| ----------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authServerAllowlist     | string                                            | String containing the allowed servers of KERBEROS authentication. Can be defined only for `KERBEROS` authentication type.                                                  |
| credentialId (required) | string                                            | Id of the username and password credential which will be used for authentication.                                                                                          |
| domain                  | string                                            | String containing the KERBEROS authentication domain. Can be defined only for `KERBEROS` authentication type.                                                              |
| inputType (required)    | "PLAIN" \| "SECURE"                               | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureAuthenticationDto
* `PLAIN`
   -> PlainAuthenticationDto |
| type (required)         | "HTTP_AUTHENTICATION" \| "KERBEROS" \| "WEBFORM" | Type of authentication.                                                                                                                                                    |

### SecureKeyStrokesInputDto

Credential-based input for keystrokes step.

| Name                       | Type                                | Description                                                                                                                                                                  |
| -------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| credentialField (required) | "USERNAME" \| "PASSWORD" \| "TOKEN" | Enum value of the credential field.                                                                                                                                          |
| credentialId (required)    | string                              | String value containing the credential id.                                                                                                                                   |
| type (required)            | "PLAIN" \| "SECURE"                 | Defines the actual set of fields depending on the value. See one of the following objects: * `SECURE`
   -> SecureKeyStrokesInputDto
* `PLAIN`
   -> PlainKeyStrokesInputDto |

### SelectOptionStepDto

Select option step of Browser Monitor.

| Name                  | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | string                                                                                         | Step Id.                                                                                                                                                                                                                                                                                                                                                   |
| name (required)       | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| selections (required) | Array\<[SelectionDto](#selectiondto)>                                                          | Field containing the credential.                                                                                                                                                                                                                                                                                                                           |
| target                | [TargetDto](#targetdto)                                                                        | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required)       | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |
| validationRules       | Array\<[ValidationRuleDto](#validationruledto)>                                                | List of validation rules for the step to perform.                                                                                                                                                                                                                                                                                                          |
| waitCondition         | [BaseWaitConditionDto](#basewaitconditiondto)                                                  | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |

### SelectionDto

Option selection for Browser Monitor step.

| Name             | Type   | Description      |
| ---------------- | ------ | ---------------- |
| index (required) | number | Selection index. |
| value (required) | string | Selection value. |

### SyntheticConfigDto

A DTO for synthetic configuration.

| Name                        | Type   | Description                                                         |
| --------------------------- | ------ | ------------------------------------------------------------------- |
| bmMonitorTimeout (required) | number | bmMonitorTimeout - browser monitor execution timeout (ms).          |
| bmStepTimeout (required)    | number | bmStepTimeout - browser monitor single step execution timeout (ms). |

### SyntheticLocationIdsResponse

A Response for synthetic Location IDs (Smartscape ID + GeoLocation ID).

| Name                     | Type   | Description                               |
| ------------------------ | ------ | ----------------------------------------- |
| geoLocationId (required) | string | GeoLocation ID of the synthetic location. |
| id (required)            | string | Smartscape ID of the synthetic location.  |

### SyntheticLocationsResponse

A list of synthetic locations.

| Name                 | Type                                                                  | Description                    |
| -------------------- | --------------------------------------------------------------------- | ------------------------------ |
| locations (required) | Array\<[LocationCollectionElementDto](#locationcollectionelementdto)> | A list of synthetic locations. |

### SyntheticMonitorListResponse

List of available synthetic monitors.

| Name     | Type                                                              | Description       |
| -------- | ----------------------------------------------------------------- | ----------------- |
| monitors | Array\<[SyntheticMonitorSummaryDto](#syntheticmonitorsummarydto)> | List of monitors. |

### SyntheticMonitorSummaryDto

Basic monitor data.

| Name            | Type                                           | Description                                        |
| --------------- | ---------------------------------------------- | -------------------------------------------------- |
| enabled         | boolean                                        | If true, the monitor is enabled. *default:* `true` |
| id (required)   | string                                         | Id of the monitor.                                 |
| name (required) | string                                         | The name of the monitor.                           |
| type (required) | "NETWORK_AVAILABILITY" \| "BROWSER" \| "HTTP" |                                                    |

### SyntheticOnDemandExecutionRequest

Contains parameters for the on-demand execution of monitors identified by tags, applications, or services.

| Name                     | Type                                                                                          | Description                                                                                                                                                          |
| ------------------------ | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| failOnPerformanceIssue   | boolean                                                                                       | If true, the execution will fail in case of performance issue. *default:* `true`                                                                                     |
| failOnSslWarning         | boolean                                                                                       | Applies to HTTP monitors only. If true, the execution will fail in case of an SSL certificate expiration warning or if the certificate is missing. *default:* `true` |
| group                    | [SyntheticOnDemandGroupExecutionRequest](#syntheticondemandgroupexecutionrequest)             | Contains parameters for the on-demand execution of monitors identified by tags, applications, or services.                                                           |
| metadata                 | [SyntheticOnDemandExecutionRequestMetadata](#syntheticondemandexecutionrequestmetadata)       | String to string map of metadata properties for execution.                                                                                                           |
| monitors                 | Array\<[SyntheticOnDemandMonitorExecutionRequest](#syntheticondemandmonitorexecutionrequest)> | List of monitors to be triggered.                                                                                                                                    |
| processingMode           | "STANDARD" \| "DISABLE_PROBLEM_DETECTION" \| "EXECUTIONS_DETAILS_ONLY"                    | The execution's processing mode. *default:* `"STANDARD"`                                                                                                             |
| stopOnProblem            | boolean                                                                                       | If true, no executions will be scheduled if a problem occurs. *default:* `false`                                                                                     |
| takeScreenshotsOnSuccess | boolean                                                                                       | If true, the screenshots will be taken during the execution of a browser monitor. *default:* `false`                                                                 |

### SyntheticOnDemandExecutionRequestMetadata

String to string map of metadata properties for execution.

**type**: Record\<string, string>

### SyntheticOnDemandExecutionResponse

The result of on-demand synthetic monitor execution.

| Name                               | Type                                                                                                            | Description                                                    |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| batchId (required)                 | string                                                                                                          | The batch identifier of the triggered executions.              |
| triggered                          | Array\<[SyntheticOnDemandTriggeredMonitorResponse](#syntheticondemandtriggeredmonitorresponse)>                 | Monitors for which on-demand executions were triggered.        |
| triggeredCount (required)          | number                                                                                                          | The total number of the triggered executions within the batch. |
| triggeringProblemsCount (required) | number                                                                                                          | The total number of problems within the batch.                 |
| triggeringProblemsDetails          | Array\<[SyntheticOnDemandTriggeringProblemDetailsResponse](#syntheticondemandtriggeringproblemdetailsresponse)> | List with the entities for which triggering problems occurred. |

### SyntheticOnDemandGroupExecutionRequest

Contains parameters for the on-demand execution of monitors identified by tags, applications, or services.

| Name         | Type           | Description                                                                                     |
| ------------ | -------------- | ----------------------------------------------------------------------------------------------- |
| applications | Array\<string> | List of application identifiers. Only monitors with all applications assigned will be executed. |
| locations    | Array\<string> | The locations from where monitors are to be executed.                                           |
| services     | Array\<string> | List of service identifiers. Only monitors with all services assigned will be executed.         |
| tags         | Array\<string> | List of tags. Only monitors with all tags assigned will be executed.                            |

### SyntheticOnDemandMonitorExecutionRequest

Contains monitors to be executed on demand from the locations specified.

| Name                 | Type                                                     | Description                                                                                                                   |
| -------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| customizedScript     | SyntheticOnDemandMonitorExecutionRequestCustomizedScript | Customized script properties for this on-demand batch execution.                                                              |
| executionCount       | number                                                   | The number of times the monitor is to be executed per location; if not set, the monitor will be executed once. *default:* `1` |
| locations            | Array\<string>                                           | The locations from where the monitor is to be executed.                                                                       |
| monitorId (required) | string                                                   | The monitor identifier.                                                                                                       |
| repeatMode           | "SEQUENTIAL" \| "PARALLEL"                               | Execution repeat mode. If not set, the mode is SEQUENTIAL. *default:* `"SEQUENTIAL"`                                          |

### SyntheticOnDemandTriggeredExecutionDetailsResponse

Contains details of the triggered on-demand execution.

| Name                   | Type   | Description                                                              |
| ---------------------- | ------ | ------------------------------------------------------------------------ |
| executionId (required) | string | The execution's identifier.                                              |
| locationId (required)  | string | The identifier of the location from which the monitor is to be executed. |

### SyntheticOnDemandTriggeredMonitorResponse

Contains the list of on-demand executions of the monitor.

| Name                  | Type                                                                                                              | Description                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| executions (required) | Array\<[SyntheticOnDemandTriggeredExecutionDetailsResponse](#syntheticondemandtriggeredexecutiondetailsresponse)> | The list of triggered executions. |
| monitorId (required)  | string                                                                                                            | The monitor identifier.           |

### SyntheticOnDemandTriggeringProblemDetailsResponse

Contains the details of problems encountered while triggering on-demand executions.

| Name                   | Type   | Description                         |
| ---------------------- | ------ | ----------------------------------- |
| cause (required)       | string | The cause of not triggering entity. |
| details (required)     | string | The details of triggering problem.  |
| executionId (required) | string | The execution identifier.           |
| id (required)          | string | The entity identifier.              |
| locationId             | string | The location identifier.            |

### SyntheticPrivateLocationDto

Configuration of a private synthetic location.

**countryCode**, **regionCode**, **city** parameters are optional as they can be retrieved based on **latitude** and **longitude** of location.

| Name                             | Type                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoUpdateChromium               | boolean                                                                       | Non-containerized location property. Auto upgrade of Chromium is enabled (`true`) or disabled (`false`).                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| availabilityLocationOutage       | boolean                                                                       | Alerting for location outage is enabled (`true`) or disabled (`false`). Supported only for private Synthetic locations.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| availabilityNodeOutage           | boolean                                                                       | Alerting for node outage is enabled (`true`) or disabled (`false`). \n\n If enabled, the outage of *any* node in the location triggers an alert. Supported only for private Synthetic locations.                                                                                                                                                                                                                                                                                                                                          |
| availabilityNotificationsEnabled | boolean                                                                       | Notifications for location and node outage are enabled (`true`) or disabled (`false`). Supported only for private Synthetic locations.                                                                                                                                                                                                                                                                                                                                                                                                    |
| browserExecutionSupported        | boolean                                                                       | Containerized location property. Boolean value describes if browser monitors will be executed on this location: * `false`
  : Browser monitor executions disabled.
* `true`
  : Browser monitor executions enabled.                                                                                                                                                                                                                                                                                                                       |
| city                             | string                                                                        | The city of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| countryCode                      | string                                                                        | The country code of the location. To fetch the list of available country codes, use the [GET all countries](https://dt-url.net/37030go) request.                                                                                                                                                                                                                                                                                                                                                                                          |
| countryName                      | string                                                                        | The country name of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| deploymentType                   | "UNKNOWN" \| "KUBERNETES" \| "OPENSHIFT" \| "STANDARD"                        | The deployment type of the location: * `STANDARD`
  : The location is deployed on Windows or Linux.
* `KUBERNETES`
  : The location is deployed on Kubernetes.                                                                                                                                                                                                                                                                                                                                                                            |
| fipsMode                         | "DISABLED" \| "ENABLED" \| "ENABLED_WITH_CORPORATE_PROXY"                  | Containerized location property indicating whether FIPS mode is enabled on this location: * `DISABLED`
  : FIPS is not enabled on the location.
* `ENABLED`
  : FIPS is enabled on the location.
* `ENABLED_WITH_CORPORATE_PROXY`
  : FIPS with corporate proxy is enabled on this location. Default: DISABLED                                                                                                                                                                                                                            |
| geoLocationId                    | string                                                                        | The Dynatrace GeoLocation ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| id                               | string                                                                        | The Dynatrace Location ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| latitude (required)              | number                                                                        | The latitude of the location in `DDD.dddd` format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| locationNodeOutageDelayInMinutes | number                                                                        | Alert if location or node outage lasts longer than *X* minutes. \n\n Only applicable when `availabilityLocationOutage` or `availabilityNodeOutage` is set to `true`. Supported only for private Synthetic locations.                                                                                                                                                                                                                                                                                                                      |
| longitude (required)             | number                                                                        | The longitude of the location in `DDD.dddd` format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| maxActiveGateCount               | number                                                                        | Containerized location property. The maximum number of ActiveGates deployed for the location (required for a Kubernetes location).                                                                                                                                                                                                                                                                                                                                                                                                        |
| minActiveGateCount               | number                                                                        | Containerized location property. The minimum number of ActiveGates deployed for the location (required for a Kubernetes location).                                                                                                                                                                                                                                                                                                                                                                                                        |
| namExecutionSupported            | boolean                                                                       | Containerized location property. Boolean value describes if icmp monitors will be executed on this location: * `false`
  : Icmp monitor executions disabled.
* `true`
  : Icmp monitor executions enabled.                                                                                                                                                                                                                                                                                                                                |
| name (required)                  | string                                                                        | The name of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| nodeNames                        | [SyntheticPrivateLocationDtoNodeNames](#syntheticprivatelocationdtonodenames) | A mapping id to name of the nodes belonging to the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| nodeSize                         | "M" \| "S" \| "UNSUPPORTED" \| "XS"                                           | Containerized location property. The size of a containerized node deployed for the location (required for a Kubernetes location). Accepted values: * `XS`
  : extra small
* `S`
  : small
* `M`
  : medium The node size&#x20;
  `L`
   is not supported in containerized locations.                                                                                                                                                                                                                                                      |
| nodes                            | Array\<string>                                                                | A list of synthetic nodes belonging to the location. You can retrieve the list of available nodes with the [GET all nodes](https://dt-url.net/miy3rpl) call.                                                                                                                                                                                                                                                                                                                                                                              |
| regionCode                       | string                                                                        | The region code of the location. To fetch the list of available region codes, use the [GET regions of the country](https://dt-url.net/az230x0) request.                                                                                                                                                                                                                                                                                                                                                                                   |
| regionName                       | string                                                                        | The region name of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| status                           | "DISABLED" \| "ENABLED" \| "HIDDEN"                                           | The status of the location: * `ENABLED`
  : The location is displayed as active in the UI. You can assign monitors to the location.
* `DISABLED`
  : The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
* `HIDDEN`
  : The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as&#x20;
  `HIDDEN`
   when no monitor is assigned to it. |
| type (required)                  | "PUBLIC" \| "PRIVATE" \| "CLUSTER"                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| useNewKubernetesVersion          | boolean                                                                       | Containerized location property. Boolean value describes which kubernetes version will be used: * `false`
  : Version 1.23+ that is older than 1.26
* `true`
  : Version 1.26+.                                                                                                                                                                                                                                                                                                                                                           |

### SyntheticPrivateLocationDtoNodeNames

A mapping id to name of the nodes belonging to the location.

**type**: Record\<string, string>

### SyntheticPrivateLocationUpdateRequest

The request to update of a private Synthetic location. Some fields need to be defined only for containerized locations.

| Name                             | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoUpdateChromium               | boolean                                                      | Non-containerized location property. Auto upgrade of Chromium is enabled (`true`) or disabled (`false`).                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| availabilityLocationOutage       | boolean                                                      | Alerting for location outage is enabled (`true`) or disabled (`false`). Supported only for private Synthetic locations.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| availabilityNodeOutage           | boolean                                                      | Alerting for node outage is enabled (`true`) or disabled (`false`). \n\n If enabled, the outage of *any* node in the location triggers an alert. Supported only for private Synthetic locations.                                                                                                                                                                                                                                                                                                                                          |
| availabilityNotificationsEnabled | boolean                                                      | Notifications for location and node outage are enabled (`true`) or disabled (`false`). Supported only for private Synthetic locations.                                                                                                                                                                                                                                                                                                                                                                                                    |
| browserExecutionSupported        | boolean                                                      | Containerized location property. Boolean value describes if browser monitors will be executed on this location: * `false`
  : Browser monitor executions disabled.
* `true`
  : Browser monitor executions enabled.                                                                                                                                                                                                                                                                                                                       |
| city                             | string                                                       | The city of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| countryCode                      | string                                                       | The country code of the location. To fetch the list of available country codes, use the [GET all countries](https://dt-url.net/37030go) request.                                                                                                                                                                                                                                                                                                                                                                                          |
| deploymentType                   | "UNKNOWN" \| "KUBERNETES" \| "OPENSHIFT" \| "STANDARD"       | The deployment type of the location: * `STANDARD`
  : The location is deployed on Windows or Linux.
* `KUBERNETES`
  : The location is deployed on Kubernetes.                                                                                                                                                                                                                                                                                                                                                                            |
| fipsMode                         | "DISABLED" \| "ENABLED" \| "ENABLED_WITH_CORPORATE_PROXY" | Containerized location property indicating whether FIPS mode is enabled on this location: * `DISABLED`
  : FIPS is not enabled on the location.
* `ENABLED`
  : FIPS is enabled on the location.
* `ENABLED_WITH_CORPORATE_PROXY`
  : FIPS with corporate proxy is enabled on this location. Default: DISABLED                                                                                                                                                                                                                            |
| latitude (required)              | number                                                       | The latitude of the location in `DDD.dddd` format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| locationNodeOutageDelayInMinutes | number                                                       | Alert if location or node outage lasts longer than *X* minutes. \n\n Only applicable when `availabilityLocationOutage` or `availabilityNodeOutage` is set to `true`. Supported only for private Synthetic locations.                                                                                                                                                                                                                                                                                                                      |
| longitude (required)             | number                                                       | The longitude of the location in `DDD.dddd` format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| maxActiveGateCount               | number                                                       | Containerized location property. The maximum number of ActiveGates deployed for the location (required for a Kubernetes location).                                                                                                                                                                                                                                                                                                                                                                                                        |
| minActiveGateCount               | number                                                       | Containerized location property. The minimum number of ActiveGates deployed for the location (required for a Kubernetes location).                                                                                                                                                                                                                                                                                                                                                                                                        |
| namExecutionSupported            | boolean                                                      | Containerized location property. Boolean value describes if icmp monitors will be executed on this location: * `false`
  : Icmp monitor executions disabled.
* `true`
  : Icmp monitor executions enabled.                                                                                                                                                                                                                                                                                                                                |
| name (required)                  | string                                                       | The name of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| nodeSize                         | "M" \| "S" \| "UNSUPPORTED" \| "XS"                          | Containerized location property. The size of a containerized node deployed for the location (required for a Kubernetes location). Accepted values: * `XS`
  : extra small
* `S`
  : small
* `M`
  : medium The node size&#x20;
  `L`
   is not supported in containerized locations.                                                                                                                                                                                                                                                      |
| nodes                            | Array\<string>                                               | A list of synthetic nodes belonging to the location. You can retrieve the list of available nodes with the [GET all nodes](https://dt-url.net/miy3rpl) call.                                                                                                                                                                                                                                                                                                                                                                              |
| regionCode                       | string                                                       | The region code of the location. To fetch the list of available region codes, use the [GET regions of the country](https://dt-url.net/az230x0) request.                                                                                                                                                                                                                                                                                                                                                                                   |
| status                           | "DISABLED" \| "ENABLED" \| "HIDDEN"                          | The status of the location: * `ENABLED`
  : The location is displayed as active in the UI. You can assign monitors to the location.
* `DISABLED`
  : The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
* `HIDDEN`
  : The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as&#x20;
  `HIDDEN`
   when no monitor is assigned to it. |
| type (required)                  | "PUBLIC" \| "PRIVATE" \| "CLUSTER"                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| useNewKubernetesVersion          | boolean                                                      | Containerized location property. Boolean value describes which kubernetes version will be used: * `false`
  : Version 1.23+ that is older than 1.26
* `true`
  : Version 1.26+.                                                                                                                                                                                                                                                                                                                                                           |

### SyntheticPublicLocationDto

Configuration of a public synthetic location.

| Name                      | Type                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| browserType (required)    | string                                                                                                                  | The type of the browser the location is using to execute browser monitors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| browserVersion (required) | string                                                                                                                  | The version of the browser the location is using to execute browser monitors.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| capabilities              | Array\<string>                                                                                                          | A list of location capabilities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| city                      | string                                                                                                                  | The city of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| cloudPlatform (required)  | "AZURE" \| "ALIBABA" \| "GOOGLE_CLOUD" \| "OTHER" \| "AMAZON_EC2" \| "DYNATRACE_CLOUD" \| "INTEROUTE" \| "UNDEFINED" | The cloud provider where the location is hosted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| countryCode               | string                                                                                                                  | The country code of the location. To fetch the list of available country codes, use the [GET all countries](https://dt-url.net/37030go) request.                                                                                                                                                                                                                                                                                                                                                                                          |
| countryName               | string                                                                                                                  | The country name of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| geoLocationId             | string                                                                                                                  | The Dynatrace GeoLocation ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| id                        | string                                                                                                                  | The Dynatrace Location ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ips (required)            | Array\<string>                                                                                                          | The list of IP addresses assigned to the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| latitude (required)       | number                                                                                                                  | The latitude of the location in `DDD.dddd` format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| longitude (required)      | number                                                                                                                  | The longitude of the location in `DDD.dddd` format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| name (required)           | string                                                                                                                  | The name of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| regionCode                | string                                                                                                                  | The region code of the location. To fetch the list of available region codes, use the [GET regions of the country](https://dt-url.net/az230x0) request.                                                                                                                                                                                                                                                                                                                                                                                   |
| regionName                | string                                                                                                                  | The region name of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| stage (required)          | "BETA" \| "COMING_SOON" \| "DELETED" \| "GA"                                                                           | The stage of the location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| status                    | "DISABLED" \| "ENABLED" \| "HIDDEN"                                                                                     | The status of the location: * `ENABLED`
  : The location is displayed as active in the UI. You can assign monitors to the location.
* `DISABLED`
  : The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
* `HIDDEN`
  : The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as&#x20;
  `HIDDEN`
   when no monitor is assigned to it. |
| type (required)           | "PUBLIC" \| "PRIVATE" \| "CLUSTER"                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### SyntheticPublicLocationUpdateRequest

The request to update of a public Synthetic location.

| Name              | Type                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status (required) | "DISABLED" \| "ENABLED" \| "HIDDEN" | The status of the location: * `ENABLED`
  : The location is displayed as active in the UI. You can assign monitors to the location.
* `DISABLED`
  : The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
* `HIDDEN`
  : The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as&#x20;
  `HIDDEN`
   when no monitor is assigned to it. |
| type (required)   | "PUBLIC" \| "PRIVATE" \| "CLUSTER"  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### SyntheticPublicLocationsStatusDto

The status of public synthetic locations.

| Name               | Type    | Description                                                                           |
| ------------------ | ------- | ------------------------------------------------------------------------------------- |
| enabled (required) | boolean | Synthetic monitors can (`true`) or can't (`false`) run on public synthetic locations. |

### SyntheticTagWithSourceDto

The tag with source of a monitored entity.

| Name           | Type                              | Description                                                                                   |
| -------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| context        | string                            | The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value. |
| key (required) | string                            | The key of the tag.                                                                           |
| source         | "AUTO" \| "RULE_BASED" \| "USER" | The source of the tag, such as USER, RULE_BASED or AUTO.                                     |
| value          | string                            | The value of the tag.                                                                         |

### TargetDto

Target of Browser Monitor step.

| Name                | Type                              | Description       |
| ------------------- | --------------------------------- | ----------------- |
| locators (required) | Array\<[LocatorDto](#locatordto)> | List of locators. |
| window (required)   | string                            | Target window.    |

### TestDeviceDto

Test device of a Browser Monitor.

| Name              | Type    | Description                                                                             |
| ----------------- | ------- | --------------------------------------------------------------------------------------- |
| height (required) | number  | Device height in px.                                                                    |
| mobile            | boolean | Device is mobile. If not defined in request, it will be set to false by default.        |
| name (required)   | string  | Device name.                                                                            |
| touchEnabled      | boolean | Device is touch enabled. If not defined in request, it will be set to false by default. |
| width (required)  | number  | Device width in px.                                                                     |

### TimeWaitConditionDto

Time wait condition for Browser Monitor step.

| Name                    | Type                                                                     | Description                                                                                                                                                                                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| milliseconds (required) | number                                                                   | Wait time in milliseconds.                                                                                                                                                                                                                                                                                   |
| type (required)         | "NETWORK" \| "NEXT_EVENT" \| "PAGE_COMPLETE" \| "TIME" \| "VALIDATION" | Defines the actual set of fields depending on the value. See one of the following objects: * `TIME`
   -> TimeWaitConditionDto
* `VALIDATION`
   -> ValidationWaitConditionDto
* `PAGE_COMPLETE`
   -> BaseWaitConditionDto
* `NETWORK`
   -> BaseWaitConditionDto
* `NEXT_EVENT`
   -> BaseWaitConditionDto |

### TimeoutSettingsDto

Timeout settings of a Browser Monitor.

| Name                        | Type   | Description                                                                                                                                                                 |
| --------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| temporaryActionLimit        | number | Cascading setTimeout calls number limit. If not defined in request, it will be set to 1 by default.                                                                         |
| temporaryActionTotalTimeout | number | No additional timeout actions will be created once this time limit is reached. Value must be higher than 0 ms. If not defined in request, it will be set to 100 by default. |

### ValidationRuleDto

Validation rule of Browser Monitor step.

| Name                       | Type                                                  | Description                                                                                                                   |
| -------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| failIfFound (required)     | boolean                                               | Boolean value, true if we should fail on found pattern. If not defined in request, it will be set to false by default.        |
| matchingPattern (required) | string                                                | Text pattern that should match on the website.                                                                                |
| regex                      | boolean                                               | Boolean value, true if the "matchingPattern" value is a regex. If not defined in request, it will be set to false by default. |
| target                     | [TargetDto](#targetdto)                               | Target of Browser Monitor step.                                                                                               |
| type (required)            | "TEXT_MATCH" \| "CONTENT_MATCH" \| "ELEMENT_MATCH" | Type of validation.                                                                                                           |

### ValidationWaitConditionDto

Validation wait condition for Browser Monitor step.

| Name                             | Type                                                                     | Description                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| timeoutInMilliseconds (required) | number                                                                   | Validation timeout in milliseconds.                                                                                                                                                                                                                                                                          |
| type (required)                  | "NETWORK" \| "NEXT_EVENT" \| "PAGE_COMPLETE" \| "TIME" \| "VALIDATION" | Defines the actual set of fields depending on the value. See one of the following objects: * `TIME`
   -> TimeWaitConditionDto
* `VALIDATION`
   -> ValidationWaitConditionDto
* `PAGE_COMPLETE`
   -> BaseWaitConditionDto
* `NETWORK`
   -> BaseWaitConditionDto
* `NEXT_EVENT`
   -> BaseWaitConditionDto |
| validationRule (required)        | [ValidationRuleDto](#validationruledto)                                  | Validation rule of Browser Monitor step.                                                                                                                                                                                                                                                                     |

### VisuallyCompleteOptionsDto

Visually Complete Options of a Browser Monitor.

| Name               | Type           | Description                                                                                                                                                                                                     |
| ------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| excludedElements   | Array\<string> | Query CSS selectors to specify mutation nodes (elements that change) to ignore in Visually complete and Speed index calculation.                                                                                |
| excludedUrls       | Array\<string> | Use regular expressions to define URLs for images and iFrames to exclude from detection by the Visually complete module.                                                                                        |
| imageSizeThreshold | number         | Use this setting to define the minimum visible area per element (in pixels) for an element to be counted towards Visually complete and Speed index. If not defined in request, it will be set to 50 by default. |
| inactivityTimeout  | number         | The time the Visually complete module waits for inactivity and no further mutations on the page after the load action. If not defined in request, it will be set to 1000 by default.                            |
| mutationTimeout    | number         | The time the Visually complete module waits after an XHR or custom action closes to start the calculation. If not defined in request, it will be set to 50 by default.                                          |
