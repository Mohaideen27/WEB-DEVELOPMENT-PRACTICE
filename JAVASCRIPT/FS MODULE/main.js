const fs = require("fs");

// console.log(fs);

console.log("starting");
// fs.writeFileSync("confidential.txt", "Naa dan da leo das");
fs.writeFile("sameer.txt", "Sameer is a naughty boy", () => {
  console.log("done");
  fs.readFile("sameer.txt", (error, data) => {
    console.log(error, data.toString());
  });
});
console.log("ending");
