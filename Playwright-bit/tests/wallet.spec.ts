import { test, expect } from '../fixtures/test';
import { CommonActions } from "../common/CommonActions";
import { LoginLocators } from "../pages/LoginLocators";
import { MESSAGES } from "../data/messages";
import { URLS } from "../data/urls";
import { USERS } from "../data/users";
import { MainWalletLocator } from "../pages/MainWallet_Locator";
test.use({ storageState: 'storageState.json' });

test.describe("First Page Tests", () => {
  let common: CommonActions;
  let wallet: MainWalletLocator;
   let login: LoginLocators;

  test.beforeEach(async ({ page }) => {
    common = new CommonActions(page);
    wallet=new MainWalletLocator(page);
     login = new LoginLocators(page);
    //Navigate to a website
    await common.goto(URLS.baseUrl);
    await common.expectTitle(URLS.title);
    await common.waitForAuthenticatedHome();
    
 
   
  });

test("0-check_visible_mainPage", { tag: ["@regression", "@smoke", "@critical"] }, async ({ page }) => {
  //هندلینگ دکمه متوجه شدم
await common.expectVisible(login.chargBtn);
await common.expectVisible(login.etebarBtn);
await common.expectVisible(login.tranzactionBtn);

});


test("1-charge_wallet",{tag: ["@regression", "@smoke", "@critical"]},
  async({page})=>{
    await common.wait(login.chargBtn);
    await common.click(login.chargBtn);
    await common.wait(wallet.moneyInp);
    await common.click(wallet.moneyChips);
    await common.click(wallet.payBtn);
    await common.wait(wallet.moneyTitle);
    await common.expectVisible(wallet.moneyTitle);
    await common.click(wallet.cardInput);
    await common.click(wallet.sepahCard);
   await common.fill(wallet.cvvInp, process.env.CVVSEPAH || '');
   await common.fill(wallet.passInp,"123456789")
   await common.click(wallet.confBtn);
   await common.expectVisible(wallet.errorMsg);

  }
)









  });
  
 

