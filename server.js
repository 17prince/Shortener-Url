const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Config environment variable
dotenv.config({ path: "./config.env" });

// Mongo database URI for database connection
const DB = process.env.DATABASE.replace(
  /<PASSWORD>/,
  process.env.DATABASE_PASSWORD
);

// Connecting with db
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("some error:", err));

const app = require("./app");

const PORT = 2424 || process.env.PORT;

// Sarting server
app.listen(PORT, () => {
  console.log("Server started at port 2424");
});
