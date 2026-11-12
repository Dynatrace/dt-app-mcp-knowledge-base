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

### ~~BrowserMonitorRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `Http` | `NetworkAvailability`

### ~~BrowserMonitorResponseType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `NetworkAvailability`

### ~~BrowserMonitorStepDtoType~~

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

### ~~ChromiumStartupFlagsDtoAutoplayPolicy~~

> ⚠️ **Deprecated**
> Use literal values.

autoplay-policy type.

#### Enum keys

`DocumentUserActivationRequired` | `NoUserGestureRequired`

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

### ~~HttpAuthenticationDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Authentication type.

#### Enum keys

`BasicAuthentication` | `Kerberos` | `Ntlm`

### ~~HttpMonitorRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `Http` | `NetworkAvailability`

### ~~HttpMonitorResponseType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `NetworkAvailability`

### ~~HttpMonitorStepDtoMethodType~~

> ⚠️ **Deprecated**
> Use literal values.

Method type.

#### Enum keys

`Delete` | `Get` | `Head` | `Options` | `Patch` | `Post` | `Put`

### ~~KeyPerformanceMetricsDtoLoadActionKpm~~

> ⚠️ **Deprecated**
> Use literal values.

Load action key performance metric.

#### Enum keys

`CumulativeLayoutShift` | `DomInteractive` | `LargestContentfulPaint` | `LoadEventEnd` | `LoadEventStart` | `ResponseEnd` | `ResponseStart` | `SpeedIndex` | `UserActionDuration` | `VisuallyComplete`

### ~~KeyPerformanceMetricsDtoXhrActionKpm~~

> ⚠️ **Deprecated**
> Use literal values.

XHR action key performance metric.

#### Enum keys

`ResponseEnd` | `ResponseStart` | `UserActionDuration` | `VisuallyComplete`

### ~~KeystrokesInputDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Defines the actual set of fields depending on the value. See one of the following objects:

- `SECURE` -> SecureKeyStrokesInputDto
- `PLAIN` -> PlainKeyStrokesInputDto

#### Enum keys

`Plain` | `Secure`

### ~~LocationCollectionElementDtoCloudPlatform~~

> ⚠️ **Deprecated**
> Use literal values.

The cloud provider where the location is hosted.

Only applicable to `PUBLIC` locations.

#### Enum keys

`Alibaba` | `AmazonEc2` | `Azure` | `DynatraceCloud` | `GoogleCloud` | `Interoute` | `Other` | `Undefined`

### ~~LocationCollectionElementDtoDeploymentType~~

> ⚠️ **Deprecated**
> Use literal values.

Location's deployment type.

#### Enum keys

`Kubernetes` | `Openshift` | `Standard` | `Unknown`

### ~~LocationCollectionElementDtoStage~~

> ⚠️ **Deprecated**
> Use literal values.

The release stage of the location.

#### Enum keys

`Beta` | `ComingSoon` | `Deleted` | `Ga`

### ~~LocationCollectionElementDtoStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`

### ~~LocationCollectionElementDtoType~~

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

### ~~MonitorOutageHandlingSettingsDtoOrigin~~

> ⚠️ **Deprecated**
> Use literal values.

Indicates the origin of these settings.

#### Enum keys

`Default` | `Monitor` | `Tenant` | `Unknown`

### ~~MonitorPerformanceThresholdDtoAggregation~~

> ⚠️ **Deprecated**
> Use literal values.

Aggregation type.

#### Enum keys

`Avg` | `Max` | `Min`

### ~~MonitorPerformanceThresholdDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Type of performance threshold.

#### Enum keys

`Monitor` | `Step` | `UndefinedStep`

### ~~NetworkAvailabilityMonitorRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `Http` | `NetworkAvailability`

### ~~NetworkAvailabilityMonitorResponseType~~

> ⚠️ **Deprecated**
> Use literal values.

Monitor type.

#### Enum keys

`Browser` | `NetworkAvailability`

### ~~NetworkAvailabilityMonitorStepDtoRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

Request type.

#### Enum keys

`Dns` | `Icmp` | `Tcp`

### ~~PlatformEnablementDtoOrigin~~

> ⚠️ **Deprecated**
> Use literal values.

Indicates the origin of these settings.

#### Enum keys

`Default` | `Monitor` | `Tenant` | `Unknown`

### ~~RequestFilterDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

Filter type.

#### Enum keys

`Contains` | `EndsWith` | `Equals` | `Regex` | `StartsWith`

### ~~SyntheticMonitorSummaryDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Browser` | `Http` | `NetworkAvailability`

