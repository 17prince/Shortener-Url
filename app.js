const express = require("express");
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");
const mongoSanitizer = require("express-mongo-sanitize");
const xss = require("xss-clean");

const mainRouter = require("./router/indexRouter");
const shortenerRouter = require("./router/shortenerRouter");

const app = express();

// MIDDLEWARE
// set http secure header
app.use(helmet());

// Rate Limiter
const limiter = rateLimiter({
  max: 100, // number of request
  windowMs: 60 * 60 * 1000, // timeframe (1 hours)
  message: "To many request from this IP. Please try after 1 hour.",
});
app.use("/api", limiter);

// Body parser to read request body.
app.use(express.json({ limit: "10kb" }));

// Data sanitizer to protect against NoSql injection query
app.use(mongoSanitizer());

// To prevent from XSS attack
app.use(xss());

app.use("/", mainRouter);
app.use("/api/url", shortenerRouter);

module.exports = app;
