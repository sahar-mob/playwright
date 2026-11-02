import { type Locator, type Page } from "@playwright/test";
export class CardLocators{
 readonly page: Page;
 readonly carttocartBtn:Locator
 readonly sourceCardInp:Locator
 readonly destCardInp:Locator
 readonly cardAmountInp:Locator
 readonly textaria:Locator
 readonly paycardBtn:Locator
 readonly mehrCard:Locator
 readonly hubDialog:Locator
 readonly hubBtn:Locator
 readonly hubClose:Locator
 readonly sepahCard:Locator
 

constructor(page:Page){
 this.page = page;
 this.carttocartBtn=page.locator('//button[@aria-label="کارت به کارت"]');
  this.sourceCardInp=page.locator('//input[@id="sourceCardNumber"]');
 this.destCardInp=page.locator('//input[@id="destCardNumber"]');
 this.cardAmountInp=page.locator('//input[@id="cardtocardAmount"]');
 this.textaria=page.locator('//textarea[@aria-label="توضیحات"]');
 this.paycardBtn=page.locator('//button[contains(text(), "تایید و ادامه")]');
 this.sepahCard=page.locator('//button[.//img[@alt="بانک سپه"]][2]');
 this.mehrCard=page.locator('//button[.//img[@alt="بانک قرض‌الحسنه مهر ایران"]]');
 this.hubDialog=page.getByRole('dialog').filter({ has: page.getByRole('button', { name: 'ثبت در شاپرک', exact: true }) });
 this.hubBtn=page.locator('//button[text()="ثبت در شاپرک"]');
 this.hubClose=page.locator('//button[text()="بستن"]');

        
      
}
}
