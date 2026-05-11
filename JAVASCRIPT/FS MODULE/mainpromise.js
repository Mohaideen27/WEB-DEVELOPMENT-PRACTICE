import fs from "fs/promises";

let a = await fs.readFile("sameer.txt");

let b = await fs.appendFile("sameer.txt", "\n this is a game changer");
console.log(a.toString());
