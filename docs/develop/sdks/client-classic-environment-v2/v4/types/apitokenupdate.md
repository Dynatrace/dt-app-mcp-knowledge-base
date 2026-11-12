### ApiTokenUpdate

The update of the API token.

| Name    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | The token is enabled (`true`) or disabled (`false`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| name    | string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | The name of the token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| scopes  | Array\<"ActiveGateCertManagement" \| "AdvancedSyntheticIntegration" \| "CaptureRequestData" \| "DTAQLAccess" \| "DataExport" \| "DataImport" \| "DataPrivacy" \| "Davis" \| "DssFileManagement" \| "ExternalSyntheticIntegration" \| "InstallerDownload" \| "LogExport" \| "PluginUpload" \| "ReadConfig" \| "ReadSyntheticData" \| "RestRequestForwarding" \| "RumBrowserExtension" \| "RumJavaScriptTagManagement" \| "SupportAlert" \| "TenantTokenManagement" \| "UserSessionAnonymization" \| "WriteConfig" \| "activeGateTokenManagement.create" \| "activeGateTokenManagement.read" \| "activeGateTokenManagement.write" \| "activeGates.read" \| "activeGates.write" \| "adaptiveTrafficManagement.read" \| "agentTokenManagement.read" \| "analyzers.read" \| "analyzers.write" \| "apiTokens.read" \| "apiTokens.write" \| "attacks.read" \| "attacks.write" \| "auditLogs.read" \| "bizevents.ingest" \| "credentialVault.read" \| "credentialVault.write" \| "entities.read" \| "entities.write" \| "events.ingest" \| "events.read" \| "extensionConfigurationActions.write" \| "extensionConfigurations.read" \| "extensionConfigurations.write" \| "extensionEnvironment.read" \| "extensionEnvironment.write" \| "extensions.read" \| "extensions.write" \| "geographicRegions.read" \| "hub.install" \| "hub.read" \| "hub.write" \| "javaScriptMappingFiles.read" \| "javaScriptMappingFiles.write" \| "logs.ingest" \| "logs.read" \| "metrics.ingest" \| "metrics.read" \| "metrics.write" \| "networkZones.read" \| "networkZones.write" \| "oneAgents.read" \| "oneAgents.write" \| "openTelemetryTrace.ingest" \| "openpipeline.events" \| "openpipeline.events.custom" \| "openpipeline.events_sdlc" \| "openpipeline.events_sdlc.custom" \| "openpipeline.events_security" \| "openpipeline.events_security.custom" \| "problems.read" \| "problems.write" \| "releases.read" \| "rumCookieNames.read" \| "rumManualInsertionTags.read" \| "securityProblems.read" \| "securityProblems.write" \| "settings.read" \| "settings.write" \| "slo.read" \| "slo.write" \| "syntheticExecutions.read" \| "syntheticExecutions.write" \| "syntheticLocations.read" \| "syntheticLocations.write" \| "tenantTokenRotation.write" \| "traces.lookup" \| "unifiedAnalysis.read"> | The list of scopes assigned to the token. Apart from the new scopes, you need to submit the existing scopes you want to keep, too. Any existing scope, missing in the payload, is removed. * `InstallerDownload`
  : PaaS integration - Installer download.
* `DataExport`
  : Access problem and event feed, metrics, and topology.
* `PluginUpload`
  : Upload Extension.
* `SupportAlert`
  : PaaS integration - Support alert.
* `AdvancedSyntheticIntegration`
  : Dynatrace module integration - Synthetic Classic.
* `ExternalSyntheticIntegration`
  : Create and read synthetic monitors, locations, and nodes.
* `RumBrowserExtension`
  : RUM Browser Extension.
* `LogExport`
  : Read logs.
* `ReadConfig`
  : Read configuration.
* `WriteConfig`
  : Write configuration.
* `DTAQLAccess`
  : User sessions.
* `UserSessionAnonymization`
  : Anonymize user session data for data privacy reasons.
* `DataPrivacy`
  : Change data privacy settings.
* `CaptureRequestData`
  : Capture request data.
* `Davis`
  : Dynatrace module integration - Davis.
* `DssFileManagement`
  : Mobile symbolication file management.
* `RumJavaScriptTagManagement`
  : Real user monitoring JavaScript tag management.
* `TenantTokenManagement`
  : Token management.
* `ActiveGateCertManagement`
  : ActiveGate certificate management.
* `RestRequestForwarding`
  : Fetch data from a remote environment.
* `ReadSyntheticData`
  : Read synthetic monitors, locations, and nodes.
* `DataImport`
  : Data ingest, e.g.: metrics and events.
* `syntheticExecutions.write`
  : Write synthetic monitor executions.
* `syntheticExecutions.read`
  : Read synthetic monitor execution results.
* `auditLogs.read`
  : Read audit logs.
* `metrics.read`
  : Read metrics.
* `metrics.write`
  : Write metrics.
* `entities.read`
  : Read entities.
* `entities.write`
  : Write entities.
* `problems.read`
  : Read problems.
* `problems.write`
  : Write problems.
* `events.read`
  : Read events.
* `events.ingest`
  : Ingest events.
* `openpipeline.events`
  : OpenPipeline - Ingest Events (Built-in).
* `openpipeline.events.custom`
  : OpenPipeline - Ingest Events (Custom).
* `openpipeline.events_security`
  : OpenPipeline - Ingest Security Events (Built-in).
* `openpipeline.events_security.custom`
  : OpenPipeline - Ingest Security Events (Custom).
* `openpipeline.events_sdlc`
  : OpenPipeline - Ingest Software Development Lifecycle Events (Built-in).
* `openpipeline.events_sdlc.custom`
  : OpenPipeline - Ingest Software Development Lifecycle Events (Custom).
* `bizevents.ingest`
  : Ingest bizevents.
* `analyzers.read`
  : Read analyzers.
* `analyzers.write`
  : Write & execute analyzers.
* `networkZones.read`
  : Read network zones.
* `networkZones.write`
  : Write network zones.
* `activeGates.read`
  : Read ActiveGates.
* `activeGates.write`
  : Write ActiveGates.
* `activeGateTokenManagement.read`
  : Read ActiveGate tokens.
* `activeGateTokenManagement.create`
  : Create ActiveGate tokens.
* `activeGateTokenManagement.write`
  : Write ActiveGate tokens.
* `agentTokenManagement.read`
  : Read Agent tokens.
* `credentialVault.read`
  : Read credential vault entries.
* `credentialVault.write`
  : Write credential vault entries.
* `extensions.read`
  : Read extensions.
* `extensions.write`
  : Write extensions.
* `extensionConfigurations.read`
  : Read extension monitoring configurations.
* `extensionConfigurations.write`
  : Write extension monitoring configurations.
* `extensionEnvironment.read`
  : Read extension environment configurations.
* `extensionEnvironment.write`
  : Write extension environment configurations.
* `metrics.ingest`
  : Ingest metrics.
* `attacks.read`
  : Read attacks.
* `attacks.write`
  : Write Application Protection settings.
* `securityProblems.read`
  : Read security problems.
* `securityProblems.write`
  : Write security problems.
* `syntheticLocations.read`
  : Read synthetic locations.
* `syntheticLocations.write`
  : Write synthetic locations.
* `settings.read`
  : Read settings.
* `settings.write`
  : Write settings.
* `tenantTokenRotation.write`
  : Tenant token rotation.
* `slo.read`
  : Read SLO.
* `slo.write`
  : Write SLO.
* `releases.read`
  : Read releases.
* `apiTokens.read`
  : Read API tokens.
* `apiTokens.write`
  : Write API tokens.
* `openTelemetryTrace.ingest`
  : Ingest OpenTelemetry traces.
* `logs.read`
  : Read logs.
* `logs.ingest`
  : Ingest logs.
* `geographicRegions.read`
  : Read Geographic regions.
* `oneAgents.read`
  : Read OneAgents.
* `oneAgents.write`
  : Write OneAgents.
* `traces.lookup`
  : Look up a single trace.
* `unifiedAnalysis.read`
  : Read Unified Analysis page.
* `hub.read`
  : Read Hub related data.
* `hub.write`
  : Manage metadata of Hub items.
* `hub.install`
  : Install and update Hub items.
* `javaScriptMappingFiles.read`
  : Read JavaScript mapping files.
* `javaScriptMappingFiles.write`
  : Write JavaScript mapping files.
* `extensionConfigurationActions.write`
  : Actions for extension monitoring configurations.
* `rumCookieNames.read`
  : Read RUM cookie names.
* `adaptiveTrafficManagement.read`
  : Read sampling configuration for Adaptive Traffic Management.
* `rumManualInsertionTags.read`
  : Read RUM manual insertion tags. |
