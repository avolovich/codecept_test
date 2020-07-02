
const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS); // enables headless mode when HEADLESS environment variable exists

exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:8888/v3/comp/re-ja-ui-demo-page?dataSource=http://localhost:8888/re-ja-ui-demo-page-backend-data.json',
      browser: 'firefox',
      host: '127.0.0.1',
      port: 4444,
      restart: true,
      windowSize: '1200x900',
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      }
    },
	ResembleHelper : {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder : './screenshots/output/',
      baseFolder: './screenshots/base/',
      diffFolder: './screenshots/diff/'
    },
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
