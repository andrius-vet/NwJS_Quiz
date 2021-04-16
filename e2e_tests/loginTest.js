require("../config.js");

describe("Quizmart dev login tests", function () {
    before(function(browser) {
        browser.url(browser.launch_url)
    }
);

    test("Quizmart login with email test", function (browser) {
        const landingPage = browser.page.landingPage();
        const loginPage = browser.page.loginPage();
        const menuPage = browser.page.menuPage();

        landingPage
            .waitForElementVisible("@emailButton")
            .click("@emailButton");
        loginPage
            .waitForElementVisible("@signInHeader")
            .setValue("@emailField", LoginInfo.LoginName)
            .setValue("@passField", LoginInfo.LoginPassword)
            .click("@submitButton");
        menuPage
            .waitForElementVisible("@userMenu")
            .click("@userMenu")
            .click("@logoutButton");
        landingPage
            .waitForElementPresent("@googleButton")
            .waitForElementVisible("@googleButton");
    });

    after((browser) => browser.end());
});
