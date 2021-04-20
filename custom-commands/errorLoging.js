module.exports.command = function (callback) {
  var self = this;

  self.getLogTypes().getLog("browser", function (logEntriesArray) {
    logEntriesArray.forEach(function (log) {
      if (log.message.includes("current-password")) {
        // console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
        callback.call(self, log);
      }
    });
  });
};
