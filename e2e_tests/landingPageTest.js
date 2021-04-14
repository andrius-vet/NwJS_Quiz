require('../config.js');


describe('Quizmart dev landing page tests', function() {

    before(browser => browser.url(PageURL.DEVPAGE));

    test('Quizmart landing page test for dev env', function (browser) {
      const myPageObject = browser.page.loginPage();
      myPageObject
          .waitForElementVisible("@downloadAppSpace")
          .assert.titleContains('Home | QuizMart')
          .assert.visible("@mainMenu")
          .assert.containsText("@mainMenu", 'For players')
          .assert.containsText("@mainMenu", 'For creators')
          .assert.containsText("@mainMenu", 'Sign in')
          .assert.containsText("@mainMenu", 'Register')
          .assert.containsText("@mainMenu", 'Download app')

          .assert.visible('@playSpace')
          .assert.visible('@aboutSpace')
          .assert.visible('@forPlayersSpace')
          .assert.visible('@forCreatorsSpace')
          .assert.visible('@downloadAppSpace')

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
  