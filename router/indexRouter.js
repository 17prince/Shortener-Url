const express = require("express");

const indexController = require("../controller/indexController");

const route = express.Router();

// @route GET /:urlCode

// @route Search for original url
route.get("/:urlCode", indexController.getOriginaWeb);

module.exports = route;
