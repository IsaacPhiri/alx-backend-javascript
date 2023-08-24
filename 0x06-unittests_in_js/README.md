# 0x06-unittests_in_js
## Description
### Project intended to learn:
- How to use Mocha to write a test suite for JavaScript code
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small HTTP server
## Environment
* __Environment:__ Ubuntu 18.04 LTS
* __nodejs version:__ 10.24.1
* __npm version:__ 6.14.12
* __mocha version:__ 8.4.0
* __chai version:__ 4.3.4
* __sinon version:__ 9.2.4
* __sinon-chai version:__ 3.6.0
* __request version:__ 2.88.2
* __mustache version:__ 4.2.0
* __semistandard version:__ 16.0.1
## How to install
```
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ npm install mocha chai sinon sinon-chai request mustache --save-dev
$ npm install semistandard --global
```
## How to use
```bash
$ npm run test
```
## How it works
* Run the command above and see the output
## Files
|File|Task|
|---|---|
|0-calcul.js, 0-calcul.test.js|Function that returns the sum of 2 integers|
|1-calcul.js, 1-calcul.test.js|Function that returns the division of 2 integers|
|2-calcul.js, 2-calcul.test.js|Function that returns the nth element of a list|
|3-calcul.js, 3-calcul.test.js|Function that returns the reversed version of a list|