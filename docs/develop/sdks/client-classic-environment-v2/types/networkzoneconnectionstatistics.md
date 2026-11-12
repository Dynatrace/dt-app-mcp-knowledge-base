### NetworkZoneConnectionStatistics

Runtime information about host connections.

| Name                                       | Type           | Description                                                                                                                           |
| ------------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| hostsConfiguredButNotConnected             | Array\<string> | Hosts from the network zone that use other zones.                                                                                     |
| hostsConnectedAsAlternative                | Array\<string> | Hosts that use the network zone as an alternative.                                                                                    |
| hostsConnectedAsFailover                   | Array\<string> | Hosts from other zones that use the zone (not configured as an alternative) even though ActiveGates of higher priority are available. |
| hostsConnectedAsFailoverWithoutActiveGates | Array\<string> | Hosts from other zones that use the zone (not configured as an alternative) and **no** ActiveGates of higher priority are available.  |
