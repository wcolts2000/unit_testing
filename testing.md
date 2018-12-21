# Testing in JavaScript

## Types of tests

- Unit Testing: Should cover all small pure functions of an application. i.e. based on this input return this output (deterministic - given the same input will always return the same output)
- Integration Testing: Tests cross communication between different units of code. i.e. mocking database calls to test expected outputs
- Automation Tests: End to End testing - UI tests always running inside a browser or browser like environment because they need to simulate user interactions with the app. i.e. setting tests to run through the checkout process of an e-commerce site - usually only implemented in large companies with large budget as they are involved and time consuming. can be done with scripts but can also be live person teams doing actual UI testing. different devices, browsers, connections etc. are taken into consideration.

## Testing Tools

| LIBRARY - Scaffolding | ASSERTION LIBRARY | TEST RUNNER | MOCK SPYS & STUBS | CODE COVERAGE |
| --------------------- | ----------------- | ----------- | ----------------- | ------------- |
| Jasmine               | Jasmine           | Jasmine     | Jasmine           | Istanbul      |
| Jest                  | Jest              | Jest        | Jest              | Jest (^uth)   |
| Mocha                 | Chai              | Mocha       | Sinon.js          | Istanbul      |
|                       |                   | Karma       |                   |               |

### Packages of Interest

- Jest - complete testing library - [https://jestjs.io/]('https://jestjs.io/')
- Mocha - feature rich js testing framework running on node [https://github.com/mochajs/mocha]('https://github.com/mochajs/mocha')
- Chai - BDD / TDD assertion library for node [https://github.com/chaijs/chai]('https://github.com/chaijs/chai')
- Jasmine - behavior driven dev framework that does not require a DOM [https://github.com/jasmine/jasmine.github.io]('https://github.com/jasmine/jasmine.github.io')
- Sinon.js - Test Spys Stubs and Mocks [https://github.com/sinonjs/sinon]('https://github.com/jasmine/jasmine.github.io')
- Istanbul - code coverage tool for testing js [https://github.com/gotwarlost/istanbul]('https://github.com/gotwarlost/istanbul')
- Karma - a low setup easy to use testing invoronment that is framework agnostic [https://www.npmjs.com/package/karma]('https://www.npmjs.com/package/karma')
- Puppeteer - headless browser by google [https://github.com/GoogleChrome/puppeteer]('https://github.com/GoogleChrome/puppeteer')
- Jsdom - in js version of the dom without browser [https://github.com/jsdom/jsdom]('https://github.com/jsdom/jsdom')
- Enzyme - a js library by AirBnB for testing react components [https://github.com/airbnb/enzyme]('https://github.com/airbnb/enzyme')
- Storybook - an isolated environment to build out and visually test your components and heir state behavior [https://github.com/storybooks/storybook]('https://github.com/airbnb/enzyme')

## Additional Resources

- Jest Cheat Sheet [https://github.com/sapegin/jest-cheat-sheet]('https://github.com/sapegin/jest-cheat-sheet')
- Enzyme API REF DOCS [https://airbnb.io/enzyme/docs/api/]('https://airbnb.io/enzyme/docs/api/')

## Notes

- when writing tests the DRY principles are not of as much importance. Tests are for development environments only and therefore are better written as verbose as necessary to be clear and readable by yourself and other devs. repeating yourself in different test cases is not a bad thing and generally speaking the more tests the better as you can catch more edge cases potentially.
- as test files become bigger, they can be grouped into similar function blocks with describe method.
