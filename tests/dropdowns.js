const { I, utils } = inject();
const helper = require('../utils/helpers.js');
let conf = require('codeceptjs');

const url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";
const dropDownArrow="//*[@id='app']/div/div/div[6]/div/div/div[2]";
const dropDownOption="//*[@id='react-select-2-option-1']";
const dropDownOption2="//*[@id='react-select-2-option-2']";
const dropDownArrowFull="//*[@id='app']/div/div/div[7]/div/div[2]";
const compareFlag=true;
let browser="IE";
const separator = "_";
const extension = ".png";

Feature('Design System Tests Demo');

Scenario('Test1: Default Page State', (I) => {
   // let browser2 = conf.config.get().helpers.WebDriver.browser;
    let screenshotName = browser+separator+"DDClosedDefault"+extension;
    I.saveScreenshot(screenshotName, true);
    I.seeVisualDiff(screenshotName, {prepareBaseImage: !compareFlag, tolerance: 0}); 
}).tag("dropdown").tag("step1");

Scenario('Test2: Open Dropdown', (I) => {
    let screenshotName = browser+separator+"DDOpened"+extension;
    I.click(dropDownArrow);
    I.saveScreenshot(screenshotName, true);
    I.seeVisualDiff(screenshotName, {prepareBaseImage: !compareFlag, tolerance: 0}); 
}).tag("dropdown").tag("step2");

Scenario('Test3: Move mouse over option in Dropdown', (I) => {
    let screenshotName = browser+separator+"DDMouseOverOption"+extension;
    I.click(dropDownArrow);
    I.moveCursorTo(dropDownOption);
    I.saveScreenshot(screenshotName, true);
    I.seeVisualDiff(screenshotName, {prepareBaseImage: !compareFlag, tolerance: 0}); 
}).tag("dropdown").tag("step3");

Scenario('Test4: Select new option in Dropdown', (I) => {
    let screenshotName = browser+separator+"DDNewOptionSelected"+extension;
    // pause();
    I.click(dropDownArrow);
    I.moveCursorTo(dropDownOption);
    // I.click(dropDownOption);
    I.click(dropDownOption2);
    I.saveScreenshot(screenshotName, true);
    I.seeVisualDiff(screenshotName, {prepareBaseImage: !compareFlag, tolerance: 0}); 
}).tag("dropdown").tag("step4");

// Scenario('Test2: Default Page State', (I, utils) => {
    //let screenshotName = browser+separator+"DDClosedDefault_utils"+extension;
//     utils.comparePageVisually(browser, screenshotName, compareFlag);
// }).tag("dropdown").tag("step1_utils");

Before((I, utils) => {    
    browser = helper.getCurrentBrowser();                 
    I.amOnPage(url);
});