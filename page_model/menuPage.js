var xSelector = function (selector) {
    return {
        selector: selector,
        locateStrategy: "xpath",
    };
};

module.exports = {

    url: "https://quizmart.telesoftas.net/",
    elements: {
        mainMenu: ".css-5euejf.e1ytlbxu0",

        forPlayersButton: xSelector("//a[contains(@class, 'css-qv2b9g einnxol0')][1]"),
        forCreatorsButton: xSelector("//a[contains(@class, 'css-qv2b9g einnxol0')][2]"),
        signInButton: xSelector("//a[contains(@class, 'css-qv2b9g einnxol0')][3]"),
        registerButton: xSelector("//a[contains(@class, 'css-qv2b9g einnxol0')][4]"),
        downloadAppButton: ".css-1qjvomc.einnxol0",

        userMenu: ".filter",
        profileButton: "a[href='/app/profile']:nth-of-type(1)",
        logoutButton: "a[href='/app/logout']:nth-of-type(2)",
    },
    commands: [{
        logoutUser() {
            const landingPage = this.api.page.landingPage();
            return this
                .waitForElementPresent("@userMenu")
                .click("@userMenu")
                .waitForElementPresent("@logoutButton")
                .click("@logoutButton")
                .waitForElementPresent(landingPage.elements.registerEmailButton);
        },

    }]

}