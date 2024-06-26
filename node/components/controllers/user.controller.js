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
  let response = JSON.parse(aesUtil.testDecrypt(req.body.stringValue, req.get('auth_token')));
  const userId = response.email;
  const password = response.password;
  if (userId && password) {
    let checkValidUser = await Users_Test.findOne({ where: { Email: userId, Password: password } })
    if (checkValidUser === null) {
      let invalidUser = {
        id: "0",
        stringValue: "Invalid User"
      }
      res.status(403).json(aesUtil.testEncrypt(JSON.stringify(invalidUser), global.auth_token));
    } else {
      let userDetails = {
        UserId: userId,
        Password: password
      }

      // Session Creation Start
      let dateTime = new Date().toISOString().slice(0, 10) + ' ' + new Date().toISOString().slice(12, 23);
      let encryptUserData = (aesUtil.testEncrypt(JSON.stringify(userDetails), global.auth_token));
      const sql = `INSERT INTO SessionDetails (SessionId, CreatedDateTime, UpdatedDateTime) VALUES ($SessionId, $CreatedDateTime, $UpdatedDateTime);`
      await db.sequelize.query(sql, {
        bind: {
          SessionId: encryptUserData,
          CreatedDateTime: dateTime,
          UpdatedDateTime: dateTime,
        },
      }, { type: sequelize.QueryTypes.INSERT }).then(() => {
        let validUser = {
          id: "1",
          stringValue: "Valid User",
          sessionToken: encryptUserData
        }
        res.status(200).json(aesUtil.testEncrypt(JSON.stringify(validUser), global.auth_token));
      }).catch(err => {
        return res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Session."
        });
      });
      // Session Creation End
    }
  } else {
    let invalidUser = {
      id: "0",
      stringValue: "Invalid User"
    }
    res.status(403).json(aesUtil.testEncrypt(JSON.stringify(invalidUser), global.auth_token));
  }
};

exports.create = async (req, res) => {
  let ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  let dateTime = new Date().toISOString().slice(0, 10) + ' ' + new Date().toISOString().slice(12, 23);
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
  }, { type: sequelize.QueryTypes.INSERT }).then(() => {
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

exports.delete = async (req, res) => {
  let response = JSON.parse(aesUtil.testDecrypt(req.body.stringValue, req.get('auth_token')));
  if (response) {
    const sql = `DELETE FROM SessionDetails WHERE SessionId = $SessionId;`
    await db.sequelize.query(sql, {
      bind: {
        SessionId: response.sessionId
      },
    }, { type: sequelize.QueryTypes.DELETE }).then(() => {
      let logout = {
        id: "1",
        stringValue: "Logout Sucessfully"
      }
      return res.status(200).json(aesUtil.testEncrypt(JSON.stringify(logout), global.auth_token));
    }).catch(err => {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });
  }
}