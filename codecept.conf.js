const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://google.com',
      show: true,
      windowSize: '1200x900'
    },
    ResembleHelper : {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder : './bebeto/',
      baseFolder: './tests/screenshots/base/',
      diffFolder: './tests/screenshots/diff/'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Codecept',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}