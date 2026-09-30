import { type Locator, type Page } from "@playwright/test";
export class LoginLocators {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly errorMessage: Locator;
  readonly productsBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator('[data-test="error"]');
    this.productsBtn = page.getByText("Products");
  }
}
