var generalFunctions = function (browser) {

    this.setConsoleError = async function () {
        return new Promise((resolve, reject, browser) => {
            browser.getLogTypes()
                .getLog('browser', function (logEntriesArray) {
                    logEntriesArray.forEach(function (log) {
                        if (log.message.includes("current-password")) {
                            console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
                            resolve(log);
                        }
                    })

                })
        });
    };

    this.getConsoleError = function (log){
        var text =log.message;
        console.log(text);
        browser.assert.ok(text.includes("current-password"));
        console.log(text.includes("current-password"))
        return this;
    };

};

module.exports = new generalFunctions();
