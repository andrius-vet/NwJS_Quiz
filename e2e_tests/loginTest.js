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
            .waitForElementVisible("@loginEmailButton")
            .click("@loginEmailButton");
        loginPage
            .waitForElementVisible("@signInHeader")
            .setValue("@emailField", LoginInfo.LoginEmail)
            .setValue("@passField", LoginInfo.LoginPassword)
            .click("@submitButton");
        menuPage
            .waitForElementVisible("@userMenu")
            .click("@userMenu")
            .click("@logoutButton");
        landingPage
            .waitForElementPresent("@loginGoogleButton")
            .waitForElementVisible("@loginGoogleButton");
    });

    after((browser) => browser.end());
});
