## Enums

### ~~AuthenticationDtoInputType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `SECURE` -> SecureAuthenticationDto
- `PLAIN` -> PlainAuthenticationDto

#### Enum keys

`Plain` | `Secure`

### ~~AuthenticationDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Type of authentication.

#### Enum keys

`HttpAuthentication` | `Kerberos` | `Webform`

### ~~BaseWaitConditionDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `TIME` -> TimeWaitConditionDto
- `VALIDATION` -> ValidationWaitConditionDto
- `PAGE_COMPLETE` -> BaseWaitConditionDto
- `NETWORK` -> BaseWaitConditionDto
- `NEXT_EVENT` -> BaseWaitConditionDto

#### Enum keys

`Network` | `NextEvent` | `PageComplete` | `Time` | `Validation`

### ~~ChromiumStartupFlagsDtoAutoplayPolicy~~

> ⚠️ **Deprecated**
> Use literal values.

autoplay-policy type.

#### Enum keys

`DocumentUserActivationRequired` | `NoUserGestureRequired`

### ~~EnablementDtoOrigin~~

> ⚠️ **Deprecated**
> Use literal values.

Indicates the origin of these settings.

#### Enum keys

`Default` | `Monitor` | `Tenant` | `Unknown`

### ~~ErrorResponseDetailsType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `constraintViolation` -> ConstraintViolationDetails

#### Enum keys

`ConstraintViolation`

### ~~FilteredRequestsDtoMode~~

> ⚠️ **Deprecated**
> Use literal values.

Filter mode for filtered requests.

#### Enum keys

`Allow` | `Block`

### ~~GetLocationsQueryCapability~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Browser` | `Dns` | `Http` | `HttpHighResource` | `Icmp` | `Tcp`

### ~~GetLocationsQueryCloudPlatform~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Alibaba` | `Aws` | `Azure` | `GoogleCloud` | `Other`

### ~~GetLocationsQueryType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Private` | `Public`

### ~~KeyPerformanceMetricsLoadActionKpm~~

> ⚠️ **Deprecated**
> Use literal values.

Load action key performance metric.

#### Enum keys

`CumulativeLayoutShift` | `DomInteractive` | `LargestContentfulPaint` | `LoadEventEnd` | `LoadEventStart` | `ResponseEnd` | `ResponseStart` | `SpeedIndex` | `UserActionDuration` | `VisuallyComplete`

### ~~KeyPerformanceMetricsXhrActionKpm~~

> ⚠️ **Deprecated**
> Use literal values.

XHR action key performance metric.

#### Enum keys

`ResponseEnd` | `ResponseStart` | `UserActionDuration` | `VisuallyComplete`

### ~~KeystrokesInputDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `SECURE` -> SecureKeystrokesInputDto
- `PLAIN` -> PlainKeystrokesInputDto

#### Enum keys

`Plain` | `Secure`

### ~~LocationCollectionElementCloudPlatform~~

> ⚠️ **Deprecated**
> Use literal values.

The cloud provider where the location is hosted.

Only applicable to `PUBLIC` locations.

#### Enum keys

`Alibaba` | `AmazonEc2` | `Azure` | `DynatraceCloud` | `GoogleCloud` | `Interoute` | `Other` | `Undefined`

### ~~LocationCollectionElementDeploymentType~~

> ⚠️ **Deprecated**
> Use literal values.

Location's deployment type

#### Enum keys

`Kubernetes` | `Openshift` | `Standard` | `Unknown`

### ~~LocationCollectionElementStage~~

> ⚠️ **Deprecated**
> Use literal values.

The release stage of the location.

#### Enum keys

`Beta` | `ComingSoon` | `Deleted` | `Ga`

### ~~LocationCollectionElementStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`

### ~~LocationCollectionElementType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the location.

#### Enum keys

`Cluster` | `Private` | `Public`

### ~~LocatorDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Enum value of the locator type.

#### Enum keys

`Css` | `Dom`

### ~~PrivateSyntheticLocationDeploymentType~~

> ⚠️ **Deprecated**
> Use literal values.

The deployment type of the location:

- `STANDARD`: The location is deployed on Windows or Linux.
- `KUBERNETES`: The location is deployed on Kubernetes.

#### Enum keys

