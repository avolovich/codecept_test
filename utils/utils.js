const { I } = inject();

module.exports = {

    comparePageVisually(browserPrefix, filename, compareFlag) {
        const separator = "_";
        const extension = ".png";
        let screenshotName = browserPrefix+separator+filename+extension;
        I.saveScreenshot(screenshotName, true);
        I.seeVisualDiff(screenshotName, {prepareBaseImage: !compareFlag, tolerance: 0}); 
    }

}