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

        googleButton: "#google-icon",
        facebookButton: ".css-mps5rv",
        emailButton: ".css-1tvacqz.eqfwhcm1",

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
