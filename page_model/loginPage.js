module.exports = {

    url: "https://quizmart.telesoftas.net/",

    elements: {
        signInHeader: ".css-1evf4jp.erkohki0",
        emailField: "input[name='email']",
        passField: "input[name='password']",
        submitButton: "button[type='submit']",
    },
    commands: [{
        loginToQuiz(browser){
            const landingPage =  this.api.page.landingPage();
            const menuPage =  this.api.page.menuPage();
            return this
                .waitForElementVisible(landingPage.elements.emailButton)
                .waitForElementPresent(landingPage.elements.emailButton)
                .click(landingPage.elements.emailButton)
                .waitForElementVisible("@signInHeader")
                .setValue("@emailField", LoginInfo.LoginName)
                .setValue("@passField", LoginInfo.LoginPassword)
                .click("@submitButton")
                .waitForElementVisible(menuPage.elements.mainMenu);
                
        }
    }]

}