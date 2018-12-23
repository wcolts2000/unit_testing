# Testing in JavaScript

## Types of tests

- Unit Testing: Should cover all small pure functions of an application. i.e. based on this input return this output (deterministic - given the same input will always return the same output)
- Integration Testing: Tests cross communication between different units of code. i.e. mocking database calls to test expected outputs
- Automation Tests: End to End testing - UI tests always running inside a browser or browser like environment because they need to simulate user interactions with the app. i.e. setting tests to run through the checkout process of an e-commerce site - usually only implemented in large companies with large budget as they are involved and time consuming. can be done with scripts but can also be live person teams doing actual UI testing. different devices, browsers, connections etc. are taken into consideration.

## Testing Tools

| TESTING LIBRARY | ASSERTION LIBRARY | TEST RUNNER | MOCK SPYS & STUBS | CODE COVERAGE |
| --------------- | ----------------- | ----------- | ----------------- | ------------- |
| Jasmine         | Jasmine           | Jasmine     | Jasmine           | Istanbul      |
| Jest            | Jest              | Jest        | Jest              | Jest (^uth)   |
| Mocha           | Chai              | Mocha       | Sinon.js          | Istanbul      |
|                 |                   | Karma       |                   |               |

- **TESTING LIBRARY**: the scaffolding, giving us the ability to use function calls and some new methods to write the tests
- **ASSERTION LIBRARY**: provides assertion functions allowing you to test that the variables contain the expected value (i.e. it gives us the use of `expect([1,2]).to.be.an('array').that.does.not.include(3);` as can be seen in the docs for [Chai here](https://www.chaijs.com/api/bdd/ "Chai") )
- **TEST RUNNER**: allows us to actually run the tests. _as **Jest** is already installed in the environment when using **Create-React_app**, in our **react-scripts** we can use `npm test` to use its integrated **Test Runner**_
  - **Karma** is a **Test Runner** that gives the ability to run tests in the browser
  - To run tests outside the browser a _headless browser_ like **Puppeteer** by Google is needed. Think of these as a stripped down browser
  - jsdom is the javascript version of a DOMlike API environment that allows us to run our tests in the terminals. _this is what **Jest** is using under the hood_
- **MOCK SPYS AND STUBS**: spys provide to you the information about functions, i.e. how many times they were called, in what cases, and by who. stubbing replaces selected functions with a function to insure that the expected behavior happens, and mocks are like faking a function or behavior to test different parts of a particular process (could be very good for integration tests) _can be used to fake a server responses_
- **CODE COVERAGE**: code coverage will show you the overall coverage of tests on your app, showing the percentages of code coverage on statements, branches functions, and lines and finally the uncovered lines which displays the line numbers of the uncovered code in the files.

### Packages of Interest

- Jest - complete testing library - [https://jestjs.io/](https://jestjs.io/ "Jest")
- Mocha - feature rich js testing framework running on node [https://github.com/mochajs/mocha](https://github.com/mochajs/mocha "Mocha")
- Chai - BDD / TDD assertion library for node [https://github.com/chaijs/chai](https://github.com/chaijs/chai "Chai")
- Jasmine - behavior driven dev framework that does not require a DOM [https://github.com/jasmine/jasmine.github.io](https://github.com/jasmine/jasmine.github.io "Jasmine")
- Sinon.js - Test Spys Stubs and Mocks [https://github.com/sinonjs/sinon](https://github.com/jasmine/jasmine.github.io "Sinon.js")
- Istanbul - code coverage tool for testing js [https://github.com/gotwarlost/istanbul](https://github.com/gotwarlost/istanbul "Istanbul")
- Karma - a low setup easy to use testing invoronment that is framework agnostic [https://www.npmjs.com/package/karma](https://www.npmjs.com/package/karma "Karma")
- Puppeteer - headless browser by google [https://github.com/GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer "Puppeteer")
- Jsdom - in js version of the dom without browser [https://github.com/jsdom/jsdom](https://github.com/jsdom/jsdom "JSDOM")
- Enzyme - a js library by AirBnB for testing react components [https://github.com/airbnb/enzyme](https://github.com/airbnb/enzyme "Enzyme")
- Storybook - an isolated environment to build out and visually test your components and their state behavior [https://github.com/storybooks/storybook](https://github.com/airbnb/enzyme "Storybook.js")
- Nock - a package that allows you to test modules that perform HTTP requests in isolation, allowing you to mock your HTTP responses [https://www.npmjs.com/package/nock](https://www.npmjs.com/package/nock "Nock")
- AVA - another testing package that does parallelism really well, meaning it runs tests very fast [https://github.com/avajs/ava](https://github.com/avajs/ava "AVAJS")
- Tape - a simple light library _tap-producing test harness for node and browsers_ [https://github.com/substack/tape](https://github.com/substack/tape "Tape")

## Additional Resources

- Jest Cheat Sheet [https://github.com/sapegin/jest-cheat-sheet](https://github.com/sapegin/jest-cheat-sheet "Jest Cheat Sheet")
- Enzyme API REF DOCS [https://airbnb.io/enzyme/docs/api/](https://airbnb.io/enzyme/docs/api/ "Enzymes REF Docs")
- Markdown Cheat Sheet [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links "Markdown Cheat Sheet")
- "Lean Testing or Why Unit Tests are Worse than You Think" - a controversial but thought provoking article on the ROI factors between unit testing and integration testing [https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009](https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009 "lean testing article")

## Notes

- when writing tests the DRY principles are not of as much importance. Tests are for development environments only and therefore are better written as verbose as necessary to be clear and readable by yourself and other devs. repeating yourself in different test cases is not a bad thing and generally speaking the more tests the better as you can catch more edge cases potentially.
- as test files become bigger, they can be grouped into similar function blocks with describe method.
- Mocks give us the ability to fake data call/responses instead of being reliant on an actual api response to test our components interactions. They allow us to Spy on the behavior of the functions and see what is happening with them during async calls
- Because Jest comes installed with Create-React-App, it can be utilized through the installed react-scripts by inputting `npm test` in the console. this will watch the folders for test files and output them to the console for you.

## packages used in this sample

_note when installing packages via npm you can use `npm i -D <package_name>` as shorthand for `npm install --save-dev <package_name>` to save a dev dependency and `npm i <package_name>` in place of `npm install <package_name>`, save those keystrokes where possible_

| package name | dependency type |
| ------------ | --------------- |
| jest         | dev             |
| node-fetch   | reg             |

| RoboFriends App         | dependency type |
| ----------------------- | --------------- |
| enzyme                  | dev             |
| enzyme-adapter-react-16 | dev             |
| redux-mock-store        | dev             |

## Enzyme gives us the ability to test our components

- in setupTests.js configure the new adapter
- enzyme gives us 3 methods
  - shallow
    - allows an _easy render of an individual component_ for purposes of testing - what **will be used most often** for testing
    - As of Enzyme v3, **the shallow API does call React lifecycle methods such as componentDidMount and componentDidUpdate**.
  - mount
    - does a _Full DOM Rendering_ for instances where components need to _interact with the DOM API_ or class components _lifecycle methods_, **must run in a browser-like environment** (headless browsers, JS-DOM, etc.) - not used as often
  - render
    - used to render components to a static html (uses Cheerio under the hood)
- with Jest's Snapshot method, we are able to take a snapshot of what out stateless components should look like, telling our test watch to fail if at any time we are writing the components, they do not render as expected, eliminating a lot of redundant test code that would need to be written for each part of every stateless component. Here is an example of how to take a snapshot of a component:

```
    import { shallow } from "enzyme";
    import Card from "./Card";
    import React from "react";

    it("expect to render Card component", () => {
      expect(shallow(<Card />)).toMatchSnapshot();
    });
```

upon saving after this, a snapshot folder will be created for you, containing a snapshot of the component you took the snapshot of in its entirety, classes, tags, everything...

- if you do want to change a components structure in any way, after saving and the test failing in the console, there will be a `w` option available to view more options and the

```
  Press u to update failing snapshots
```

option will allow you to update the snapshot to the current configuration.

by running

```
  npm test -- --coverage
```

you can see the overall code coverage of your entire app. _note that stateless components tested with snapshots have 100% code coverage in your testing_

to render components that are being mapped over, you need to mock an array of the expected component as shown below

```
import { shallow } from "enzyme";
import CardList from "./CardList";
import React from "react";

it("expect to render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      email: "john@gmail.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
```

you can use `.state` and `.simulate` to get the state of components and to simulate events like a _click_ for example

**when testing connected components with redux like App.js, you will need to mock the store. there are npm packages like `mock-redux-store` that can be used, or a very simplistic way can be used instead. simply extracting the contents of App.js into its own component so that App.js which is wrapped with connect is only a container and the components that need testing can be tested on their own in a more abstracted component**

- because reducers are pure functions, testing them is extremely easy
  - import all your constants
  - import all reducers from reducers `import * as reducers from './reducers';`
  - group reducers in a describe block
    - write out tests for logic of components state changes
    - write an initialState const inside the describe block to mock what it should look like and check all the actions and responses, very repetitive, but fast to do.
      _Because reducers are the majority of the logic in the app, with good tests written for them, the majority of your apps functionality will be covered in your tests_
- testing actions is a little more involved, _note that you will need to utilize the `redux-mock-store` package to get access to the dispatch method_

  - use `import * from './actions'` in your actions.test.js file
  - also import all your constants as well
  - import your configureMockStore from `redux-mock-store` package
  - import your `thunkMiddleware` package as well since you will be testing thunks
    - configure your mockstore in a constant _note that you can set this constant in your config file and export/import it as needed if you have multiple actions files that will be tested_
    - _note that it is important to have the dispatch function curried properly in your actions for the mockStore to be able to process the returned thunk correctly_. an example of an API call with a mock store below:

```
import * as actions from "./actions";
import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("handles requesting robots API", () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  };
  expect(action[0]).toEqual(expectedAction);
});

```

- these can all be put inside a describe block as well, the above example is only showing the first expectedAction type.

### Note that when writing tests for your app, 100% code coverage is not necessarily optimal as there are things like strings being assigned to constants that would literally be a waste of your time to write testing for. You must decide on how much coverage is optimal for your app and where your time is best spent.
