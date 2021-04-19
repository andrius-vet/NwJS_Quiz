const mainPage = require("../page_model/mainPage.js");

require("../config.js");

describe("Quizmart dev login tests", function () {
    before(function (browser) {
        const loginPage = browser.page.loginPage();
        browser.url(browser.launch_url);
        loginPage.loginToQuiz();
    });

  test("Quizmart login with email test", function (browser) {
    const mainPage = browser.page.mainPage();
    const menuPage = browser.page.menuPage();

    // browser.assert.urlContains("app."+browser.launch_url + mainPage.url);
    mainPage.assert
      .containsText("@mainPageHeader", "Play quiz")
      .assert.visible("@playQuizHeaderButton")
      .assert.visible("@discoverHeaderButton")
      .assert.visible("@libraryHeaderButton")
      .assert.visible("@playMainButton")
      .assert.visible("@joinQuizMainButton")
      .assert.visible("@hostQuizMainButton")
      .assert.visible("@discoverMainButton")
      .assert.visible("@libraryMainButton")
      .click("@dicoveryButton")
      .click("@filtersButton")
      .setValue('input[name="tags"]', 'test')
      .pause(1000);

    async function getConsoleError() {
      return new Promise((resolve, reject) => {
          browser.getLogTypes()
          .getLog('browser', function(logEntriesArray) {
            logEntriesArray.forEach(function(log) {
                if(log.message.includes("current-password")){
                  console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
                  resolve(log);
                }
            })
           
          })
      });
    };
    getConsoleError().then((log) => {
        var text =log.message;
        console.log(text);
        browser.assert.ok(text.includes("current-password"));
      console.log(text.includes("current-password"))
      
    })

    
  });

    after((browser) => browser.end());
});