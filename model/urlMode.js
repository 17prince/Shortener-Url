const mongoose = require("mongoose");

// Define Schema for database
const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Urls = mongoose.model("Urls", urlSchema);

module.exports = Urls;
