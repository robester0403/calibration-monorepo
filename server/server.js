const cors = require("cors"),
  express = require("express"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }) //is there better way to display this console log?
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((err) => console.log("Error: ", err));

app.use(cors({ credentials: true, origin: true }));
app.use(morgan("combined"));

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
