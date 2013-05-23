Webfaker
========

[![Build Status](https://travis-ci.org/mozilla/webfaker.png?branch=master)](https://travis-ci.org/mozilla/webfaker)

Fake implementations of all your favourite Webmaker servers and APIs, including:

* [FakeAPI](https://github.com/mozilla/makeapi) - the MakeAPI
* [Fogin](https://github.com/mozilla/login.webmaker.org) - login.webmaker.org
* [Fubble](https://github.com/mozilla/node-hubble) - node-hubble

Webfaker is meant to aid in developing Webmaker code that depends on any/all of these services.
It can be used as a library or started via the command-line.

Install
-------
```
$ npm install -g webfaker
```

Invoking via command-line
-------------------------
```
$ webfaker
...
Started Webfaker services on http://localhost ports: FakeAPI=10000, Fogin=10001, Fubble=10002
```

This will start all 3 servers on ports 10000 (MakeAPI), 10001 (Login), and 10002 (Hubble). You can use another series of ports by specifing
a port in the command line.  Other optional command line arguments include:

```
$ webfaker --port 5000 --fakes 1000 --username someone --password supersecret --email me@email.com --admincheck false
```

* `port` - the first of 3 ports to use for the servers
* `fakes` - the number of fake records to insert into FakeAPI. NOTE: this will also cause matching fake Login accounts to get created.
* `username` - username to use for basic auth between servers
* `password` - password to use for basic auth between servers
* `email` - an email address to add to the list of logins created on startup. This will create an admin user with the `webfaker` subdomain and the given email.
* `admincheck` - whether or not to skip doing user lookup and admin checks for the `isAdmin` route in the login server. This is useful if you need to fake admin users (defaults to true)

Using as a module
-----------------

The command line version uses a module to control the servers, which you can use as well. This is useful if you want to programmatically access the servers to start and stop them in testing or the like.

```javascript
var Webfaker = require("webfaker");

Webfaker.start({
  // First of 3 ports to use for the 3 servers
  port: 5000,

  // HTTP basic auth credentials to use for all servers
  username: "username",
  password: "password",

  // Number of fake makes to create
  fakes: 500,

  // Extra fake logins to create in the login server
  logins: [{
    email: "admin@webfaker.org",
    subdomain: "admin",
    fullName: "An Admin",
    isAdmin: true
  }],

  // Whether or not to do user lookup and admin checks in the isAdmin route
  isAdminCheck: false
}, function() {
  console.log( "Started Webfaker services on http://localhost ports: FakeAPI=%s, Fogin=%s, Fubble=%s",
               port, port + 1, port + 2 );
});

// do some things...

Webfaker.stop( function() {...} );
```
