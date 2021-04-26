var xSelector = function (selector) {
    return {
        selector: selector,
        locateStrategy: "xpath",
    };
};

module.exports = {

    url: "",
    elements: {
        profileHeader: ".css-jakagy.e1bg3u451",
        // Personal information
        profileName: "input[name='firstName']",
        profileLastName: "input[name='lastName']",
        profileUsername: "input[name='userName']",
        profileUpdateButton: xSelector("(//button[@type='submit'])[1]"),

        // Your Email
        profileOldEmail: "input[name='oldEmail']",
        profileNewEmail: "input[name='newEmail']",
        profileEmailUpdateButton: xSelector("(//button[@type='submit'])[2]"),

        // Your Password
        profileOldPassword: "input[name='oldPassword']",
        profileNewPassword: "input[name='newPassword']",
        profileRepeatPassword: "input[name='newPasswordRepeat']",
        profilePasswordUpdateButton: xSelector("(//button[@type='submit'])[3]"),

        // Delete your acc
        profileDeleteAcc: xSelector("(//button[contains(@class,'delete')])[1]"),
        deleteConfirmationFrame: "div[role='dialog']",
        //Todo: Dialogs should be moved to separate page
        deleteConfirmationButton: xSelector("(//button[contains(@class,'delete')])[2]"),

    },
    commands: [{
        deleteUser(browser) {
            const menuPage = this.api.page.menuPage();
            const profilePage = this.api.page.profilePage();
            menuPage
                .waitForElementPresent("@userMenu")
                .click("@userMenu")
                .click("@profileButton");
            profilePage
                .waitForElementPresent("@profileDeleteAcc")
                .click("@profileDeleteAcc")
                .waitForElementPresent("@deleteConfirmationButton")
                .click("@deleteConfirmationButton")
            }
    }]

}