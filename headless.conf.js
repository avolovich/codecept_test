const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://google.com',
      show: false,
      windowSize: '1200x900'
    },
    ResembleHelper : {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder : './screenshots/output/',
      baseFolder: './screenshots/base/',
      diffFolder: './screenshots/diff/'
    }
  },
  include: {
    I: './steps_file.js',
    utils: './utils/utils.js'
  },
  bootstrap: null,
  mocha: { },
  name: 'Codecept',
  plugins: {
    allure: { 
      outputDir : "./reports/allure",
      enableScreenshotDiffPlugin : false},
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: false
    }
    
  }
}

