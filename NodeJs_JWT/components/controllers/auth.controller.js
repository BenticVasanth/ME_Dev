const db = require("../models");
const User = db.userModal;
const authJwt = require("../middleware/authJwt");
const aesUtil = require("../../assets/js/aesUtil");

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

// exports.signin = (req, res) => {
//   User.findOne({
//     where: {
//       Email: req.body.email,
//       Password: req.body.password
//     }
//   })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }

//       var passwordIsValid = req.body.password;

//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }

//       authJwt.setToken(user.id);

//       let validUser = {
//         id: "1",
//         stringValue: "Valid User",
//         auth_token: global.auth_token
//       }
//       res.status(200).json(validUser);
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };

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
      // return res.status(403).json(aesUtil.testEncrypt(JSON.stringify(invalidUser), global.auth_token));
    } else {
      let userDetails = {
        UserId: userId,
        Password: password
      }
      authJwt.setToken(JSON.stringify(userDetails));
      let encryptUserData = (aesUtil.testEncrypt(JSON.stringify(userDetails), global.auth_token));
      let validUser = {
        id: "1",
        stringValue: "Valid User",
        authToken: encryptUserData
      }
      // return res.status(200).json(JSON.stringify(validUser));
      res.setHeader('auth_token', global.auth_token);
      return res.status(200).json(aesUtil.testEncrypt(JSON.stringify(validUser), global.auth_token));
    }
  } else {
    let invalidUser = {
      id: "0",
      stringValue: "Invalid User"
    }
    return res.status(403).json(aesUtil.testEncrypt(JSON.stringify(invalidUser), global.auth_token));
  }
};
