var xSelector = function (selector) {
    return {
        selector: selector,
        locateStrategy: "xpath",
    };
};

module.exports = {

    url: "",

    elements: {
        // Login Page
        signInHeader: ".css-1evf4jp.erkohki0",
        emailField: "input[name='email']",
        passField: "input[name='password']",

        // Register page
        registerHeader: ".css-1evf4jp.erkohki0",
        registerEmail: "input[name='email']",
        registerPass: "input[name='password']",
        repeatPass: "input[name='passwordRepeat']",

        submitButton: "button[type='submit']",

        //Errors:
        loginError: ".css-1rhn46t.emam8fj0",
        // Profile page
    },
    commands: [{
        loginToQuiz(browser) {
            const landingPage = this.api.page.landingPage();
            const menuPage = this.api.page.menuPage();
            return this
                .waitForElementVisible(landingPage.elements.loginEmailButton)
                .waitForElementPresent(landingPage.elements.loginEmailButton)
                .click(landingPage.elements.loginEmailButton)
                .waitForElementVisible("@signInHeader")
                .setValue("@emailField", LoginInfo.LoginEmail)
                .setValue("@passField", LoginInfo.LoginPassword)
                .click("@submitButton")
                .waitForElementVisible(menuPage.elements.mainMenu);
        },
        //Todo: Functions should be merged to login with config by default if username not provided
        loginToQuizCustom(usr, pss) {
            const landingPage = this.api.page.landingPage();
            return this
                .waitForElementPresent(landingPage.elements.downloadAppSpace)
                .waitForElementPresent(landingPage.elements.loginEmailButton)
                .click(landingPage.elements.loginEmailButton)
                .waitForElementVisible("@signInHeader")
                .setValue("@emailField", usr)
                .setValue("@passField", pss)
                .click("@submitButton")
            // Todo: Check after login removed. Test should check conditions after login procedure in test
            // .waitForElementVisible(mainPage.elements.discoverMainButton)
            // .waitForElementPresent(mainPage.elements.discoverMainButton);

        },
    }]

}