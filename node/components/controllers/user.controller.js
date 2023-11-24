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

// Create and Save a new User
exports.create = async (req, res) => {
  // // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  let response = JSON.parse(aesUtil.testDecrypt(req.body.stringValue, req.get('auth_token')));

  // Create a User Details
  const userDetails = {
    UserId: '1',
    Name: response.firstString,
    Mobile: "",
    Email: "",
    Password: response.secondString,
    UserIP: "",
    Location: "",
    UserType: "",
    createdAt: "",
    IsActive: "",
    IsNotification: ""
  };

  // Save User Details in the database
  await Users_Test.create(userDetails)
    .then(data => {
      console.log(data);
      let userDetailsList = {
        id: "0",
        stringValue: "Saved Sucessfull"
      }
      res.json(aesUtil.testEncrypt(JSON.stringify(userDetailsList), global.auth_token));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });
};