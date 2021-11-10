const express = require("express");
const router = express.Router();
const axios = require("axios");

const api_key = "c6576d2e-b5a7-4a7d-b3b4-435dac3e2e4d";

router.get("/", (req, res) => {
  axios
    .get(`https://project-2-api.herokuapp.com/videos?api_key=${api_key}`)
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
});

router.get('/:id', (req, res) => {
   const { id } = req.params;
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${api_key}`)
      .then((response) => {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });

module.exports = router;
