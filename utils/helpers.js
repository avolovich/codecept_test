const locator = require('./locator.js')

module.exports = {
    prepareScreenshotFlag: false,

    test: async function(number, type) {
        console.log("NUmber"+number);
        console.log("Type", type);
        let btn = "("+locator.buttons+")["+number+"]"; console.log("Preparing locator:"+btn);
        let text = (await I.grabTextFrom(btn)).split(" ").join("_"); console.log("Adjusted button name is:"+text);
    },

    verifyScreenshot: async function(number, type) {
        let btn = "("+locator.buttons+")["+number+"]"; console.log("Preparing locator:"+btn);
        let text = (await I.grabTextFrom(btn)).split(" ").join("_"); console.log("Adjusted button name is:"+text);
        let screenshotName = type + text; console.log("Prepared screenshot name :"+screenshotName);
        pause();
         I.screenshotElement(btn, screenshotName);
         I.seeVisualDiff(screenshotName+".png", {prepareBaseImage: false, tolerance: 0});
   },

   getLocator: async function(number) {
     return "("+locator.buttons+")["+number+"]"; console.log("Preparing locator:"+btn);
   }
   };



  

