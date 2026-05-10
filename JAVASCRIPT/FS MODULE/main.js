const fs = require("fs");

// console.log(fs);

console.log("starting");
// fs.writeFileSync("confidential.txt", "Naa dan da leo das");
fs.writeFile("sameer.txt", "Sameer is a naughty boy", () => {
  console.log("done");
  fs.readFile("sameer.txt", (error, data) => {
    console.log(error, data.toString());
    // // AGAIN
    // fs.writeFile("sameer.txt", "Sameer is a naughty boy", () => {
    //   console.log("done");
    //   fs.readFile("sameer.txt", (error, data) => {
    //     console.log(error, data.toString());
    //     // AGAIN
    //     fs.writeFile("sameer.txt", "Sameer is a naughty boy", () => {
    //       console.log("done");
    //       fs.readFile("sameer.txt", (error, data) => {
    //         console.log(error, data.toString());
    //       });
    //     });
    //   });
    // });
  });
});
fs.appendFile("sameer.txt", "sameer is going to rock", (e, d) => {
  console.log(d);
});
console.log("ending");
