var Hapi   = require('hapi');
var Inert  = require('inert');
var Vision = require('vision');

var Home   = require('./plugins/home.js');
var Browse = require('./plugins/browse.js');

var server = new Hapi.Server();

var Plugins = [Vision, Inert, Home, Browse];

server.connection({
  host: 'localhost',
  port: 8000
});

server.register(Plugins, function(err){
  if (err) {
    throw err;
  }

  server.views(require('./handlebarsConfig.js'));

});

server.start(function(err){
  console.log('Server running at: ', server.info.uri);
});
