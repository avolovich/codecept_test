const { I, utils } = inject();
const helper = require('../utils/helpers.js');
let conf = require('codeceptjs');

const url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";
const btn = "#buttons > button:nth-child(1)";

Feature('Design System Tests Demo');

Scenario('Test1: Default Page State', (I) => {
    let screenshotName = "Default_Chrome_DefaultViewOfThePage.png"
    I.saveScreenshot(screenshotName, true);
    I.seeVisualDiff(screenshotName, {prepareBaseImage: true, tolerance: 0}); 
}).tag("dd_test")

Scenario('Test2: Screenshot a button', (I) => {
    let screenshotName = "Just_a_button"
    I.screenshotElement(btn, screenshotName);
    I.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0}); 
}).tag("btn_test")

Before((I) => {    
    // browser = helper.getCurrentBrowser();                 
    I.amOnPage(url);
});