# 🎭 Playwright Test Automation Course

A comprehensive Playwright + TypeScript test automation project demonstrating professional QA engineering practices — from Page Object Model to CI/CD with Allure reporting.



---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Running Tests](#-running-tests)
- [Reports](#-reports)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Environment Variables](#-environment-variables)
- [Best Practices Applied](#-best-practices-applied)


---

## 🎯 Overview

This project is a **complete end-to-end test automation framework** built with Playwright and TypeScript. It tests the [SauceDemo](https://www.saucedemo.com) application and demonstrates industry-standard QA engineering practices used in enterprise environments.

**What this project demonstrates:**

- 🏗️ **Clean architecture** with Page Object Model
- 🔄 **Reusable components** through a centralized `CommonActions` class
- 📊 **Professional reporting** with Allure Report published to GitHub Pages
- 🔐 **Secure credential management** using environment variables and GitHub Secrets
- 🚀 **Automated CI/CD** with GitHub Actions
- 🌐 **Cross-browser testing** on Chromium, Firefox, and WebKit
- 🏷️ **Test organization** with tags (smoke, regression)

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Test Framework** | [Playwright](https://playwright.dev/) |
| **Language** | TypeScript |
| **Runtime** | Node.js 22 |
| **Reporting** | Allure Report + HTML Report |
| **CI/CD** | GitHub Actions |
| **Report Hosting** | GitHub Pages |
| **Secrets Management** | GitHub Secrets + dotenv |
| **Version Control** | Git & GitHub |

---

## 📁 Project Structure

```
login-PlaywrightCourse/
├── .github/
│   └── workflows/
│       └── playwright.yml           # CI/CD pipeline
├── common/
│   └── CommonActions.ts             # Reusable action methods
├── data/
│   ├── users.ts                     # User credentials (from .env)
│   ├── urls.ts                      # Application URLs
│   └── messages.ts                  # Expected messages/text
├── pages/
│   └── LoginLocators.ts             # Page Object Model
├── tests/
│   └── LoginTests.spec.ts           # Test cases
├── .env                             # Local secrets (gitignored)
├── .env.example                     # Template for teammates
├── .gitignore
├── categories.json                  # Allure error categories
├── global-setup.ts                  # Allure environment setup
├── playwright.config.ts             # Playwright configuration
└── package.json
```

---

## ✨ Features

### 🏗️ Clean Architecture

- **Page Object Model (POM)** — Separates locators from test logic
- **CommonActions class** — Centralized reusable methods (`fill`, `click`, `expectText`, etc.)
- **Data layer** — Test data separated into dedicated files

### 📊 Enhanced Allure Reporting

- Test steps are automatically wrapped with `test.step()` for detailed reporting
- **Password masking** — Sensitive data automatically hidden in reports
- **Environment info** — OS, Node.js version, tester name, and more
- **Error categorization** — Failed tests grouped by type:
  - 🚨 Product defects
  - ⏱️ Timeout issues
  - 🔍 Locator issues
  - 🌐 Network issues

### 🔐 Security-First Approach

- Credentials stored in `.env` (never committed)
- GitHub Secrets for CI/CD
- Automatic password masking in test reports
- `.env.example` provides template without exposing secrets

### 🚀 CI/CD Pipeline

- Automated test execution on every push
- Cross-browser testing (Chromium, Firefox, WebKit)
- Allure Report auto-published to GitHub Pages
- Historical trend tracking

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 22 or higher
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AtaFarivar/login-PlaywrightCourse.git
   cd login-PlaywrightCourse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your credentials.

---

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests by tag
```bash
# Smoke tests only
npx playwright test --grep @smoke

# Regression tests only
npx playwright test --grep @regression
```

### Run a specific test file
```bash
npx playwright test tests/LoginTests.spec.ts
```

### Run in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run in headed mode (see the browser)
```bash
npx playwright test --headed
```

### Debug mode
```bash
npx playwright test --debug
```

---

## 📊 Reports

### Playwright HTML Report
After running tests:
```bash
npx playwright show-report
```

### Allure Report (Local)
```bash
# Install Allure CLI (one-time)
npm install -g allure-commandline

# Generate and serve
allure serve allure-results
```

### Allure Report (Online)
The Allure Report is automatically published to GitHub Pages after each push to `main`:

**🔗 [View Live Allure Report](https://atafarivar.github.io/login-PlaywrightCourse/)**

---

## 🔄 CI/CD Pipeline

The project uses **GitHub Actions** to automatically:

1. ✅ Run tests on every push to `main`
2. ✅ Run tests on every Pull Request
3. ✅ Generate Allure Report
4. ✅ Publish Report to GitHub Pages

### Workflow Overview

```yaml
Trigger: push to main OR pull request

Steps:
├── Checkout code
├── Setup Node.js 22
├── Install dependencies (npm ci)
├── Install Playwright browsers
├── Run Playwright tests (with secrets)
├── Setup Java (for Allure)
├── Install Allure CLI
├── Generate Allure Report
└── Deploy to GitHub Pages
```

---

## 🔐 Environment Variables

### Local Development

Create a `.env` file in the project root:

```env
STANDARD_USERNAME=standard_user
STANDARD_PASSWORD=secret_sauce
WRONG_USERNAME=wrongUser
WRONG_PASSWORD=wrongPass
```

### GitHub Actions

Add these as **Repository Secrets** (Settings → Secrets and variables → Actions):

| Secret Name | Purpose |
|-------------|---------|
| `STANDARD_USERNAME` | Valid username for successful login tests |
| `STANDARD_PASSWORD` | Valid password for successful login tests |
| `WRONG_USERNAME` | Invalid username for negative tests |
| `WRONG_PASSWORD` | Invalid password for negative tests |

---

## 💡 Best Practices Applied

### 1. **Separation of Concerns**
- Locators → `pages/`
- Actions → `common/CommonActions.ts`
- Data → `data/`
- Tests → `tests/`

### 2. **DRY (Don't Repeat Yourself)**
All common actions (fill, click, validate) are centralized in `CommonActions`. Change once, apply everywhere.

### 3. **Security**
- No hardcoded credentials
- `.env` in `.gitignore`
- GitHub Secrets for CI
- Passwords automatically masked in reports

### 4. **Maintainability**
- Clear folder structure
- Descriptive naming conventions
- Type safety with TypeScript
- Consistent code style

### 5. **Test Reliability**
- Auto-waiting with Playwright's built-in mechanisms
- Scroll into view before interactions
- Proper timeouts and retries in CI
- Trace and video on failures

### 6. **Test Organization**
- Tag-based execution (`@smoke`, `@regression`)
- Grouped tests with `describe`
- Global setup for shared configuration

### 7. **Professional Reporting**
- Meaningful test step names
- Environment information
- Error categorization
- Screenshots and videos on failure

---

## 🎓 What You Can Learn From This Project

This project is designed as a complete learning resource for QA engineers looking to master modern test automation. It covers:

- ✅ Playwright fundamentals
- ✅ TypeScript for testing
- ✅ Page Object Model design pattern
- ✅ Class-based architecture
- ✅ Git and GitHub workflow
- ✅ Branch management and Pull Requests
- ✅ GitHub Actions CI/CD
- ✅ Environment variables and secrets management
- ✅ Advanced Allure reporting
- ✅ Cross-browser testing strategies

---

## 📈 Test Coverage

Current test scenarios cover:

- ✅ Successful login with valid credentials
- ✅ Login with wrong username
- ✅ Login with wrong password
- ✅ Login with empty username
- ✅ Login with empty password
- ✅ Error message validation
- ✅ Field value persistence

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available for educational purposes.

---



## 🌟 Acknowledgments

- [Playwright](https://playwright.dev/) — Amazing test framework
- [Allure Framework](https://allurereport.org/) — Professional reporting
- [SauceDemo](https://www.saucedemo.com/) — Test playground

---


</div>
