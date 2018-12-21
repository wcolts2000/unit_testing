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

-puppeteer - headless browser by google
-jsdom - in js version of the dom without browser
