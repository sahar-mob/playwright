import { type Locator, type Page } from "@playwright/test";
export class MainWalletLocator{
 readonly page: Page;
 readonly moneyInp:Locator
 readonly moneyChips:Locator
 readonly payBtn:Locator
 readonly moneyTitle:Locator
 readonly cardInput:Locator
 readonly sepahCard:Locator
 readonly cvvInp:Locator
 readonly otpInp:Locator
 readonly passInp:Locator
 readonly confBtn:Locator
 readonly errorMsg:Locator

constructor(page:Page){
 this.page = page;
 this.moneyInp=page.locator('//input[@placeholder="مبلغ — ریال"]');
 this.moneyChips=page.locator('//button[text()="۱۰۰,۰۰۰"]');
 this.payBtn=page.locator('//button[text()="پرداخت"]'); 
 this.moneyTitle=page.locator('//span[text()="مبلغ قابل پرداخت"]');
  this.cardInput=page.locator('//*[@id="cardNumber"]');
   this.sepahCard=page.locator('//button[.//img[@alt="بانک سپه"]][2]');
    this.cvvInp=page.locator('//input[@name="cvv2"]');
     this.otpInp=page.locator('//input[@name="otp"]');
      this.passInp=page.locator('//input[@id="passField"]');
       this.confBtn=page.locator('//button[text()="تایید و پرداخت"]');
        this.errorMsg=page.locator('//*[contains(@class, "Toastify") and contains(text(), "اشتباه می باشد")]');
        
      
}
}