# Performance & Load Testing Framework

A performance testing framework designed to evaluate application scalability, reliability, and response times under varying workloads.

## Overview

This project demonstrates performance engineering practices used to validate system behavior under load, identify bottlenecks, and support release readiness decisions.

The framework focuses on:

* Load testing
* Stress testing
* Spike testing
* Baseline performance analysis
* API performance validation
* Performance reporting and trend analysis

## Business Goal

Ensure applications maintain acceptable response times, throughput, and stability under expected and peak traffic conditions.

## Tech Stack

* JMeter
* BlazeMeter
* REST APIs
* Jenkins
* GitHub Actions
* Grafana
* SQL
* CI/CD Pipelines

## Performance Scenarios

### Load Testing

Validate system behavior under expected production traffic.

### Stress Testing

Identify breaking points and system recovery behavior.

### Spike Testing

Measure application response to sudden traffic surges.

### Endurance Testing

Evaluate memory leaks and long-running stability.

### Scalability Testing

Assess system performance as user volume increases.

## Metrics Monitored

* Response Time (Average / P95 / P99)
* Throughput
* Error Rate
* Transactions Per Second
* Concurrent Users
* CPU Utilization
* Memory Consumption
* Network Utilization

## Framework Structure

```bash
performance-load-testing/
├── test-plans/
├── test-data/
├── reports/
├── dashboards/
├── scripts/
├── ci-cd/
└── README.md
```

## Execution

Run local performance tests:

```bash
jmeter -n -t test-plan.jmx -l results.jtl
```

Generate reports:

```bash
jmeter -g results.jtl -o reports/
```

## CI/CD Integration

Performance suites can be executed automatically through Jenkins or GitHub Actions:

* Scheduled nightly runs
* Release validation
* Environment benchmarking
* Performance regression detection

## Sample Outcomes

* Identified performance bottlenecks before production releases.
* Established response-time baselines for critical APIs.
* Automated performance validation as part of CI/CD pipelines.
* Improved release confidence through repeatable load testing.

## Key Skills Demonstrated

* Performance Engineering
* JMeter & BlazeMeter
* API Load Testing
* Monitoring & Metrics Analysis
* CI/CD Integration
* Bottleneck Identification
* Capacity Planning
* Release Readiness Validation

## Author

Yajoushi Sharma
QA Automation Engineer | SDET
