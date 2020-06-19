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
    },
    Mochawesome: {
      uniqueScreenshotNames: 'true'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        "stdout": "./output/cli.log",
        "options": {
          "verbose": false,
          "debug":true
      }
    },
    mochawesome: {
      "stdout": "./output/console.log",
      "options": {
        "reportDir": "./reports/mocha",
        "reportFilename": "report"
    },
    'mocha-junit-reporter': {
      "stdout": "./output/console.log",
      "options": {
        "mochaFile": "./output/result.xml"
      },
      "attachments": true //add screenshot for a failed test
    }
  }
},
  name: 'Codecept',
  plugins: {
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: false
    },
    allure: {
    }
  }
}
}
