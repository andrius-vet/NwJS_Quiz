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

    browser.assert.urlEquals(browser.launch_url + mainPage.url);
    mainPage.assert
      .containsText("@mainPageHeader", "Play quiz")
      .assert.visible("@playQuizHeaderButton")
      .assert.visible("@discoverHeaderButton")
      .assert.visible("@libraryHeaderButton")
      .assert.visible("@playMainButton")
      .assert.visible("@joinQuizMainButton")
      .assert.visible("@hostQuizMainButton")
      .assert.visible("@discoverMainButton")
      .assert.visible("@libraryMainButton");
  });

  after((browser) => browser.end());
});
