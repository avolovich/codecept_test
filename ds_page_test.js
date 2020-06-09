const demo_page_url = "http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json";

Feature('design_system_page');

Scenario('Compare Screenshot First try', async (I) => {
    I.amOnPage(demo_page_url);
    I.saveScreenshot("asd.jpg");
    I.seeVisualDiff("asd.jpg", {tolerance: 1, prepareBaseImage: false})
});

