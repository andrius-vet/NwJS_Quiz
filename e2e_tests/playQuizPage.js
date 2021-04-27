const mainPage = require("../page_model/mainPage.js");
// import { getConsoleError } from "../Tools/generalFunctions.js";

require("../config.js");

describe("Quizmart dev login tests", function () {
  before(function (browser) {
    const loginPage = browser.page.loginPage();
    browser.url(browser.launch_url);
    loginPage.loginToQuiz();
  });

  test("Quizmart login with email test", function (browser) {
    const mainPage = browser.page.mainPage();
    const errorCodes = browser.globals.errorCodes;
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
      .setValue('input[name="tags"]', "test")
      .pause(1000);
      browser.errorLoging((log) => {
        var text = log.message;
        console.log(text);
        browser.assert.ok(text.includes(errorCodes.random));
      })
  });

  after((browser) =>
    browser.end()
  );
});