`Kubernetes` | `Openshift` | `Standard` | `Unknown`

### ~~PrivateSyntheticLocationFipsMode~~

> ⚠️ **Deprecated**
> Use literal values.

Containerized location property indicating whether FIPS mode is enabled on this location:

- `DISABLED`: FIPS is not enabled on the location.
- `ENABLED`: FIPS is enabled on the location.
- `ENABLED_WITH_CORPORATE_PROXY`: FIPS with corporate proxy is enabled on this location.
  Default: DISABLED

#### Enum keys

`Disabled` | `Enabled` | `EnabledWithCorporateProxy`

### ~~PrivateSyntheticLocationStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location:

- `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
- `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
- `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`

### ~~PrivateSyntheticLocationType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Cluster` | `Private` | `Public`

### ~~RequestFilterDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Filter type.

#### Enum keys

`Contains` | `EndsWith` | `Equals` | `Regex` | `StartsWith`

### ~~SyntheticBrowserMonitorRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `Http` | `MultiProtocol`

### ~~SyntheticBrowserMonitorResponseType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `MultiProtocol`

### ~~SyntheticBrowserMonitorStepDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `NAVIGATE` -> NavigateStepDto
- `CLICK` -> InteractionStepDto
- `TAP` -> InteractionStepDto
- `KEYSTROKES` -> KeyStrokesStepDto
- `JAVASCRIPT` -> JavaScriptStepDto
- `SELECT_OPTION` -> SelectOptionStepDto
- `COOKIE` -> CookieStepDto

#### Enum keys

`Click` | `Cookie` | `Javascript` | `Keystrokes` | `Navigate` | `SelectOption` | `Tap`

### ~~SyntheticLocationStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location:

- `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
- `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
- `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`

### ~~SyntheticLocationType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `PUBLIC` -> PublicSyntheticLocation
- `PRIVATE` -> PrivateSyntheticLocation
- `CLUSTER` -> PrivateSyntheticLocation

#### Enum keys

`Cluster` | `Private` | `Public`

### ~~SyntheticLocationUpdateType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `PUBLIC` -> SyntheticPublicLocationUpdate
- `PRIVATE` -> SyntheticPrivateLocationUpdate

#### Enum keys

`Private` | `Public`

### ~~SyntheticMonitorOutageHandlingSettingsDtoOrigin~~

> ⚠️ **Deprecated**
> Use literal values.

Indicates the origin of these settings.

#### Enum keys

`Default` | `Monitor` | `Tenant` | `Unknown`

### ~~SyntheticMonitorPerformanceThresholdDtoAggregation~~

> ⚠️ **Deprecated**
> Use literal values.

Aggregation type

#### Enum keys

`Avg` | `Max` | `Min`

### ~~SyntheticMonitorPerformanceThresholdDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Type of performance threshold.

#### Enum keys

`Monitor` | `Step`

### ~~SyntheticMonitorSummaryDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Browser` | `Http` | `MultiProtocol` | `ThirdParty`

### ~~SyntheticMultiProtocolMonitorRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `Http` | `MultiProtocol`

### ~~SyntheticMultiProtocolMonitorResponseType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `MultiProtocol`

### ~~SyntheticMultiProtocolMonitorStepDtoRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

Request type.

#### Enum keys

`Dns` | `Icmp` | `Tcp`

### ~~SyntheticOnDemandExecutionRequestMonitorRepeatMode~~

> ⚠️ **Deprecated**
> Use literal values.

Execution repeat mode. If not set, the mode is SEQUENTIAL.

#### Enum keys

`Parallel` | `Sequential`

### ~~SyntheticOnDemandExecutionRequestProcessingMode~~

> ⚠️ **Deprecated**
> Use literal values.

The execution's processing mode

#### Enum keys

`DisableProblemDetection` | `ExecutionsDetailsOnly` | `Standard`

### ~~SyntheticTagWithSourceDtoSource~~

> ⚠️ **Deprecated**
> Use literal values.

The source of the tag, such as USER, RULE_BASED or AUTO.

#### Enum keys

`Auto` | `RuleBased` | `User`

### ~~ValidationRuleDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Type of validation.

#### Enum keys

`ContentMatch` | `ElementMatch` | `TextMatch`
