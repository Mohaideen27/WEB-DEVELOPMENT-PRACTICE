const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/shop", shop);
// respond with "hello world" when a GET request is made to the homepage
app
  .get("/", (req, res) => {
    console.log("Hey its a get request");
    res.send("hello world");
  })
  .post("/", (req, res) => {
    console.log("Hey its a post request");
    res.send("hello world post");
  })
  .put("/", (req, res) => {
    console.log("Hey its a PUT request");
    res.send("hello world PUT");
  });
app.get("/index", (req, res) => {
  console.log("Hey its index");
  res.sendFile(`templates/index.html`, { root: __dirname });
});

app.get("/json", (req, res) => {
  console.log("Hey its index");
  res.json({ a: 1, b: 1, c: 1 });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
