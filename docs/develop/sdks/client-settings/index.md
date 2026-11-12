Manage Dynatrace settings through a schema-driven API for storing, querying, and maintaining configuration objects.

#### Managing settings objects

Create, retrieve, update, delete, reorder, and inspect settings objects. These endpoints also help you resolve effective settings values so you can understand how configuration is applied.

#### Managing access and ownership

Query and update permissions for settings objects, grant or revoke access for specific users and groups, and change ownership when needed. These endpoints support the security and governance workflows around shared configuration.

#### Reviewing change history

Retrieve revision history for settings objects to inspect how configuration changed over time. This helps with auditing, troubleshooting, and understanding previous updates.

#### Working with schemas

Discover and retrieve schema definitions that describe available settings types and their structure. These endpoints help clients understand which properties are supported and how settings objects must be shaped.

#### Supporting interactive editing

Use helper endpoints for validation, default generation, and value summaries during schema-based editing workflows. These operations are intended to support guided and interactive settings editors.

```bash
npm install @dynatrace-sdk/client-settings
```
