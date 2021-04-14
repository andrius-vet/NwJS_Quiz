require("../config.js");

describe("Quizmart dev landing page tests", function () {
  before(function (browser) {
    browser.url(browser.launch_url);
  });

  test("Quizmart landing page test for dev env", function (browser) {
    const landingPage = browser.page.landingPage();
    const mainMenu = browser.page.menuPage();

    landingPage
      .waitForElementVisible("@downloadAppSpace")
      .assert.titleContains("Home | QuizMart")
      .assert.visible("@playSpace")
      .assert.visible("@aboutSpace")
      .assert.visible("@forPlayersSpace")
      .assert.visible("@forCreatorsSpace")
      .assert.visible("@downloadAppSpace");

    mainMenu.assert
      .visible("@mainMenu")
      .assert.containsText("@mainMenu", "For players")
      .assert.containsText("@mainMenu", "For creators")
      .assert.containsText("@mainMenu", "Sign in")
      .assert.containsText("@mainMenu", "Register")
      .assert.containsText("@mainMenu", "Download app");
  });

  after((browser) => browser.end());
});
