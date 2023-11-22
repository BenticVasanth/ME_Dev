const db = require("../models");
const Users_Test = db.users;
const aesUtil = require("../../assets/js/aesUtil")

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
  const userId = response.firstString;
  const password = response.secondString;
  let checkValidUser = await Users_Test.findOne({ where: { Mobile: userId, Password: password } })
  if (checkValidUser === null) {
    let invalidUser = {
      id: "0",
      stringValue: "Invalid User"
    }
    res.json(aesUtil.testEncrypt(JSON.stringify(invalidUser), global.auth_token));
  } else {
    let validUser = {
      id: "1",
      stringValue: "Valid User"
    }
    res.json(aesUtil.testEncrypt(JSON.stringify(validUser), global.auth_token));
  }
};