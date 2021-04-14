require('../config.js');

// var googleButton = "//button//*[@id='google-icon']";
// // var googleButton = ".css-mps5rv";
// var facebookButton = ".css-mps5rv";
// var emailButton = ".css-1tvacqz.eqfwhcm1";
// var signInHeader = ".css-1evf4jp.erkohki0";
// // var emailField = "*[name='email']";
// var passField = "*[name='password']";
// var submitButton = "button[type='submit']"
// var userMenu = ".filter"
// var logoutButton = "(//a[@href='/app/logout'])[2]"

describe('Quizmart dev login tests', function() {

    before(browser => browser.url(PageURL.DEVPAGE));

    test('Quizmart login with email test', function (browser) {
        const myPageObject = browser.page.landingPage();
        myPageObject
            .waitForElementVisible('@emailButton')
            .click('@emailButton')
            .waitForElementVisible('@signInHeader');
            myPageObject
            .setValue('@emailField', LoginInfo.LoginName)
            .setValue('@passField', LoginInfo.LoginPassword)
            .click('@submitButton')
            .waitForElementVisible('@userMenu')
            .click('@userMenu')
            .click('@logoutButton')
            .useXpath()
            .waitForElementVisible('@googleButton')
    });

    after(browser => browser.end());
});
