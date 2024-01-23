const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./components/models");

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json("Welcome to Magnify Elshaddai Website New");
});

// routes
require('./components/routes/auth.routes')(app);
require('./components/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  app.get("/login/getServerStatus", async (req, res) => {
    await res.status(200).json("Server Up");
  });
  console.log(`Server is running on port ${PORT}.`);
});