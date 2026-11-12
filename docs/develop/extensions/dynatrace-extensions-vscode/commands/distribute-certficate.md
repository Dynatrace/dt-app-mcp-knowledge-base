## Distribute certficate

This command uploads the workspace's CA certificate to the Dynatrace Credentials Vault. Additionally, if it detects locally installed OneAgents or ActiveGates, it also uploads this certificate to them.

### Command prerequisites

- A workspace or folder needs to be opened in the VS Code window.
- You need to be connected to a Dynatrace environment.
- The `dynatraceExtensions.rootOrCaCertificate` setting needs to be set either globally or for the workspace.

### Workflow steps

1. The add-on checks whether a Dynatrace Credentials Vault entry ID is already associated with this workspace and prompts whether the entry should be overwritten.
   - If overwrite is selected, the entry is updated with the new file.
   - Otherwise, the workflow continues with creating a new Credential Vault entry.
2. You are prompted to provide a name for this credential and an optional description. Then the file is uploaded with these details.
3. Local OneAgent and ActiveGate paths are checked for existence, and the flow prompts whether the certificate should also be uploaded to these locations.

   - On Windows:
     - OneAgent: `%PROGRAMDATA%\dynatrace\oneagent\agent\config\certificates`
     - ActiveGate: `%PROGRAMDATA%\dynatrace\remotepluginmodule\agent\conf\certificates`
   - On Linux:
     - OneAgent: `/var/lib/dynatrace/oneagent/agent/config/certificates`
     - ActiveGate: `<CONFIG>/remotepluginmodule/agent/conf/certificates/`

   > **Note**
   >
   > This step requires VS Code to run with administrator-level permissions. For example, for Windows, use **Run As Administrator**.
