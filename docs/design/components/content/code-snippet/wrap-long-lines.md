## Wrap long lines

Set the `lineBreaks` prop to automatically wrap lines that exceed the available width. This is especially useful for log output or other content with long lines.

:::note Large inputs

For very large strings (for example, log files with thousands of lines), syntax highlighting is limited to the first 100,000 characters to prevent browser performance issues. Content beyond this limit is still displayed as plain text with correct line numbers, but dynamic line breaks are disabled.

:::

**LineWrap**

```tsx
import { CodeSnippet } from '@dynatrace/strato-components/content';

const LineWrap = () => {
  return (
    <CodeSnippet
      language="log"
      // highlight-next-line
      lineBreaks
    >
      {`2025-03-19T12:00:00.000Z - INFO  - Application started successfully on port 8080 with configuration: {"database":"postgres://localhost:5432/mydb","cache":"redis://localhost:6379","logLevel":"info","maxConnections":100}
2025-03-19T12:00:01.000Z - WARN  - High memory usage detected: 85% of available memory is in use. Consider increasing the memory limit or optimizing the application to reduce memory consumption.
2025-03-19T12:00:02.000Z - ERROR - Failed to connect to external service at https://api.example.com/v2/data?query=select+*+from+logs+where+timestamp+>+now()-1h&format=json — retrying in 5 seconds (attempt 3 of 10)`}
    </CodeSnippet>
  );
};
```
