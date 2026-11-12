### SyntheticBrowserMonitorConfigurationDto

Browser Monitor configuration.

| Name                   | Type                                                            | Description                                                                                                            |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| blockedRequests        | Array\<string>                                                  | All requests matching the specified patterns will be blocked during the execution of the monitor.                      |
| browserPermissions     | [BrowserPermissionsDto](#browserpermissionsdto)                 | Permissions settings for browser.                                                                                      |
| bypassCSP              | boolean                                                         | Bypass ContentSecurity Policy for monitored pages. If not defined in request, it will be set to false by default.      |
| chromiumStartupFlags   | [ChromiumStartupFlagsDto](#chromiumstartupflagsdto)             | Chromium startup flags of a Browser Monitor.                                                                           |
| clientCertificates     | Array\<[ClientCertificateDto](#clientcertificatedto)>           | Identifier of stored client's certificate.                                                                             |
| cookies                | Array\<[SyntheticMonitorCookieDto](#syntheticmonitorcookiedto)> | Cookies list.                                                                                                          |
| device (required)      | [TestDeviceDto](#testdevicedto)                                 | Test device of a Browser Monitor.                                                                                      |
| enablement             | [EnablementDto](#enablementdto)                                 | Browser monitor enablement settings.                                                                                   |
| experimentalProperties | Array\<[MonitorPropertyDto](#monitorpropertydto)>               | Experimental properties list.                                                                                          |
| filteredRequests       | [FilteredRequestsDto](#filteredrequestsdto)                     | Filtered requests of a Browser Monitor.                                                                                |
| ignoredErrorCodes      | [IgnoredErrorCodesDto](#ignorederrorcodesdto)                   | Ignored Error Codes of a Browser Monitor.                                                                              |
| javaScriptSettings     | [JavaScriptAgentSettingsDto](#javascriptagentsettingsdto)       | JavaScript Agent Settings.                                                                                             |
| monitorFrames          | boolean                                                         | Capture performance metrics for pages loaded in frames. If not defined in request, it will be set to false by default. |
| networkThrottling      | [NetworkThrottlingDto](#networkthrottlingdto)                   | Network throttling of a Browser Monitor.                                                                               |
| proxy                  | [ProxyDto](#proxydto)                                           | Browser Monitor proxy.                                                                                                 |
| requestHeaderOptions   | [RequestHeaderOptionsDto](#requestheaderoptionsdto)             | Header Options of a Browser Monitor.                                                                                   |
| useIESupportedAgent    | boolean                                                         | useIESupportedAgent flag. If not defined in request, it will be set to false by default.                               |
| userAgent              | string                                                          | User agent                                                                                                             |
