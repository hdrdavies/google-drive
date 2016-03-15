exports.register = function(server, options, next) {

  server.route({
      method: 'GET',
      path: '/browse',
      handler: function(request, reply) {
        reply.view('browse');
      }
    });

  return next();
};

exports.register.attributes = {
  name: 'Browse'
};
