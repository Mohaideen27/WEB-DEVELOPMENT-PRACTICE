const fs = require("fs");

console.log(fs);

console.log("starting");
fs.writeFileSync("harry.txt", "Harry is a good boy");
console.log("ending");
