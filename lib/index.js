var Hapi   = require('hapi');
var Inert  = require('inert');
var Vision = require('vision');

var handlebarsConfig = require('./handlebarsConfig.js');
var Home             = require('./home.js');

var server = new Hapi.Server();

var Plugins = [Vision, Inert, Home];

server.connection({
  host: 'localhost',
  port:3000
});

server.register(Plugins, function(err){
  if (err) {
    throw err;
  }

  server.views(handlebarsConfig);

});


server.start(function(err){
  console.log('Server running at: ', server.info.uri);
});
