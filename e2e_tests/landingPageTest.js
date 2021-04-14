require('../config.js');

// var googleButton = "//button//*[@id='google-icon']";
var mainMenu = ".css-5euejf.e1ytlbxu0"
var playSpace = ".css-1842iib.e6jvphj1"
var aboutSpace = ".css-5hcn91.em284gv0"
var forPlayersSpace = "#for-players"
var forCreatorsSpace = "#for-creators"
var downloadAppSpace = "#download-app"

describe('Quizmart dev landing page tests', function() {

    before(browser => browser.url(PageURL.DEVPAGE));

    test('Quizmart landing page test for dev env', function (browser) {
      browser
          .waitForElementVisible(downloadAppSpace)
          .assert.titleContains('Home | QuizMart')
          .assert.visible(mainMenu)
          .assert.containsText(mainMenu, 'For players')
          .assert.containsText(mainMenu, 'For creators')
          .assert.containsText(mainMenu, 'Sign in')
          .assert.containsText(mainMenu, 'Register')
          .assert.containsText(mainMenu, 'Download app')

          .assert.visible(playSpace)
          .assert.visible(aboutSpace)
          .assert.visible(forPlayersSpace)
          .assert.visible(forCreatorsSpace)
          .assert.visible(downloadAppSpace)

          // .waitForElementVisible('body')
          // .assert.titleContains('Ecosia')
          // .assert.visible('input[type=search]')
          // .setValue('input[type=search]', 'nightwatch')
          // .assert.visible('button[type=submit]')
          // .click('button[type=submit]')
          // .assert.containsText('.mainline-results', 'Nightwatch.js')
    });
  
    after(browser => browser.end());
  });
  