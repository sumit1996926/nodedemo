const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url == "/about") {
    res.end("Here is short description");
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
  }
  res.end(`<h1>We dont have that yet</h1>
  <a href= "/">back home<a>`);
});

server.listen(5000);
