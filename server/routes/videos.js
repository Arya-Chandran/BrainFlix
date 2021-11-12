const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const data = require("../data/videos.json");

router.get("/", (req, res) => {
  fs.readFile("./data/videos.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).json({ message: "Error getting video data", err });
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  fs.readFile("./data/videos.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.json({ message: "Error getting video data" });
    }

    const videoData = JSON.parse(data);
    console.log("videoData", videoData);
    const SelectedVideo = videoData.find((video) => video.id == req.params.id);
    if (!SelectedVideo) {
      res.json({ message: "Error getting video data" });
    } else {
      res.json(SelectedVideo);
    }
  });
});

router.post("/", (req, res) => {
  const videoData = data;
  if (!req.body) {
    res.status(400).send("Error: missing video data!");
  }
  const { title, description, image } = req.body;
  const newVideo = {
    id: uuidv4(),
    title,
    description,
    image:"https://i.imgur.com/i6S8m7I.jpg",
    channel:0,
    views:0,
    likes:0,
    duration:0,
    video:0,
    timestamp:0,
    comments:0

  };
  videoData.push(newVideo);
  fs.writeFile(`./data/videos.json`, JSON.stringify(videoData), (error) => {
    console.log(req.body);
    if (error) {
      console.log(error);
      return;
    }
    console.log("file written successfully");
  });

  res.json({});
});

module.exports = router;
