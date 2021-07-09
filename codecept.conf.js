const { chromium } = require('playwright');

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://test1234.planday.com/',
      home_url: 'https://test1234.planday.com/page/home',
      schedule_url: 'https://test1234.planday.com/page/schedule-1',
      show: true,
      keepCookies: true,
      captcha: false,
      headless: false,
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  multiple: {
    basic: {
      browsers: ['chrome']
    }
  },
  name: 'codeceptjsdemo'
}