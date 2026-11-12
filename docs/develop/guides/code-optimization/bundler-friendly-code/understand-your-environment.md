## Understand your environment

Your source files go through transpilation and bundling to become a shippable JavaScript function.

This process has some undisputable facts:

1. It's still JavaScript.
2. There is no dead code elimination — the code you write is the code you ship and execute. Write more, execute more.
3. Tools that reduce your application's code footprint use static code analysis. Static code analysis can't reason about your code and therefore takes shortcuts.

In environments like Node.js or the browser, this usually isn't a problem. The Dynatrace JavaScript runtime, however, is different:

- Low CPU—parsing and executing take longer.
- Low memory—the more code you write, the more memory is occupied during execution.
- One-off execution—everything is discarded after each invocation and starts fresh. Startup costs that seem negligible in Node.js or browser apps are full execution costs here. Dead code or unintended side effects are parsed and potentially executed with every single invocation.

Therefore, writing efficient JavaScript is paramount for application functions, especially on Kappa (the Dynatrace serverless runtime).
