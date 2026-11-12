## Introduction

Multiple users manipulating the same resource simultaneously typically leads to a conflict of interest. Without locking or validation, the order of the write operations defines who finally wins and whose changes are lost. This is the [**last writer wins**](https://en.wikipedia.org/wiki/Eventual_consistency) strategy, the default strategy used in the Dynatrace platform API.
