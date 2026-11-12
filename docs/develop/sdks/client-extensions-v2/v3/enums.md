## Enums

### ~~AssetInfoType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the asset.

#### Enum keys

`Alert` | `AlertTemplate` | `AwsService` | `CustomCards` | `Dashboard` | `DeclarativeProcesses` | `DocumentDashboard` | `DocumentScreen` | `DqlLogMetric` | `DqlLogProcessingRule` | `EventCorrelationRules` | `GenericRelationship` | `GenericType` | `ListScreenFilters` | `ListScreenInjections` | `ListScreenLayout` | `LogEvent` | `LogMetric` | `LogProcessingRule` | `LqlLogMetric` | `LqlLogProcessingRule` | `MetricMetadata` | `MetricQuery` | `OpenPipeline` | `ProblemResolutionPathRules` | `ProcessGroupingRules` | `ScreenActions` | `ScreenChartGroups` | `ScreenDqlTable` | `ScreenEntitiesLists` | `ScreenEventsCards` | `ScreenFilters` | `ScreenHealthCards` | `ScreenInjections` | `ScreenLayout` | `ScreenLogsCards` | `ScreenMessageCards` | `ScreenMetricTables` | `ScreenProblems` | `ScreenProperties`

### ~~AuditLogEntryCategory~~

> ⚠️ **Deprecated**
> Use literal values.

The category of the recorded operation.

#### Enum keys

`ActivegateToken` | `BuildUnitV2` | `Config` | `ManualTaggingService` | `TenantLifecycle` | `Token` | `WebUi`

### ~~AuditLogEntryEventType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the recorded operation.

- `LOGIN` -> A user logged in
- `LOGOUT` -> A user logged out
- `CREATE` -> An object was created
- `UPDATE` -> An object was updated
- `DELETE` -> An object was deleted
- `REVOKE` -> An Active Gate token was revoked
- `TAG_ADD` -> A manual tag was added
- `TAG_REMOVE` -> A manual tag was removed
- `TAG_UPDATE` -> A manual tag was updated
- `REMOTE_CONFIGURATION_MANAGEMENT` -> A Remote Configuration Management related operation occurred

#### Enum keys

`Create` | `Delete` | `Login` | `Logout` | `Reorder` | `Revoke` | `TagAdd` | `TagRemove` | `TagUpdate` | `Update`

### ~~AuditLogEntryUserType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the authentication of the **user**.

- `USER_NAME` -> User was logged in the UI
- `TOKEN_HASH` ->  URL Token or DevOps Token, the hash of the token is logged
- `SERVICE_NAME` -> No authenticated user at all, this action was performed by a system service automatically
- `PUBLIC_TOKEN_IDENTIFIER` -> API Token, the public token id is logged

#### Enum keys

`PublicTokenIdentifier` | `ServiceName` | `TokenHash` | `UserName`

### ~~ComplexConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the constraint.

#### Enum keys

`CustomValidatorRef` | `GreaterThan` | `GreaterThanOrEqual` | `LessThan` | `LessThanOrEqual` | `PropertyCountRange` | `SecretResubmission` | `Unknown`

### ~~ConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the constraint.

#### Enum keys

`CustomValidatorRef` | `Length` | `NoWhitespace` | `NotBlank` | `NotEmpty` | `Pattern` | `Range` | `Regex` | `Trimmed` | `Unique` | `Unknown`

### ~~ConstraintViolationParameterLocation~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Header` | `Path` | `PayloadBody` | `Query`

### ~~DatasourceDefinitionResetValue~~

> ⚠️ **Deprecated**
> Use literal values.

When to reset datasource value in the UI on filter change.

#### Enum keys

`Always` | `InvalidOnly` | `Never`

### ~~DeletionConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the deletion constraint.

#### Enum keys

`CustomValidatorRef` | `ReferentialIntegrity` | `Unknown`

### ~~EnumTypeType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the property.

#### Enum keys

`Enum`

### ~~EnvironmentConfigurationStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the assets list.

#### Enum keys

`Pending` | `UpToDate`

### ~~ExtensionStatusStatus~~

> ⚠️ **Deprecated**
> Use literal values.

Latest status of given configuration.

#### Enum keys

`Error` | `Ok` | `Pending` | `Unknown` | `Warning`

### ~~ExtensionStatusWithIdStatus~~

> ⚠️ **Deprecated**
> Use literal values.

Latest status of given configuration.

#### Enum keys

`Error` | `Ok` | `Pending` | `Unknown` | `Warning`

### ~~PreconditionType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the precondition.

#### Enum keys

`And` | `Equals` | `In` | `Not` | `Null` | `Or` | `RegexMatch`

### ~~PropertyDefinitionModificationPolicy~~

> ⚠️ **Deprecated**
> Use literal values.

Modification policy of the property.

#### Enum keys

`Always` | `Default` | `Never`

### ~~SchemaConstraintRestDtoType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the schema constraint.

#### Enum keys

`ByteSizeLimit` | `CustomValidatorRef` | `MultiScopeCustomValidatorRef` | `MultiScopeMaxObjectCount` | `MultiScopeUnique` | `Unique` | `Unknown`

### ~~SchemaDefinitionRestDtoMaturity~~

> ⚠️ **Deprecated**
> Use literal values.

The maturity of the schema.
Possible values:

- PREVIEW: Preview features are not generally available, but might be available in specific environments as part of early-access programs. These are the most likely to change in incompatible ways.
- EARLY_ADOPTER: Features marked "early adopter" are available in all environments, but are not mature enough to warrant the "general availability" designation. We don't expect incompatible changes for these, but please be aware, that these are not fully stable yet and incompatible changes may be necessary in rare cases.
- GENERAL_AVAILABILITY: Features marked "general availability" are the most stable. While the schemas will still evolve over time, care will be taken to only do so in a backward-compatible manner.

In any case, automations should make use of the `schemaVersion` field when writing settings objects.

#### Enum keys

`EarlyAdopter` | `GeneralAvailability` | `Preview`

### ~~SchemaTypeType~~

> ⚠️ **Deprecated**
> Use literal values.

Type of the reference type.

#### Enum keys

`Object`
