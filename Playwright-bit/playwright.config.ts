import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  globalSetup: "./global-setup.ts",
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // All authenticated tests share one account, refresh token and bill list.
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  reporter: [["list"], ["html", { open: "never" }], ["allure-playwright",{
        outputFolder: 'allure-results', // نام پوشه ذخیره نتایج خام
        detail: true,
        suiteTitle: true,
      }]],
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },

  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
      channel: 'chrome', // <--- استفاده مستقیم از گوگل کروم نصب‌شده در ویندوز
    headless: false,
    launchOptions: {
      slowMo: 1000, 
   
    },
    screenshot: "only-on-failure", // ← ★
    video: "on-first-retry",
    actionTimeout: 15_000,
    navigationTimeout: 60_000,
       //  تزریق خودکار سشن، کوکی‌ها و توکن‌ها به تمام تست‌ها
    storageState: path.resolve(__dirname, 'storageState.json'),
  },

  /* Configure projects for major browsers */
  projects: [
  /*  {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] ,
          channel: 'chrome',
      },
    },*/
  {
    name: "chrome-as-mobile",
    use: {
      channel: 'chrome', // استفاده از کروم ویندوز
       
        
        viewport: { width: 412, height: 850 },
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 2.625,
  
      
      storageState: path.resolve(__dirname, 'storageState.json'),
    },
  }
   
/*
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },*/
  ],
});
