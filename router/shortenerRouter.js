const express = require("express");

const shortnerController = require("../controller/shortenerController");
const route = express.Router();

// @route POST /api/url/shortener

// @desc Create short url
route.post("/shortener", shortnerController.createShortUrl);

module.exports = route;
