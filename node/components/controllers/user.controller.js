const db = require("../models");
const Users_Test = db.users;
const aesUtil = require("../../assets/js/aesUtil");
const validations = require("../../assets/js/validations");
const sequelize = require("sequelize");

// Retrieve all Users_Test from the database.
exports.findAll = (req, res) => {
  Users_Test.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err
      });
    });
};

exports.findOne = async (req, res) => {
  // let response = JSON.parse(aesUtil.testDecrypt(req.body.stringValue, req.get('auth_token')));
  const userId = req.body.userId; // response.email;
  const password = req.body.password; //response.password;
  console.log(req.sessionID);
  if (userId && password) {
    console.log(req.session);
    if (req.session.authenticated) {
      console.log(req.session);
    } else {
      let checkValidUser = await Users_Test.findOne({ where: { Email: userId, Password: password } })
      if (checkValidUser === null) {
        let invalidUser = {
          id: "0",
          stringValue: "Invalid User"
        }
        // res.status(403).json(aesUtil.testEncrypt(JSON.stringify(invalidUser), global.auth_token));
        res.status(403).json(invalidUser);
      } else {
        req.session.authenticated = true;
        req.session.user = {
          userId, password
        }
        let validUser = {
          id: "1",
          stringValue: "Valid User"
        }
        // res.status(200).json(aesUtil.testEncrypt(JSON.stringify(validUser), global.auth_token));
        res.status(200).json(validUser);
      }
    }
  } else {
    let invalidUser = {
      id: "0",
      stringValue: "Invalid User"
    }
    // res.status(403).json(aesUtil.testEncrypt(JSON.stringify(invalidUser), global.auth_token));
    res.status(403).json(invalidUser);
  }

};

exports.create = async (req, res) => {
  let ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  let dateTime = new Date().toISOString().slice(0, 10);
  let response = JSON.parse(aesUtil.testDecrypt(req.body.stringValue, req.get('auth_token')));
  let genPassword = Math.floor(Math.random() * (100000000 - 999999999)) + 1000000000;
  const sql = `INSERT INTO Users_Test (Name, Mobile, Email, Password, UserIP, Location, UserType, CreatedDateTime, IsActive, IsNotification) VALUES ($Name, $Mobile, $Email, $Password, $UserIP, $Location, $UserType, $CreatedDateTime, $IsActive, $IsNotification);`
  await db.sequelize.query(sql, {
    bind: {
      Name: response.userName,
      Mobile: response.mobile,
      Email: response.email,
      Password: genPassword + "@Jesus",
      UserIP: ip,
      Location: ip,
      UserType: "User",
      CreatedDateTime: dateTime,
      IsActive: 1,
      IsNotification: response.notificationStatus
    },
  }, { type: sequelize.QueryTypes.INSERT }).then(data => {
    let userDetailsList = {
      id: "1",
      stringValue: "Saved Sucessfull"
    }
    let obj = {
      userId: response.email,
      password: genPassword + "@Jesus"
    }
    validations.MailRequest(obj).then(x => {
      return res.json(aesUtil.testEncrypt(JSON.stringify(userDetailsList), global.auth_token));
    }).catch(err => {
      return res.json(aesUtil.testEncrypt(JSON.stringify(err), global.auth_token));
    })


  }).catch(err => {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Users."
    });
  });
}