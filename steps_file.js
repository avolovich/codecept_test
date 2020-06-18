// in this file you can append custom step methods to 'I' object
const helpers = require('./utils/helpers.js');
const locators = require('./utils/locator.js')
const fs = require('fs');

module.exports = function() {
  return actor({

    waitForDocumentStateComplete: function() {
      this.executeAsyncScript(function(done) {
        const interval = setInterval(function() {
          if (window.document.readyState === 'complete') {
            clearInterval(interval);
            done();
          }
        }, 100);
      });
    },
    compareScreenshot: function(fileName,tolerance_level) {
      this.seeVisualDiff(fileName+".png", {prepareBaseImage: helpers.prepareScreenshotFlag, tolerance: tolerance_level});
    },
    verifyScreenshot: async function(number, type, compareFlag) {
      ++number;
      let btn = "("+locators.buttons+")["+number+"]"; console.log("Preparing locator:"+btn);
      let txt = await this.grabTextFrom(btn);
      let text = txt.split(" ").join("_"); console.log("Adjusted button name is:"+text);
      let screenshotName = type + text; console.log("Prepared screenshot name :"+screenshotName);

      let path = './base/'+screenshotName;
           if (type.includes(locators.prefix.hover)) {
               this.moveCursorTo(btn,5,5); console.log("Moving mouse over: "+btn);
           }
           if (type.includes(locators.prefix.click)) {
               this.click(btn); console.log("Clicking on: "+btn);
          }
           this.screenshotElement(btn, screenshotName);
           if (compareFlag) { 
             this.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0}); 
            }
    
     }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
