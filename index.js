var FakeAPI = require( "./lib/fakeapi" ),
    Fubble = require( "./lib/fubble" );

module.exports = {

  start: function( options, callback ) {
    // Defaults to use if we don't get options
    var defaults = {
      username: "webfaker",
      password: "secret",
      port: 10000,
      fakes: 50,
      logins: [{
       email: "admin@webfaker.org",
       subdomain: "admin",
       fullName: "An Admin",
       isAdmin: true
      }]
    };

    options = options || defaults;
    callback = callback || function(){};

    // Given port=5000, start Fubble on 5002 (port + 2) since we'll
    // start FakeAPI on port 5000 and Fogin on 5001 (port + 1);
    Fubble.start({ port: options.port + 2 }, function() {
      FakeAPI.start( options, callback );
    });
  },

  stop: function( callback ) {
    callback = callback || function(){};
    FakeAPI.stop( function() {
      Fubble.stop( callback );
    });
  }

};
