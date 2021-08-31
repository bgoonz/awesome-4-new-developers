# How to add Cypress tests

When making changes to JavaScript, CSS, or HTML which could change the functionality or layout of a page, it's important to add corresponding [Cypress](https://docs.cypress.io) integration tests.

To learn how to write Cypress tests, or 'specs', please see Cypress' official [documentation](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html).

> Note: When writing tests for freeCodeCamp, remember to add `/* global cy */` to the top of the file to avoid ESLint issues.

## Where to add a test

- Cypress tests are in the `./cypress` directory.

- Cypress tests for a curriculum module are in the corresponding curriculum directory, i.e. `cypress/integration/learn/responsive-web-design/basic-css/index.js`.

## How to run tests

> [!NOTE] If using GitPod, please see [Cypress-GitPod Setup](/how-to-add-cypress-tests#cypress-gitpod-setup)

### 1. Ensure that MongoDB and client applications are running

- [Start MongoDB and seed the database](/how-to-setup-freecodecamp-locally#step-3-start-mongodb-and-seed-the-database)

- [Start the freeCodeCamp client application and API server](/how-to-setup-freecodecamp-locally#step-4-start-the-freecodecamp-client-application-and-api-server)

### 2. Run the cypress tests

To run tests against production builds, replace `dev` with `prd` below.

- To run all tests in the `./cypress` directory:

  ```console
  npm run cypress:dev:run
  ```

- To run a single test:

  ```console
  npm run cypress:dev:run -- --spec=cypress/pathToYourSpec/youSpecFileName.js
  ```

- To create a development build, start the development server, and run all existing cypress end-to-end tests:

  ```console
  npm run e2e:dev:run
  ```

## Cypress-GitPod Setup

### 1. Ensure you are on the _Feature Preview_ of GitPod _as of 01/02/2021_

- Go to [GitPod Docs - Feature Preview](https://www.gitpod.io/docs/feature-preview/) to see how to enable _Feature Preview_

### 2. Ensure Development Environment is Running

If starting the GitPod environment did not automatically develop the environment:

- Start the database

```console
mongod
```

- Seed the database

```console
npm run seed
```

- Develop the server and client

```console
npm run develop
```

### 3. Install Cypress Build Tools

```console
npm run cypress:install-build-tools
```

- When prompted in the terminal, select your keyboard layout by language/area

Now, [Cypress can be run](/how-to-add-cypress-tests#_2-run-the-cypress-tests)
