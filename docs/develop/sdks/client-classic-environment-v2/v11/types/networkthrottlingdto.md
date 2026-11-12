### NetworkThrottlingDto

Network throttling of a Browser Monitor.

| Name     | Type   | Description                                                                          |
| -------- | ------ | ------------------------------------------------------------------------------------ |
| download | number | Download throughput. If not defined in request, it will be set to -1 by default.     |
| latency  | number | Latency. If not defined in request, it will be set to 0 by default.                  |
| name     | string | Predefined network type. If not defined in request, it will be set to "" by default. |
| upload   | number | Upload throughput. If not defined in request, it will be set to -1 by default.       |
