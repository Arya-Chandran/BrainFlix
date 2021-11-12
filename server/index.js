require('dotenv').config();
const {PORT} = process.env
const express = require("express");
const app = express();
const cors= require('cors');
const videos= require("./routes/videos")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use("/videos", videos);

app.listen(PORT, function () {
  console.log(`My server is running on port: ${PORT}!`);
});

