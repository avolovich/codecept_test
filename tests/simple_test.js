Feature('search');
const globalSelector =  "//div[@id='buttons']//button";
const elemTemplateSelector = "(//div[@id='buttons']//button)[2]";

Scenario('Google search results test', (I) => {
        I.amOnPage('/');
        pause();
        I.moveCursorTo(elemTemplateSelector,5,5);
        I.click(elemTemplateSelector);
        I.screenshotElement(elemTemplateSelector, screenshotName);
//        I.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0}); 

        
    }).tag('hoho');