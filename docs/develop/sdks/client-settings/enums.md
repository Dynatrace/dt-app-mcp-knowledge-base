## Enums

### ~~BiComparableContainerConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`GreaterThan` | `GreaterThanOrEqual` | `LessThan` | `LessThanOrEqual`

### ~~ByteSizeLimitConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`ByteSizeLimit`

### ~~ComplexTypeType~~

> ⚠️ **Deprecated**
> Use literal values.

Always has to be `object` for complex types.

#### Enum keys

`Object`

### ~~ConstraintViolationParameterLocation~~

> ⚠️ **Deprecated**
> Use literal values.

Describes the general location of the violating parameter

#### Enum keys

`Header` | `Path` | `PayloadBody` | `Query`

### ~~CustomDeletionValidatorReferenceConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`CustomValidatorRef`

### ~~CustomSchemaValidatorReferenceConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`CustomValidatorRef` | `MultiScopeCustomValidatorRef`

### ~~CustomValidatorReferenceConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`CustomValidatorRef`

### ~~CustomValidatorReferenceContainerConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`CustomValidatorRef`

### ~~DatasourceResetValue~~

> ⚠️ **Deprecated**
> Use literal values.

Hint to the UI to reset value when one of the filter properties changed

#### Enum keys

`Always` | `InvalidOnly` | `Never`

### ~~EffectivePermissionGranted~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Condition` | `False` | `True`

### ~~EnumTypeType~~

> ⚠️ **Deprecated**
> Use literal values.

Always has to be `enum` for enum types.

#### Enum keys

`Enum`

### ~~EqualsPreconditionType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are required.

#### Enum keys

`Equals`

### ~~GetSettingsObjectAccessorPermissionsPathAccessorType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Group` | `User`

### ~~IdentityType~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`AllUsers` | `Group` | `User`

### ~~InPreconditionType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are required.

#### Enum keys

`In`

### ~~LengthConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`Length`

### ~~NoWhitespaceConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`NoWhitespace`

### ~~NotBlankConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`NotBlank`

### ~~NotEmptyConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`NotEmpty`

### ~~NotPreconditionType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are required.

#### Enum keys

`Not`

### ~~NullPreconditionType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are required.

#### Enum keys

`Null`

### ~~PatternConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`Pattern`

### ~~PermissionsListItem~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`R` | `W`

### ~~PropertyCountRangeContainerConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`PropertyCountRange`

### ~~PropertyModificationPolicy~~

> ⚠️ **Deprecated**
> Use literal values.

`DEFAULT` - modifiability of the value is defined by ModificationFlags.isModifiable, `ALWAYS`/`NEVER` - the value can be always/never modified. Defaults to `DEFAULT`. Can't be used on properties inside a collection property.

#### Enum keys

`Always` | `Default` | `Never`

### ~~RangeConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`Range`

### ~~RecursivePreconditionType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are required.

#### Enum keys

`And` | `Or`

### ~~ReferentialIntegrityDeletionConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`ReferentialIntegrity`

### ~~RegexConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`Regex`

### ~~RegexMatchPreconditionType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are required.

#### Enum keys

`RegexMatch`

### ~~ResourceContextOperationsItem~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`Delete` | `Read` | `Write`

### ~~RevisionDiffType~~

> ⚠️ **Deprecated**
> Use literal values.

The type of the difference.

#### Enum keys

`Create` | `Delete` | `NoChange` | `Reorder` | `Update`

### ~~SchemaStubMaturity~~

> ⚠️ **Deprecated**
> Use literal values.

The maturity of the schema.

#### Enum keys

`EarlyAdopter` | `GeneralAvailability` | `Preview`

### ~~SecretResubmissionContainerConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`SecretResubmission`

### ~~SettingsObjectCreateInsertPosition~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`After` | `Before` | `First` | `Last`

### ~~SettingsObjectUpdateInsertPosition~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`After` | `Before` | `First` | `Last`

### ~~SettingsSchemaDefinitionMaturity~~

> ⚠️ **Deprecated**
> Use literal values.

The maturity of the schema.
Possible values:

- PREVIEW: Preview features aren't generally available, but might be available in specific environments as part of early-access programs. These are the most likely to change in incompatible ways.
- EARLY_ADOPTER: Features marked "early adopter" are available in all environments, but aren't mature enough to warrant the "general availability" designation. We don't expect incompatible changes for these, but be aware, that these aren't fully stable yet and incompatible changes may be necessary in rare cases.
- GENERAL_AVAILABILITY: Features marked "general availability" are the most stable. While the schemas will still evolve over time, care will be taken to only do so in a backward-compatible manner.

In any case, automations should make use of the `schemaVersion` field when writing settings objects.

#### Enum keys

`EarlyAdopter` | `GeneralAvailability` | `Preview`

### ~~SinglePermissionRequestPermission~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`SettingsObjectsAdmin` | `SettingsObjectsRead` | `SettingsObjectsWrite`

### ~~TrimmedConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`Trimmed`

### ~~UniqueMultiScopeSchemaPropertiesConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`MultiScopeUnique`

### ~~UniquePropertiesConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`Unique`

### ~~UniqueSchemaPropertiesConstraintType~~

> ⚠️ **Deprecated**
> Use literal values.

Type also defines which properties are available.

#### Enum keys

`Unique`
