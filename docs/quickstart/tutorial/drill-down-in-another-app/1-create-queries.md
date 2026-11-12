### 1. Create queries

First, create a couple of queries in the `ui/app/queries.ts` file that our app will send as the intent's payload as follows:

```tsx testable title="ui/app/queries.ts"
export const CPU_USAGE_QUERY = `timeseries cpuAvg = avg(dt.host.cpu.usage), by:{dt.smartscape.host, host.name}
| fieldsRename hostId = dt.smartscape.host, hostName = host.name
| lookup [
  timeseries {
    idle=avg(dt.host.cpu.idle),
    ioWait=avg(dt.host.cpu.iowait),
    user=avg(dt.host.cpu.user),
    system=avg(dt.host.cpu.system),
    steal=avg(dt.host.cpu.steal)
  },
  by:{dt.smartscape.host}
  | fieldsAdd idle = arrayAvg(idle), ioWait = arrayAvg(ioWait), user = arrayAvg(user), system = arrayAvg(system), steal = arrayAvg(steal)
  | fieldsAdd other = 100 - idle - ioWait - user - system - steal
], sourceField:hostId, lookupField:dt.smartscape.host, fields:{idle, ioWait, user, system, steal, other}`;

// highlight-start
export const getHostCpuUsageQuery = (hostId: string) => `timeseries {
  idle=avg(dt.host.cpu.idle),
  ioWait=avg(dt.host.cpu.iowait),
  user=avg(dt.host.cpu.user),
  system=avg(dt.host.cpu.system),
  steal=avg(dt.host.cpu.steal)
},
filter:{dt.smartscape.host == toSmartscapeId("${hostId}")}
| fieldsAdd other = 100 - idle[] - ioWait[] - user[] - system[] - steal[]`;

export const getHostAvgCpuQuery = (hostId: string) =>
  `timeseries cpuAvg = avg(dt.host.cpu.usage), filter:{dt.smartscape.host == toSmartscapeId("${hostId}")}`;
// highlight-end
```
