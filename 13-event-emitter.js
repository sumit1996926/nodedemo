const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data Recieved Your name is : ${name} your id is ${id}`);
});
customEmitter.on("response", () => {
  console.log(`Data is good`);
});

customEmitter.emit("response", "john", 34);
