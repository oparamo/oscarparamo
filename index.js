var Hapi = require('hapi');

var routes = require('./routes');

var options = {};

var server = new Hapi.Server(options);

server.connection({port: process.env.PORT || 80});

server.route(routes);

server.start();
