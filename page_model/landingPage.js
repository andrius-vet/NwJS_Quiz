module.exports = {
    // can be string or function
    url: "https://quizmart.telesoftas.net/",
    
    elements: {
      // shorthand, specifies selector
      emailButton : ".css-1tvacqz.eqfwhcm1",
        emailField : "*[name='email']",
        googleButton : "//*[contains(text(),'Continue with Google')]",
        // var googleButton = ".css-mps5rv";
         facebookButton : ".css-mps5rv",
        
         signInHeader : ".css-1evf4jp.erkohki0",
         emailField : "*[name='email']",
         passField : "*[name='password']",
         submitButton : "button[type='submit']",
         userMenu : ".filter",
         logoutButton : 'a[href="/app/logout"]:nth-of-type(2)'
  
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
        }
    ]
  }
    
  