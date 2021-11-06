# react-typescript-template

- React/Typescript production ready project template with all the necessary dev tools so that you can start coding immediately.
- What does this project template come with?
  - [Jest](https://jestjs.io/) for Unit Testing (built-in from [create-react-app](https://create-react-app.dev/)).
  - [Cypress](https://www.cypress.io/) for E2E Testing.
  - [Prettier](https://prettier.io/) for code formatting.
  - [Typescript](https://www.typescriptlang.org/) support out of the box.

## Prerequisites

- Make sure you have [git](https://git-scm.com/) installed.
- You must be on [Node](https://nodejs.org/en/) latest LTS version.

## How to use template

#### To start a new project using this template:

```bash
git clone https://github.com/quangnguyen17/react-typescript-template.git your-project-name
```

Replace _**your-project-name**_ with your actual project name.

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
```

- for CI/CD:

```bash
npm run test:ci
```

#### To run e2e tests:

```bash
npm run cy
```

- for CI/CD:

```bash
npm run cy:ci
```

#### To format your code:

```bash
npm run prettier
```
