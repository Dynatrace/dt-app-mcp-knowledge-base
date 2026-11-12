## Handling user permission

Most users may not have permission to write lookup data or may only have access to specific folders. Applications must gracefully handle such restrictions, allowing users to choose where to store data within the customer-managed `/lookups/` directory. To respect user control and permissions, avoid creating predefined structures like `/lookups/dt/`.

In the future, Dynatrace may introduce a `/dt/` prefix for structured data management and enhanced permission handling. This feature is under development and will align with evolving use cases.
