const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Pony-Express",
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)
.then(() => {
  console.log('connected to mongoDB');
})
.catch(err => {
  console.log('could not connect to mongoDB');
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

app.get('/', (req, res) => {
  res.send('testing 123')
});

app.post('/upload', async (req, res) => {
  try {
    const newHorse = new Horse({
      imageUrl: req.body.imageUrl
    });
    await newHorse.save();
    res.json(newHorse.imageUrl);
  } catch (err) {
    console.error('Something went wrong', err);
  }
});
​
app.get('/getLatest', async (req, res) => {
  const getImage = await Image.findOne().sort({ _id: -1 });
  res.json(getImage.imageUrl);
});



// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const path = require("path");
// const routes = require("./routes");


// const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// require("dotenv").config();

// // set port, listen for requests
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to pony-express application." });
// });
// app.use(routes);

// //require("./routes/tutorial.routes")(app);

// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/horsedata",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );


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


