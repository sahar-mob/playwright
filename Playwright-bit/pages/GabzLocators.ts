import { Locator, Page } from "@playwright/test";

export class GabzLocators {
  readonly page: Page;
 

  // دکمه‌های اصلی صفحه قبض
  readonly gabzBtn: Locator;
  readonly addBtn: Locator;
  readonly gbzTab: Locator;
  readonly recentTab: Locator;

  // تب‌های دسته‌بندی قبض‌ها
  readonly mobileTab: Locator;
  readonly telTab: Locator;
  readonly gazTab: Locator;
  readonly barghTab: Locator;
  readonly aabTab: Locator;
    // تب دسته‌بندی همه
  readonly allTab: Locator;


  // دیالوگ انتخاب نوع قبض
  readonly dialogAdd: Locator;
  readonly addmobileBtn: Locator;
  readonly addgazBtn: Locator;
  readonly addbarghBtn: Locator;
  readonly addaabBtn: Locator;
  readonly addtelBtn: Locator;

  // دیالوگ افزودن قبض تلفن همراه
  readonly mobDialog: Locator;
  readonly numMobInp: Locator;
  readonly titleMobInp: Locator;
  readonly sabtBtn: Locator;

  // دیالوگ افزودن قبض تلفن ثابت
  readonly landlineDialog: Locator;
  readonly closeDialogBtn: Locator;
  readonly numLandlineInp: Locator;
  readonly titleLandlineInp: Locator;
  readonly submitBtn: Locator;
  // دیالوگ افزودن قبض تلفن گاز'
readonly gasDialog: Locator;
readonly closeGasDialogBtn: Locator;
readonly numGasInp: Locator;
readonly titleGasInp: Locator;
readonly submitGasBtn: Locator;

  // استعلام و حذف قبض
  // ==========================================
  readonly estelamBtn: Locator;
  readonly estDialog: Locator;
  readonly deleteGabzDialog: Locator;
  readonly deleteBtn1: Locator;
  readonly deleteBtn2: Locator;
  readonly lastBillCard:Locator;
  readonly allBillCards: Locator;
  readonly firstBillCard:Locator;
  readonly mciBillCard:Locator;

    // هدر استعلام قبض
  readonly estelamHeader: Locator;
    // کارت قبض میان دوره
  readonly mianDorehCard: Locator;
  // دیالوگ یا پیام خطای قبض تکراری
  readonly duplicateAlert: Locator;




  // کارت قبض ثبت‌شده
  readonly billCardByPhone: Locator;

    // بخش پرداخت خودکار
  readonly activeBtn: Locator;
  readonly headerAuto: Locator;
  readonly walletbitTab: Locator;
  readonly firstItem:Locator;
  readonly root:Locator
  readonly sabtAutoBtn: Locator;
  readonly autoPaymentBadge: Locator;
  readonly editBtn: Locator;
  readonly editDialog: Locator;
  readonly dateCombobox: Locator;
  readonly forthSelected: Locator;
  readonly okBtn: Locator;
  readonly deactiveBtn: Locator;
  readonly errorServerDialog:Locator;


