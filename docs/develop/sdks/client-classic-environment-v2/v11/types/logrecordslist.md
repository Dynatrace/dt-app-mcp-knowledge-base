### LogRecordsList

A list of retrieved log records.

| Name         | Type                            | Description                                                                                                    |
| ------------ | ------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| nextSliceKey | string                          | The cursor for the next slice of log records. Always null on *Log Management and Analytics, powered by Grail*. |
| results      | Array\<[LogRecord](#logrecord)> | A list of retrieved log records.                                                                               |
| sliceSize    | number                          | The total number of records in a slice.                                                                        |
| warnings     | string                          | Optional warning messages.                                                                                     |
