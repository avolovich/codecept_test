const demo_page_url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";
const locators = require('../utils/locator.js');
const globalSelector =  "//div[@id='buttons']//button";
const elemTemplateSelector = "(//div[@id='buttons']//button)[%data%]";
var numOfElements = 0;


String.prototype.getCurrent = function(next) {
    return elemTemplateSelector.replace('%data%',next);
}
 
Feature('design_system_page');

 Data(function*() {
    for (let i=1; i<=5; i++) {
            yield {id: i}
        }
 }).Scenario('Data Test', (I, current) => {
    console.log("Current value is:"+ current.id);
 });


Before(async (I) => {                     
    I.amOnPage(demo_page_url); 
    console.log("Page Opened");
    numOfElements = await I.grabNumberOfVisibleElements(globalSelector); 
    console.log("Selector Grabbed");

 });

 BeforeAll(() => {
 console.log("Before All");
 })
