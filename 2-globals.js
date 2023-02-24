console.log(__dirname);
console.log(__filename);

// GLOBAL - NO Window
// __dirname - path to current directory(folder)
// __filename  - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the prpgram is being executed

setInterval(function () {
  console.log("Hello Baby");
}, 2000);

setTimeout(() => {
  console.log("Press Ctrl+C");
}, 10000);
