## Deploy from a CI/CD pipeline

1. Create an [OAuth client](https://developer.dynatrace.com/develop/guides/access-platform-apis-from-outside.md#create-an-oauth-client) that has the required IAM permissions.
2. In your CI/CD pipeline, set the environment variables `DT_APP_OAUTH_CLIENT_ID` and `DT_APP_OAUTH_CLIENT_SECRET` with the generated client ID and client secret.
3. Run the following command within your pipeline:

```bash
npx dt-app deploy
```

### Examples

**Jenkins**

```groovy title="Jenkinsfile"
pipeline {
  // Replace the following lines with a Docker or Kubernetes agent with an image with node v24
  agent {
    kubernetes {
      // Example of a Kubernetes agent
      cloud 'linux-amd64'
      yaml """
      kind: Pod
      spec:
        containers:
          - name: nodejs
            image: node24
            args:
              - cat
            tty: true
      """
      defaultContainer 'nodejs'
    }
  }

  stages {
    stage('Install') {
      steps {
        sh('npm ci')
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build') {
      steps {
        sh('npx dt-app build')
      }
    }

    stage('Deploy') {
      steps {
        sh('npx dt-app deploy --skip-build')
      }
    }
  }
}
```

**Github Actions**

```yaml title=".github/workflows/main.yml"
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v7

      - name: Setup Node
        uses: actions/setup-node@v7
        with:
          node-version: '24'

      - name: Install
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npx dt-app build

      - name: Deploy
        run: npx dt-app deploy --skip-build
```

**Gitlab**

```yaml title=".gitlab-ci.yml"
default:
  image: node:24

stages:
  - install
  - lint
  - build
  - deploy

install:
  stage: install
  script:
    - npm ci
  artifacts:
    paths:
      - node_modules/

lint:
  stage: lint
  script:
    - npm run lint

build:
  stage: build
  script:
    - npx dt-app build
  artifacts:
    paths:
      - .dt-app
      - dist

deploy:
  stage: deploy
  script:
    - npx dt-app deploy --skip-build
```

> **Note**
>
> Every time you modify the `app.config.json` file, you must increase the version number in the file before re-deploying the app.
>
> If you don't increase the version number, you need to uninstall the current deployed version.
