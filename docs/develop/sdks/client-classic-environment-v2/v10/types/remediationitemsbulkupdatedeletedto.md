### RemediationItemsBulkUpdateDeleteDto

Contains the external tracking link associations to be applied to the remediation items of the security problem.

| Name    | Type                                                                                      | Description                                                                                                                                                                                                                           |
| ------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| deletes | Array\<string>                                                                            | Tracking links to remove from the security problem. List of remediation item IDs of the security problem for which to remove the tracking links.                                                                                      |
| updates | [RemediationItemsBulkUpdateDeleteDtoUpdates](#remediationitemsbulkupdatedeletedtoupdates) | Tracking links to set for the security problem. Map of remediation item ID to tracking link objects. Keys must be valid remediation item IDs of the security problem, the associated value must contain the link to set for the item. |
