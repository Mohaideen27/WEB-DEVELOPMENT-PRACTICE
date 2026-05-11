const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
// app.get or app.post or app.put or app.delete(path, handler)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/blog/intro-to-js", (req, res) => {
  // logic to fetch intro to js from db
  res.send("Hello javascript");
});
app.get("/blog/intro-to-python", (req, res) => {
  // logic to fetch intro to js from db
  res.send("Hellot python!");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog!");
});

app.get("/blog/:slug/:sec", (req, res) => {
  // logic to fetch {slug} from the db
  res.send(`hello ${req.params.slug} and ${req.params.sec}`);
  console.log(req.params);
  console.log(req.query);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
