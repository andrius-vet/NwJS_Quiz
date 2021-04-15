var xSelector = function (selector) {
  return {
    selector: selector,
    locateStrategy: "xpath",
  };
};

module.exports = {
  // can be string or function
  url: "app/game/options",

  elements: {
    // shorthand, specifies selector
    mainPageHeader: "h1",
    playQuizHeaderButton: xSelector("//button[contains(text(),'Play Quiz')]"),
    discoverHeaderButton: xSelector("//button[contains(text(),'Discover')]"),
    libraryHeaderButton: xSelector("//button[contains(text(),'My library')]"),
    playMainButton: xSelector(
      "//div[contains(@class, 'quizButton')] //button[contains(text(),'Play')]"
    ),
    joinQuizMainButton: xSelector(
      "//div[contains(@class, 'quizButton')] //button[contains(text(),'Join')]"
    ),
    hostQuizMainButton: xSelector(
      "//div[contains(@class, 'quizButton')] //button[contains(text(),'Host')]"
    ),
    discoverMainButton: "button.quizButton.searchIcon",
    libraryMainButton: xSelector("//button[contains(text(),'Your library')]"),
  },
  commands: [{}],
};
