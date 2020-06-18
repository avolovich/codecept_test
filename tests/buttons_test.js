const demo_page_url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";
const locators = require('../utils/locator.js');
const cleanDirectory = require('clean-directory');
 
Feature('design_system_page');

Scenario('Plain Buttons', async (I) => {
    let compareFlag = true;
    let filePrefix = locators.prefix.plain;
    let buttons = await I.grabAttributeFrom(locators.buttons)

    for (let button in buttons) {
        I.verifyScreenshot(button, filePrefix, compareFlag)
    }
});

Scenario('Hover Buttons', async (I) => {
    let compareFlag = true;
    let filePrefix = locators.prefix.hover;
    let buttons = await I.grabAttributeFrom(locators.buttons)

    for (const button in buttons) {
        I.verifyScreenshot(button, filePrefix, compareFlag)
    }
});

Scenario('Simple Buttons', async (I) => {
    let compareFlag = true;
    let filePrefix = locators.prefix.click;
    let buttons = await I.grabAttributeFrom(locators.buttons)

    for (const button in buttons) {
        I.verifyScreenshot(button, filePrefix, compareFlag)
    }
});

Before((I) => {                     
     I.amOnPage(demo_page_url);
 });

BeforeSuite(() => {      
    console.log("Before Suite");
});