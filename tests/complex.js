const url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";
const dropDownArrow="//*[@id='app']/div/div/div[6]/div/div/div[2]";
const dropDownOption="//*[@id='react-select-2-option-1']";
const dropDownArrowFull="//*[@id='app']/div/div/div[7]/div/div[2]";
const compareFlag=true;

Feature('Design System Tests Demo');

Scenario('Dropdown Screenshot test', (I, utils) => {
    pause();
    I.saveScreenshot("DDClosedDefault.png", true);
//    I.seeVisualDiff("DDClosedDefault.png", {prepareBaseImage: false, tolerance: 0}); 
 //   utils.checkScreen("DDClosedDefault", compareFlag);

    I.click(dropDownArrow);
    I.saveScreenshot("DDClosedDefaultOpened.png", true);
//    I.seeVisualDiff("DDClosedDefaultOpened.png", {prepareBaseImage: false, tolerance: 0}); 

    I.moveCursorTo(dropDownOption);
    I.saveScreenshot("DDClosedDefaultOptionHover.png", true);
//    I.seeVisualDiff("DDClosedDefaultOptionHover.png", {prepareBaseImage: false, tolerance: 0}); 

//    CheckScreenshot();
    I.click(dropDownOption);
    I.saveScreenshot("DDClosedNewOptionSelected.png", true);
//    I.seeVisualDiff("DDClosedNewOptionSelected.png", {prepareBaseImage: false, tolerance: 0}); 
    
    // CheckScreenshot();

}).tag("dd1");


Scenario('Dropdown Screenshot test', (I, utils) => {
    I.scrollPageToBottom;   //scroll to Bottom
 //   I.saveScreenshot("0.png", true);
 
  //  I.scrollPageToBottom;   
    I.click(dropDownArrow); // Test 1 - open dropdown and take screenshot
  //  I.saveScreenshot("1.png", true);
    
 //   I.click(dropDownArrow);  // Test 2 -  open drop down again (because it becomes closed after taking a screenshot)
    I.moveCursorTo(dropDownOption); // Test 2 - moving mouse over the option
    I.saveScreenshot("2.png", true);

    I.click(dropDownOption); // Test 3 - clicking on desired option
    I.saveScreenshot("3.png", true);
}).tag("dd2");


Scenario('ResizeWindowTest', (I) => {
    pause();
    I.click(dropDownArrowFull); // Test 1 - open dropdown and take screenshot
    I.resizeWindow(500, 900);
    I.saveScreenshot("Pup_500.png", false);
    I.resizeWindow(300, 900);
    I.saveScreenshot("Pup_300.png", false);
    I.scrollPageToBottom;   //scroll to Bottom
}).tag("resizeTest");

Before((I) => {                     
    I.amOnPage(url);
});