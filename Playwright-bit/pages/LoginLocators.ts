import { type Locator, type Page } from "@playwright/test";
export class LoginLocators {
  readonly page: Page;
  readonly undrestandBtn:Locator
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly errorMessage: Locator;
 // readonly productsBtn: Locator;
   readonly startBtn: Locator;
   readonly inputCode:Locator;
   readonly lazyloading:Locator;
   readonly chargBtn:Locator
   readonly etebarBtn:Locator
    readonly tranzactionBtn:Locator
     readonly navSection:Locator
  constructor(page: Page) {
    this.page = page;
    this.undrestandBtn=page.getByRole('button', { name: /متوجه شدم/i });
    this.startBtn=page.getByText('ورود به حساب کاربری', { exact: true })
    this.usernameInput =page.locator('//input[@id="mobile"]')
    this.passwordInput = page.locator('//*[@id="password"]');
    this.loginBtn = page.getByRole('button', { name: 'ورود' });
    this.errorMessage =page.getByRole('alert')
   // this.errorMessage=page.locator('//*[@id="/api/user/2fa/v1/login"]')
    this.inputCode=page.locator('//*[@id="activationKey"]')
    this.lazyloading=page.locator('//*[@loading="lazy"]')
    this.chargBtn=page.locator('(//button[contains(text(),"شارژ کیف پول")])[1]');
     this.tranzactionBtn=page.locator('//button[contains(., "مشاهده همه")]');
      this.etebarBtn=page.locator('//button[@aria-label="درخواست اعتبار"]');
       this.navSection=page.locator('//*[@aria-label="ناوبری اصلی"]');
    //this.productsBtn = page.getByText("Products");
  }
}
