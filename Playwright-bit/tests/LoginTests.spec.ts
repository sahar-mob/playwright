
import { test, expect } from '@playwright/test';
import { CommonActions } from "../common/CommonActions";
import { LoginLocators } from "../pages/LoginLocators";
import { MESSAGES } from "../data/messages";
import { URLS } from "../data/urls";
import { USERS } from "../data/users";

// Login scenarios must not inherit the authenticated account's cookies.
test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Login Page Tests", () => {
  let common: CommonActions;
  let login: LoginLocators;

  test.beforeEach(async ({ page }) => {
    common = new CommonActions(page);
    login = new LoginLocators(page);
    //Navigate to a website
    await common.goto(URLS.baseUrl2);
    await common.expectTitle(URLS.title);
    await common.wait(login.startBtn)
    await common.expectEnabled(login.startBtn);
    await common.click(login.startBtn);
      //Validate the elements
    await common.wait(login.usernameInput)
    await common.expectVisible(login.usernameInput);
    await common.expectEnabled(login.usernameInput);
    await common.expectVisible(login.passwordInput);
    await common.expectEnabled(login.passwordInput);
    await common.expectVisible(login.loginBtn);
    await common.expectEnabled(login.loginBtn);
 
   
  });



  test("1-Wrong User", { tag: ["@smoke", "@regression"] }, async () => {
    await common.wait(login.usernameInput)
    await common.fill(login.usernameInput, USERS.wrongUser.username);
    await common.expectValue(login.usernameInput, USERS.wrongUser.username);
    await common.fill(login.passwordInput, USERS.wrongUser.password);
    await common.expectValue(login.passwordInput, USERS.wrongUser.password);
    await common.click(login.loginBtn);
    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.wrongUser);
  });

  test("2-Wrong Pass", { tag: ["@smoke", "@regression"] }, async () => {
    await common.wait(login.usernameInput)
    await common.fill(login.usernameInput, USERS.wrongPass.username);
    await common.expectValue(login.usernameInput, USERS.wrongPass.username);
    await common.fill(login.passwordInput, USERS.wrongPass.password);
    await common.expectValue(login.passwordInput, USERS.wrongPass.password);
    await common.click(login.loginBtn);
    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.wrongCredentials);
  });

  test("3-Empty User", { tag: ["@regression"] }, async () => {
    await common.wait(login.usernameInput)
    await common.fill(login.usernameInput, USERS.emptyUser.username);
    await common.expectValue(login.usernameInput, USERS.emptyUser.username);
    await common.fill(login.passwordInput, USERS.emptyUser.password);
    await common.expectValue(login.passwordInput, USERS.emptyUser.password);
    await common.click(login.loginBtn);
    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.emptyUser);
  });
  test("4-Empty Pass", { tag: ["@regression"] }, async () => {
    await common.wait(login.usernameInput)
    await common.fill(login.usernameInput, USERS.emptyPass.username);
    await common.expectValue(login.usernameInput, USERS.emptyPass.username);
    await common.fill(login.passwordInput, USERS.emptyPass.password);
    await common.expectValue(login.passwordInput, USERS.emptyPass.password);
    await common.click(login.loginBtn);
    //await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.emptyPass);
  });


  
  test(
    "5-succeessful_login",
    { tag: ["@regression", "@smoke", "@critical"] },
    async () => {
      
      await common.fill(login.usernameInput, USERS.standard.username);
      await common.fill(login.passwordInput, USERS.standard.password);

      await common.expectValue(login.usernameInput, USERS.standard.username);
      await common.expectValue(login.passwordInput, USERS.standard.password);

      await common.click(login.loginBtn);
      //await common.expectUrl(URLS.successfulLoginUrl);
      await common.expectVisible(login.inputCode);
      //await common.expectVisible(login.productsBtn);
    },
  );
});
