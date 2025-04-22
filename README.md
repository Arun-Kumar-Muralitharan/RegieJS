# Custom Playwright Framework for Regie AI
This framework is a custom Test Automation Framework tailor-made for plug-and-play Automation.
The framework is written on JavaScript which implements Playwright.
The Framework employs Allure for Reporting and runs on the default test runner of Playwright.

## 🚀 Features
- Playwright E2E Testing
- Page Object Model
- API Tests
- Allure Reporting (Local + GitHub Pages)
- Docker & CI/CD ready
- Environment Based Test Runs

## 🛠 Commands
```
npm install
npm run test
npm run report
```

## Prerequisites
- NPM
- IDE to build and run the Framework

## Setting up the Tests
Git Clone the framework from the Git repository. The framwork implement Page Object Model(POM). The user can add the methods and actions to the pages and write the tests in the tests folder.

## Project Structure
- The pages can be added to the pages folder as js files
- The Test files to follow the file name 'xxxx.test.js'
- Contunie to build the data folder with required data for testing
- Continue to build new functions tailored to meet the custom components
- Add common menthods that can be consumed everywhere under the common-methods

## Environment Specifications
The Framework comes with support for multiple environments. The '.env.qa' and '.env.prod' is currently employed to build the framework

## Docker Usage
Docker compose is used to trigger the build and exucute the Test cases