const locator = require('./locator');
const inputField = locator.searchField;
const searchResult5=locator.searchResult5;
const searchResult = locator.searchResult(2);
const numberOfResultsToVerify = 5;
console.log(searchResult);

var searchStr="Modern style";

Feature('search');

Scenario('First Google test', (I) => {
for (let i=1; i<=numberOfResultsToVerify; i++) {
    I.amOnPage('http://google.com');
    I.fillField({css: inputField}, searchStr);
    I.pressKey('Enter');
    pause();
    I.click(locator.searchResult(i));
    
    I.waitForDocumentStateComplete();
}
});

