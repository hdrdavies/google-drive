var Hapi   = require('hapi');
var Inert  = require('inert');
var Vision = require('vision');

var Home   = require('./home.js');
var Browse = require('./browse.js');
var Config = require('./handlebarsConfig.js');

var server = new Hapi.Server();

var Plugins = [Vision, Inert, Home, Browse];

server.connection({
  host: 'localhost',
  port:3000
});

server.register(Plugins, function(err){
  if (err) {
    throw err;
  }

  server.views(Config);

});

server.start(function(err){
  console.log('Server running at: ', server.info.uri);
});
