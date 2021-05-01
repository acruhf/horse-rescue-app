const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/tutorial.routes")(app);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/horsedata",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const express = require("express");

// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();
// const apiRoutes = require("./routes/api");

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("./client/build"));
// }



// // Use apiRoutes
// app.use("/api", apiRoutes);

// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
