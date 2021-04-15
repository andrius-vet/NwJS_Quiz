require("../config.js");

describe("Quizmart dev login tests", function () {
    before(function(browser) {
        const loginPage = browser.page.loginPage();
        browser.url(browser.launch_url)
        loginPage.loginToQuiz();
    }
);

    test("Quizmart login with email test", function (browser) {
        const menuPage = browser.page.menuPage();
        menuPage
            .click("@userMenu")
            .assert.containsText('div.ReactModal__Content div.ec97gp2', LoginInfo.LoginName);
    });

    after((browser) => browser.end());
});
