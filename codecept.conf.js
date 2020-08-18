exports.config = {
  output: 'report',
  helpers: {
    Appium: {
      app: 'apk/rewash.apk',
      appPackage: 'spe.pos.rewash',
      appActivity: 'spe.pos.rewash.feature.login.LoginActivity',
      platform: 'Android',
      deviceName: 'Android Emulator',
      automationName: 'UiAutomator2'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './tests/order.js',
  name: 'POS-Mobile'
}