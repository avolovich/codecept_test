const demo_page_url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";
const locators = require('../utils/locator.js');
const invert = require('clean-directory');
 
Feature('design_system_page');

// Scenario('Simple Buttons Tests', {prefix:btn_prefix}, async (I) => {
//     let screenshotName = ''    
//     let cur_btn = ''
//     let buttons_amount = (await I.grabAttributeFrom(buttons_locator)).length
    
//         for (let i = 1; i <= buttons_amount; i++) {
//             cur_btn = "("+buttons_locator+")["+i+"]";
//             // let text = (await I.grabTextFrom(cur_btn)).split(" ").join("_");
//             let text = await I.grabAttributeFrom(cur_btn, 'class')
//             console.log(text+"\n")
//             screenshotName = btn_prefix + text;
//         // Taking Screenshots of buttons without any events
//            I.screenshotElement(cur_btn, screenshotName);
//        //    I.compareScreenshot(screenshotName, 0);
//         //   I.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0});
//     }
// });

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

Scenario('Simple Buttons', async (I) => {
    let compareFlag = true;
    let filePrefix = locators.prefix.click;
    let buttons = await I.grabAttributeFrom(locators.buttons)

    I.saveScreenshot()
    for (const button in buttons) {
        I.verifyScreenshot(button, filePrefix, compareFlag)
    }
});


 Before((I) => {                     
     I.amOnPage(demo_page_url);
 });