## Enums

### ~~EvaluationStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of an SLO evaluation. `SUCCESS` and `WARNING` indicate the SLO was evaluated successfully (target met or warning threshold breached respectively). `FAILURE` means the SLO target wasn't met. `ERROR` means the evaluation couldn't be completed due to a system or query error.

#### Enum keys

`Error` | `Failure` | `Success` | `Warning`

### ~~TemplateScope~~

> ⚠️ **Deprecated**
> Use literal values.

#### Enum keys

`All` | `Application` | `CloudApplication` | `CloudApplicationNamespace` | `Host` | `KubernetesCluster` | `Service`

### ~~VariableScope~~

> ⚠️ **Deprecated**
> Use literal values.

The scope of a template variable. Use `SMARTSCAPE_*` variants when referencing Smartscape objective templates.

#### Enum keys

`Application` | `CloudApplication` | `CloudApplicationNamespace` | `Custom` | `Host` | `KubernetesCluster` | `Service` | `SmartscapeHost` | `SmartscapeK8SCluster` | `SmartscapeK8SNamespace` | `SmartscapeService`
