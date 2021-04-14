require("../config.js");

describe("Quizmart dev login tests", function () {
  before((browser) => browser.url(PageURL.DEVPAGE));

  test("Quizmart login with email test", function (browser) {
    const myPageObject = browser.page.landingPage();
    myPageObject
      .waitForElementVisible("@emailButton")
      .click("@emailButton")
      .waitForElementVisible("@signInHeader");
    myPageObject
      .setValue("@emailField", LoginInfo.LoginName)
      .setValue("@passField", LoginInfo.LoginPassword)
      .click("@submitButton")
      .waitForElementVisible("@userMenu")
      .click("@userMenu")
      .click("@logoutButton")
      .waitForElementVisible("@googleButton");
  });

  after((browser) => browser.end());
});
