const { By, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const Tesseract = require("tesseract.js");
const axios = require("axios");
const fs = require("fs");

(async function seleniumTest() {
  let driver;
  try {
    const chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--enable-logging");
    chromeOptions.addArguments("--v=1");
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();

    await driver.get("https://wwwwwwwww.uz/user/login");  // link which you will enter

    const email = await driver.findElement(By.name("email"));
    await email.sendKeys("email or login");

    const password = await driver.findElement(By.name("password"));
    await password.sendKeys("your password");

    // This is for reCAPTCHA(if it is available)

    // const imageXPath = await driver.findElement(
    //   By.xpath("//div[@id='captcha_img']//img")
    // );
    // const imgSrcXPath = await imageXPath.getAttribute("src");

    // const response = await axios({
    //   url: imgSrcXPath,
    //   method: "GET",
    //   responseType: "arraybuffer",
    // });

    // const imagePath = "./captcha_image.png";
    // fs.writeFileSync(imagePath, Buffer.from(response.data, "binary"));

    // let reCaptcha = await Tesseract.recognize(
    //   Buffer.from(response.data),
    //   "eng",
    //   {
    //     logger: (info) => console.log(info),
    //   }
    // ).then(({ data: { text } }) => {
    //   console.log("CAPTCHA Text:", text.trim());
    //   return text.trim();
    // });

    // if (!reCaptcha) {
    //   throw new Error("Failed to extract CAPTCHA text");
    // }
    // await driver.sleep(2000);

    // const captcha = await driver.findElement(By.name("captcha"));
    // await captcha.sendKeys(reCaptcha);

    await driver.sleep(1000);

    const btnSubmit = await driver.findElement(By.id("btn_submit"));
    await btnSubmit.click();

    await driver.sleep(3000);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // await driver.quit();
  }
})();

// await driver.get("https://emehmon.uz/listovka");

// const id_citizen = await driver.findElement(By.id("id_citizen"));
// await id_citizen.sendKeys("UZBEKISTAN (UZB)");

// const id_passporttype = await driver.findElement(By.id("id_passporttype"));
// await id_passporttype.sendKeys("ID карта");

// const datebirth = await driver.findElement(By.id("datebirth"));
// await datebirth.sendKeys("02/09/2005");

// const passportNumber = await driver.findElement(By.id("passportNumber"));
// await passportNumber.sendKeys("AD0977558");

// await driver.executeScript(
//   "window.open('https://emehmon.uz/listovka', '_blank');"
// );

// const handles = await driver.getAllWindowHandles();

// await driver.switchTo().window(handles[1]);

// const someElement = await driver.findElement(By.id("someElementId"));
// await someElement.click();

// await driver.switchTo().window(handles[0]);
