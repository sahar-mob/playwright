import { test, expect } from '../fixtures/test';
import { CommonActions } from "../common/CommonActions";
import { LoginLocators } from "../pages/LoginLocators";
import { MESSAGES } from "../data/messages";
import { URLS } from "../data/urls";
import { USERS } from "../data/users";
import { MainWalletLocator } from "../pages/MainWallet_Locator";
import { CardLocators } from '../pages/CardLocators';
test.use({ storageState: 'storageState.json' });

test.describe("Card Page Tests", () => {
  let common: CommonActions;
  let card:CardLocators
   let login: LoginLocators;

  test.beforeEach(async ({ page }) => {
     common = new CommonActions(page);
     card = new CardLocators(page);
     login = new LoginLocators(page);
    //Navigate to a website
    await common.goto(URLS.baseUrl);
    await common.expectTitle(URLS.title);
    await common.waitForAuthenticatedHome();
    await page.waitForLoadState('load')
   
  });




test("1-CardToCard_test",{tag: ["@regression", "@smoke", "@critical"]},
  async({page})=>{
await common.wait(card.carttocartBtn);  
await common.expectVisible(login.chargBtn);
await common.expectVisible(login.etebarBtn);
await common.expectVisible(login.tranzactionBtn);
    await common.click(card.carttocartBtn);
    await common.wait(card.cardAmountInp);
    await common.click(card.sourceCardInp);
     await common.wait(card.sepahCard);
    await common.click(card.sepahCard);
    await common.click(card.destCardInp);
    await common.wait(card.mehrCard);
    await common.click(card.mehrCard);
    
    await common.wait(card.cardAmountInp);
    await common.fill(card.cardAmountInp,"10000");
    
    await common.fill(card.textaria,"test automation develop by sahar");
    await common.click(card.paycardBtn);
    // This source card requires Shaparak registration before a transfer.
    await common.expectVisible(card.hubDialog);
    await common.expectVisible(card.hubBtn);


  });


  test("0-check_visible_mainPage", { tag: ["@regression", "@smoke", "@critical"] }, async ({ page }) => {
  

await common.expectVisible(login.chargBtn);
await common.expectVisible(login.etebarBtn);
await common.expectVisible(login.tranzactionBtn);
await page.waitForLoadState('networkidle')

});



test("2-close_hubDialog_test",{tag: ["@regression", "@smoke", "@critical"]},
  async({page})=>{
    await common.wait(card.carttocartBtn);
    await common.click(card.carttocartBtn);
    await common.wait(card.cardAmountInp);
    await common.click(card.sourceCardInp);
     await common.wait(card.sepahCard);
    await common.click(card.sepahCard);
    await common.click(card.destCardInp);
    await common.wait(card.mehrCard);
    await common.click(card.mehrCard);
    
    await common.wait(card.cardAmountInp);
    await common.fill(card.cardAmountInp,"10000");
    
    await common.fill(card.textaria,"test automation develop by sahar");
    await common.click(card.paycardBtn);
    await common.expectVisible(card.hubBtn)
    await common.click(card.hubClose);
    await common.expectHidden(card.hubClose);
    await page.waitForLoadState('networkidle')
    

})

});
  
 

