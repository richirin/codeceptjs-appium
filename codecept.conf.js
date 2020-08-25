require('dotenv').config();

exports.config = {
  output: 'report',
  helpers: {
    Appium: {
      app: `apk/${process.env.APK}`,
      appPackage: 'spe.pos.rewash',
      appActivity: 'spe.pos.rewash.feature.login.LoginActivity',
      platform: 'Android',
      deviceName: 'Android Emulator',
      automationName: 'UiAutomator2',
    },
    ResembleHelper: {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder: './tests/output/',
      baseFolder: './tests/screenshots/base/',
      diffFolder: './tests/screenshots/diff/',
    },
  },
  include: {
    I: './steps_file.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  plugins: {
    // screenshotOnFail: {
    //   enabled: true
    // },
    retryFailedStep: {
      enabled: true,
    },
  },
  tests: './tests/*.js',
  name: 'Automation POS Rewash',
};
