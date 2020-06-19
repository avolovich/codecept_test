const demo_page_url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";
const locators = require('../utils/locator.js');
const globalSelector =  "//div[@id='buttons']//button";
const elemTemplateSelector = "(//div[@id='buttons']//button)[%data%]";
const numOfElements = 5;
const compareFlag = false;

String.prototype.getCurrent = function(next) {
    return this.replace('%data%',next);
}

String.prototype.toFileName = function() {
    return this.split(" ").join("_");
}
 
Feature('design_system_page');

Scenario('Verify each button without any action', async (I) => {
    let filePrefix = locators.prefix.plain;
    console.log("Number of elements: "+numOfElements);
  
    for (let current=1; current<=numOfElements; current++) {
        let btnSelector = elemTemplateSelector.getCurrent(current);
        let btnText = await I.grabTextFrom(btnSelector);
        let screenshotName = filePrefix + btnText.toFileName(); 

    // Taking Screenshot
        I.screenshotElement(btnSelector, screenshotName);
        if (compareFlag) { 
            I.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0}); 
        }

    }
}).tag('buttons').tag('plain').tag('element');

Scenario('Verify each button on mouse over', async (I) => {
    let filePrefix = locators.prefix.hover;
    console.log("Number of elements"+numOfElements);
  
    for (let current=1; current<=numOfElements; current++) {
        let btnSelector = elemTemplateSelector.getCurrent(current);
        let btnText = await I.grabTextFrom(btnSelector);
        let screenshotName = filePrefix + btnText.toFileName(); 
// Moving Mouse to Element
        I.moveCursorTo(btnSelector,5,5);
  // Taking Screenshot
        I.screenshotElement(btnSelector, screenshotName);
        if (compareFlag) { 
            I.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0}); 
        }

    }
}).tag('buttons').tag('action').tag('hover').tag('element');

Scenario('Verify each button on click', async (I) => {
    let filePrefix = locators.prefix.click;
    console.log("Number of elements"+numOfElements);
  
    for (let current=1; current<=numOfElements; current++) {
        let btnSelector = elemTemplateSelector.getCurrent(current);
        let btnText = await I.grabTextFrom(btnSelector);
        let screenshotName = filePrefix + btnText.toFileName(); 
// Click on Element
        I.click(btnSelector);
  // Taking Screenshot
        I.screenshotElement(btnSelector, screenshotName);
        if (compareFlag) { 
            I.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0}); 
        }

    }
}).tag('buttons').tag('action').tag('click').tag('element');

Scenario('Verify block of buttons', async (I) => {
    let blockSelector = "#testblock";
    let screenshotName = "Btns_Block";
  // Taking Screenshot
        I.screenshotElement(blockSelector, screenshotName);
        if (compareFlag) { 
            I.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0}); 
    }
}).tag('buttons').tag('simple').tag('block');

Scenario('Verify top and bottom part of the page', async (I) => {
    let screenshotNameTop = "Btns_Page_Top.png";
    let screenshotNameBottom = "Btns_Page_Bottom.png";
    // Scrolling to Top and Taking Screenshot 
        I.scrollPageToTop();
        I.saveScreenshot(screenshotNameTop,false);
    // Scrolling to Bottom and Taking Screenshot 
        I.scrollPageToBottom();
        I.saveScreenshot(screenshotNameBottom,false);
    // Comparing both previously taken screenshots
        if (compareFlag) { 
            I.seeVisualDiff(screenshotNameTop, {prepareBaseImage: false, tolerance: 0}); 
            I.seeVisualDiff(screenshotNameBottom, {prepareBaseImage: false, tolerance: 0}); 
        }
}).tag('buttons').tag('simple').tag('pagetest');

Before((I) => {                     
     I.amOnPage(demo_page_url);
 });