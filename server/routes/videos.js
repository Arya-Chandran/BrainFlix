const express = require("express");
const router = express.Router();
const fs = require('fs');

const api_key = "c6576d2e-b5a7-4a7d-b3b4-435dac3e2e4d";


router.get('/', (req, res) => {
  fs.readFile('./data/videos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(400).json({ message: 'Error getting video data',err });
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  fs.readFile('./data/videos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.json({ message: 'Error getting video data' });
    }

    const videoData = JSON.parse(data);
    const SelectedVideo = videoData.find((video) => video.id == req.params.id);
    if (!SelectedVideo) {
      res.json({ message: 'Error getting video data' });
    } else {
      res.json(SelectedVideo);
    }
  });
});


module.exports = router;

