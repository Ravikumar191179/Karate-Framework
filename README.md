# Karate API Automation Framework

A scalable API Automation Testing Framework built using **Karate DSL**, **Java**, and **Maven** for validating REST APIs with reusable test components, environment configuration, and CI/CD-ready execution.

## Tech Stack

- Karate Framework
- Java
- Maven
- REST API / Web Services
- JSON / XML Validation
- JUnit 5
- Git / GitHub
- Jenkins / CI-CD
- Logging & Reports

---

## Project Features

✔ API automation using Karate DSL  
✔ Request/Response validation  
✔ JSON schema validation  
✔ Reusable feature files  
✔ Environment-specific configuration (`dev`, `qa`, `uat`)  
✔ Data-driven testing  
✔ Tag-based execution  
✔ Detailed HTML reports  
✔ Maven command-line execution  
✔ CI/CD integration support

---

## Project Structure

```bash
src
 ├── test
 │   ├── java
 │   │    └── runners
 │   │         └── TestRunner.java
 │   └── resources
 │        ├── features
 │        ├── payloads
 │        ├── testdata
 │        └── karate-config.js

pom.xml
README.md
```

---

## Prerequisites

Install:

- Java 17+
- Maven 3.9+
- Git
- IDE (IntelliJ / Eclipse / VS Code)

---

## Clone Repository

```bash
git clone <repository-url>
cd <project-name>
```

---

## Run Tests

### Run all tests

```bash
mvn test
```

### Run specific runner

```bash
mvn test -Dtest=TestRunner
```

### Run with environment

```bash
mvn test -Dkarate.env=qa
```

### Run by tags

```bash
mvn test -Dkarate.options="--tags @smoke"
```

---

## Reporting

Karate generates reports after execution.

Path:

```bash
target/karate-reports/
```

Open:

```bash
target/karate-reports/karate-summary.html
```

---

## Sample API Test

```gherkin
Feature: Validate User API

Scenario: Get user details

Given url 'https://reqres.in/api/users/2'
When method GET
Then status 200
And match response.data.id == 2
```

---

## CI/CD Integration

This framework supports:

- Jenkins
- GitHub Actions
- Azure DevOps

Example:

```bash
mvn clean test
```

---

## Best Practices Followed

- Reusable feature files
- Common utility methods
- Environment configuration
- Test data separation
- Modular folder structure
- Clean reporting
- Source control with Git

---

## Author

Ravikumar Achary

QA Lead | API Automation | Karate | Selenium | Playwright | Java | AI Engineering
