const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200; //see https://httpstatuses.com/
  response.end('{"Your":"Friendly JSON server"}');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  console.log(`server is listening on ${port}`);
});