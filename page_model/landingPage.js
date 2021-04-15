var xSelector = function (selector) {
    return {
        selector: selector,
        locateStrategy: "xpath",
    };
};

module.exports = {
    // can be string or function
    url: "sign-in#",

    elements: {
        // shorthand, specifies selector
        playSpace: ".css-1842iib.e6jvphj1",
        aboutSpace: ".css-5hcn91.em284gv0",
        forPlayersSpace: "#for-players",
        forCreatorsSpace: "#for-creators",
        downloadAppSpace: "#download-app",

        loginTab: ".css-6msegl.e6jvphj4",
        registerTab: ".css-18t3gjt.e6jvphj4",

        loginGoogleButton: "#google-icon",
        loginFacebookButton: ".css-mps5rv",
        loginEmailButton: ".css-1tvacqz.eqfwhcm1",
        registerEmailButton: ".css-1tvacqz.eqfwhcm1"

        // full
        //   myTextInput: {
        //     selector: 'input[type=text]',
        //     locateStrategy: 'css selector'
        //   }
    },
    commands: [
        {
            // myCustomPause: function () {
            //   this.api.pause(this.props.myPauseTime);
        },
    ],
};
