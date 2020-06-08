const locator = require('./locator');
const inputField = locator.searchField;
const searchResult5=locator.searchResult5;
console.log(inputField);
console.log(searchResult5);
//const searchResult = locator.searchResult(searchResultNumber);

var searchStr="Modern style";

Feature('search');

Scenario('Google search result click', (I) => {
    console.log(inputField);
    console.log(searchResult5);
I.amOnPage('http://google.com');
//I.see('',{css: locator.inputField});
I.fillField({css: inputField}, searchStr);
I.pressKey('Enter');
I.click(searchResult5);
});
