const express = require("express");
const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.static("public"));


app.listen(PORT, function () {
    console.log(`My server is running on port: ${PORT}!`);
  });