const http = require('http');
const port = 3000;
const WORLD = process.env.WORLD || 'Nope';

const requestHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200; //see https://httpstatuses.com/
  console.log("Logs", (new Date().toTimeString()));
  response.end(`{"Your":"Hello ${WORLD}"}`);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`);
});