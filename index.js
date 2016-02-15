var Path = require('path');
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 8000,
  routes: {
    // cors: {
    // headers: ["Access-Control-Allow-Credentials"],
    // credentials: true
    // }
  }
});

var plugins = [
  { register: require('vision')},
  { register: require('inert')},
//  { register: require('./routes/static_pages.js')},
//  { register: require('./routes/api/foods.js')},
//  { register: require('./routes/api/users.js')},
  { register: require('hapi-mongodb'),
    options: {
      "url": process.env.MONGOLAB_URI || "mongodb://127.0.0.1:27017/foods",
      "settings": {
        "db": {
          "native_parser": false
        }
      }
    }
  }
];

server.register(plugins, function (err) {
  if (err) { throw err; }

  server.views({
    engines: {html: require('handlebars')},
    path: Path.join(__dirname, 'views/templates'),
    layout: true,
    layoutPath: Path.join(__dirname, 'views/layouts')
  });

  server.start(function () {
    console.log("listening on..." + server.info.uri);
  });

});
