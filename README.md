# Vue-testing

This project aims to help to achieve a general understanding and bring solid foundations of the testing environment with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run Unit Tests Coverage

```sh
npm run test:coverage
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Project Implementation Details

### In-source tests with [Vitest](https://vitest.dev/guide/in-source.html)

Vitest also provides a way to run tests with in your source code along with the implementation, similar to Rust's module tests.

This makes the tests share the same closure as the implementations and able to test against private states without exporting. Meanwhile, it also brings the closer feedback loop for development.

In order to enable this feature, you must add the following options to the vite.config.ts:

```sh
 test: {
    globals: true,
    includeSource: ["src/**/*.{js,ts, vue}"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
```

###  __ tests __ and __ snapshots __ directories:

Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component. [Jest documentation](https://jestjs.io/docs/snapshot-testing).


Test specs live in the __ tests __ directories. They are automatically scanned by the test runner in order to execute tests.

###  "vue-test-utils" vs "testing-library/vue"

You want to write maintainable tests that give you high confidence that your components are working for your users. As a part of this goal, you want your tests to avoid including implementation details so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down. Vue-test-utils enables you access to components instance properties, which allows to test implementation, which should not take place.

The core library, DOM Testing Library, is a light-weight solution for testing web pages by querying and interacting with DOM nodes (whether simulated with JSDOM/Jest or in the browser). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.

The core library has been wrapped to provide ergonomic APIs for several frameworks, including React, Angular, and Vue. There is also a plugin to use testing-library queries for end-to-end tests in Cypress and an implementation for React Native.

#### **Please prefer using testing-library/vue over vue-test-utils when it comes to testing UI components.**

### Mock API - [Mock Service Worker](https://mswjs.io/)

Mock Service Worker (MSW) works by intercepting the requests your tests make, allowing you to use it without changing any of your application code. In-browser, this uses the Service Worker API. In Node.js, and for Vitest, it uses node-request-interceptor. To learn more about MSW, read their introduction. [Vitest documentation](https://vitest.dev/guide/mocking.html#requests)

In order to enable this feature, you must install `msw` as well as  `whatwg-fetch` dev packages, initiate mock server (`src/setupTests.ts`) and add the following options to the vite.config.ts:

```sh
 test: {
    setupFiles: "src/setupTests.ts",
  },
```


## Project Structure

### Utils (src/utils.ts)

Utility functions tested with the use of in-source units tests.

### Integration (src/integration)

Set of classes tested with the use of integration tests with mocked class methods for fetching data.

### UI components (src/components)

Vue components tested with the use of Vue components testing libraries. Issue: vue-test-utils randomly passes tests due to some problems with the asynchronous actions. **testing-library/vue** does not have this bug.

## Presentation

`src\Unit tests in Vue.pdf`

## Exercises

- Integration --> `src\integration\__tests__\Dealer.spec.ts` line 99
- UI components --> `src\components\__tests__\ProductList.spec.ts` line 80
