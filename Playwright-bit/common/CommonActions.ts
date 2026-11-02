import { type Page, type Locator, test, expect } from "@playwright/test";
import { LoginLocators } from "../pages/LoginLocators";

export class CommonActions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await test.step("Go to: " + url, async () => {
      await this.page.goto(url, { waitUntil: "domcontentloaded" } );
      await this.page.locator('//*[@id="app-switch-fade"]').waitFor({ state: 'visible', timeout: 60000 });

    });
  }

  async reload() {
    await test.step("Reload page", async () => {
      await this.page.reload();
    });
  }

  async goBack() {
    await test.step("Go back", async () => {
      await this.page.goBack();
    });
  }

  async click(locator: Locator) {
    await test.step("Click element", async () => {
      await locator.click();
    });
  }

  async doubleClick(locator: Locator) {
    await test.step("Double click element", async () => {
      await locator.dblclick();
    });
  }

  async rightClick(locator: Locator) {
    await test.step("Right click element", async () => {
      await locator.click({ button: "right" });
    });
  }

  async hover(locator: Locator) {
    await test.step("Hover element", async () => {
      await locator.hover();
    });
  }

  async fill(locator: Locator, text: string) {
    const inputType = await locator.getAttribute("type");
    const isSecret = inputType === "password";
    const displayText = isSecret ? "***" : text;

    await test.step("Fill with: " + displayText, async () => {
      await locator.fill(text);
    });
  }

  async clear(locator: Locator) {
    await test.step("Clear field", async () => {
      await locator.clear();
    });
  }
 async wait(locator: Locator) {
    await test.step("wait for selector", async () => {
      await locator.waitFor({state:'visible',timeout:10000})
    });
  }


  async pressKey(locator: Locator, key: string) {
    await test.step("Press key: " + key, async () => {
      await locator.press(key);
    });
  }

  async getText(locator: Locator): Promise<string> {
    return await test.step("Get text from element", async () => {
      return (await locator.textContent()) ?? "";
    });
  }

  async getInputValue(locator: Locator): Promise<string> {
    return await test.step("Get input value", async () => {
      return await locator.inputValue();
    });
  }

  async expectVisible(locator: Locator) {
    await test.step("Validate element is visible", async () => {
      await expect(locator).toBeVisible();
    });
  }


 

  async expectHidden(locator: Locator) {
    await test.step("Validate element is hidden", async () => {
      await expect(locator).toBeHidden();
    });
  }

  async expectEnabled(locator: Locator) {
    await test.step("Validate element is enabled", async () => {
      await expect(locator).toBeEnabled();
    });
  }

  async expectText(locator: Locator, text: string) {
    await test.step("Validate text equals: " + text, async () => {
      await expect(locator).toHaveText(text);
    });
  }

  async expectContainsText(locator: Locator, text: string) {
    await test.step("Validate text contains: " + text, async () => {
      await expect(locator).toContainText(text);
    });
  }

  async expectValue(locator: Locator, value: string) {
    const inputType = await locator.getAttribute("type");
    const isSecret = inputType === "password";
    const displayValue = isSecret ? "***" : value;

    await test.step("Validate field value: " + displayValue, async () => {
      await expect(locator).toHaveValue(value);
    });
  }

  async expectCount(locator: Locator, count: number) {
    await test.step("Validate count equals: " + count, async () => {
      await expect(locator).toHaveCount(count);
    });
  }

  async expectUrl(url: string | RegExp) {
    await test.step("Validate URL: " + url, async () => {
      await expect(this.page).toHaveURL(url);
    });
  }

  async expectTitle(title: string | RegExp) {
    await test.step("Validate page title: " + title, async () => {
      await expect(this.page).toHaveTitle(title);
    });
  }

  async waitForAuthenticatedHome() {
    await test.step("Wait for authenticated home page", async () => {
      const login = new LoginLocators(this.page);
      await login.undrestandBtn.or(login.chargBtn).or(login.startBtn).first()
        .waitFor({ state: "visible" });

      if (await login.startBtn.isVisible()) {
        throw new Error("The saved login session is no longer accepted. Run npm run auth:refresh, complete login, then rerun the tests.");
      }
      if (await login.undrestandBtn.isVisible()) {
        await login.undrestandBtn.click();
      }
      await expect(login.chargBtn).toBeVisible();
    });
  }


 
}
