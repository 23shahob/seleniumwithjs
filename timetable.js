const express = require("express");
const { By, Builder, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const app = express();

app.use(express.json());

app.post("/run-selenium-test", async (req, res) => {
  let driver;
  try {
    const chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--enable-logging");
    chromeOptions.addArguments("--v=1");

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();

    await driver.get("https://tsue.edupage.org/timetable");

    const button = await driver.wait(
      until.elementLocated(By.css('[title="Классы"]')),
      10000
    );
    await button.click();

    await driver.sleep(1000);

    const link = await driver.wait(
      until.elementLocated(By.xpath("//a[text()='PTI-75/23']")),
      10000
    );
    await link.click();

    res.json({ message: "Selenium test completed successfully" });
  } catch (error) {
    console.error("Error:", error.stack);
    res.status(500).json({ error: "Failed to run Selenium test" });
  } finally {
    if (driver) {
      //   await driver.quit();
    }
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
