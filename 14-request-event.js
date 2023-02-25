const http = require("http");

// const server = http.createServer((req,res) =>{
//     res.end('Welcome');
// })

//Using Event Emittor API
const server = http.createServer();

//emits requiest event
//subscribe to it //listen for it // respond to it

server.on("request", (req, res) => {
  res.end("Welcome");
  console.log("Hello");
});

server.listen(5000);
