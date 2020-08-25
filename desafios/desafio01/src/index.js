const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Eu Sou Full Cycle!");
});

app.listen(3333, () => {
  console.log("[running] app listening on port 3333");
});
