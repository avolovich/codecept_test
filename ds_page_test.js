const demo_page_url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";

Feature('design_system_page');

// Scenario('Comparing Screenshot of the top page part', async (I) => {
//     I.amOnPage(demo_page_url);
//     I.saveScreenshot("demoPageTop.jpg");
//     I.seeVisualDiff("demoPageTop.jpg", {tolerance: 1.5, prepareBaseImage: false})
// });

// Scenario('Comparing Screenshot of the bottom page part', async (I) => {
//     I.amOnPage(demo_page_url);
//     I.scrollTo('div.MuiTabs-flexContainer');
//     I.saveScreenshot("demoPageBottom.jpg");
//     I.seeVisualDiff("demoPageBottom.jpg", {tolerance: 1.5, prepareBaseImage: false})
// });

// Scenario('Comparing Screenshot of a certain switch', async (I) => {
//     let locator = "span.MuiSwitch-root:nth-child(2)";
//     let screenshotName = "SecondSwitch";
//     I.amOnPage(demo_page_url);
//     I.scrollTo(locator);
//    // I.saveScreenshot(screenshotName);
//     I.screenshotElement(locator,screenshotName);
//     I.seeVisualDiffForElement(locator, screenshotName+".png", {prepareBaseImage: false, tolerance: 3})
// });

Scenario('Preparing and comparing screenshots of 7 buttons in order', async (I) => {
    I.amOnPage(demo_page_url);
    for (let i=1; i<=7; i++){
        let locator = '//*[@id="app"]/div/div/button['+i+']';
        let screenshotName = "Button"+i;
    I.scrollTo(locator);
    I.screenshotElement(locator,screenshotName);
    I.seeVisualDiffForElement(locator, screenshotName+".png", {prepareBaseImage: true, tolerance: 3})
    I.seeVisualDiffForElement(locator, screenshotName+".png", {prepareBaseImage: false, tolerance: 3})
    }
});

//*[@id="app"]/div/div/button[7]