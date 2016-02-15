exports.register = function (server, options, next) {
  // serving static files
  server.route([
    {
      method: 'GET',
      path: "/public/{path*}",
      handler: {
        directory: {
          path: 'public'
        }
      }
    },
    {
      // Retrieve all users
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
        reply.view('index');
      }
    },
    {
      // Retrieve all doughnuts
      method: 'GET',
      path: '/foods',
      handler: function(request, reply) {
        reply.view('foods');
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'static-files-api',
  version: '0.0.1'
};