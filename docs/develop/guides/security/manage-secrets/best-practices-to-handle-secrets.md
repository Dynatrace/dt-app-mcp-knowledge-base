## Best practices to handle secrets

### Storage of secrets in the credential vault

Storing secrets outside places specifically designed for that purpose is discouraged. For the Dynatrace platform, use the Credential Vault and don't hard-code credentials within apps, Dashboards, Notebooks, or similar.

### Apply the principle of least privilege

Each user, token, and OAuth client should only be assigned the minimum level of access required to perform their duties. As a result, your secrets' permissions will only be accessible when used in conjunction with the corresponding task they're to perform. Following this principle, you can reduce the potential impact if secrets leak.

### Don't reuse secrets

It would be best if you don't reuse secrets. We recommended creating a set of secrets for a single action—for example, in a workflow—where you can change secrets easily without dependencies on multiple services that might break by revoking a single certificate.

### Rotate secrets

Try to rotate any secrets periodically. This will ensure that people who had access to secrets in the past can't access the system after they change roles or leave the company.

### Review and share secrets

Try to review secrets and their sharing status periodically. Is a secret still in use, or can it be removed? Secrets that aren't stored anywhere can't be compromised. Ask yourself if all persons who can access a secret still require access. From a security point of view, less is more when it comes to sharing secrets.
