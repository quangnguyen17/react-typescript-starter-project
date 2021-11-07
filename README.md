# react-typescript-template

- React/Typescript production-ready project template with all the necessary dev tools so that you can start building your project immediately 🧑🏻‍💻 🚀.
- What does this template come with?
  - [Jest](https://jestjs.io/) for Unit Testing (from [create-react-app](https://create-react-app.dev/)).
  - [Typescript](https://www.typescriptlang.org/) support (from [create-react-app](https://create-react-app.dev/)).
  - [Cypress](https://www.cypress.io/) for E2E Testing.
  - [Prettier](https://prettier.io/) for code formatting.
  - [Husky](https://github.com/typicode/husky) for git hooks to ensure better commits for your code.

## Prerequisites

- Must have [git](https://git-scm.com/) installed.
- Must have [Node](https://nodejs.org/en/) latest LTS version installed.

## How to use template

#### To start a new project using this template:

```bash
git clone https://github.com/quangnguyen17/react-typescript-template.git your-project-name
```

--> Replace `your-project-name` with your actual project name <--

#### To install project dependencies:

```bash
npm install
```

#### To start project:

```bash
npm run start
```

#### To run unit tests:

```bash
npm run test

# for CI/CD
npm run test:ci
```

#### To run e2e tests:

```bash
npm run cy

# for CI/CD
npm run cy:ci
```

#### To format your code:

```bash
npm run prettier
```

#### To create a production build:

```bash
npm run build
```

#### Husky hooks:

- _`pre-commit`_: will run [Prettier](https://prettier.io/) code formatting and unit tests.
