import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");
// const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const newtodo = new todo({
    desc: "Description of this todo",
    isDone: false,
    days: 24,
  });
  newtodo.save();
  res.send("Hello World!");
});
app.get("/a", async (req, res) => {
  let newtodo = await todo.findOne({});
  res.json({ title: newtodo.title, desc: newtodo.desc });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
