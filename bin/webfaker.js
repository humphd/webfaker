var Webfaker = require( '../' ),
    argv = require( 'optimist' )
    .usage( 'Start fake Webmaker servers and APIs locally.\nUsage: $0')
    .options({
      port: {
        "default": 10000,
        alias : 'p',
        description : 'First port to start loading servers (3 ports will be used)'
      },
      fakes: {
        "default": 50,
        alias : 'f',
        description : 'Number of fake makes to insert into MakeAPI (defaults to 50)'
      },
      username: {
        "default": "webfaker",
        alias : 'u',
        description : 'Basic Auth username to use (defaults to webfaker)'
      },
      password: {
        "default": "secret",
        alias : 'p',
        description : 'Basic Auth password to use (defaults to secret)'
      }
    })
    .argv;

Webfaker.start({
  port: argv.port,
  username: argv.username,
  password: argv.password,
  fakes: argv.fakes
}, function() {
  var port = argv.port;
  console.log( "Started Webfaker services on http://localhost ports: FakeAPI=%s, Fogin=%s, Fubble=%s",
               port, port + 1, port + 2 );
});
