var express = require( 'express' ),
    routes = require( './fubble.js' ),
    server;

module.exports = {

  start: function( options, callback ) {
    options = options || { port: 10001 };

    var app = express();
    app.use( express.logger());
    app.get( '/mime/*', routes.mime );
    app.get( '/meta/*', routes.meta );
    app.get( '/img/*', routes.img );

    server = app.listen( options.port, function() {
      callback();
    });
  },

  stop: function( callback ) {
    callback = callback || function(){};
    if ( !server ) {
      return;
    }
    server.close( function() {
      server = null;
      callback();
    });
  }

};
