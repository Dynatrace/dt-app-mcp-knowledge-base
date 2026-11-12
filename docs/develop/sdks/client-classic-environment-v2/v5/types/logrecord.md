### LogRecord

A single log record.

| Name              | Type                                                       | Description                                           |
| ----------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| additionalColumns | [LogRecordAdditionalColumns](#logrecordadditionalcolumns)  | Additional columns of the log record.                 |
| content           | string                                                     | The content of the log record.                        |
| eventType         | "K8S" \| "LOG" \| "SFM"                                    | Type of event                                         |
| status            | "ERROR" \| "INFO" \| "NONE" \| "NOT_APPLICABLE" \| "WARN" | The log status (based on the log level).              |
| timestamp         | number                                                     | The timestamp of the log record, in UTC milliseconds. |
