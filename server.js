const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('user-db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || https://pandeypearl.github.io/users-api/user-db.json;

server.use(middlewares);
server.use(router);

server.listen(port);
