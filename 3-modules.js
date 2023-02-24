//Modules

//CommonJS, every file is module (by default)
//Modules = Encapsulated Code(Only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");

console.log(data);
sayHi("Bunny");
sayHi(names.bunny);
sayHi(names.minnie);
