exports.register = function(server, options, next) {

  server.route({
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
        reply.view('index', {
          greeting: 'there'
        });
      }
    });

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
