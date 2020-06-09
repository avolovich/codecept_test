// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    waitForDocumentStateComplete: function() {
      this.executeAsyncScript(function(done) {
        const interval = setInterval(function() {
          if (window.document.readyState === 'complete') {
            clearInterval(interval);
            done();
          }
        }, 10000);
      });
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
