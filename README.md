# API Automation Testing Framework

A scalable API automation framework designed to validate REST services, business workflows, data integrity, and application reliability across multiple environments.

## Overview

This project demonstrates API testing practices used to validate backend services, ensure data consistency, and accelerate regression testing through automation.

The framework supports:

* REST API automation
* Request and response validation
* Schema validation
* Database verification
* Environment-based execution
* CI/CD integration
* Automated reporting

## Business Goal

Ensure API reliability, reduce manual testing effort, and provide fast feedback on service quality during development and release cycles.

## Tech Stack

* Java
* REST Assured
* TestNG
* Maven
* Postman
* SQL
* Jenkins
* GitHub Actions
* JSON Schema Validation
* Git

## Framework Capabilities

### API Validation

* Status code verification
* Response body validation
* Header validation
* Schema validation
* Response time checks

### Data Validation

* Database verification
* API-to-database consistency checks
* End-to-end workflow validation

### Test Design

* Data-driven testing
* Parameterized requests
* Environment-specific configurations
* Reusable utility methods

## Framework Structure

```bash
api-automation-testing/
├── src/test/java
│   ├── tests
│   ├── api
│   ├── utils
│   └── models
├── test-data
├── reports
├── config
├── pom.xml
└── README.md
```

## Sample Test Coverage

* Authentication APIs
* User Management APIs
* CRUD Operations
* Error Handling Validation
* Data Integrity Checks
* Integration Workflows

## Execution

Run all tests:

```bash
mvn clean test
```

Run specific suite:

```bash
mvn test -DsuiteXmlFile=testng.xml
```

Generate reports:

```bash
mvn surefire-report:report
```

## CI/CD Integration

The framework can be integrated with:

* Jenkins Pipelines
* GitHub Actions
* Scheduled Regression Runs
* Pull Request Validation
* Release Readiness Testing

## Key Metrics

* Test Pass Rate
* API Response Time
* Defect Leakage
* Regression Coverage
* Automation Coverage

## Skills Demonstrated

* REST Assured Framework Design
* API Test Automation
* TestNG
* Java
* SQL Validation
* JSON Schema Validation
* CI/CD Integration
* Test Reporting
* Service Reliability Testing

## Why This Project Matters

API testing forms the foundation of modern quality engineering. By validating services early in the development lifecycle, teams can identify defects faster, improve release confidence, and reduce dependency on manual UI testing.

## Author

Yajoushi Sharma

QA Automation Engineer | SDET

Core Skills: REST Assured, Java, TestNG, SQL, Postman, Jenkins, GitHub Actions, CI/CD
