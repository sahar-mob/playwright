import fs from "fs";
import path from "path";
import os from "os";

async function globalSetup() {
  const allureResultsDir = path.join(process.cwd(), "allure-results");

  if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir, { recursive: true });
  }

  const packageJson = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8"),
  );
  const playwrightVersion =
    packageJson.devDependencies["@playwright/test"] || "unknown";

  // =========================
  // 1. Environment Properties
  // =========================
  const envInfo = {
    // اطلاعات سیستم — خودکار
    OS: os.type() + " " + os.release(),
    Platform: os.platform(),
    Architecture: os.arch(),
    "CPU Cores": os.cpus().length.toString(),
    "Total Memory": Math.round(os.totalmem() / 1024 / 1024 / 1024) + " GB",
    Hostname: os.hostname(),
    User: os.userInfo().username,

    // اطلاعات پروژه
    "Node.js": process.version,
    Playwright: playwrightVersion,
    Language: "TypeScript",
    Framework: "Playwright + Allure Report",

    // اطلاعات تست
    Tester: "Ata Pourfarivar",
    "Test Environment": process.env.CI ? "GitHub Actions (Ubuntu)" : "Local",
    "Base URL": "https://www.saucedemo.com",
    "Execution Date": new Date().toLocaleString("en-US"),
  };

  const content = Object.entries(envInfo)
    .map(([key, value]) => key + "=" + value)
    .join("\n");

  fs.writeFileSync(
    path.join(allureResultsDir, "environment.properties"),
    content,
  );

  // =========================
  // 2. Categories (طبقه‌بندی خطاها)
  // =========================
  const categoriesPath = path.join(process.cwd(), "categories.json");
  if (fs.existsSync(categoriesPath)) {
    fs.copyFileSync(
      categoriesPath,
      path.join(allureResultsDir, "categories.json"),
    );
  }

  console.log("✅ Allure environment info generated");
}

export default globalSetup;
