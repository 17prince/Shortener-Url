const Urls = require("../model/urlMode");

// Redirects to original website if short url matches
exports.getOriginaWeb = async (req, res, next) => {
  const { urlCode } = req.params;

  try {
    const longUrl = (await Urls.findOne({ urlCode })).longUrl;

    // check if longUrl is present in database
    if (longUrl) {
      // redirecting to original website
      return res.redirect(longUrl);
    } else {
      return res.status(401).json("No url found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Server Error");
  }
};
