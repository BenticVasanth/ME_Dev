const db = require("../models");
const User = db.userModal;
const authJwt = require("../middleware/authJwt");
const aesUtil = require("../../assets/js/aesUtil");
const config = require("../config/auth.config.js");
const validations = require("../../assets/js/validations");

exports.getToken = (req, res) => {
  let getSetToken = authJwt.setToken(JSON.stringify(config.secret));
  return res.status(200).json(JSON.stringify(getSetToken));
}

exports.signup = (req, res) => {
  let ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  // let dateTime = new Date().toLocaleString("sv", { timeStyle: 'medium', dateStyle: 'short', timeZone: 'Asia/Kolkata' });
  let response = JSON.parse(aesUtil.decrypt(req.body.stringValue, req.get('auth_token')));
  let genPassword = Math.floor(Math.random() * (100000000 - 999999999)) + 1000000000;
  // Save User to Database
  User.create({
    Name: response.userName,
    Mobile: response.mobile,
    Email: response.email,
    Password: genPassword + "@Jesus",
    UserIP: ip,
    Location: ip,
    UserType: "User",
    CreatedDateTime: '',
    IsActive: 1,
    IsNotification: response.notificationStatus
  })
    .then(() => {
      let userDetailsList = {
        id: "1",
        stringValue: "Saved Sucessfull"
      }
      let obj = {
        userId: response.email,
        password: genPassword + "@Jesus"
      }
      validations.MailRequest(obj).then(x => {
        return res.json(aesUtil.encrypt(JSON.stringify(userDetailsList), global.auth_token));
      }).catch(err => {
        return res.json(aesUtil.encrypt(JSON.stringify(err), global.auth_token));
      })
    })
    .catch(err => {
      return res.status(500).send({ message: err.message || "Some error occurred while creating the Users." });
    });
};

exports.signin = async (req, res) => {
  const userId = req.body.email;
  const password = req.body.password;
  if (userId && password) {
    let checkValidUser = await User.findOne({ where: { Email: userId, Password: password } })
    if (checkValidUser === null) {
      let invalidUser = {
        id: "0",
        stringValue: "Invalid User"
      }
      return res.status(403).json(JSON.stringify(invalidUser));
      // return res.status(403).json(aesUtil.encrypt(JSON.stringify(invalidUser), global.auth_token));
    } else {
      let userDetails = {
        UserId: userId,
        Password: password
      }
      authJwt.setToken(JSON.stringify(userDetails));
      let encryptUserData = (aesUtil.encrypt(JSON.stringify(userDetails), global.auth_token));
      let validUser = {
        id: "1",
        stringValue: "Valid User",
        authToken: encryptUserData
      }
      // return res.status(200).json(JSON.stringify(validUser));
      res.setHeader('auth_token', global.auth_token);
      return res.status(200).json(aesUtil.encrypt(JSON.stringify(validUser), global.auth_token));
    }
  } else {
    let invalidUser = {
      id: "0",
      stringValue: "Invalid User"
    }
    return res.status(403).json(aesUtil.encrypt(JSON.stringify(invalidUser), global.auth_token));
  }
};
