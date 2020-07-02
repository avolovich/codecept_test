const locator = require('./locator.js');
let g = require('codeceptjs');
const { helper } = require('codeceptjs');


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
   },


  getCurrentBrowser: function () {
    let browser = "unknown"; // Will show this prefix if it will could not find browser parameter in config (will need to add a condition for a new helper)
    if (typeof g.config.get().helpers.WebDriver != 'undefined') {             // WebdriverIO
      browser = "WDIO_"+g.config.get().helpers.WebDriver.browser;
    } else if (typeof g.config.get().helpers.Puppeteer != 'undefined') {        // Puppeteer
      browser = "Puppeteer_Chrome_";
      let headless = (g.config.get().helpers.Puppeteer.show) ? "" : "headless"      
      browser = browser + headless;
    }
    return browser;
  }
   };



  