  constructor(page: Page) {
    this.page = page;
    
    // دکمه‌های اصلی صفحه قبض
    this.gabzBtn = page.locator('//button[@aria-label="پرداخت قبض"]');
    this.addBtn = page.locator('//button[@aria-label="افزودن قبض"]');
    this.gbzTab = page.locator('//button[contains(@id, "trigger-mine")]');
    this.recentTab = page.locator('//button[contains(@id, "trigger-recent")]');

    // تب‌های دسته‌بندی قبض‌ها
    this.mobileTab = page.locator("(//button[contains(text(),'تلفن همراه')])");
    this.telTab = page.locator("(//button[contains(text(),'تلفن ثابت')])");
    this.gazTab = page.locator("(//button[contains(text(),'گاز')])");
    this.barghTab = page.locator("(//button[contains(text(),'برق')])");
    this.aabTab = page.locator("(//button[contains(text(),'آب')])");
        // تب همه
    this.allTab = page.locator("(//button[contains(., 'همه')])[1]");


    // دیالوگ انتخاب نوع قبض
    this.dialogAdd = page.locator('//*[@role="dialog" and contains(., "افزودن قبض")]');
    this.addmobileBtn = page.locator('(//*[@role="dialog"]//button[contains(., "تلفن همراه")])');
    this.addgazBtn = page.locator('(//*[@role="dialog"]//button[contains(., "گاز")])');
    this.addbarghBtn = page.locator('(//*[@role="dialog"]//button[contains(., "برق")])');
    this.addaabBtn = page.locator('(//*[@role="dialog"]//button[contains(., "آب")])');
    this.addtelBtn = page.locator('(//*[@role="dialog"]//button[contains(., "تلفن ثابت")])');

    // دیالوگ افزودن قبض تلفن همراه
    this.mobDialog = page.locator('//*[@role="dialog" and contains(., "افزودن قبض تلفن همراه")]');
    this.numMobInp = page.locator('//input[@id="bill-number"]');
    this.titleMobInp = page.locator('//input[@id="bill-title"]');
    this.sabtBtn = page.locator('(//*[@role="dialog"]//button[contains(., "ثبت")])');

    // دیالوگ افزودن قبض تلفن ثابت
    this.landlineDialog = page.locator('//*[@role="dialog" and contains(., "افزودن قبض تلفن ثابت")]');
    this.closeDialogBtn = page.locator('//*[@role="dialog"]//button[@data-slot="sheet-close"]');
    this.numLandlineInp = page.locator('//input[@id="bill-number"]');
    this.titleLandlineInp = page.locator('//input[@id="bill-title"]');
    this.submitBtn = page.locator('//*[@role="dialog"]//button[contains(., "ثبت")]');


// دیالوگ افزودن قبض گاز
this.gasDialog = page.locator('//*[@role="dialog" and contains(., "افزودن قبض گاز")]');
this.closeGasDialogBtn = page.locator('//*[@role="dialog"]//button[@data-slot="sheet-close"]');
this.numGasInp = page.locator('//input[@id="bill-number"]');
this.titleGasInp = page.locator('//input[@id="bill-title"]');
this.submitGasBtn = page.locator('//*[@role="dialog"]//button[contains(., "ثبت")]');


//  کارت قبض 
this.lastBillCard = page.locator('//div[@data-slot="card" and @role="button"]').last();
this.allBillCards = page.locator('//div[@data-slot="card" and @role="button"]');
this.firstBillCard = page.locator('//div[@data-slot="card" and @role="button"]').first();
this.mciBillCard = this.allBillCards.filter({ hasText: '۰۹۱۹۳۱۵۰۹۸۹' });




    // دکمه استعلام

    this.estelamHeader = page.locator("(//header[contains(., 'استعلام قبض')])[1]");
    this.estelamBtn = page.locator("(//button[contains(., 'استعلام')])[1]");
        // قبض میان دوره
    this.mianDorehCard = page.locator('//div[@data-slot="card" and @role="button" and contains(., "قبض میان دوره")]').first();
    this.duplicateAlert = page.locator('//*[@role="alert" and contains(., "این قبض قبلا ذخیره شده است")]');

    

    // دیالوگ نمایش قبض
    this.estDialog = page.locator('//*[@role="dialog" and contains(., "نمایش قبض")]');

    // دیالوگ حذف قبض
    this.deleteGabzDialog = page.locator('//*[@role="dialog" and contains(., "حذف قبض")]');

    // دکمه حذف اولیه (داخل دیالوگ نمایش قبض)
    this.deleteBtn1 = page.locator('(//*[@role="dialog" and contains(., "نمایش قبض")]//button[contains(., "حذف")])[1]');

    // دکمه حذف دومی / تایید نهایی (داخل دیالوگ حذف قبض)
    this.deleteBtn2 = page.locator('(//*[@role="dialog" and contains(., "حذف قبض")]//button[contains(., "حذف")])[1]');

    // کارت قبض موبایل ثبت‌شده
    this.billCardByPhone = page.locator('//div[@role="button" and contains(., "09126141674")]');

        // مقداردهی بخش پرداخت خودکار
        this.root=page.locator('//*[@id="root"]');
    this.activeBtn = page.locator('//button[@data-slot="button" and contains(normalize-space(), "فعالسازی")]');
    this.headerAuto = page.locator('//header[contains(normalize-space(), "پرداخت خودکار")]');
    this.walletbitTab = page.locator('//*[@role="combobox" and contains(., "کیف پول بیت")]');
    this.firstItem=page.locator('(//li[@role="option"])[1]');
    this.sabtAutoBtn = page.locator('//button[contains(., "ثبت")]');
    this.autoPaymentBadge = page.locator('(//span[contains(normalize-space(), "پرداخت خودکار فعال")])[1]');
    this.editBtn = page.locator('(//button[@data-slot="button" and contains(., "ویرایش")])[2]');
    this.editDialog = page.locator('//*[@role="dialog" and .//*[contains(., "اطلاعات قبض")]]');
    this.dateCombobox = page.locator('(//*[@role="combobox" and @aria-haspopup="listbox"])[2]');
    this.forthSelected = page.locator('(//*[@role="listbox"]//*[@role="option"])[4]');
    this.okBtn = page.locator('//button[contains(., "تایید") or contains(., "تأیید")]');
    this.errorServerDialog=page.locator('//*[ @id="server-error"]');
    this.deactiveBtn = page.locator('//button[@data-slot="button" and (contains(., "غیرفعالسازی") or contains(., "غیر فعال"))]');

  }

  

  /**
   * متد کمکی برای یافتن کارت هر شماره قبض به صورت داینامیک
   */
  getBillCard(phoneNumber: string): Locator {
    return this.page.locator(`//div[@role="button" and contains(., "${phoneNumber}")]`);
  }

   
   // دریافت تعداد کل کارت‌های قبض موجود در صفحه
  
  async getBillCardsCount(): Promise<number> {
    return await this.allBillCards.count();
  }


    /**
   * اضافه کردن قبض موبایل با مدیریت خودکار وضعیت تکراری بودن
   * @param mobileNumber شماره موبایل مورد نظر
   * @param mobileTitle عنوان قبض
   */



}
