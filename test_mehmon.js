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

