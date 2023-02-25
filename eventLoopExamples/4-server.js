const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Lets See");
  res.end("Welcome to our homepage");
});

server.listen(5000, () => {
  console.log("Listening to server port : 5000");
});
