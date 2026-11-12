### NetworkThrottlingDto

Network throttling of a Browser Monitor.

| Name     | Type           | Description                                                                          |
| -------- | -------------- | ------------------------------------------------------------------------------------ |
| download | null \| number | Download throughput. If not defined in request, it will be set to -1 by default.     |
| latency  | null \| number | Latency. If not defined in request, it will be set to 0 by default.                  |
| name     | null \| string | Predefined network type. If not defined in request, it will be set to "" by default. |
| upload   | null \| number | Upload throughput. If not defined in request, it will be set to -1 by default.       |
