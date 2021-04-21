require("../config.js");

describe("Quizmart dev user registration tests", function () {
    before(function (browser) {
            browser.url(browser.launch_url)
        }
    );
//Todo: reikalinga spreCondition ar useris jau egzistuoja

    test("Quizmart register user test", function (browser) {
        const landingPage = browser.page.landingPage();
        const loginPage = browser.page.loginPage();
        const menuPage = browser.page.menuPage();

        landingPage
            .waitForElementPresent("@downloadAppSpace")
            .click("@registerTab")
            .waitForElementPresent("@registerEmailButton")
            .click("@registerEmailButton")
        loginPage
            .waitForElementPresent("@registerHeader")
            .setValue("@registerEmail", RegistrationInfo.tmpEmail)
            .setValue("@registerPass", RegistrationInfo.tmpPassword)
            .setValue("@repeatPass", RegistrationInfo.tmpPassword)
            .click("@submitButton");
        menuPage
            .waitForElementVisible("@userMenu")
            .click("@userMenu")
            .click("@logoutButton");
        landingPage
            .waitForElementVisible("@loginGoogleButton");
    });

    test("Quizmart edit user profile test", function (browser) {
        const loginPage = browser.page.loginPage();
        const menuPage = browser.page.menuPage();
        const profilePage = browser.page.profilePage();

        loginPage.loginToQuizCustom(RegistrationInfo.tmpEmail, RegistrationInfo.tmpPassword);
        menuPage
            .waitForElementPresent("@userMenu")
            .click("@userMenu")
            .click("@profileButton"),
            profilePage
                .waitForElementPresent("@profileDeleteAcc")
                .assert.containsText("@profileHeader", "Profile")
                .setValue("@profileName", "tmpName")
                .setValue("@profileLastName", "tmpLastName")
                // .assert.containsText("@profileUsername", "User")
                //Todo: Currently once registered username can't be reused
                // .setValue('@profileUsername', '')
                // .click("@profileUsername")
                // .clearValue("@profileUsername")
                // .setValue("@profileUsername", "tmpUsername")
                .click("@profileUpdateButton"),
            //Todo: rest of page must be covered
            menuPage.logoutUser(),
            loginPage.loginToQuizCustom(RegistrationInfo.tmpEmail, RegistrationInfo.tmpPassword);
        menuPage
            .waitForElementPresent("@userMenu")
            .click("@userMenu")
            .click("@profileButton"),
            profilePage
                .waitForElementPresent("@profileDeleteAcc")
                .assert.containsText("@profileHeader", "Profile")
                .assert.value("@profileName", "tmpName")
                .assert.value("@profileLastName", "tmpLastName"),
            menuPage
                .logoutUser()
        // .assert.value("@profileUsername", "tmpUsername")
    });

    test("Quizmart Delete user profile test", function (browser) {
        const loginPage = browser.page.loginPage();
        const menuPage = browser.page.menuPage();
        const profilePage = browser.page.profilePage();
        const landingPage = browser.page.landingPage();

        loginPage.loginToQuizCustom(RegistrationInfo.tmpEmail, RegistrationInfo.tmpPassword);
        menuPage
            .waitForElementPresent("@userMenu")
            .click("@userMenu")
            .click("@profileButton"),
            profilePage
                .waitForElementPresent("@profileDeleteAcc")
                .click("@profileDeleteAcc")
                .waitForElementPresent("@deleteConfirmationButton")
                .click("@deleteConfirmationButton"),
            loginPage
                .loginToQuizCustom(RegistrationInfo.tmpEmail, RegistrationInfo.tmpPassword)
                .waitForElementPresent("@loginError")
                .assert.containsText("@loginError", "The email address or password is incorrect")

    });

    after((browser) => browser.end());
});
