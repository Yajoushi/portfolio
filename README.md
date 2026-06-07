# Test Automation CI/CD Framework

A sample QA automation framework demonstrating web UI automation, API testing, reusable test utilities, reporting, and CI/CD execution practices.

## Overview

This project showcases a structured test automation approach for modern web applications. It is designed to demonstrate how QA teams can move from manual regression testing toward reliable, repeatable, and pipeline-driven automation.

The framework focuses on:

* Web UI automation
* API validation
* Regression and smoke test execution
* Reusable test utilities
* CI/CD-based test runs
* Test reporting and failure analysis

## Tech Stack

* Playwright / Cypress
* JavaScript / TypeScript
* REST API Testing
* GitHub Actions / Jenkins
* Page Object Model
* Data-driven testing
* HTML test reports
* Git & GitHub

## Key Features

* Automated UI test scenarios for critical user flows
* API validation for backend response checks
* Reusable page objects and helper methods
* Config-based environment handling
* Smoke and regression test separation
* CI/CD workflow for automated execution
* Screenshots, videos, and reports for debugging failed tests

## Project Structure

```bash
test-automation-ci-cd/
├── tests/
│   ├── ui/
│   └── api/
├── pages/
├── fixtures/
├── utils/
├── reports/
├── .github/
│   └── workflows/
├── package.json
└── README.md
```

## How to Run

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npm test
```

Run smoke tests:

```bash
npm run test:smoke
```

Run regression tests:

```bash
npm run test:regression
```

Generate report:

```bash
npm run report
```

## CI/CD Execution

The framework can be integrated with GitHub Actions or Jenkins to trigger automated test execution on:

* Code push
* Pull request creation
* Scheduled regression runs
* Release validation

CI/CD execution helps provide faster feedback, reduces manual testing effort, and improves release confidence.

## QA Value Demonstrated

This project demonstrates practical SDET skills, including:

* Test framework design
* Automation best practices
* CI/CD pipeline integration
* API and UI test coverage
* Debug-friendly reporting
* Regression optimization
* Shift-left testing mindset

## Author

**Yajoushi Sharma**
QA Automation Engineer / SDET
GitHub: [@Yajoushi](https://github.com/Yajoushi)
