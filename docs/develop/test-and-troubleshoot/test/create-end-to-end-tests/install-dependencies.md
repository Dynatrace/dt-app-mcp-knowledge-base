## Install dependencies

To install the required dependencies, run the following command in your terminal:

```bash
npm init playwright@latest
```

Follow the prompt and select the following options:

- `Where to put your end-to-end tests?`
  - write `e2e` and press enter
- `Add a GitHub Actions workflow?`
  - select `false` and press enter
- `Install Playwright browsers (can be done manually via 'npx playwright install')?`
  - select `true` and press enter

Next, run the following command:

```bash
npm install --save-dev dotenv
```

The above command will install Playwright and the [`dotenv`](https://github.com/motdotla/dotenv) package. You'll need Playwright to run tests and the `dotenv` package to use `.env` files in your tests.
