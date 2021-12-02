const validUrl = require("valid-url");
const shortId = require("shortid");
const Urls = require("../model/urlMode");

// Create or returns short url
exports.createShortUrl = async (req, res, next) => {
  const { longUrl } = req.body;
  // getting base url of api
  const baseUrl = process.env.BASEURL;

  // Check if the base url is valid
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base URL");
  }

  // Create url code
  const urlCode = shortId.generate();

  // Check if the long url is valid
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Urls.findOne({ longUrl });
      // if long url is found
      if (url) {
        res.status(200).json(url);
      } else {
        // else create short url
        const shortUrl = `${baseUrl}/${urlCode}`; //example:  https://localhost:2424/3db6gRF

        // createing new document for new long url
        url = await Urls.create({
          urlCode,
          longUrl,
          shortUrl,
          date: new Date(),
        });

        res.status(200).json(url);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json("Original Url is not valid.");
  }
};
