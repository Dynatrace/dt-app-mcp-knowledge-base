### VulnerableFunctionInputSegment

Describes one segment that was passed into a vulnerable function.

| Name  | Type                                                       | Description                     |
| ----- | ---------------------------------------------------------- | ------------------------------- |
| type  | "MALICIOUS_INPUT" \| "REGULAR_INPUT" \| "TAINTED_INPUT" | The type of the input segment.  |
| value | string                                                     | The value of the input segment. |
