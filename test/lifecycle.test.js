
// test/lifecycle.test.js

var sails = require("sails");

before(function (done) {
  this.timeout(10000);

  sails.lift(
    {
      hooks: { grunt: false, csrf: false },
      log: { level: "warn" },
    },
    function (err) {
      if (err) {
        return done(err);
      }

      return done();
    }
  );
});

after(function (done) {
  sails.lower(done);
});