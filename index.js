const Hapi = require('@hapi/hapi');
 
const host = 'localhost';
const port = 3000;

const server = Hapi.Server({
  host: host,
  port: port
});

//routes
require('./routes/routes')(server);
//start server
const init = async () => {
  await server.start();
  console.log("Server up! Port: " + port);
}

init();