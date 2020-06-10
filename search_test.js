const locator = require('./locator');
const inputField = locator.searchField;
const numberOfResultsToVerify = 5;

var searchStr="Modern style";

Feature('search');

Scenario('Google search results test', (I) => {
for (let i=5; i<=numberOfResultsToVerify+5; i++) {
    
    I.amOnPage('http://google.com');
    I.fillField({css: inputField}, searchStr);
    I.pressKey('Enter');
    let pageLinkLocator = locator.searchResult(i);
    I.click(pageLinkLocator);
    I.waitForDocumentStateComplete();
}
});

