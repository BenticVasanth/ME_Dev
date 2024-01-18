const db = require("../models");
const config = require("../config/auth.config");
const authJwt = require("../middleware/authJwt");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  let ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  let genPassword = Math.floor(Math.random() * (100000000 - 999999999)) + 1000000000;
  // Save User to Database
  User.create({
    Name: req.body.userName,
    Mobile: req.body.mobile,
    Email: req.body.email,
    Password: genPassword + "@Jesus",
    UserIP: ip,
    Location: ip,
    UserType: "User",
    CreatedDateTime: '',
    IsActive: 1,
    IsNotification: req.body.notificationStatus
    // password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(() => {
      let userDetailsList = {
        id: "1",
        stringValue: "Saved Sucessfull"
      }
      res.json(JSON.stringify(userDetailsList))
      // let obj = {
      //   userId: response.email,
      //   password: genPassword + "@Jesus"
      // }
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send({ message: err.message || "Some error occurred while creating the Users." });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      Email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = req.body.password;
      // var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      authJwt.setToken(user.id);

      let validUser = {
        id: "1",
        stringValue: "Valid User",
        auth_token: global.auth_token
      }
      res.status(200).json(validUser);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
