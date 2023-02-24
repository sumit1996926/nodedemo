//npm-- gobal command, comes with node
// npm --version

//local dependency - use it only in this particular project
// npm i <packageName>

//global depedency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - menifest file (stores important info about project/package)
//manual approach (create package.json in he root, create properties etc)
// npm init (step by step , press enter to skip)
//npm init -y (everythin default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const item2 = [1, [2, 3, 5, [7]]];
const newItems = _.flattenDeep(items);
const newItems2 = _.flattenDeep(item2);
console.log(newItems);
console.log(newItems2);
console.log("Hello World");
