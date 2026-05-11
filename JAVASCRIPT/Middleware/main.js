const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.static("public"));
// MIDDLEWARE1
app.use((req, res, next) => {
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} \n`);
  console.log(`${Date.now()} is a ${req.method}`);
  //   res.send("Hacked by Middleware 1");
  next();
});

// MIDDLEWARE2
app.use((req, res, next) => {
  console.log("M2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello about!");
});
app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