### ~~SyntheticOnDemandExecutionRequestProcessingMode~~

> ⚠️ **Deprecated**
> Use literal values.

The execution's processing mode.

#### Enum keys

`DisableProblemDetection` | `ExecutionsDetailsOnly` | `Standard`

### ~~SyntheticOnDemandMonitorExecutionRequestRepeatMode~~

> ⚠️ **Deprecated**
> Use literal values.

Execution repeat mode. If not set, the mode is SEQUENTIAL.

#### Enum keys

`Parallel` | `Sequential`

### ~~SyntheticPrivateLocationDtoDeploymentType~~

> ⚠️ **Deprecated**
> Use literal values.

The deployment type of the location:

- `STANDARD`: The location is deployed on Windows or Linux.
- `KUBERNETES`: The location is deployed on Kubernetes.

#### Enum keys

`Kubernetes` | `Openshift` | `Standard` | `Unknown`

### ~~SyntheticPrivateLocationDtoFipsMode~~

> ⚠️ **Deprecated**
> Use literal values.

Containerized location property indicating whether FIPS mode is enabled on this location:

- `DISABLED`: FIPS is not enabled on the location.
- `ENABLED`: FIPS is enabled on the location.
- `ENABLED_WITH_CORPORATE_PROXY`: FIPS with corporate proxy is enabled on this location.
  Default: DISABLED

#### Enum keys

`Disabled` | `Enabled` | `EnabledWithCorporateProxy`

### ~~SyntheticPrivateLocationDtoNodeSize~~

> ⚠️ **Deprecated**
> Use literal values.

Containerized location property. The size of a containerized node deployed for the location (required for a Kubernetes location). Accepted values:

- `XS`: extra small
- `S`: small
- `M`: medium
  The node size `L` is not supported in containerized locations.

#### Enum keys

`M` | `S` | `Unsupported` | `Xs`

### ~~SyntheticPrivateLocationDtoStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location:

- `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
- `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
- `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`

### ~~SyntheticPrivateLocationDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Cluster` | `Private` | `Public`

### ~~SyntheticPrivateLocationUpdateRequestDeploymentType~~

> ⚠️ **Deprecated**
> Use literal values.

The deployment type of the location:

- `STANDARD`: The location is deployed on Windows or Linux.
- `KUBERNETES`: The location is deployed on Kubernetes.

#### Enum keys

`Kubernetes` | `Openshift` | `Standard` | `Unknown`

### ~~SyntheticPrivateLocationUpdateRequestFipsMode~~

> ⚠️ **Deprecated**
> Use literal values.

Containerized location property indicating whether FIPS mode is enabled on this location:

- `DISABLED`: FIPS is not enabled on the location.
- `ENABLED`: FIPS is enabled on the location.
- `ENABLED_WITH_CORPORATE_PROXY`: FIPS with corporate proxy is enabled on this location.
  Default: DISABLED

#### Enum keys

`Disabled` | `Enabled` | `EnabledWithCorporateProxy`

### ~~SyntheticPrivateLocationUpdateRequestNodeSize~~

> ⚠️ **Deprecated**
> Use literal values.

Containerized location property. The size of a containerized node deployed for the location (required for a Kubernetes location). Accepted values:

- `XS`: extra small
- `S`: small
- `M`: medium
  The node size `L` is not supported in containerized locations.

#### Enum keys

`M` | `S` | `Unsupported` | `Xs`

### ~~SyntheticPrivateLocationUpdateRequestStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location:

- `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
- `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
- `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`

### ~~SyntheticPrivateLocationUpdateRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Cluster` | `Private` | `Public`

### ~~SyntheticPublicLocationDtoCloudPlatform~~

> ⚠️ **Deprecated**
> Use literal values.

The cloud provider where the location is hosted.

#### Enum keys

`Alibaba` | `AmazonEc2` | `Azure` | `DynatraceCloud` | `GoogleCloud` | `Interoute` | `Other` | `Undefined`

### ~~SyntheticPublicLocationDtoStage~~

> ⚠️ **Deprecated**
> Use literal values.

The stage of the location.

#### Enum keys

`Beta` | `ComingSoon` | `Deleted` | `Ga`

### ~~SyntheticPublicLocationDtoStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location:

- `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
- `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
- `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`

### ~~SyntheticPublicLocationDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Cluster` | `Private` | `Public`

### ~~SyntheticPublicLocationUpdateRequestStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location:

- `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
- `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
- `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`

### ~~SyntheticPublicLocationUpdateRequestType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Cluster` | `Private` | `Public`

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
