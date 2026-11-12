### ~~VulnerableFunctionProcessGroupsUsage~~

> ⚠️ **Deprecated**
> Use literal values.

The vulnerable function usage based on the given process groups:

- IN_USE if at least one process group calls this vulnerable function.
- NOT_IN_USE if all process groups do not call this vulnerable function.
- NOT_AVAILABLE if vulnerable function usage could not be calculated for at least one process group and no process group calls this vulnerable function.

#### Enum keys

`InUse` | `NotAvailable` | `NotInUse`
