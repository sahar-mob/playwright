import { test, expect } from '@playwright/test';
import { CommonActions } from "../common/CommonActions";
import { LoginLocators } from "../pages/LoginLocators";
import { MESSAGES } from "../data/messages";
import { URLS } from "../data/urls";
import { USERS } from "../data/users";
import { MainWalletLocator } from "../pages/MainWallet_Locator";
import { CardLocators } from '../pages/CardLocators';
import { GabzLocators } from '../pages/GabzLocators';
import { watchFile } from 'node:fs';
test.use({ storageState: 'storageState.json' });


test.describe("Card Page Tests", () => {
  let common: CommonActions;
  let gabz: GabzLocators;
  let login: LoginLocators;

  test.beforeEach(async ({ page }) => {
     common = new CommonActions(page);
     gabz = new GabzLocators(page);
     login = new LoginLocators(page);
    //Navigate to a website
    await common.goto(URLS.baseUrl);
    await common.expectTitle(URLS.title);
   // await common.handleUnderstandOrLazy(login.undrestandBtn,login.lazyloading)
    await page.waitForLoadState('load')
   
  });
test("0-add_Mci_Mobile_Ghabz", { tag: ["@regression", "@smoke", "@critical"] }, async ({ page }) => {

  const mobileNumber = "09193150989";
  const mobileTitle = "موبایل خودم";
console.log("اضافه کردن قبض همراه اول خودم")
  await common.wait(login.chargBtn);
  await common.wait(gabz.gabzBtn);
  await common.click(gabz.gabzBtn);
  await common.wait(gabz.gazTab);
  await common.expectVisible(gabz.gazTab);
  await common.click(gabz.recentTab);

  // اضافه کردن قبض موبایل
  await common.click(gabz.addBtn);
  await common.expectVisible(gabz.dialogAdd);

  await common.click(gabz.addmobileBtn);
  await common.wait(gabz.mobDialog);
  await common.expectVisible(gabz.mobDialog);

  await common.fill(gabz.numMobInp, mobileNumber);
  await common.fill(gabz.titleMobInp, mobileTitle);
  await common.wait(gabz.sabtBtn);
  await common.expectVisible(gabz.sabtBtn);
  await common.click(gabz.sabtBtn);
console.log("چک تکراری بودن قبض")
  // -------------------------------------------------------------------------
  // بررسی هوشمند: آیا قبض تکراری است یا جدید؟
  // -------------------------------------------------------------------------
  
  // بررسی ظاهر شدن پیام تکراری بودن با استفاده از لوکیتور تعریف‌شده در GabzLocators
  const isDuplicate = await gabz.duplicateAlert.isVisible({ timeout: 2000 }).catch(() => false);

  if (isDuplicate) {
    console.log("⚠️ قبض مورد نظر تکراری است و پیام «این قبض قبلا ذخیره شده است» نمایش داده شد.");
    await expect(gabz.duplicateAlert).toBeVisible();
  } else {
    console.log("✅ قبض جدید با موفقیت اضافه شد.");
    await common.expectHidden(gabz.mobDialog);
    await common.click(gabz.gbzTab);
    await expect(gabz.gbzTab).toHaveAttribute('aria-selected', 'true');
    await common.expectVisible(gabz.getBillCard(mobileNumber));
  }

});

test("1-add_Mobile_Ghabz", { tag: ["@regression", "@smoke", "@critical"] }, async ({ page }) => {

  const mobileNumber = "09126141674";
  const mobileTitle = "تلفن همراه من";

  await common.wait(login.chargBtn);
  await common.wait(gabz.gabzBtn);
  await common.click(gabz.gabzBtn);
  await common.wait(gabz.gazTab);
  await common.expectVisible(gabz.gazTab);
  await common.click(gabz.recentTab);
console.log("اضافه کردن قبض موبایل دایمی")
  // اضافه کردن قبض موبایل
  await common.click(gabz.addBtn);
  await common.expectVisible(gabz.dialogAdd);

  await common.click(gabz.addmobileBtn);
  await common.wait(gabz.mobDialog);
  await common.expectVisible(gabz.mobDialog);

  await common.fill(gabz.numMobInp, mobileNumber);
  await common.fill(gabz.titleMobInp, mobileTitle);
  await common.wait(gabz.sabtBtn);
  await common.expectVisible(gabz.sabtBtn);
  await common.click(gabz.sabtBtn);

  // -------------------------------------------------------------------------
  // بررسی هوشمند: آیا قبض تکراری است یا جدید؟
  // -------------------------------------------------------------------------
  
  // بررسی ظاهر شدن پیام تکراری بودن با استفاده از لوکیتور تعریف‌شده در GabzLocators
  const isDuplicate = await gabz.duplicateAlert.isVisible({ timeout: 2000 }).catch(() => false);

  if (isDuplicate) {
    console.log("⚠️ قبض مورد نظر تکراری است و پیام «این قبض قبلا ذخیره شده است» نمایش داده شد.");
    await expect(gabz.duplicateAlert).toBeVisible();
  } else {
    console.log("✅ قبض جدید با موفقیت اضافه شد.");
    await common.expectHidden(gabz.mobDialog);
    await common.click(gabz.gbzTab);
    await expect(gabz.gbzTab).toHaveAttribute('aria-selected', 'true');
    await common.expectVisible(gabz.getBillCard(mobileNumber));
  }

});


/*
test("1-add_Mobile_Ghabz",{tag: ["@regression", "@smoke", "@critical"]},
  async({page})=>{

      const mobileNumber = "09126141674";
  const mobileTitle = "تلفن همراه من";
await common.wait(login.chargBtn);
await common.wait(gabz.gabzBtn);
await common.click(gabz.gabzBtn);
await common.wait(gabz.gazTab);
await common.expectVisible(gabz.gazTab);
await common.click(gabz.recentTab);
//اضافه کردن قبض موبایل
await common.click(gabz.addBtn);
await common.expectVisible(gabz.dialogAdd);

await common.click(gabz.addmobileBtn)
await common.wait(gabz.mobDialog);
await common.expectVisible(gabz.mobDialog);

await common.fill(gabz.numMobInp,"09126141674")
await common.fill(gabz.titleMobInp,mobileTitle);
await common.wait(gabz.sabtBtn);
await common.expectVisible(gabz.sabtBtn);
await common.click(gabz.sabtBtn);

//چک اضافه شدن قبض جدید
   await common.expectHidden(gabz.mobDialog);
   await common.click(gabz.gbzTab);
   await expect(gabz.gbzTab).toHaveAttribute('aria-selected', 'true');
   await common.expectVisible(gabz.getBillCard(mobileNumber));

});*/

test("2-add_Landline_Ghabz", { tag: ["@regression", "@smoke", "@critical"] }, async ({ page }) => {
  const landlineNumber = "02133010128";
  const landlineTitle = "تلفن خانه";

  await common.wait(login.chargBtn);
  await common.wait(gabz.gabzBtn);
  await common.click(gabz.gabzBtn);
  await common.wait(gabz.gazTab);
  await common.expectVisible(gabz.gazTab);
  await common.click(gabz.recentTab);

  // باز کردن دیالوگ انتخاب نوع قبض
  await common.click(gabz.addBtn);
  await common.expectVisible(gabz.dialogAdd);
console.log("اضافه کردن قبض تلفن ثابت")
  // انتخاب تلفن ثابت و باز شدن دیالوگ تلفن ثابت
  await common.click(gabz.addtelBtn);
  await common.wait(gabz.landlineDialog);
  await common.expectVisible(gabz.landlineDialog);

  // پر کردن شماره و عنوان قبض تلفن ثابت
  await common.fill(gabz.numLandlineInp, landlineNumber);
  await common.fill(gabz.titleLandlineInp, landlineTitle);
  await common.wait(gabz.submitBtn);
  await common.expectVisible(gabz.submitBtn);
  await common.click(gabz.submitBtn);
console.log("ررسی بسته شدن دیالوگ و اضافه شدن کارت قبض در تب «قبض‌های من»")
  // بررسی بسته شدن دیالوگ و اضافه شدن کارت قبض در تب «قبض‌های من»
  await common.expectHidden(gabz.landlineDialog);
  await common.click(gabz.gbzTab);
  await expect(gabz.gbzTab).toHaveAttribute("aria-selected", "true");
  await common.expectVisible(gabz.getBillCard(landlineTitle));
});



test("3_estelam_ghabz", { tag: ["@regression", "@smoke", "@critical"] }, async ({ page }) => {
//انتخاب گزینه قبض
 await common.wait(login.chargBtn);
  await common.wait(gabz.gabzBtn);
  await common.click(gabz.gabzBtn);
  await common.wait(gabz.gazTab);
  await common.expectVisible(gabz.gazTab);
//انتخاب تب همه
console.log("استعلام آخرین قبض ثبت شده")
await common.click(gabz.allTab);
await common.click(gabz.lastBillCard);
await common.wait(gabz.estDialog)
await common.expectVisible(gabz.estDialog);
await common.click(gabz.estelamBtn);
await common.wait(gabz.estelamHeader);
await common.expectVisible(gabz.estelamHeader);
await common.expectVisible(gabz.mianDorehCard);


});

  test("4-Active_AutoPayment", { tag: ["@regression", "@smoke", "@critical"] }, async ({ page }) => {

//انتخاب گزینه قبض
  await common.wait(login.lazyloading);
  await common.wait(gabz.gabzBtn);
  await common.click(gabz.gabzBtn);
  await common.wait(gabz.gazTab);
  await common.expectVisible(gabz.gazTab);
//انتخاب تب همه
await common.click(gabz.allTab);
await common.wait(gabz.mciBillCard);


// بررسی وجود بج داخل کارت همراه اول
const hasAutoPayment = await gabz.mciBillCard.locator(gabz.autoPaymentBadge).isVisible({ timeout: 3000 }).catch(() => false);

if (hasAutoPayment) {
  console.log("َAutopayment activated befor");
     return; 
} else {
  console.log("Autopayment is activating now ");
  await common.click(gabz.mciBillCard);
}



await common.wait(gabz.estDialog)
await common.expectVisible(gabz.estDialog);
await common.click(gabz.activeBtn);
try {
 
 // ۱. بررسی می‌کنیم آیا صفحه درست باز شده یا نه (با تایم‌اوت کوتاه مثلاً ۵ ثانیه‌ای تا معطل نشود)
 console.log("آیا صفحه درست باز شده یا نه ");
  await common.wait(gabz.headerAuto);
  await common.expectVisible(gabz.headerAuto);

} catch (error) {
  // ۲. اگر هدر دیده نشد، وارد این بخش می‌شود و دیالوگ خطای برنامه را چک می‌کند:
  console.log("هدر صفحه پرداخت خودکار دیده نشد؛ در حال بررسی دیالوگ خطا...");


  await common.wait(gabz.errorServerDialog);
  console.log("  چک می‌کنیم که دیالوگ خطا وجود داشته باشد و نمایش داده شود")
  await common.expectVisible(gabz.errorServerDialog);

  // دریافت و ثبت متن خطای نمایش‌داده‌شده برای گزارش تست
  const errorMessage = await gabz.errorServerDialog.innerText();
  console.log("پیام خطای مشاهده‌شده در دیالوگ:", errorMessage);
}

await common.click(gabz.walletbitTab);
await page.waitForTimeout(1000);
await common.click(gabz.firstItem);
await common.click(gabz.dateCombobox);
await page.waitForTimeout(500);
await common.click(gabz.forthSelected);
await common.click(gabz.sabtAutoBtn);
await common.wait(gabz.autoPaymentBadge);
await common.expectVisible(gabz.autoPaymentBadge);
console.log("پرداخت خودکار فعال شد");

});



test("5-delete_ghabz", { tag: ["@regression", "@smoke", "@critical"] }, async ({ page }) => {

//انتخاب گزینه قبض
 await common.wait(login.chargBtn);
  await common.wait(gabz.gabzBtn);
  await common.click(gabz.gabzBtn);
  await common.wait(gabz.gazTab);
  await common.expectVisible(gabz.gazTab);
//انتخاب تب همه

await common.click(gabz.allTab);
const initialCount = await gabz.getBillCardsCount();
console.log(`تعداد کارت‌ها قبل از حذف: ${initialCount}`);
await common.click(gabz.lastBillCard);
await common.wait(gabz.estDialog)
await common.expectVisible(gabz.estDialog);
await common.click(gabz.deleteBtn1);
await common.expectVisible(gabz.deleteGabzDialog);
await common.click(gabz.deleteBtn2);
 // ۳. بررسی اینکه تعداد کارت‌ها دقیقاً یکی کم شده باشد
await expect(gabz.allBillCards).toHaveCount(initialCount - 1);


  });

}




);
