const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();

// const SequelizeStore = require("connect-session-sequelize")(session.Store);

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./components/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
// var myStore = new SequelizeStore({
//   db: db.sequelize,
//   expiration: 10000
// });

app.use(
  session({
    secret: "keyboard cat",
    store: store,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000
    },
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);

// simple route
app.get("/", (req, res) => {
  res.json("Welcome to Magnify Elshaddai Website");
});

require("./components/routes/sabbath.routes")(app);
require("./components/routes/user.routes")(app);
require("./components/routes/bibleCommentary.routes")(app);

// Global Variable
global.auth_token = "global_auth_token";

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  app.get("/login/getServerStatus", async (req, res) => {
    await res.status(200).json({
      data: "Server Up",
      headers: {
        auth_token: global.auth_token
      }
    });
  });
  console.log(`Server is running on port ${PORT}.`);
});
