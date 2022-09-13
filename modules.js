//every file in node is a module : CommmonJS
//Modules - Encapsulated Code (only share minimum)
const names = require('./names.js')
const sayHi = require('./utils')
const data = require('./alt-export');
require('./mind-grenade')
console.log(data);
sayHi(names.aish)