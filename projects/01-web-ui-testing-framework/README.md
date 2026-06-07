# Web UI Testing Framework

## Overview
A comprehensive UI automation testing framework built with Selenium WebDriver and Python, demonstrating advanced QA skills including test design patterns, CI/CD integration, and reporting.

## Technologies
- **Framework**: Selenium WebDriver
- **Language**: Python
- **Test Runner**: pytest
- **Page Object Model**: Implemented
- **Reporting**: Allure Reports
- **CI/CD**: GitHub Actions

## Key Features
✅ Page Object Model (POM) architecture  
✅ Data-driven testing  
✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)  
✅ Parallel test execution  
✅ Screenshot/video capture on failures  
✅ Retry mechanism for flaky tests  
✅ Custom logging and reporting  

## Test Coverage
- Functional testing
- Regression testing
- Smoke testing
- End-to-end scenarios

## Scenarios Tested
- User registration and login flows
- Shopping cart operations
- Payment processing
- Form validation
- Error handling

## How to Run
```bash
# Install dependencies
pip install -r requirements.txt

# Run all tests
pytest tests/

# Run specific test suite
pytest tests/login_tests.py -v

# Generate report
pytest tests/ --alluredir=allure-results
allure serve allure-results
```

## Metrics
- **Test Cases**: 50+
- **Code Coverage**: 85%
- **Average Execution Time**: 15 minutes
- **Failure Detection Rate**: 98%
