## Node.js compatibility

The Dynatrace JavaScript runtime provides a compatibility layer for Node.js to improve compatibility with third-party npm packages.

> **Caution**
>
> Node.js compatibility is subject to limitations, and third-party packages that rely on operations such as TCP (Transmission Control Protocol)/UDP (User Datagram Protocol) socket or file system access aren't supported.
> Built-in modules in the compatibility layer might miss certain functionality from their Node.js counterparts.
>
> Most functionality exposed in the Node.js compatibility layer is also available via Web APIs.
> We recommend using Web APIs such as `fetch` instead of Node.js modules like `http` where possible.

### Available modules

The following built-in Node.js modules are available. Note that the list of limitations is non-exhaustive and subject to changes in the future.

| Module                                                                                          | Description                                                                          | Limitations                                                                                                                               |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [`assert/strict`,<br />`assert`](https://nodejs.org/api/assert.html)                            | Node.js assertions                                                                   |                                                                                                                                           |
| [`buffer`](https://nodejs.org/api/buffer.html)                                                  | Node.js-specific extensions to `Uint8Array`                                          |                                                                                                                                           |
| [`console`](https://nodejs.org/api/console.html)                                                | Logging capabilities (e.g. `console.log`)                                            |                                                                                                                                           |
| [`crypto`](https://nodejs.org/api/crypto.html)                                                  | Cryptographic functionality such as hashing and encryption                           | Certain algorithms, custom certificates and Diffie-Hellman key exchanges aren't supported                                                 |
| [`events`](https://nodejs.org/api/events.html)                                                  | Utilities around event emitters and listeners                                        |                                                                                                                                           |
| [`http`](https://nodejs.org/api/http.html)                                                      | HTTP server and client functionality over plain text                                 | Creating an HTTP server isn't supported                                                                                                   |
| [`https`](https://nodejs.org/api/https.html)                                                    | HTTP server and client functionality over TLS (Transport Layer Security)             | Creating an HTTP server isn't supported                                                                                                   |
| [`path`](https://nodejs.org/api/path.html)                                                      | Utilities for working with file and directory paths                                  |                                                                                                                                           |
| [`perf_hooks`](https://nodejs.org/api/perf_hooks.html)                                          | Performance measurement APIs                                                         | Some functionality isn't implemented: * `performance.timerify`
* `performance.eventLoopUtilization`
* `performance.monitorEventLoopDelay` |
| [`querystring`](https://nodejs.org/api/querystring.html)                                        | Utilities for parsing and formatting URL query strings                               |                                                                                                                                           |
| [`stream`,<br />`stream/consumers`,<br />`stream/promises`](https://nodejs.org/api/stream.html) | APIs for streaming data                                                              |                                                                                                                                           |
| [`stream/web`](https://nodejs.org/api/webstreams.html)                                          | An implementation of the [WHATWG Streams Standard](https://streams.spec.whatwg.org/) |                                                                                                                                           |
| [`string_decoder`](https://nodejs.org/api/string_decoder.html)                                  | APIs for decoding UTF-8 and UTF-16 data from streams                                 | Unsupported encodings: * `ascii`
* `utf16le`
* `latin1`                                                                                   |
| [`timers`,<br />`timers/promises`](https://nodejs.org/api/timers.html)                          | API for scheduling functions to be called in the future                              |                                                                                                                                           |
| [`url`](https://nodejs.org/api/url.html)                                                        | Utilities for URL resolution and parsing                                             |                                                                                                                                           |
| [`util`](https://nodejs.org/api/util.html)                                                      | Various utilities for application development                                        |                                                                                                                                           |
| [`zlib`](https://nodejs.org/api/zlib.html)                                                      | Compression and decompression utilities                                              | Brotli compression isn't implemented                                                                                                      |

### Stubbed modules

You can import the following modules to ensure compatibility with specific third-party packages, but all exposed functions throw errors when called.

| Module                                                     | Description                                    |
| ---------------------------------------------------------- | ---------------------------------------------- |
| [`process`](https://nodejs.org/api/process.html)           | Provides information about the current process |
| [`fs`,<br />`fs/promises`](https://nodejs.org/api/fs.html) | File system operations                         |

### Deprecations

The following functionalities are deprecated and will be removed with a future release of the Dynatrace JavaScript runtime. Please refrain from using them and be aware that third-party dependencies using the functionalities might break once they are removed.

| Functionality         | Reason for deprecation                                                                                                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `globalThis.window`   | Was used to wrongly determine that code is executed in a browser.                                                                                                                                                       |
| `eval("...")`         | Security risk: executes arbitrary strings as code, which can lead to remote code execution if the input contains untrusted data (for example, dashboard variables sourced from logs or user-provided query parameters). |
| `new Function("...")` | Security risk: constructs and executes a function from a string, identical risk to `eval()`.                                                                                                                            |
